const DEFAULT_USERNAME = 'stranger';
const USERNAME_KEY = '--username=';
const SEPARATOR = '=';

export const getName = () => {
  const userInputArgs = process.argv.slice(2);
  const nameArg = userInputArgs.find((arg) => arg.startsWith(USERNAME_KEY))
  if (nameArg) {
    return nameArg.split(SEPARATOR)[1];
  }
  return DEFAULT_USERNAME;
};
