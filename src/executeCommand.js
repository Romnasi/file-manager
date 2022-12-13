import { COMMAND } from "./const.js";
import { list } from "./nwd/list.js";
import { showCommandError } from "./message/message.js";

export const executeCommand = (commandArgs, pathStore) => {
  const command = commandArgs[0];

  switch (command) {
    case COMMAND.LS:
      list(pathStore.get());
      break;
    case COMMAND.UP:
      pathStore.up();
      break;
    default:
      showCommandError();
      break;
  }
}
