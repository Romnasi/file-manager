import os from 'os';
import { getName } from "./src/getName.js";

const EXIT_COMMAND = '.exit';


process.on('SIGINT', () => exit(userName));
const exit = (userName) => {
  process.stdout.write(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
}


const showCurrentDir = (dir) => {
  process.stdout.write(`\nYou are currently in ${dir}\n`);
}


const userName = getName();
let currentWorkDir = os.homedir();
process.stdout.write(`Welcome to the File Manager, ${userName}!\n`);
showCurrentDir(currentWorkDir);


process.stdin.on('data', (data) => {
  const userInput = data.toString().trim();
  
  if (userInput === EXIT_COMMAND) {
    exit(userName)
  }
  showCurrentDir(currentWorkDir)
})
