import path from "path";
import os from "os";
import { PATH_STORE } from "../const.js";

class PathStore {
  constructor() {
    this.dir = os.homedir();
    this.sep = path.sep;
  }

  get = () => this.dir;
  set = (newDir) => this.dir = newDir;

  getAnyDirectoryUp = (absolutePath) => {
    let pathSplitted = absolutePath.split(this.sep);
    const pathElementsLength = pathSplitted.length
    if (pathElementsLength > PATH_STORE.MIN_LENGTH_PATH) {
      pathSplitted  = pathSplitted.slice(0, pathElementsLength - PATH_STORE.UP_STEP);
    }
    let path = pathSplitted.join(this.sep)
    if (pathElementsLength === PATH_STORE.PENULTIMATE) {
      path += this.sep;
    }
    return path;
  }

  up = () => this.set(this.getAnyDirectoryUp(this.dir));
}

export const pathStore = new PathStore();
