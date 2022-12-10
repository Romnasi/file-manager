import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const getPathFromFile = (url, filename = '') => {
  const __filename = fileURLToPath(url);
  return path.join(dirname(__filename), filename);
}

export default getPathFromFile;
