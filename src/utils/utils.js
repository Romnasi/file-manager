import path from "node:path";
import { access, constants } from "node:fs/promises";
import { showCommandError } from "../message/message.js";
import { ERROR_MESSAGE } from "../const.js";

const DOT = '.';


export const getAbsoluteFromRelativePath = (relativePath, curDir, sep) => {
  const pathHead = curDir.endsWith(sep) ? curDir.slice(0, curDir.length - 1) : curDir;  
  const pathTale = relativePath.slice(2, relativePath.length);  
  return path.join(pathHead, pathTale);
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
  const isRelativePath = destination.startsWith('./') || destination.startsWith('.\\');

  if (isRelativePath || destination === DOT) {
    return getAbsoluteFromRelativePath(destination, pathStore.get(), sep);
  }

  let newPath = path.join(destination);
  newPath = newPath.endsWith(sep) ? newPath.slice(0, newPath.length - 1) : newPath;
  return newPath;
}
