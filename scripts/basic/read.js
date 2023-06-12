import fs from 'fs';

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
console.log(__dirname);

export const read = async (fileToRead = '') => {
    return new Promise((resolve, reject) => {
        console.log('fileToRead !!!,', fileToRead);
        let data = '';
    
        const readableStream = fs.createReadStream(fileToRead);
        console.log(fileToRead);
    
        readableStream.addListener('data', (chunk) => {
            data += chunk;
        });
    
        readableStream.addListener('end', () => {
            console.log(`File content:\n " ${data} "`);
            resolve(data);
        });
    
        readableStream.addListener('error', (error) => {
            console.log(`error: ${error.message}`);
            reject(error);
        });
    });
};
