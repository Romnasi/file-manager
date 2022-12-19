import { createReadStream, createWriteStream } from "fs";
import { unlink } from 'fs/promises';
import path from "path";
import { getAbsPath, checkAccess } from "../utils/utils.js";
import { showCommandError } from "../message/message.js";
import { ERROR_MESSAGE } from "../const.js";


export const move = async (filePath, newFilePath) => {
  try {
    const readable = createReadStream(filePath, { encoding: 'utf-8' });
    const writable = createWriteStream(newFilePath);
    
    readable.on('error', (err) => {
      showCommandError();
    });
    writable.on('error', (err) => {
      showCommandError();
    });

    writable.on('close', async () => {
      try {
        await unlink(filePath);
      } catch (err) {
        showCommandError();
      }
    });

    readable.pipe(writable);
  } catch (err) {
    showCommandError();
  }
}


export const moveFile = async (commandArgs, pathStore) => {
  const filePath = getAbsPath(commandArgs[0], pathStore);
  if (!filePath) {
    return;
  }
  const isAccess = await checkAccess(filePath);

  if (!isAccess) {
    showCommandError(ERROR_MESSAGE.WRONG_PATH);
    return;
  }

  const newDirectory = getAbsPath(commandArgs[1], pathStore);
  if (!newDirectory) {
    return;
  }
  const fileName = path.basename(filePath);
  const newFilePath = path.join(newDirectory, fileName);

  await move(filePath, newFilePath);
}
