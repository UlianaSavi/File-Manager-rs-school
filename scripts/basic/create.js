import { promises as fs } from 'fs';

const check = async (filePath) => {
  try {
      await fs.access(filePath, fs.constants.F_OK)
      return true;
  } catch (err) {
      return false;
  }
};

export const create = async (filePath = '') => {
  const exist = await check(filePath);
  if (!exist) {
      await fs.appendFile(filePath, '')
      console.log(`${filePath} was created.`);
  } else {
    console.log('!!!!!!!');
      throw new Error(`${filePath} already exist! FS operation failed.`);
  }
};
