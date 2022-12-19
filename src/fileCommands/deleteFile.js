import { unlink } from 'fs/promises';
import { getAbsPath } from '../utils/utils.js';
import { showCommandError } from '../message/message.js';


export const remove = async (filePath) => {
  try {
    await unlink(filePath);
  } catch (err) {
    showCommandError();
  }
};

export const deleteFile = async (commandArgs, pathStore) => {
  const filePath = getAbsPath(commandArgs[0], pathStore);
  if (!filePath) {
    return;
  }
  await remove(filePath);
}
