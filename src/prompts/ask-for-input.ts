import { moveToTop } from "./utils/move-cursor-to-top";
import clear from "clear";

export async function askForInput() {
  const inquirer = await import("inquirer");
  const questions = [
    {
      type: "input",
      name: "prompt",
      message: "How can I help you?",
    },
  ];
  clear();
  moveToTop();

  return inquirer.default.prompt(questions).then((answer: any) => {
    moveToTop();
    return answer;
  });
}
