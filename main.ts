// The Dog Ate My Homework: Funniest Excuse — make.fun entry
// Writes one line (the excuse a dog gives after being caught eating the
// homework) to /output/entry.txt. Fully deterministic: no network, no
// randomness, the same text on every run.
//
// The angle: the dog is not sorry at all — it was enforcing the law. In dog
// law, anything left on the floor belongs to the dog, so the essay was
// trespassing on its rug and got claimed. The joke grows out of a dog's own
// condition (floor = mine, confident innocence) and the punch lands in the
// last few words. No cat, no taste of paper, no "good boy" — a fresh turn.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I didn't eat your homework — I upheld the law. In dog law, anything left on the floor is mine, and your essay was trespassing on my rug.";

const MAX_CHARS = 200;

function validate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
