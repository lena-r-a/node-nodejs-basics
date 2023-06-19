import fs from 'fs'

const create = async () => {
    const path = 'files/fresh.txt';

    fs.access(path, fs.constants.F_OK, (err) => {

        if (err) {
            fs.writeFile('files/fresh.txt', 'I am fresh and young', function (err) {
                if (err) throw err;
                console.log('File is created successfully.');
            });

        }
        else {
            throw new Error('FS operation failed');
        }
    });


};

await create();