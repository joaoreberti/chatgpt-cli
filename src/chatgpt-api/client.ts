import { ReadableStream } from "node:stream/web";
import { stringDifference } from "../utils/string-difference";

export class ApiClient {
  private _chatGPTclient;
  constructor(ChatGPTAPI: any) {
    console.log("constructor");
    this._chatGPTclient = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async sendPrompt(input: string): Promise<string> {
    const response = await this._chatGPTclient.sendMessage(input);
    return response.text;
  }

  async sendPromptWithStream(input: string) {
   
    const response = await this._chatGPTclient.sendMessage(input, {
      onProgress: (progress: any) => {
        console.log(progress.text);
        const newWhole = progress.text
        let wholeText = progress.text;
        if (typeof progress.text === "object") {
          wholeText = progress.text.join("");
        }
        console.log(wholeText);
      },
    });
    return response.text;
  }
}
