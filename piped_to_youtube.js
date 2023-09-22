const fs = require("fs");
const readline = require("readline");

const fileStream = fs.createReadStream("data.txt");
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  console.log(`https://youtu.be/${line.split("=")[1]}`);
});
