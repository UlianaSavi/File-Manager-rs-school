import { promises as fs } from 'fs';

export const copy = async (line = '') => {
    const oldPath = line.split(' ').at(0);
    const newPath = line.split(' ').at(1);
    try {
        fs.copyFile(oldPath, newPath)
    } catch (err) {
        console.log(err);
    }
};
