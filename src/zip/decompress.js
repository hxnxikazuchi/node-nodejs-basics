import { createGunzip } from "zlib";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  try {
    const unzip = createGunzip();
    const zipFile = createReadStream("./files/archive.gz");
    const unzippedFile = createWriteStream("./files/fileToCompress.txt");
    
    await pipeline(zipFile, unzip, unzippedFile);
  } catch (err) {
    console.error(err);
  }
};

await decompress();
