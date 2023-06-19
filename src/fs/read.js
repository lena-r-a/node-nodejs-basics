import fs from 'fs'

const read = async () => {
    
    fs.access('files/fileToRead.txt', (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.readFile('files/fileToRead.txt', 'utf8', (error, content) => {
                if (error) console.log(error); 
                console.log(content);
             });
        }
    })
};

await read();