import * as zlib from "zlib";
import * as fs from "fs";
import type { ls_tree_args } from "../types";


export function ls_tree(args: ls_tree_args) {
  const { flag, hash } = args;

  if (flag !== "--name-only" || !hash) {
    console.error("usage: ls-tree --name-only <hash>");
    return;
  }

  const folder_name = hash.slice(0, 2);
  const file_name = hash.slice(2)
  const path = `./.git/objects/${folder_name}/${file_name}`

  const data: Buffer = fs.readFileSync(path);
  const output = zlib.inflateSync(data);
  console.log(output, typeof output);
}
