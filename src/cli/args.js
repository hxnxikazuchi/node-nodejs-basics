const parseArgs = () => {
  const props = process.argv.slice(2);
  const keys = props.filter((key) => key.startsWith("--"));
  const values = props.filter((key) => !key.startsWith("--"));
  const output = keys
    .map((item, index) => `${item.replace("--", "")} is ${values[index]}`)
    .join(", ");
  console.log(output);
};

parseArgs();
