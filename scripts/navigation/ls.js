import fs from 'fs/promises'

export const showTable = async () => {
    try {
        const dir = process.cwd();
        const array = (await fs.readdir(dir)).sort();
        const files = array.filter((item) => item.includes('.'));

        const structDatas = [];

        for (let i = 0; i < array.length; i++) {
            structDatas.push({ NAME: array[i], TYPE: array[i].includes(files[i]) ? 'file' : 'dir' });
        }
        console.log('\n');
        console.table(structDatas);
      } catch (err) {
        throw new Error(err);
      }
}
