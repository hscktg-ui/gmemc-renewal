import fs from "fs";

const strip = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const home = fs.readFileSync("research/home.html", "utf8");
const company = fs.readFileSync("research/company.html", "utf8");

const frHome = [...home.matchAll(/class="[^"]*fr-view[^"]*"[^>]*>([\s\S]*?)<\/div>/g)]
  .map((m) => strip(m[1]))
  .filter((t) => t.length > 20);
const frCompany = [...company.matchAll(/class="[^"]*fr-view[^"]*"[^>]*>([\s\S]*?)<\/div>/g)]
  .map((m) => strip(m[1]))
  .filter((t) => t.length > 20);

const bizImgs = [
  ...new Set(
    [...company.matchAll(/background-image:\s*url\((https:\/\/cdn\.imweb\.me\/thumbnail\/[^)]+)\)/g)].map(
      (m) => m[1],
    ),
  ),
];

const out = {
  homeTexts: frHome,
  companyTexts: frCompany,
  drive: [...company.matchAll(/https:\/\/drive\.google\.com[^"'\s]+/g)].map((m) => m[0]),
  bizImgs: bizImgs.slice(0, 30),
};

fs.writeFileSync("research/extracted.json", JSON.stringify(out, null, 2), "utf8");
console.log(JSON.stringify(out, null, 2));
