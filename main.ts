import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const moduleDir = dirname(fileURLToPath(import.meta.url));
const configured = process.env["MAKEFUN_OUTPUT_DIR"] ?? "/output";
const outputDir = isAbsolute(configured) ? configured : resolve(moduleDir, configured);
const entryPath = join(outputDir, "entry.txt");
const emoji = "\u{1FAC2}";

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, `${emoji}\n`, "utf8");
