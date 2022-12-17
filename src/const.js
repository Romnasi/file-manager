export const COMMAND = {
  LS: 'ls',
  UP: 'up',
  CD: 'cd',
  CAT: 'cat',
  ADD: 'add',
  RN: 'rn',
  CP: 'cp',
  RM: 'rm',
  EXIT: '.exit',
}

export const COMMAND_LINES_LENGTH = {
  [COMMAND.UP]: 1,
  [COMMAND.CD]: 2,
  [COMMAND.LS]: 1,
  [COMMAND.CAT]: 2,
  [COMMAND.ADD]: 2,
  [COMMAND.RN]: 3,
  [COMMAND.CP]: 3,
  mv: 3,
  [COMMAND.RM]: 2,
  os: 2,
  hash: 2,
  compress: 3,
  decompress: 3,
}

export const PATH_STORE = {
  MIN_LENGTH_PATH: 1,
  UP_STEP: 1,
  PENULTIMATE: 2,
}

export const ERROR_MESSAGE = {
  BASIC: 'Operation failed',
  WRONG_PATH: 'wrong path',
  WRONG_COMMAND: 'wrong command',
  WRONG_FILENAME: 'wrong filename',
}