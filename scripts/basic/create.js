import { promises as fs } from 'fs';
import { check } from '../utils/check.js';

export const create = async (filePath = '') => {
  const exist = await check(filePath);
  if (!exist) {
      await fs.appendFile(filePath, '')
      console.log(`${ filePath } was created.`);
  } else {
    console.log(`${ filePath } already exist! FS operation failed.`);
  }
};
