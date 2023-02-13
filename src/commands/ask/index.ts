import { Command } from "commander";
import { askForInput } from "../../prompts";
import { askChatGpt, askChatGptWithStream } from "../../chatgpt-api/ask-chatgpt";
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
//     const prompt = await askForInput();
//     const res = await askChatGpt(prompt.prompt);
//     console.log({ res });
//     continue;
//   }
  while (!exit) {
    const prompt = await askForInput();
    const res = await askChatGptWithStream(prompt.prompt);
    console.log({ res });
    continue;
  }
}
main();
