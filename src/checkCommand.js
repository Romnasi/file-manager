const COMMAND_LINES_LENGTH = {
  up: 1,
  cd: 2,
  ls: 1,
  cat: 2,
  add: 2,
  rn: 3,
  cp: 3,
  mv: 3,
  rm: 2,
  os: 2,
  hash: 2,
  compress: 3,
  decompress: 3,
}

export const checkCommand = (userInput) => {
  const args = userInput.split(' ');
  const commandCandidate = args[0];
  const isCommand = Object.keys(COMMAND_LINES_LENGTH)
    .includes(commandCandidate);

  if (!isCommand) {
    return null;
  }
  return args.slice(0, COMMAND_LINES_LENGTH[commandCandidate]);
}
