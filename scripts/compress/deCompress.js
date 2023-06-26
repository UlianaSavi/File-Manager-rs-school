import fs from 'fs';
import { createBrotliDecompress } from 'zlib';
import { check } from '../utils/check.js';

export const decompress = async (line = '') => {
    const fileToDeCompress = line.split(' ').at(0) || '';
    const pathToFile = line.split(' ').at(1) || '';

    const existFileToDeCompress = await check(fileToDeCompress);
    const existPathToFile = await check(pathToFile);

    if (!existFileToDeCompress) {
        console.log(`File ${ fileToDeCompress } does noe exist!`);
    } else if (!existPathToFile) {
        console.log(`You need to enter existing path to decompressing!`); 
    } else {
        const readStream = fs.createReadStream(fileToDeCompress);
        const writeStream = fs.createWriteStream(pathToFile);

        const brotli = createBrotliDecompress();

        const stream = readStream.pipe(brotli).pipe(writeStream);

        stream.on('finish', () => {
            console.log('Compressing done!');
        });
    }
};
