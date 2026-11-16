// Golden Koi from a Teacup — make.fun ai-excited-01 entry.
//
// The entry is a single image: a golden koi leaping out of a blue-and-white
// porcelain teacup, red lanterns and cherry blossoms, at night. This script
// copies that image into the output directory the grader reads.
//
// Run with:  MAKEFUN_OUTPUT_DIR=<dir> node main.ts
// (defaults to "out" when the variable is unset.)

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
