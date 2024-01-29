import { createReadStream } from "fs";

const read = async () => {
  try {
    const filePath = "./files/fileToRead.txt";
    const stream = createReadStream(filePath, "utf8");
    stream.on("data", (chunk) => process.stdout.write(chunk));
    stream.on("error", (err) => process.stdout.write(err));
  } catch (error) {}
};

await read();
