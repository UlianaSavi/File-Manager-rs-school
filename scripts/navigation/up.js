const __rootDir = 'File-Manager-rs-school';

export const up = () => {
    if(process.cwd().includes(__rootDir + '\\')) {
        process.chdir('..');
    } else {
        console.log('You are already in root directory!');
        return;
    }
}
