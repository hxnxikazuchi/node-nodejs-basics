import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
  try {
    const gZip = createGzip();
    const file = createReadStream("./files/fileToCompress.txt");
    const dest = createWriteStream("./files/archive.gz");

    await pipeline(file, gZip, dest);
  } catch (error) {
    console.error(error);
  }
};

await compress();
