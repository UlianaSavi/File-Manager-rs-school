import fs from 'fs';
import { check } from '../utils/check.js';

export const copy = async (line = '') => {
    const oldPath = line.split(' ').at(0) || '';
    const newPath = line.split(' ').at(1) || '';
    const existOldPath = await check(oldPath);
    if (existOldPath) {
        fs.createReadStream(oldPath).pipe(fs.createWriteStream(newPath));
    } else {
        console.log('\nWrong path!');
    }
};
