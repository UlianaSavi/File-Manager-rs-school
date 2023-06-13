import fs from 'fs';

export const move = (line = '') => {
    const oldPath = line.split(' ').at(0);
    const newPath = line.split(' ').at(1);
    try {
        fs.createReadStream(oldPath)
            .pipe(fs.createWriteStream(newPath))
            .addListener('finish', () => fs.rm(oldPath, () => console.log('file moved!')));
    } catch (err) {
        console.log(err);
    }
};
