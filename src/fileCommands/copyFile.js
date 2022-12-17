import { createReadStream, createWriteStream } from "fs";
import { ERROR_MESSAGE } from "../const.js";
import { showCommandError } from "../message/message.js";
import { getAbsPath, checkAccess } from "../utils/utils.js";


const copy = async (filePath, copyFilePath) => {
  try {
    const readable = createReadStream(filePath, { encoding: 'utf-8' });
    const writable = createWriteStream(copyFilePath);
    

    readable.on('error', (err) => {
      console.log(err)
      showCommandError();
    });

    readable.pipe(writable);
  } catch (err) {
    showCommandError();
  }
}

export const copyFile = async (commandArgs, pathStore) => {
  const filePath = getAbsPath(commandArgs[0], pathStore);
  if (!filePath) {
    return;
  }
  const isAccess = await checkAccess(filePath);

  if (!isAccess) {
    showCommandError(ERROR_MESSAGE.WRONG_PATH);
    return;
  }

  const copyFilePath = getAbsPath(commandArgs[1], pathStore);
  if (!copyFilePath) {
    return;
  }

  copy(filePath, copyFilePath);
}
