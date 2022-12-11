export const showCommandError = () => process.stdout.write(`Operation failed\n`);

export const showCurrentDir = (dir) => {
  process.stdout.write(`\nYou are currently in ${dir}\n`);
}
