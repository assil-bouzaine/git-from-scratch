import * as fs from "fs"

import { init } from "./commands/init.js"
import { cat_file } from "./commands/cat_file.js"
import type { cat_file_args } from "./types"


const args = process.argv.slice(2);

async function main() {
  const [command, ...rest] = args;
  switch (command) {
    case "init": init(); break;
    case "cat-file":
      const cat_file_args: cat_file_args = {
        flag: rest[0],
        hash: rest[1]
      }
      cat_file(cat_file_args);
      break;

    default: console.error("unkown command");
  }
}
main();
