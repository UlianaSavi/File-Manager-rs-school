// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('npm run start -- --username=', name => {
//     console.log(`Welcome to the File Manager, ${name}!`);
//     rl.close();
// });

const getUserName = () => {
    const args = process.argv.slice(2);
    const regexp = /(--)\w+/;
    const username = args.find((arg) => arg.match(regexp));
    const res = username.substring(username.indexOf('=')).slice(1);
    return res;
}

const exit = () => {
    console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
    process.exit(0);
}

const start = () => {
    console.log(`Welcome to the File Manager, ${getUserName()}!`);
    exit();
}

const init  = () => {
    start();
}

init();