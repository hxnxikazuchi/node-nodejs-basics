import fs from "fs";

const create = async () => {
  const isFileExists = fs.existsSync("./files/fresh.txt");
  if (isFileExists) {
    throw Error("FS operation failed");
  }
  fs.writeFile("./files/fresh.txt", "I am fresh and young", (err) => {
    if (err) {
      console.log(err);
    }
  });
};

await create();
