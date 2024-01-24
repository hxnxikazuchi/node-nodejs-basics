import fs from "fs";

const copy = async () => {
  const isFileFolderExists = fs.existsSync("./files");
  const isCopyFolderExists = fs.existsSync("./files_copy");
  if (!isFileFolderExists || isCopyFolderExists) {
    throw Error("FS operation failed");
  }
  fs.cp("./files", "./files_copy", { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

await copy();
