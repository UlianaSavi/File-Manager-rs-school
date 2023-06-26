import { promises as fs } from 'fs';
import { check } from '../utils/check.js';

export const remove = async (line = '') => {
    const path = line.split(' ').at(0) || '';
    const exist = await check(path);
    if (!exist) {
        console.error(`\nFile does not exist!`);
    } else {
        fs.unlink(path, () => {
            console.log('\nFile deleted!');
        });
    }
};