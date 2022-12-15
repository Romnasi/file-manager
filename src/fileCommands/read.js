import { createReadStream } from "fs";
import { showCommandError } from "../message/message.js";
import { getAbsPath } from "../utils/utils.js";


export const read = (absolutePath) => {
  return new Promise((resolve, reject) => {
    const readableStream = createReadStream(absolutePath, 'utf-8');
    readableStream.on('error', () => {
      showCommandError();
      resolve();
    });
    readableStream.on('data', (chunk) => {
      console.log('\n' + chunk);
      resolve();
    });
  });
}


export const readFile = async (commandArgs, pathStore) => {
  const destination = getAbsPath(commandArgs[0], pathStore);
  if (!destination) {
    return;
  }
  await read(destination)
}
