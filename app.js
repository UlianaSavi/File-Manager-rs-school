import readline from 'readline';
import { up } from './scripts/navigation/up.js';
import { goToFolder } from './scripts/navigation/goToFolder.js';
import { showTable } from './scripts/navigation/ls.js';
import { read } from './scripts/basic/read.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const printCurrentPath = () => {
    console.log(`You are currently in ${process.cwd()}`);
};

const ask = () => {
    rl.question('What you want to do? ', async answer => {
        if (answer === 'up') {
            up();
        }
        if (answer.includes('cd ')) {
            goToFolder(answer.slice(3));
        }
        if (answer === 'ls') {
            showTable();
        }
        if (answer.includes('cat ')) {
            await read(answer.slice(4));
        } else {
            showUnknown(answer);
        }
        printCurrentPath();
        ask();
    });
};

const getUserName = () => {
    const args = process.argv.slice(2);
    const regexp = /(--)\w+/;
    const username = args.find((arg) => arg.match(regexp));
    const res = username.substring(username.indexOf('=')).slice(1);
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

const showError = (err) => {
    console.log(`\nOperation failed!\nError: ${err}`);
    exit();
};

const start = () => {
    console.log(`Welcome to the File Manager, ${getUserName()}!`);
    rl.on('SIGINT', () => exit());
    rl.on('SIGQUIT', () => exit());
    rl.on('SIGTERM', () => exit());
    rl.on('line', (input) => {
        console.log(input);
    });
    ask();
};

const init = () => {
    start();
};

init();