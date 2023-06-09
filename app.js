import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const init = () => {
    start(); 
}

const start = () => {
    // rl.question('npm run start -- --username=', name => {
    //     console.log(`Welcome to the File Manager, ${name}!`);
    //     rl.close();
    // }); 
    const args = process.argv.slice(2);
    const regexp = /(--)\w+/;
    const username = args.find((arg) => arg.match(regexp));
    const res = username.substring(username.indexOf('=')).slice(1);
    console.log(`Welcome to the File Manager, ${res}!`);
    process.exit();
}

init();

