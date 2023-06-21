import fs from 'fs'
import {Transform} from 'stream';

const transform = async () => {

    const readeble = process.stdin;
    const writeble = process.stdout;
    
    const transform = new Transform({
        transform(chunc, enc, cb) {
            const reversed = chunc.toString().trim().split('').reverse().join('');
            cb(null, reversed + '\n')
        }
    })
    readeble.pipe(transform).pipe(writeble);
};

await transform();