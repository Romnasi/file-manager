import { getName } from "./src/getName.js";
import getPathFromFile from "./src/getPathFromFile.js";

const EXIT_COMMAND = '.exit';


const userName = getName();
process.stdout.write(`Welcome to the File Manager, ${userName}!\n`);

process.stdin.on('data', (data) => {
  const currentPath = getPathFromFile(import.meta.url);

  process.stdout.write(`You are currently in ${currentPath}\n`);
  const userInput = data.toString().trim();
  
  if (userInput === EXIT_COMMAND) {
    exit(userName)
  }

})


process.on('SIGINT', () => exit(userName));


const exit = (userName) => {
  process.stdout.write(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
}
