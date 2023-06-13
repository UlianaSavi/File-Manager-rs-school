import fs from 'fs';

export const copy = (line = '') => {
    const oldPath = line.split(' ').at(0);
    const newPath = line.split(' ').at(1);
    try {
        fs.createReadStream(oldPath).pipe(fs.createWriteStream(newPath));
    } catch (err) {
        console.log(err);
    }
};
