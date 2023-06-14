export const goToFolder = (path = '') => {
    try {
        process.chdir(path);
    } catch (err) {
        console.log(`Wrong path, error:\n${err.message}`);
    }
};