//@ts-ignore
import { ChatGPTAPI } from "chatgpt";
import { formatChatGptResponse } from "../prompts/utils/format-chatgpt-response";
export class ChatGptService {
  private static Singleton: ChatGptService;
  private _chatGPTclient: ChatGPTAPI;
  private constructor(ChatGPTAPI: any) {
    this._chatGPTclient = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    ChatGptService.Singleton = this;
  }
  public static async instance(): Promise<ChatGptService> {
    if (ChatGptService.Singleton) {
      return ChatGptService.Singleton;
    }
    const { ChatGPTAPI } = await import("chatgpt");
    return new ChatGptService(ChatGPTAPI);
  }
  public async sendPrompt(input: string): Promise<string> {
    const response = await this._chatGPTclient.sendMessage(input);
    return response.text;
  }

  public async sendPromptWithStream(input: string) {
    const response = await this._chatGPTclient.sendMessage(input, {
      onProgress: (progress: any) => {
        console.log(progress.text);
        const newWhole = progress.text;
        let wholeText = progress.text;
        if (typeof progress.text === "object") {
          wholeText = progress.text.join("");
        }
        formatChatGptResponse(wholeText, input);
        // console.log(wholeText);
      },
    });
    return response.text;
  }
}
