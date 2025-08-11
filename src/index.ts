import type { hash_object_args } from "./types.ts";
import { hash_object } from "./commands/hash_object.js"
import * as fs from "fs"

import { init } from "./commands/init.js"
import { cat_file } from "./commands/cat_file.js"
import type { cat_file_args } from "./types"
import type { ls_tree_args } from "./types";
import { ls_tree } from "./commands/ls_tree.js";



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

    case "ls-tree":
      const ls_tree_args: ls_tree_args = {
        flag: rest[0],
        hash: rest[1]
      }
      ls_tree(ls_tree_args);
      break;
    default: console.error("unkown command");
  }
}
main();
