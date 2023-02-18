import  clear from 'clear';
import { askForPrompt } from "./ask-for-prompt";

async function prompt() {
  const answer = await askForPrompt('prompt example', true);
  clear()
  console.log(answer);
}

prompt();