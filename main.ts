// Golden Koi from a Teacup — make.fun ai-excited-01 entry
// Copies entry.png into the output directory given by
// MAKEFUN_OUTPUT_DIR (defaults to "out").

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
