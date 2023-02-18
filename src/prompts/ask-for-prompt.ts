import { moveToTop } from "./utils/move-cursor-to-top";
import clear from "clear";

export async function askForPrompt(question: string, clearTerminal: boolean) {
  const inquirer = await import("inquirer");
  const questions = [
    {
      type: "input",
      name: "prompt",
      message: question,
    },
  ];
  clear();
  moveToTop();

  return inquirer.default.prompt(questions).then((answer: any) => {
    moveToTop();
    return answer;
  });
}
