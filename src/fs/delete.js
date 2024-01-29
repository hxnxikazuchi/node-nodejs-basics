import { promises as fs } from "fs";

const remove = async () => {
  try {
    const fileToRemove = "./files/fileToRemove.txt";
    
    try {
      await fs.access(fileToRemove);
    } catch (error) {
      throw new Error("FS operation failed");
    }

    await fs.unlink(fileToRemove);
  } catch (err) {
    console.error(err);
  }
};

await remove();
