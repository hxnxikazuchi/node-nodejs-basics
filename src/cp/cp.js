import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const child = fork("./files/script.js", args);
  child.on("message", (message) => {
    console.log("Result: ", message);
  });
};

spawnChildProcess(['arg1', 'arg2']);
