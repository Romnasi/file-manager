import { access, constants } from "node:fs/promises";
import { showCommandError } from "../message/message.js";
import { ERROR_MESSAGE } from "../const.js";

const DOT = '.'

const getAbsoluteFromRelativePath = (relativePath, curDir, sep) => {
  const pathHead = curDir.endsWith(sep) ? curDir : curDir + sep;  
  const pathTale = relativePath.slice(2, relativePath.length);  
  return `${pathHead}${pathTale}`;
}


const checkAccess = (absoluteDirectory) => {
  try {
    access(absoluteDirectory, constants.R_OK | constants.W_OK);
    return true;
  } catch {
    return false;
  }
}


export const changeDirectory = (commandArgs, pathStore) => {
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
  const isAccess = checkAccess(destination);

  if (isAccess) {
    pathStore.set(destination);
    return;
  }
  showCommandError(ERROR_MESSAGE.WRONG_PATH);
}
