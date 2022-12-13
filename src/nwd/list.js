import { readdir } from "fs/promises";
import path from "path";

const getSortedByName = (elements) => {
  return elements.sort((a, b) => a.Name.toLowerCase().localeCompare(b.Name.toLowerCase()));
}


const addType = (elements, dir) => {
  const directories = [];
  const files = [];

  elements.forEach(element => {
    const isFile = element.isFile();
    const isDirectory = element.isDirectory();
    if (isFile) {
      const ext = path.extname(path.join(dir, element.name));
      const nameWithExt = `${element.name}${ext}`;
      files.push({ Name: nameWithExt, Type: 'file' });
    } else if (isDirectory) {
      directories.push({ Name: element.name, Type: 'directory' });
    }
  });
  
  const sortedDirectories = getSortedByName(directories);
  const sortedFiles = getSortedByName(files);   
  
  return sortedDirectories.concat(sortedFiles)
}


export const list = async (dir) => {
  try {
    const files = await readdir(dir, {withFileTypes: true});
    const filesWithTypes = addType(files, dir);
    console.table(filesWithTypes);
  } catch (err) {
    process.stdout.write(`Operation failed\n`);
  } 
};
