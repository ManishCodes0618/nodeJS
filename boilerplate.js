// import { mkdir } from 'node:fs';
const fs = require("fs");
const folderName = process.argv[2] || "Project";
// console.log(fs);

// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
//ASYNCHRONOUS
// fs.mkdir("./tmp/a/apple", { recursive: true }, (err) => {
//   console.log("in the callback");
//   if (err) throw err;
// });
// console.log("running after the callback");

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/style.css`, "");
  fs.writeFileSync(`${folderName}/script.js`, "");
} catch (err) {
  console.log("Error: ", err);
}
