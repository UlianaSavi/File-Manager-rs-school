import fs from 'fs';
import { createBrotliCompress } from 'zlib';

export const compress = async (line = '') => {
    const fileToCompress = line.split(' ').at(0);
    const pathToZip = line.split(' ').at(1);

    const readStream = fs.createReadStream(fileToCompress);
    const writeStream = fs.createWriteStream(pathToZip);

    const brotli = createBrotliCompress();

    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on('finish', () => {
        console.log('Compressing done!');
    });
};
