import { Command } from "commander";

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
