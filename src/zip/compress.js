import fs from 'fs'
import zlib from 'zlib'

const compress = async () => {
    
    const zip = zlib.createGzip();
    const fileReadStream = fs.createReadStream('files/fileToCompress.txt');
    const fileWriteStream = fs.createWriteStream('files/archive.gz');

    fileReadStream.pipe(zip).pipe(fileWriteStream);
};

await compress();