import { moveToTop } from "./utils/move-cursor-to-top";
import clear from "clear";

export async function pickStep(question: string, options = ["Continue", "Exit"]) {
  const inquirer = await import("inquirer");
  const questions = [
    {
      type: "list",
      name: "selectedOption",
      message: question,
      choices: options,
    },
  ];

  return inquirer.default.prompt(questions).then((answer: any) => {
    return answer;
  });
}
