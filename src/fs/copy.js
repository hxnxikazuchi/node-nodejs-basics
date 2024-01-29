import { promises as fs } from "fs";

const copy = async () => {
  try {
    const sourcePath = "./files";
    const destinationPath = "./files_copy";

    try {
      await fs.access(sourcePath);
    } catch (error) {
      throw new Error("FS operation failed: Source folder does not exist");
    }

    try {
      await fs.access(destinationPath);
      throw new Error("FS operation failed: Destination folder already exists");
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }

    await fs.cp(sourcePath, destinationPath, { recursive: true });
  } catch (err) {
    console.error(err);
  }
};

await copy();
try {
  const wrongFilePath = "./files/wrongFilename.txt";
  const properFilePath = "./files/properFilename.md";
  try {
    await fs.access(wrongFilePath);
  } catch (error) {}
} catch (error) {}