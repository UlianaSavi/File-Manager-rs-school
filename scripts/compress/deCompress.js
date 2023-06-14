import fs from 'fs';
import { createBrotliDecompress } from 'zlib';

export const decompress = async (line = '') => {
    const fileToDeCompress = line.split(' ').at(0);
    const pathToFile = line.split(' ').at(1);

    const readStream = fs.createReadStream(fileToDeCompress);
    const writeStream = fs.createWriteStream(pathToFile);

    const brotli = createBrotliDecompress();

    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on('finish', () => {
        console.log('Compressing done!');
    });
};
