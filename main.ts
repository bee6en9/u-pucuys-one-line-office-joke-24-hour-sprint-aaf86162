// One-Line Office Joke: 24-Hour Sprint
// Deterministic entry: writes a single chosen joke to /output/entry.txt.
// The joke was selected from 12 candidates using the creative-director
// phases (insight -> ideation -> specificity test -> refine).
// Winner: a concrete office scene (the office plant) treated with full
// corporate seriousness by HR — absurd escalation, clear on first read.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "When the office plant died, HR sent a condolence email and scheduled a meeting to interview its replacement.";

// Gate guard: the bounty requires 1-200 characters, not whitespace only.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
