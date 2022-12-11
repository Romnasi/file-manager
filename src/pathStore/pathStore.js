import path from "path";
import os from "os";

class PathStore {
  constructor() {
    this.dir = os.homedir();
    this.sep = path.sep;
  }

  get = () => this.dir;
  set = (newDir) => this.dir = newDir;
}

export const pathStore = new PathStore();
