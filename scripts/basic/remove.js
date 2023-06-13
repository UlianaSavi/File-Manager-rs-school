import fs from 'fs';

export const remove = (line = '') => {
    const path = line.split(' ').at(0);
    fs.access(path, fs.F_OK, (err) => {
        if (err) {
            console.error(`\n${err}`);
        }
        fs.rm(path, () => console.log('\nFile deleted!'));
    })
};