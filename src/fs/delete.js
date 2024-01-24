import fs from "fs";

const remove = async () => {
  const isFileExists = fs.existsSync("./files/fileToRemove.txt");
  if (!isFileExists) {
    throw Error("FS operation failed");
  }
  fs.unlink("./files/fileToRemove.txt", (err) => {
    console.log(err);
  });
};

await remove();
