import fs from "fs";

const rename = async () => {
  const isWrongFileExists = fs.existsSync("./files/wrongFilename.txt");
  const isMdFileExists = fs.existsSync("./files/properFilename.md");
  if (!isWrongFileExists || isMdFileExists) {
    throw Error("FS operation failed");
  }
  fs.rename("./files/wrongFilename.txt", "./files/properFilename.md", (err) => {
    console.log(err);
  });
};

await rename();
