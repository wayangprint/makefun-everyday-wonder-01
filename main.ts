// Everyday Wonder, Two Days to Find the Line — one sentence, up to 200 characters,
// on a small moment of wonder in everyday life.
// Deterministic: writes the exact same bytes on every run.
// Node standard library only; no network, no environment secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My shadow beat me to the crosswalk by a full step, as if it had somewhere better to be.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace. The line above is well under 200 characters, and it is written
// with no trailing newline, so the file holds exactly the sentence, nothing else.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
