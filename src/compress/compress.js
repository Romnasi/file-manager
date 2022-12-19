import zlib from "zlib";
import fs from "fs";
import path from "path";
import { getAbsPath, checkAccess } from "../utils/utils.js";
import { showCommandError } from "../message/message.js";
import { ERROR_MESSAGE } from "../const.js";

const BROTLI_EXT = '.br';


export const compress = async (commandArgs, pathStore, decompress = false) => {
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
  let newFileName = fileName;
  
  let brotli;
  if (!decompress) {
    brotli = zlib.createBrotliCompress();
    newFileName += BROTLI_EXT;
  } else {
    brotli = zlib.createBrotliDecompress();
    const isEndsWithBr = fileName.endsWith(BROTLI_EXT);
    if (isEndsWithBr) {
      newFileName = fileName.slice(0, fileName.length - BROTLI_EXT.length);;
    }
  }
  const newFilePath = path.join(newDirectory, newFileName);

  const readable = fs.createReadStream(filePath);
  const writable = fs.createWriteStream(newFilePath);

  const stream = readable.pipe(brotli).pipe(writable);
  stream.on('error', () => showCommandError());
};