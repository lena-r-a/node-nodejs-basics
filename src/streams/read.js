import fs from 'fs'

const read = async () => {

    const fileStream = fs.createReadStream('files/fileToRead.txt');

    fileStream.on('data', (chunk) => {
        process.stdout.write(chunk);
        process.exit();
    })
    

};

await read();