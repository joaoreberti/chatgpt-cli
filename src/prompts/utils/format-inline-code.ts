import chalk from "chalk";
export function formatInlineCode(
  text: string,
  matchesArray: string[],
  { isCode }: { isCode?: boolean } = {}
): string {
  let formattedText = text;
  matchesArray.forEach((match) => {
    if (isCode) {
      formattedText = formattedText.replaceAll(
        `${match}`,
        chalk.green(`${match}`)
      );
    } else {
      formattedText = formattedText.replaceAll(`${match}`, "banana");
    }
  });
  return formattedText;
}
