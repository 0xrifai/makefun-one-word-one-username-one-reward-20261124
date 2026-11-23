import { mkdirSync, writeFileSync } from "node:fs";

// The entry: my own make.fun username, one word, nothing else.
// Written exactly as-is — 7 bytes, no trailing newline, no padding.
const USERNAME = "0xrifai";
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Create the output directory if it is not there yet.
  mkdirSync("/output", { recursive: true });

  // Write the username with no trailing newline: the file must hold
  // exactly "0xrifai" so the gate sees 7 UTF-8 characters.
  writeFileSync(OUTPUT_PATH, USERNAME, "utf8");
}

main();
