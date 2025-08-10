import type { hash_object_args } from "./types.ts";
import { hash_object } from "./commands/hash_object.js"
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
    case "hash-object":
      const hash_object_args: hash_object_args = {
        flag: rest[0],
        path: rest[1]
      }
      hash_object(hash_object_args);
      break;
    default: console.error("unkown command");
  }
}
main();
