import chalk from "chalk";
export function formatCodeBlock(
  text: string,
  matchesArray: string[],
  { isCode }: { isCode?: boolean } = {}
): string {
  let formattedText = text;
  matchesArray.forEach((match) => {
    if (isCode) {
      formattedText = formattedText.replaceAll(
        `${match}`,
        chalk.red(`${match}`)
      );
    } else {
      formattedText = formattedText.replaceAll(`${match}`, "banana");
    }
  });
  return formattedText;
}
