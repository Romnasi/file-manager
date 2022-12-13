import path from "path";
import os from "os";

const MIN_LENGTH_PATH = 1;
const UP_STEP = 1;

class PathStore {
  constructor() {
    this.dir = os.homedir();
    this.sep = path.sep;
  }

  get = () => this.dir;
  set = (newDir) => this.dir = newDir;

  up = () => {
    let pathSplitted = this.dir.split(this.sep);
    const pathElementsLength = pathSplitted.length
    if (pathElementsLength > MIN_LENGTH_PATH) {
      pathSplitted  = pathSplitted.slice(0, pathElementsLength - UP_STEP);
    }
    this.dir = pathSplitted.join(this.sep)
    if (pathElementsLength === 2) {
      this.dir += this.sep;
    }
  };
}

export const pathStore = new PathStore();
