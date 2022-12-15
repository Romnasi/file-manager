import { COMMAND } from "./const.js";
import { list } from "./nwd/list.js";
import { changeDirectory } from "./nwd/changeDirectory.js";
import { showCommandError } from "./message/message.js";

export const executeCommand = async (commandWithArgs, pathStore) => {
  const command = commandWithArgs[0];
  const commandArgs = commandWithArgs.slice(1, commandWithArgs.length);

  switch (command) {
    case COMMAND.LS:
      list(pathStore.get());
      break;
    case COMMAND.UP:
      pathStore.up();
      break;
    case COMMAND.CD:
      await changeDirectory(commandArgs, pathStore);
      break;
    default:
      showCommandError();
      break;
  }
}
