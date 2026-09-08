const franc = require("franc");
const langs = require("langs");
const color = require("colors");
const input = process.argv[2];
const c1 = franc(input);
if (c1 === "und") {
  console.log("Sorry, we could not figure out the language".red);
} else {
  const language = langs.where("3", c1).name;
  console.log(`OUR BEST GUESS IS: ${language}`.green);
}
