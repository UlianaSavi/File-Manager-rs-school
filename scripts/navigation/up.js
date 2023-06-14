export const up = () => {
    if(process.cwd() !== 'C:\\') {
        process.chdir('..');
    } else {
        console.log('You are already in root directory!');
        return;
    }
};