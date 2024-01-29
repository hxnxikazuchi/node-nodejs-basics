import { Worker } from "node:worker_threads";
import os from "os";

const performCalculations = async () => {
  const numCores = os.cpus().length;
  let promises = [];

  for (let i = 0; i < numCores; i++) {
    promises.push(
      new Promise((resolve) => {
        const worker = new Worker("./worker.js");

        worker.postMessage(10 + i);
        worker.on("message", (result) => {
          resolve({ status: "resolved", data: result });
        });
        worker.on("error", (err) => {
          console.error(`Worker error: ${err}`);
          resolve({ status: "error", data: null });
        });
      })
    );
  }

  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();
