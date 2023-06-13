import fs from 'fs';

export const read = async (fileToRead = '') => {
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
    
        readableStream.addListener('error', (error) => {
            console.log(`error: ${error.message}`);
            reject(error);
        });
    });
};
