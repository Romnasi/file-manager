import { showCommandError } from "../message/message.js";
import { ERROR_MESSAGE } from "../const.js";
import { checkAccess, getAbsPath } from "../utils/utils.js";


export const changeDirectory = async (commandArgs, pathStore) => {
  const destination = getAbsPath(commandArgs[0], pathStore);
  if (!destination) {
    return;
  }
  const isAccess = await checkAccess(destination);

  if (isAccess) {
    pathStore.set(destination);
    return;
  }
  showCommandError(ERROR_MESSAGE.WRONG_PATH);
}
