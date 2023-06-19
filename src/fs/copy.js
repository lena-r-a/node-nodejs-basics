import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const copy = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const copyDirPath = path.join(__dirname, 'files-copy');
    const myDirPath = path.join(__dirname, 'files');

    fs.access(myDirPath, (err) => {
            if (err) {
                throw new Error('FS operation failed');
            } else {
                fs.stat(copyDirPath, function (err) {
                    if (err) {
                        fs.mkdir(copyDirPath, { recursive: true }, () => {});
                        fs.readdir(copyDirPath, { withFileTypes: true }, (error, files) => {
                            for (let i = 0; i < files.length; i++) {
                                fs.unlink(path.join(copyDirPath, files[i].name), ()=>{});
                            }
                        });
                        fs.readdir(myDirPath, { withFileTypes: true }, (err, data) => {
                            for (let i = 0; i < data.length; i++) {
                                if (data[i].isFile()) {
                                    let src = path.join(myDirPath, data[i].name);
                                    let dest = path.join(copyDirPath, data[i].name);
                                    fs.copyFile(src, dest, err => { if (err) console.log(err); });
                                }
                            }
                        });
                    } else {
                        throw new Error('FS operation failed');
                    }
                });
            }
        });

};

await copy();
