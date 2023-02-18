// Description: Center text in the terminal
// graciously borrowed from chatPPT itself
export function centerText(text: string, maxWidth: number) {
  const availableWidth = process.stdout.columns;
  const margin = Math.floor((availableWidth - maxWidth) / 2);
  const marginString = " ".repeat(margin);
  const lines = text.trim().split("\n");

  const centeredLines = lines.map((line) => {
    const words = line.trim().split(" ");
    const lines = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (currentLine.length + word.length + 1 <= maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine.trim());
        currentLine = word;
      }
    }

    if (currentLine.length > 0) {
      lines.push(currentLine.trim());
    }

    const centered = lines.map((line) => marginString + line.trim()).join("\n");
    return centered;
  });
  return centeredLines.join("\n");
}
