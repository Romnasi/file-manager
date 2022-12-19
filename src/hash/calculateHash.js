import { readFile } from 'node:fs/promises';
import { createHash } from 'crypto';
import { showCommandError } from '../message/message.js';
import { getAbsPath } from '../utils/utils.js';

export const calculateHash = async (filePath) => {
  try {
    const fileContent = await readFile(filePath, 'utf8');
    const hash = createHash('sha256').update(fileContent).digest('hex');
    console.log(hash);
  } catch (err) {
    showCommandError();
  }
}

export const getFileHash = async (commandArgs, pathStore) => {
  const filePath = getAbsPath(commandArgs[0], pathStore);
  if (!filePath) {
    return;
  }

  await calculateHash(filePath);
}
