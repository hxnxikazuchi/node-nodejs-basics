import { promises as fs } from "fs";

const read = async () => {
  try {
    const filePath = "./files/fileToRead.txt";

    try {
      await fs.access(filePath);
    } catch (error) {
      throw Error("FS operation failed");
    }

    const data = await fs.readFile(filePath, "utf8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

await read();
