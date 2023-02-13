import { ApiClient } from "./chatgpt-api/client";

import dotenv from "dotenv";
import { askForInput } from "./prompts";
dotenv.config();

async function example() {
  const { ChatGPTAPI } = await import("chatgpt");
  const apiClient = new ApiClient(ChatGPTAPI);
  const res = await apiClient.sendPrompt("Hello, world!");
  console.log(res);
  const re2 = await apiClient.sendPrompt("Hello, world!");
  console.log(re2);
  askForInput();
}

example();
