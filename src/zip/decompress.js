import fs from 'fs'
import zlib from 'zlib'

const decompress = async () => {
    const unzip = zlib.createUnzip();
    const fileReadStream = fs.createReadStream('files/archive.gz');
    const fileWriteStream = fs.createWriteStream('files/fileToCompress.txt');

    fileReadStream.pipe(unzip).pipe(fileWriteStream);
};

await decompress();