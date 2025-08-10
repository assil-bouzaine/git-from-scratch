import * as fs from "fs";
import * as zlib from "zlib";
import type { cat_file_args } from "../types";
export function cat_file(args: cat_file_args) {
  const { flag, hash } = args;

  if (flag !== "-p" || !hash) {
    console.error("usage: cat-file -p <hash>");
    return;
  }

  const folder_name = hash.slice(0, 2);
  const file_name = hash.slice(2)
  const path = `../.git/objects/${folder_name}/${file_name}`



  try {
    const data: Buffer = fs.readFileSync(path);
    const output: Buffer = zlib.inflateSync(data);
    const file_content = output.toString().slice(output.toString().indexOf('\0') + 1);
    process.stdout.write(file_content);
  } catch (err) {
    console.error("Failed to read object", err);
  }
}

