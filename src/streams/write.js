import fs from 'fs'

const write = async () => {
    const fileStream = fs.createWriteStream('files/fileToWrite.txt');

    process.stdin.on('data', (data) => {
        fileStream.write(data)
    })
};

await write();