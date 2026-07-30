import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredPages = [
  "src/pages/index.astro",
  "src/pages/about.astro",
  "src/pages/research.astro",
  "src/pages/projects.astro",
  "src/pages/publications.astro",
  "src/pages/experience.astro",
  "src/pages/education.astro",
  "src/pages/service.astro",
  "src/pages/skills.astro",
  "src/pages/resume.astro",
  "src/pages/contact.astro"
];

const failures = [];

for (const page of requiredPages) {
  if (!existsSync(join(root, page))) {
    failures.push(`Missing required page: ${page}`);
  }
}

if (existsSync(join(root, "public/documents/Christianah-Jemiyo-Resume.pdf"))) {
  failures.push("Public résumé PDF exists before explicit approval.");
}

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stats = statSync(path);
    if (stats.isDirectory()) {
      if (!["node_modules", "dist", ".git", ".astro"].includes(entry)) {
        results.push(...walk(path));
      }
    } else {
      results.push(path);
    }
  }
  return results;
}

const sourceText = walk(root)
  .filter((file) => /\.(astro|ts|mjs|js|json|md|yml|yaml|css|svg|txt)$/.test(file))
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");

const forbiddenFragments = ["mail" + "to:", "te" + "l:", "<" + "form", "calendly" + ".com"];
for (const fragment of forbiddenFragments) {
  if (sourceText.toLowerCase().includes(fragment)) {
    failures.push(`Forbidden public-contact fragment found: ${fragment}`);
  }
}

const expectedExternalLinks = [
  "https://github.com/christianahjemiyo",
  "https://scholar.google.com/citations?user=UhJLPxUAAAAJ&hl=en",
  "https://orcid.org/0000-0002-3113-3928"
];

for (const link of expectedExternalLinks) {
  if (!sourceText.includes(link)) {
    failures.push(`Missing expected public professional link: ${link}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Content checks passed.");
