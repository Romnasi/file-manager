import { access, constants } from "node:fs/promises";
import { showCommandError } from "../message/message.js";
import { ERROR_MESSAGE } from "../const.js";

const DOT = '.';


export const getAbsoluteFromRelativePath = (relativePath, curDir, sep) => {
  const pathHead = curDir.endsWith(sep) ? curDir : curDir + sep;  
  const pathTale = relativePath.slice(2, relativePath.length);  
  return `${pathHead}${pathTale}`;
}


export const checkAccess = async (absoluteDirectory) => {
  try {
    await access(absoluteDirectory, constants.R_OK | constants.W_OK);
    return true;
  } catch {
    return false;
  }
}


export const getAbsPath = (destination, pathStore) => {
  if (!destination) {
    showCommandError(ERROR_MESSAGE.WRONG_PATH);
    return;
  }
  
  const sep = pathStore.sep;
  const startRelativePath = DOT + sep;
  const isRelativePath = destination.startsWith(startRelativePath);
  const isStartsAtPoint = destination.startsWith(DOT);

  if (isRelativePath || destination === DOT) {
    return getAbsoluteFromRelativePath(destination, pathStore.get(), sep);
  } else if (isStartsAtPoint && destination.length > 1) {
    showCommandError(ERROR_MESSAGE.WRONG_PATH);
    return;
  }

  return destination;
}
