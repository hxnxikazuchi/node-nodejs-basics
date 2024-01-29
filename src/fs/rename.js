import { promises as fs } from "fs";

const rename = async () => {
  try {
    const sourcePath = "./files/wrongFilename.txt";
    const destinationPath = "./files/properFilename.md";
    
    try {
      await fs.access(sourcePath);
    } catch (error) {
      throw new Error("Source file does not exist");
    }

    try {
      await fs.access(destinationPath);
      throw new Error("Destination file already exists");
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }

    await fs.rename(sourcePath, destinationPath);
    console.log("File renamed successfully");
  } catch (error) {
    console.error("FS operation failed:", error.message);
  }
};

await rename();
