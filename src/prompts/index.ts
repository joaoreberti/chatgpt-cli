import  clear from 'clear';
import { askForInput } from "./ask-for-input";

async function prompt() {
  const answer = await askForInput();
  clear()
  console.log(answer);
}

prompt();