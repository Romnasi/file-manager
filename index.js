import { getName } from "./src/getName.js";
import { COMMAND, ERROR_MESSAGE } from "./src/const.js";
import { pathStore } from "./src/pathStore/pathStore.js";
import { checkCommand } from "./src/checkCommand.js";
import { executeCommand } from "./src/executeCommand.js";
import { showCommandError, showCurrentDir } from "./src/message/message.js";


process.on('SIGINT', () => exit(userName));
const exit = (userName) => {
  process.stdout.write(`\nThank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
}

const userName = getName();
process.stdout.write(`Welcome to the File Manager, ${userName}!\n`);
showCurrentDir(pathStore.get());


process.stdin.on('data', async (data) => {
  const userInput = data.toString().trim();
  
  if (userInput === COMMAND.EXIT) {
    exit(userName)
  }

  const commandArgs = checkCommand(userInput);
  if (!commandArgs) {
    showCommandError(ERROR_MESSAGE.WRONG_COMMAND);
  } else {
    await executeCommand(commandArgs, pathStore);
  }
  showCurrentDir(pathStore.get());
});
