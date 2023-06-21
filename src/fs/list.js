import fs from 'fs'

const list = async () => {
    
    fs.access('files-copy', (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.readdir('files-copy', (error, files) => {
                if (error) console.log(error)
                else {
                    console.log(files)
                }
            })
        }
    })
};

await list();