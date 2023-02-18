import { Command } from "commander";
import {
  askChatGpt,
  askChatGptWithStream,
} from "../../chatgpt-api/ask-chatgpt";
import { askForPrompt } from "../../prompts/ask-for-prompt";
import { pickStep } from "../../prompts/pick-step";
async function main() {
  let exit = false;
  const program = new Command();

  program
    .version("0.0.1")
    .description("A simple CLI to create a new project")
    .option("-h, --help", "Display help for command")
    .option("-v, --version", "Output the version number")
    .parse(process.argv);

  const options = program.opts();

  if (options.help) {
    program.outputHelp();
    process.exit(0);
  }

  //   while (!exit) {
  //     const prompt = await askForPrompt();
  //     const res = await askChatGpt(prompt.prompt);
  //     console.log({ res });
  //     continue;
  //   }
  let parentMessageId = undefined;
  let currentQuestion = "How may I help you?";
  while (!exit) {
    const prompt = await askForPrompt(currentQuestion, true);
    const chatGPTresponse: any = await askChatGptWithStream(
      prompt.prompt,
      parentMessageId
    );
    if (chatGPTresponse.parentMessageId)
      parentMessageId = chatGPTresponse.parentMessageId;

    const result = await pickStep("Continue or Exit?", ["Continue", "Exit"]);
    if (result.selectedOption === "Exit") {
      exit = true;
    }
    continue;
  }
}
main();
