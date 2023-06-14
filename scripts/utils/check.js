import { promises as fs } from 'fs';

export const check = async (fileToRead = '') => {
    try {
        await fs.access(fileToRead, fs.constants.F_OK);
        return true;
    } catch (err) {
        return false;
    }
};