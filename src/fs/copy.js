const copy = async () => {
    // Write your code here 
};

await copy();
try {
  const wrongFilePath = "./files/wrongFilename.txt";
  const properFilePath = "./files/properFilename.md";
  try {
    await fs.access(wrongFilePath);
  } catch (error) {}
} catch (error) {}