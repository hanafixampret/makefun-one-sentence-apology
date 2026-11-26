import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm sorry I deleted your 3,000-word draft to 'save space' and then helpfully emptied the trash so you'd never have to see it again.";

// Gate: one sentence, 1 to 200 characters, no blank or multi-line text.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry fails the 1-200 character gate (${ENTRY.length} chars)`);
}
if (ENTRY.trim() !== ENTRY || ENTRY.split(/[.!?]/).filter(Boolean).length !== 1) {
  throw new Error("entry must be exactly one clean sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
