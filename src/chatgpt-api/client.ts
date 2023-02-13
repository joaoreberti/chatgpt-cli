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
}
