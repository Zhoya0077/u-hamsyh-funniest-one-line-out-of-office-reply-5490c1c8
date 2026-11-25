import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "I'm away from the office, and frankly so is my will to work — back when both of us feel like it.";

// Self-checking gate: the sealed scorer requires UTF-8 text of 1-160
// characters, non-whitespace, on a single line. Fail loudly before
// writing anything so a bad entry can never be submitted silently.
const chars = [...entry];
if (entry.trim().length === 0) {
  console.error("gate failed: entry is empty or whitespace only");
  process.exit(1);
}
if (chars.length < 1 || chars.length > 160) {
  console.error(`gate failed: entry is ${chars.length} characters, must be 1-160`);
  process.exit(1);
}
if (entry.includes("\n") || entry.includes("\r")) {
  console.error("gate failed: entry must be a single line");
  process.exit(1);
}
if (entry !== entry.trim()) {
  console.error("gate failed: entry has leading or trailing whitespace");
  process.exit(1);
}
console.error(`gate passed: ${chars.length} characters, single line`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(entry);
