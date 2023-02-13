export async function askForInput() {
  const inquirer = await import("inquirer");
  const value = inquirer.default
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
    ])
    .then((answers: any) => {
      console.log({ answers });
      return answers;
    });
  return value;
}

askForInput();
