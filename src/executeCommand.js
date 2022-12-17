import { COMMAND } from "./const.js";
import { getList } from "./nwd/list.js";
import { changeDirectory } from "./nwd/changeDirectory.js";
import { showCommandError } from "./message/message.js";
import { readFile } from "./fileCommands/read.js";
import { createFile } from "./fileCommands/newFile.js";
import { rename } from "./fileCommands/rename.js";
import { copyFile } from "./fileCommands/copyFile.js";
import { deleteFile } from "./fileCommands/deleteFile.js";


export const executeCommand = async (commandWithArgs, pathStore) => {
  const command = commandWithArgs[0];
  const commandArgs = commandWithArgs.slice(1, commandWithArgs.length);

  switch (command) {
    case COMMAND.LS:
      getList(pathStore.get());
      break;
    case COMMAND.UP:
      pathStore.up();
      break;
    case COMMAND.CD:
      await changeDirectory(commandArgs, pathStore);
      break;
    case COMMAND.CAT:
      await readFile(commandArgs, pathStore);
      break;
    case COMMAND.ADD:
      await createFile(commandArgs, pathStore);
      break;
    case COMMAND.RN:
      await rename(commandArgs, pathStore);
      break;
    case COMMAND.CP:
      await copyFile(commandArgs, pathStore);
      break;
    case COMMAND.RM:
      await deleteFile(commandArgs, pathStore);
      break;
    default:
      showCommandError();
      break;
  }
}
