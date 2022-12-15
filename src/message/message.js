import { ERROR_MESSAGE } from "../const.js";

export const showCommandError = (clarifyingMessage = '') => {
  if (!clarifyingMessage) {
    process.stdout.write(`${ERROR_MESSAGE.BASIC}\n`)
  } else {
    const message = `${ERROR_MESSAGE.BASIC}: ${clarifyingMessage}\n`;
    process.stdout.write(message);
  }
};

export const showCurrentDir = (dir) => {
  process.stdout.write(`\nYou are currently in ${dir}\n`);
}
