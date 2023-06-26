import fs from 'fs';
import { createBrotliCompress } from 'zlib';
import { check } from '../utils/check.js';

export const compress = async (line = '') => {
    const fileToCompress = line.split(' ').at(0) || '';
    const pathToZip = line.split(' ').at(1) || '';
    const existFileToCompress = await check(fileToCompress);

    if (!existFileToCompress) {
        console.log(`File ${ fileToCompress } does not exist!`);
    } else if (!pathToZip.length) {
        console.log(`You need to enter currect path to compressing!`); 
    } else {
        const readStream = fs.createReadStream(fileToCompress);
        const writeStream = fs.createWriteStream(pathToZip);

        const brotli = createBrotliCompress();
        const stream = readStream.pipe(brotli).pipe(writeStream);

        stream.on('error', () => {
            console.log('Error!');
        });
        stream.on('finish', () => {
            console.log('Compressing done!');
        });
    }
};
