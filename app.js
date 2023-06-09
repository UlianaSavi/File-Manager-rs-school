import readline from 'readline';

const __dirname = new URL('.', import.meta.url).pathname.slice(1);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = () => {
    rl.question('some question', answer => {
        console.log(`Here is answer: , ${answer}!`);
    });
};

const printCurrentPath = () => {
    console.log(`You are currently in ${__dirname}`);
};

const getUserName = () => {
    const args = process.argv.slice(2);
    const regexp = /(--)\w+/;
    const username = args.find((arg) => arg.match(regexp));
    const res = username.substring(username.indexOf('=')).slice(1);
    return res;
};

const exit = () => {
    console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
    rl.close();
};

const showUnknown = (invalid) => {
    console.log(`Invalid input: ${invalid}`);
    ask();
};

const showError = (err) => {
    console.log(`Operation failed!\nError: ${err}`);
    exit();
};

const start = () => {
    console.log(`Welcome to the File Manager, ${getUserName()}!`);
    printCurrentPath();
    rl.on('SIGINT', () => exit());
    rl.on('SIGQUIT', () => exit());
    rl.on('SIGTERM', () => exit());
    rl.on('line', (input) => {
        console.log(input);
    })
    ask();
};

const init = () => {
    start();
};

init();