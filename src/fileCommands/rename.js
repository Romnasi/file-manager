import { rename as fsRename } from 'node:fs';
import path from 'node:path';
import { getAbsPath } from '../utils/utils.js';
import { showCommandError } from '../message/message.js';
import { ERROR_MESSAGE } from '../const.js';

export const rename = async (commandArgs, pathStore) => {
  const filePath = getAbsPath(commandArgs[0], pathStore);
  const fileName = commandArgs[1];

  if (!filePath) {
    return;
  }

  if (!fileName) {
    showCommandError(ERROR_MESSAGE.WRONG_FILENAME);
    return;
  }
  
  let fileDirectory;
  try {
    fileDirectory = pathStore.getAnyDirectoryUp(filePath);
  } catch (error) {
    showCommandError();
    return;
  }
  const newFilePath = path.join(fileDirectory, fileName);

  fsRename(filePath, newFilePath, (err) => {
    if (err) showCommandError();
  }); 
};
