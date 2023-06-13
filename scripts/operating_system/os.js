const COMMANDS = {
    EOL: '--EOL',
    CPUS: '--cpus',
    HOMEDIR: '--homedir',
    USERNAME: '--username',
    ARCHITECTURE: '--architecture'
};

const showEol = () => {
    console.log(123);
};

const showCpus = () => {
    console.log(123);
};

const showHomedir = () => {
    console.log(123);
};

const showUsername = () => {
    console.log(123);
};

const showArchitecture = () => {
    console.log(123);
};

export const os = (command = '') => {
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
