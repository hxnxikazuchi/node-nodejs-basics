import fs from "fs";

const read = async () => {
  const isFileExists = fs.existsSync("./files/fileToRead.txt");
  if (!isFileExists) {
    throw Error("FS operation failed");
  }
  fs.readFile("./files/fileToRead.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
};

await read();
