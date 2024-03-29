import readline from 'readline';
import { COMMANDS } from './constants.js';
import { up } from './scripts/navigation/up.js';
import { goToFolder } from './scripts/navigation/goToFolder.js';
import { showTable } from './scripts/navigation/ls.js';
import { read } from './scripts/basic/read.js';
import { create } from './scripts/basic/create.js';
import { rename } from './scripts/basic/rename.js';
import { copy } from './scripts/basic/copy.js';
import { move } from './scripts/basic/move.js';
import { remove } from './scripts/basic/remove.js';
import { showOs } from './scripts/operating_system/os.js';
import { hash } from './scripts/hash/hash.js';
import { compress } from './scripts/compress/compress.js';
import { decompress } from './scripts/compress/deCompress.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const printCurrentPath = () => {
    console.log(`\nYou are currently in ${process.cwd()}`);
};

const ask = () => {
    rl.question('What you want to do? ', async (answer) => {
        let closed = false;
        const command = answer.split(' ').at(0);
        switch (command) {
            case COMMANDS.EXIT:
                closed = true;
                exit();
                break;
            case COMMANDS.UP:
                up();
                break;
            case COMMANDS.CD:
                goToFolder(answer.slice(3));
                break;
            case COMMANDS.LS:
                showTable();
                break;
            case COMMANDS.CAT:
                await read(answer.slice(4));
                break;
            case COMMANDS.ADD:
                await create(answer.slice(4));
                break;
            case COMMANDS.RN:
                await rename(answer.slice(3));
                break;
            case COMMANDS.CP:
                await copy(answer.slice(3));
                break;
            case COMMANDS.MV:
                await move(answer.slice(3));
                break;
            case COMMANDS.RM:
                await remove(answer.slice(3));
                break;
            case COMMANDS.OS:
                showOs(answer.slice(3));
                break;
            case COMMANDS.HASH:
                hash(answer.slice(5));
                break;
            case COMMANDS.COMPRESS:
                await compress(answer.slice(9));
                break;
            case COMMANDS.DECOMPRESS:
                await decompress(answer.slice(11));
                break;
            default:
                showUnknown(answer);
                break;
        }
        if (!closed) {
            printCurrentPath();
            ask();
        }
    });
};

const getUserName = () => {
    const args = process.argv.slice(2);
    const regexp = /(--)\w+/;
    const username = args.find((arg) => arg.match(regexp));
    const res = username ? username.substring(username.indexOf('=')).slice(1) : 'Unknown';
    return res;
};

const exit = () => {
    printCurrentPath();
    console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
    rl.close();
};

const showUnknown = (invalid) => {
    console.log(`\nInvalid input: ${invalid}`);
};

const start = () => {
    console.log(`Welcome to the File Manager, ${getUserName()}!`);
    rl.on('SIGINT', () => exit());
    rl.on('SIGQUIT', () => exit());
    rl.on('SIGTERM', () => exit());
    ask();
};

const init = () => {
    start();
};

init();
