import { Transform } from "stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split("").reverse().join(""));
      callback();
    },
  });
  console.log("Please type text to reverse and press enter:");
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
