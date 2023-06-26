import { promises as fs } from 'fs';
import { createHmac } from 'crypto';

export const hash = async (line = '') => {
    const path = line.split(' ').at(0) || '';
    try {
        const data = await fs.readFile(path, 'utf-8');
        const secret = 'abcdefg';
        const hash = createHmac('sha256', secret)
            .update(data)
            .digest('hex');

        console.log('hash: ', hash);
    } catch (err) {
        console.log(`\n${ err }`);
    }
};
