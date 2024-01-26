import { promises as fs } from "fs";

const list = async () => {
  try {
    const filesPath = "./files";
    try {
      await fs.access(filesPath);
    } catch (error) {
      throw Error("FS operation failed");
    }
    const files = await fs.readdir(filesPath, { recursive: true });
    console.log(`List of files: ${files}`);
  } catch (error) {
    console.error(error);
  }
};

await list();
