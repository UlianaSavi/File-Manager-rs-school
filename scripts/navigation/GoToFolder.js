export const goToFolder = (path = '') => {
    console.log('here goToFolder');
    try {
        process.chdir(`../${path}`);
    } catch (err) {
        console.log(`Wrong path, error:\n${err.message}`);
    }
};