import fs from 'fs';
import { check } from '../utils/check.js';

export const move = async (line = '') => {
    const oldPath = line.split(' ').at(0);
    const newPath = line.split(' ').at(1);
    const oldPathExist = await check(oldPath);

    if (oldPathExist) {
        fs.createReadStream(oldPath)
                .pipe(fs.createWriteStream(newPath))
                .addListener('finish', () => fs.rm(oldPath, () => console.log('\nfile moved!')))
                .addListener('error', (err) => console.log(err));
    } else {
        console.log('\nWrong path!');
    }
};
