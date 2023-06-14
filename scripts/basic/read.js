import fs from 'fs';
import { check } from '../utils/check.js';

export const read = async (fileToRead = '') => {
    const exist = await check(fileToRead);

    if (!exist) {
        console.log(`File ${ fileToRead } does not exist!`);
    } else {
        return new Promise((resolve, reject) => {
            let data = '';
        
            const readableStream = fs.createReadStream(fileToRead);
        
            readableStream.addListener('data', (chunk) => {
                data += chunk;
            });
        
            readableStream.addListener('end', () => {
                console.log(`File content:\n " ${data} "`);
                resolve(data);
            });
        });
    }
};
