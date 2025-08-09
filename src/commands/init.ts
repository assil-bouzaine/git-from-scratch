import * as fs from "fs";

export function init() {
  try {

    fs.mkdirSync("../.git");
    fs.mkdirSync("../.git/refs");
    fs.mkdirSync("../.git/objects");
    fs.writeFileSync("../.git/HEAD", "ref: refs/head/master\n", { encoding: "utf8" });
    console.log("initialized git directory!");
  } catch (err) {
    console.error("failed initializing .git folder", err);
  }
}
