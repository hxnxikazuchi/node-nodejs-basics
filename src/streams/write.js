import { createWriteStream } from "fs";

const write = async () => {
  try {
    const filePath = "./files/fileToWrite.txt";
    const file = createWriteStream(filePath, "utf8");
    process.stdin.pipe(file);
  } catch (error) {
    console.log(error);
  }
};

await write();
