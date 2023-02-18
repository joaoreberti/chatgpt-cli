import clear from "clear";

import { formatCodeBlock } from "./format-code-block";
import { formatInlineCode } from "./format-inline-code";
import { getCodeBlock } from "./get-code-block";
import { getInlineCode } from "./get-inline-code";
import { moveToTop } from "./move-cursor-to-top";

export function formatChatGptResponse(response: string, prompt: string): void {
  clear();
  moveToTop();
  const you = "You: " + prompt + "\n";
  const formattedResponse = formatResponse(response);
  const chatGpt = "ChatGPT: " + formattedResponse;

  console.log(you + chatGpt);
}

function formatResponse(response: string): string {
  let responseCopy = response;
  const codeBlockSet = getCodeBlock(responseCopy);
  if (codeBlockSet && codeBlockSet?.size !== 0) {
    responseCopy = formatCodeBlock(responseCopy, Array.from(codeBlockSet), {
      isCode: true,
    });
  }
  const inlineCodeSet = getInlineCode(responseCopy);
  if (inlineCodeSet && inlineCodeSet?.size !== 0) {
    responseCopy = formatInlineCode(responseCopy, Array.from(inlineCodeSet), {
      isCode: true,
    });
  }
  return responseCopy;
}
