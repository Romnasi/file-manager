import os from "os";
import { showCommandError } from "../message/message.js";
import { OS_ARGUMENT } from "../const.js";

export const executeOs = async (commandArgs) => {
  const commandArgument = commandArgs[0];
  if (!commandArgument) {
    showCommandError();
  }

  switch (commandArgument) {
    case OS_ARGUMENT.EOL:
      console.log(JSON.stringify(os.EOL));
      break;
    case OS_ARGUMENT.CPUS:
      console.log(os.cpus());
      break;
    case OS_ARGUMENT.HOMEDIR:
      console.log(os.homedir());
      break;
    case OS_ARGUMENT.USERNAME:
      console.log(os.userInfo().username);
      break;
    case OS_ARGUMENT.ARCH:
      console.log(os.arch());
      break;
    default:
      showCommandError();
      break;
  }
}
