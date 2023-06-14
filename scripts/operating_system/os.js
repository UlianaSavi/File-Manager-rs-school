import os from 'os';

const COMMANDS = {
    EOL: '--EOL',
    CPUS: '--cpus',
    HOMEDIR: '--homedir',
    USERNAME: '--username',
    ARCHITECTURE: '--architecture'
};

const showEol = () => {
    console.log('EOL: ', JSON.stringify(os.EOL));
};

const showCpus = () => {
    const cpusData = os.cpus();
    const data = [];
    const emptyInLine = 9;
    cpusData.map((core) => {
        data.push({MODEL: core.model.slice(0, core.model.length - emptyInLine), RATE: `${core.speed / 1000} GHz`})
    })
    console.log(`Cpus length: ${cpusData.length}`);
    console.table(data);
};

const showHomedir = () => {
    console.log('homedir: ', os.homedir());
};

const showUsername = () => {
    const userInfo = os.userInfo();
    console.log('username: ', userInfo.username);
};

const showArchitecture = () => {
    console.log('arch: ', process.arch);
};

export const showOs = (command = '') => {
    switch (command) {
        case COMMANDS.EOL:
            showEol();
            break;
        case COMMANDS.CPUS:
            showCpus();
            break;
        case COMMANDS.HOMEDIR:
            showHomedir();
            break;
        case COMMANDS.USERNAME:
            showUsername();
            break;
        case COMMANDS.ARCHITECTURE:
            showArchitecture();
            break;
    }
};