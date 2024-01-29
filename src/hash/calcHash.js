import { createHash } from "node:crypto";
import { createReadStream } from "fs";

const calculateHash = async () => {  
  const hash = createHash('sha256');
  const stream = createReadStream('./files/fileToCalculateHashFor.txt');

  stream.on('data', (chunk) => {
      hash.update(chunk);
  });

  stream.on('end', () => {
      const fileHash = hash.digest('hex');
      console.log(fileHash);
  });

  stream.on('error', (err) => {
      console.error('Error reading the file:', err);
  });
};

await calculateHash();
