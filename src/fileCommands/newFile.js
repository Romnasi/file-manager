import path from "path";
import { writeFile } from "fs/promises";
import { ERROR_MESSAGE } from "../const.js";
import { showCommandError } from "../message/message.js";

export const create = async (filePath) => {
  try {
    await writeFile(filePath, '', { flag: 'wx' });
  } catch (err) {
    showCommandError();
  }
}

export const createFile = async (commandArgs, pathStore) => {
  const fileName = commandArgs[0];
  if (!fileName) {
    showCommandError(ERROR_MESSAGE.WRONG_FILENAME);
    return;
  }

  const filePath = path.join(pathStore.get(), fileName);
  await create(filePath)
}
