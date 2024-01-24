import fs from "fs";

const list = async () => {
  const isFolderExists = fs.existsSync("./files");
  if (!isFolderExists) {
    throw Error("FS operation failed");
  }
  fs.readdir("./files", { recursive: true }, (err, files) => {
    if (err) {
      console.log(err);
    }
    console.log(`List of files: ${files}`);
  });
};

await list();
