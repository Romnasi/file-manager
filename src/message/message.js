export const showCommandError = (clarifyingMessage = '') => {
  if (!clarifyingMessage) {
    process.stdout.write(`Operation failed\n`)
  } else {
    const message = `Operation failed: ${clarifyingMessage}\n`;
    process.stdout.write(message);
  }
};

export const showCurrentDir = (dir) => {
  process.stdout.write(`\nYou are currently in ${dir}\n`);
}
