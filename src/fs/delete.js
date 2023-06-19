import fs from 'fs'

const remove = async () => {

    fs.access('files/fileToRemove.txt', (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.unlink('files/fileToRemove.txt', (error) => {
                if (error) {
                    console.log(error)
                }
                console.log("Deleted.");
            });
        }
    })
};

await remove();