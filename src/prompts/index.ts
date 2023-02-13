export async function askForInput() {
  const inquirer = await import("inquirer");
  return inquirer.default
    .prompt([
      {
        type: "input",
        name: "prompt",
        message: "How can I help you?",
      },
    ])
    .then((answer: any) => {
      return answer;
    });
}
