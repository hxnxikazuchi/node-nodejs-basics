import { promises as fs } from "fs";

const create = async () => {
  try {
    const filePath = "./files/fresh.txt";
    try {
      await fs.access(filePath);
      throw new Error("FS operation failed: file already exists");
    } catch (error) {
      if (error.code === "ENOENT") {
        await fs.writeFile(filePath, "I am fresh and young");
      } else {
        throw error;
      }
    }
  } catch (err) {
    console.error(err);
  }
};

await create();
