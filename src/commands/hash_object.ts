import * as zlib from "zlib";
import * as crypto from "crypto";
import * as fs from "fs";
import type { hash_object_args } from "../types";
export function hash_object(args: hash_object_args) {
  const { flag, path } = args;

  if (flag !== "-w" || !path) {
    console.error("usage: hash-object -w <file>");
    return;
  }
  try {
    const data = fs.readFileSync(path);
    const sizeInBytes = data.length;
    const content_head = "blob " + sizeInBytes + "\0";
    const content = content_head + data.toString();
    process.stdout.write(sha1(content));
    const zlib_content = zlib.deflateSync(Buffer.from(content));
    const folder_name = sha1(content).slice(0, 2);
    const file_name = sha1(content).slice(2);
    fs.mkdirSync(`../.git/objects/${folder_name}`, { recursive: true });
    fs.writeFileSync(`../.git/objects/${folder_name}/${file_name}`, zlib_content);
  } catch (err) {
    console.error("Failed to hash object", err);
  }

}



function sha1(data: string | Buffer): string {
  return crypto.createHash("sha1").update(data).digest("hex");
}
