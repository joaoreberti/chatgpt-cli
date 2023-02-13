class singleton {
  private static _instance: singleton;
  public static get instance() {
    return this._instance || (this._instance = new this());
  }
}

export class ApiClient extends singleton {
  private _instance;
  private ChatGPTAPI: any;
  constructor(ChatGPTAPI: any) {
    super();
    console.log("constructor");
    this._instance = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  private instance() {
    return (
      this._instance ||
      new this.ChatGPTAPI({
        apiKey: process.env.OPENAI_API_KEY,
      })
    );
  }
  public async sendPrompt(input: string): Promise<string> {
    const response = await this.instance().sendMessage(input);
    return response.text;
  }
}
