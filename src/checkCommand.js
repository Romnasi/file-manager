import { COMMAND_LINES_LENGTH } from "./const.js";

export const checkCommand = (userInput) => {
  const args = userInput.split(' ');
  const commandCandidate = args[0];
  const isCommand = Object.keys(COMMAND_LINES_LENGTH)
    .includes(commandCandidate);

  if (!isCommand) {
    return null;
  }
  return args.slice(0, COMMAND_LINES_LENGTH[commandCandidate]);
}
