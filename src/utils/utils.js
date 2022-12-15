import { access, constants } from "node:fs/promises";

export const getAbsoluteFromRelativePath = (relativePath, curDir, sep) => {
  const pathHead = curDir.endsWith(sep) ? curDir : curDir + sep;  
  const pathTale = relativePath.slice(2, relativePath.length);  
  return `${pathHead}${pathTale}`;
}


export const checkAccess = async (absoluteDirectory) => {
  try {
    await access(absoluteDirectory, constants.R_OK | constants.W_OK);
    return true;
  } catch {
    return false;
  }
}
