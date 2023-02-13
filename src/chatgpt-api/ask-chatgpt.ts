
import dotenv from "dotenv";
import { ApiClient } from "./client";
dotenv.config();
export async function askChatGpt(prompt: string) {
  const { ChatGPTAPI } = await import("chatgpt");
  const apiClient = new ApiClient(ChatGPTAPI);
  return await apiClient.sendPrompt(prompt);
}
