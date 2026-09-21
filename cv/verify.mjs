import { chromium } from "playwright-core";
import path from "node:path";
const CHROME = path.join(process.env.LOCALAPPDATA, "ms-playwright", "chromium-1223", "chrome-win64", "chrome.exe");
const file = "file:///" + process.argv[2].split(path.sep).join("/");
const b = await chromium.launch({ executablePath: CHROME });
const p = await (await b.newContext()).newPage();
await p.goto(file);
const info = await p.evaluate(() => ({
  chars: document.body.innerText.length,
  diacritics: /Muminović|Džemal|Mješovita/.test(document.body.innerText),
  suspicious: /object Object|pending|undefined|NaN|confirmed/.test(document.body.innerText),
  headings: [...document.querySelectorAll("h2")].map((h) => h.textContent.trim()),
  links: [...document.querySelectorAll("a")].map((a) => a.href),
}));
console.log("chars:", info.chars, "| diacritics ok:", info.diacritics, "| suspicious tokens:", info.suspicious ? "FOUND" : "none");
console.log("sections:", info.headings.join(" | "));
console.log("links:", info.links.length, "→ project links:", info.links.filter((l) => l.includes("/projects/")).length);
await b.close();
