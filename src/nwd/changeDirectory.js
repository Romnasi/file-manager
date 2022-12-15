import { showCommandError } from "../message/message.js";
import { ERROR_MESSAGE } from "../const.js";
import { getAbsoluteFromRelativePath, checkAccess } from "../utils/utils.js";

const DOT = '.'


export const changeDirectory = async (commandArgs, pathStore) => {
  let destination = commandArgs[0];

  if (!destination) {
    showCommandError(ERROR_MESSAGE.WRONG_PATH);
    return;
  }
  
  const sep = pathStore.sep;
  const startRelativePath = DOT + sep;
  const isRelativePath = destination.startsWith(startRelativePath);
  const isStartsAtPoint = destination.startsWith(DOT);

  if (isRelativePath) {
    destination = getAbsoluteFromRelativePath(destination, pathStore.get(), sep);
  } else if (isStartsAtPoint) {
    showCommandError(ERROR_MESSAGE.WRONG_PATH);
    return;
  }
  const isAccess = await checkAccess(destination);

  if (isAccess) {
    pathStore.set(destination);
    return;
  }
  showCommandError(ERROR_MESSAGE.WRONG_PATH);
}
