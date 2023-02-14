import dotenv from "dotenv";
import { ChatGptService } from "./client";
dotenv.config();
export async function askChatGpt(prompt: string) {
  const chatGptService = await ChatGptService.instance();
  return await chatGptService.sendPrompt(prompt);
}

export async function askChatGptWithStream(prompt: string) {
  const chatGptService = await ChatGptService.instance();
  return await chatGptService.sendPromptWithStream(prompt);
}
