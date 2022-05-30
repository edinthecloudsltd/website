import { promises as fs } from 'fs';

const getFileLastUpdated = async (path: string) => {
  let modified: Date = new Date();
  try {
    const stats = await fs.stat(path);
    modified = stats.mtime;
  } catch (error) {
    console.log(error);
  }
  return modified;
};

export default getFileLastUpdated;
