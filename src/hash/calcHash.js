import { createHash } from "crypto"
import fs from 'fs/promises'

const calculateHash = async () => {
   const read =  await fs.readFile('files/fileToCalculateHashFor.txt');
   const hash = createHash("sha256").update(read).digest('hex');

   console.log(hash);
};

await calculateHash();