const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.layout = "LAYOUT_16x9"; // 10 x 5.625
p.author = "N. Sakthivel & Co.";
p.title = "N. Sakthivel & Co. — Company Profile";

// ---- Palette ----
const NAVY = "0A1626", NAVY2 = "12233B", GOLD = "E9A23B", GOLDD = "CF8420";
const CREAM = "FAF8F5", WHITE = "FFFFFF", SLATE = "2C3A4B", SLATEL = "5A6B7E";
const HF = "Georgia", BF = "Calibri";
const IMG = (n) => "images/" + n;
const sh = () => ({ type: "outer", color: "000000", blur: 7, offset: 3, angle: 135, opacity: 0.22 });

function logo(s, x, y, sz = 1.0) {
  s.addShape(p.shapes.ROUNDED_RECTANGLE, { x, y, w: sz, h: sz, fill: { color: WHITE }, rectRadius: 0.1, shadow: sh() });
  s.addImage({ path: IMG("logo.png"), x: x + 0.08, y: y + 0.08, w: sz - 0.16, h: sz - 0.16, sizing: { type: "contain", w: sz - 0.16, h: sz - 0.16 } });
}
function eyebrow(s, t, x, y, color = GOLDD) {
  s.addText(t.toUpperCase(), { x, y, w: 6, h: 0.3, fontFace: BF, fontSize: 11, bold: true, color, charSpacing: 3, margin: 0 });
}
function title(s, t, x, y, color = NAVY, w = 8.0) {
  s.addText(t, { x, y, w, h: 0.7, fontFace: HF, fontSize: 30, bold: true, color, margin: 0 });
}
function footer(s, dark) {
  s.addText("N. Sakthivel & Co.  |  Building Contractor  |  Erode, Tamil Nadu", { x: 0.5, y: 5.25, w: 7, h: 0.3, fontFace: BF, fontSize: 8.5, color: dark ? "6E7E92" : SLATEL, margin: 0 });
  s.addText("nsakthivelandco.in", { x: 7.5, y: 5.25, w: 2, h: 0.3, fontFace: BF, fontSize: 8.5, color: dark ? GOLD : GOLDD, align: "right", margin: 0 });
}
function card(s, x, y, w, h, img, label) {
  s.addShape(p.shapes.RECTANGLE, { x, y, w, h, fill: { color: NAVY }, shadow: sh() });
  s.addImage({ path: IMG(img), x, y, w, h: h - 0.42, sizing: { type: "cover", w, h: h - 0.42 } });
  s.addShape(p.shapes.RECTANGLE, { x, y: y + h - 0.42, w, h: 0.42, fill: { color: GOLDD } });
  s.addText(label, { x: x + 0.06, y: y + h - 0.42, w: w - 0.12, h: 0.42, fontFace: BF, fontSize: 9.5, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0 });
}
// project card with two-line caption (title + subtitle)
function pcard(s, x, y, w, h, img, name, sub) {
  const ch = 0.72;
  s.addShape(p.shapes.RECTANGLE, { x, y, w, h, fill: { color: NAVY }, shadow: sh() });
  s.addImage({ path: IMG(img), x, y, w, h: h - ch, sizing: { type: "cover", w, h: h - ch } });
  s.addShape(p.shapes.RECTANGLE, { x, y: y + h - ch, w, h: ch, fill: { color: NAVY2 } });
  s.addShape(p.shapes.RECTANGLE, { x, y: y + h - ch, w, h: 0.07, fill: { color: GOLD } });
  s.addText([
    { text: name, options: { fontSize: 11, bold: true, color: WHITE, breakLine: true } },
    { text: sub, options: { fontSize: 9, color: "C7D2DE" } },
  ], { x: x + 0.12, y: y + h - ch + 0.08, w: w - 0.24, h: ch - 0.12, fontFace: BF, valign: "top", margin: 0, lineSpacingMultiple: 0.95 });
}

// ============ 1 — COVER ============
(() => {
  const s = p.addSlide(); s.background = { color: NAVY };
  s.addImage({ path: IMG("about-construction.jpg"), x: 6.5, y: 0, w: 3.5, h: 5.625, sizing: { type: "cover", w: 3.5, h: 5.625 } });
  s.addShape(p.shapes.RECTANGLE, { x: 6.5, y: 0, w: 3.5, h: 5.625, fill: { color: NAVY, transparency: 35 } });
  s.addShape(p.shapes.RECTANGLE, { x: 6.42, y: 0, w: 0.08, h: 5.625, fill: { color: GOLD } });
  logo(s, 0.55, 0.5, 1.25);
  eyebrow(s, "Company Profile", 0.6, 2.0, GOLD);
  s.addText([{ text: "Building Excellence,", options: { breakLine: true, color: WHITE } }, { text: "Brick by Brick.", options: { color: GOLD } }],
    { x: 0.55, y: 2.3, w: 6, h: 1.5, fontFace: HF, fontSize: 38, bold: true, lineSpacingMultiple: 0.95, margin: 0 });
  s.addText("Quality civil construction in Erode, Tamil Nadu — since 1996.", { x: 0.6, y: 3.95, w: 5.6, h: 0.5, fontFace: BF, italic: true, fontSize: 13, color: "C9D3DF", margin: 0 });
  s.addText("N. SAKTHIVEL & CO.  ·  BUILDING CONTRACTOR", { x: 0.6, y: 4.95, w: 5.7, h: 0.3, fontFace: BF, fontSize: 10, bold: true, color: GOLD, charSpacing: 1, margin: 0 });
})();

// ============ 2 — ABOUT / WELCOME ============
(() => {
  const s = p.addSlide(); s.background = { color: CREAM };
  logo(s, 8.6, 0.45, 1.0); eyebrow(s, "Welcome", 0.55, 0.55); title(s, "About Our Company", 0.5, 0.85);
  s.addText("Over the years, N. Sakthivel & Co. has made its presence felt in the construction industry — delivering good-quality work, meeting client requirements as committed, and completing projects within schedule. A superior workforce, rich experience, technical updation and quality-assurance teams combine to ensure every brick we lay is worthy of the N. Sakthivel & Co. name.",
    { x: 0.55, y: 1.8, w: 5.5, h: 2.2, fontFace: BF, fontSize: 14, color: SLATE, valign: "top", margin: 0, paraSpaceAfter: 6 });
  const facts = [["1996", "Established in Erode, TN"], ["30+", "Years of experience"], ["8+", "Sectors served"], ["100%", "On-time delivery"]];
  facts.forEach((f, i) => {
    const y = 4.05 + Math.floor(i / 2) * 0.62, x = 0.55 + (i % 2) * 2.75;
    s.addText(f[0], { x, y, w: 1.0, h: 0.55, fontFace: HF, fontSize: 22, bold: true, color: GOLDD, margin: 0 });
    s.addText(f[1], { x: x + 1.0, y: y + 0.06, w: 1.7, h: 0.5, fontFace: BF, fontSize: 10.5, color: SLATE, valign: "middle", margin: 0 });
  });
  s.addShape(p.shapes.RECTANGLE, { x: 6.4, y: 1.5, w: 3.1, h: 3.4, fill: { color: NAVY }, shadow: sh() });
  s.addImage({ path: IMG("about-construction.jpg"), x: 6.4, y: 1.5, w: 3.1, h: 3.4, sizing: { type: "cover", w: 3.1, h: 3.4 } });
  footer(s, false);
})();

// ============ 3 — OUR STORY ============
(() => {
  const s = p.addSlide(); s.background = { color: NAVY };
  logo(s, 8.6, 0.45, 1.0); eyebrow(s, "Our Journey", 0.55, 0.55, GOLD); title(s, "Our Story", 0.5, 0.85, WHITE);
  s.addImage({ path: IMG("about-construction.jpg"), x: 0.55, y: 1.85, w: 2.7, h: 3.1, sizing: { type: "cover", w: 2.7, h: 3.1 } });
  s.addShape(p.shapes.RECTANGLE, { x: 0.55, y: 1.85, w: 0.09, h: 3.1, fill: { color: GOLD } });
  s.addText([
    { text: "A disciplined, quality-conscious firm", options: { bold: true, color: GOLD, fontSize: 16, breakLine: true, paraSpaceAfter: 8 } },
    { text: "M/s. N. Sakthivel & Co. has delivered consistent quality since its inception, founded by Mr. N. Sakthivel, who began executing civil works in his own name after gaining experience at U.R. Thangamuthu & Co.", options: { color: "D6DEE8", fontSize: 13.5, breakLine: true, paraSpaceAfter: 8 } },
    { text: "U.R. Thangamuthu & Co. was itself founded by a retired partner of URC Constructions — a lineage of subject knowledge and discipline that still guides how we build today across medical colleges, schools, police housing, public works and industry.", options: { color: "D6DEE8", fontSize: 13.5, breakLine: true } },
  ], { x: 3.6, y: 1.85, w: 5.9, h: 3.2, fontFace: BF, margin: 0, valign: "top" });
  footer(s, true);
})();

// ============ 4 — LEADERSHIP / TEAM ============
(() => {
  const s = p.addSlide(); s.background = { color: CREAM };
  logo(s, 8.6, 0.45, 1.0); eyebrow(s, "Leadership", 0.55, 0.55); title(s, "Meet Our Team", 0.5, 0.85);
  const team = [
    ["sakthivel.jpeg", "Shri N. Sakthivel", "Founder & Managing Partner", "Over 37 years of experience in civil construction and WRO. Directs and manages operations firm-wide, driving the company with strong forward thinking, and has overseen and mentored many successful projects."],
    ["sabaris.jpeg", "Shri S. Sabaris", "Managing Partner", "Responsible for business and staff management. Involved with clients and the construction process from tender to completion, focused on growing the firm's skill, knowledge and day-to-day delivery."],
  ];
  const cw = 4.35, x0 = 0.55, y = 1.7, ch = 3.35;
  team.forEach((m, i) => {
    const x = x0 + i * (cw + 0.25);
    s.addShape(p.shapes.RECTANGLE, { x, y, w: cw, h: ch, fill: { color: WHITE }, line: { color: "E5DED3", width: 1 }, shadow: sh() });
    s.addImage({ path: IMG(m[0]), x: x + 0.25, y: y + 0.3, w: 1.35, h: 1.65, sizing: { type: "cover", w: 1.35, h: 1.65 } });
    s.addShape(p.shapes.RECTANGLE, { x: x + 0.25, y: y + 0.3, w: 0.08, h: 1.65, fill: { color: GOLD } });
    s.addText([
      { text: m[1], options: { fontSize: 16, bold: true, color: NAVY, breakLine: true, fontFace: HF } },
      { text: m[2].toUpperCase(), options: { fontSize: 9.5, bold: true, color: GOLDD, charSpacing: 1.5, fontFace: BF } },
    ], { x: x + 1.8, y: y + 0.35, w: cw - 2.0, h: 1.4, valign: "top", margin: 0, paraSpaceAfter: 5 });
    s.addText(m[3], { x: x + 0.28, y: y + 2.15, w: cw - 0.56, h: 1.05, fontFace: BF, fontSize: 11.5, color: SLATE, valign: "top", margin: 0 });
  });
  footer(s, false);
})();

// ============ 5 — VISION & MISSION ============
(() => {
  const s = p.addSlide(); s.background = { color: NAVY };
  logo(s, 8.6, 0.45, 1.0); eyebrow(s, "What Drives Us", 0.55, 0.55, GOLD); title(s, "Vision & Mission", 0.5, 0.85, WHITE);
  // Vision
  s.addShape(p.shapes.RECTANGLE, { x: 0.55, y: 1.8, w: 4.4, h: 2.95, fill: { color: NAVY2 }, shadow: sh() });
  s.addShape(p.shapes.RECTANGLE, { x: 0.55, y: 1.8, w: 4.4, h: 0.1, fill: { color: GOLD } });
  s.addText("OUR VISION", { x: 0.8, y: 2.05, w: 4, h: 0.35, fontFace: BF, fontSize: 13, bold: true, color: GOLD, charSpacing: 2, margin: 0 });
  s.addText("To fulfil our clients' dreams by providing construction services and nurturing strong, long-lasting client relationships — fair and true to our clients and employees, working in an ethical and efficient manner to provide a better quality of life.",
    { x: 0.8, y: 2.45, w: 3.95, h: 2.15, fontFace: BF, fontSize: 13, color: "E1E8F0", valign: "top", margin: 0 });
  // Mission
  s.addShape(p.shapes.RECTANGLE, { x: 5.15, y: 1.8, w: 4.35, h: 2.95, fill: { color: NAVY2 }, shadow: sh() });
  s.addShape(p.shapes.RECTANGLE, { x: 5.15, y: 1.8, w: 4.35, h: 0.1, fill: { color: GOLD } });
  s.addText("OUR MISSION", { x: 5.4, y: 2.05, w: 4, h: 0.35, fontFace: BF, fontSize: 13, bold: true, color: GOLD, charSpacing: 2, margin: 0 });
  s.addText([
    { text: "Known for quality, reliability, timely completion and safe working environments.", options: { bullet: { code: "2022", indent: 16 }, breakLine: true, paraSpaceAfter: 7 } },
    { text: "Maximise stakeholder value through continuous adoption of latest technologies and management practices.", options: { bullet: { code: "2022", indent: 16 }, breakLine: true, paraSpaceAfter: 7 } },
    { text: "A responsible corporate body, committed to enhancing the community's quality of life.", options: { bullet: { code: "2022", indent: 16 } } },
  ], { x: 5.4, y: 2.45, w: 3.9, h: 2.15, fontFace: BF, fontSize: 12, color: "E1E8F0", valign: "top", margin: 0 });
  s.addText("Quality  ·  Reliability  ·  Integrity  ·  Discipline  ·  Timely Delivery", { x: 0.5, y: 4.95, w: 9, h: 0.35, fontFace: BF, italic: true, fontSize: 12.5, color: GOLD, align: "center", margin: 0 });
})();

// ============ 6 — SECTORS WE SERVE ============
(() => {
  const s = p.addSlide(); s.background = { color: CREAM };
  logo(s, 8.6, 0.45, 1.0); eyebrow(s, "Where We Work", 0.55, 0.55); title(s, "Sectors We Serve", 0.5, 0.85);
  const sectors = [
    "Private Medical Colleges & Hospitals", "Government Colleges & Schools",
    "Police Housing & Armed-Reserve Complexes", "Public Works Department (PWD)",
    "Industrial & Factory Buildings", "Sugar Mills",
    "Commercial Complexes", "Warehousing & Storage",
  ];
  const cw = 4.35, ch = 0.72, gx = 0.25, gy = 0.16, x0 = 0.55, y0 = 1.85;
  sectors.forEach((t, i) => {
    const x = x0 + (i % 2) * (cw + gx), y = y0 + Math.floor(i / 2) * (ch + gy);
    s.addShape(p.shapes.RECTANGLE, { x, y, w: cw, h: ch, fill: { color: WHITE }, line: { color: "E5DED3", width: 1 }, shadow: sh() });
    s.addShape(p.shapes.OVAL, { x: x + 0.18, y: y + 0.21, w: 0.3, h: 0.3, fill: { color: GOLD } });
    s.addText(t, { x: x + 0.66, y, w: cw - 0.8, h: ch, fontFace: BF, fontSize: 13, bold: true, color: NAVY, valign: "middle", margin: 0 });
  });
  footer(s, false);
})();

// ============ 7 — WHAT WE BUILD (services) ============
(() => {
  const s = p.addSlide(); s.background = { color: NAVY };
  logo(s, 8.6, 0.4, 1.0); eyebrow(s, "Capabilities", 0.55, 0.5, GOLD); title(s, "What We Build", 0.5, 0.8, WHITE);
  const data = [
    ["narayana-school.jpeg", "Educational Buildings"], ["venkateshwara-medical.jpeg", "Medical Colleges & Hospitals"],
    ["vka-factory.jpeg", "Industrial & Factory"], ["govt-school-nambiyur.jpeg", "Government & Public Works"],
    ["police-ooty.jpeg", "Police Housing"], ["udumalpet-coop.jpeg", "Commercial Complexes"],
  ];
  const cw = 2.86, ch = 1.72, gx = 0.21, gy = 0.18, x0 = 0.55, y0 = 1.55;
  data.forEach((d, i) => card(s, x0 + (i % 3) * (cw + gx), y0 + Math.floor(i / 3) * (ch + gy), cw, ch, d[0], d[1]));
})();

// ============ 8 — WHY CHOOSE US ============
(() => {
  const s = p.addSlide(); s.background = { color: CREAM };
  logo(s, 8.6, 0.45, 1.0); eyebrow(s, "Our Strengths", 0.55, 0.55); title(s, "Why Choose Us", 0.5, 0.85);
  const items = [
    "30+ years of proven, founder-led experience", "100% on-time delivery track record",
    "Quality-first, standards-driven execution", "Skilled in-house teams & strong project management",
    "Experience across 8+ sectors and project types", "Discipline, accountability & transparent communication",
  ];
  const x0 = 0.6, y0 = 1.9, rw = 4.35, rh = 0.95, gx = 0.3, gy = 0.18;
  items.forEach((t, i) => {
    const x = x0 + (i % 2) * (rw + gx), y = y0 + Math.floor(i / 2) * (rh + gy);
    s.addShape(p.shapes.OVAL, { x, y: y + 0.12, w: 0.5, h: 0.5, fill: { color: NAVY } });
    s.addText("✓", { x, y: y + 0.12, w: 0.5, h: 0.5, fontFace: BF, fontSize: 18, bold: true, color: GOLD, align: "center", valign: "middle", margin: 0 });
    s.addText(t, { x: x + 0.65, y, w: rw - 0.7, h: rh, fontFace: BF, fontSize: 13.5, color: SLATE, valign: "middle", margin: 0 });
  });
  footer(s, false);
})();

// ============ 9 — BY THE NUMBERS ============
(() => {
  const s = p.addSlide(); s.background = { color: NAVY };
  logo(s, 8.6, 0.45, 1.0); eyebrow(s, "By the Numbers", 0.55, 0.55, GOLD); title(s, "Three Decades of Delivery", 0.5, 0.85, WHITE);
  const stats = [["30+", "Years of Experience"], ["8+", "Sectors Served"], ["82Cr+", "Project Value Delivered"], ["100%", "On-Time Delivery"]];
  const cw = 2.1, gx = 0.23, x0 = 0.62, y = 2.15;
  stats.forEach((st, i) => {
    const x = x0 + i * (cw + gx);
    s.addShape(p.shapes.RECTANGLE, { x, y, w: cw, h: 2.0, fill: { color: NAVY2 }, shadow: sh() });
    s.addShape(p.shapes.RECTANGLE, { x, y, w: cw, h: 0.1, fill: { color: GOLD } });
    s.addText((i === 2 ? "₹" : "") + st[0], { x, y: y + 0.4, w: cw, h: 0.85, fontFace: HF, fontSize: i === 2 ? 32 : 40, bold: true, color: GOLD, align: "center", valign: "middle", margin: 0 });
    s.addText(st[1], { x: x + 0.08, y: y + 1.32, w: cw - 0.16, h: 0.6, fontFace: BF, fontSize: 11.5, bold: true, color: "D6DEE8", align: "center", valign: "top", margin: 0 });
  });
  s.addText("Founder experience of 37+ years, guiding every project across South India.", { x: 0.5, y: 4.55, w: 9, h: 0.4, fontFace: BF, italic: true, fontSize: 13, color: "9FB0C2", align: "center", margin: 0 });
})();

// ============ 10 — PROJECT PORTFOLIO (table) ============
(() => {
  const s = p.addSlide(); s.background = { color: CREAM };
  logo(s, 8.6, 0.4, 1.0); eyebrow(s, "Track Record", 0.55, 0.5); title(s, "Project Portfolio", 0.5, 0.8);
  const head = ["Project", "Scope & Location", "Area", "Value"].map((t) => ({ text: t, options: { fill: { color: NAVY }, color: WHITE, bold: true, fontSize: 11, align: t === "Area" || t === "Value" ? "center" : "left" } }));
  const rows = [
    ["Narayana e-Techno School", "School Building, Tiruchengode", "60,000", "₹15.1 Cr"],
    ["Sri Venkateshwara Medical College", "Gents Hostel Building, Puducherry", "70,000", "₹10.1 Cr"],
    ["SKM Egg Products Pvt Ltd", "Bio-Gas Plant & ETP, Solangapalayam", "—", "₹12.9 Cr"],
    ["Sagar International School", "School Building, Erode", "30,000", "₹8.7 Cr"],
    ["VKA Polymers Pvt Ltd", "Warehouse & Mezzanine Storage, Karur", "1,00,000", "₹10.1 Cr"],
    ["VKA Polymers Pvt Ltd", "Factory Building, Karur", "60,000", "₹10.1 Cr"],
    ["Government School, Nambiyur", "School Building, Nambiyur", "35,000", "₹3.5 Cr"],
    ["Government School, Anthiyur", "School Building, Anthiyur", "35,000", "₹3.0 Cr"],
    ["Police Quarters, Ooty", "Residential Quarters — TNPHC Ltd", "—", "₹3.5 Cr"],
    ["Udumalpet Co-operative Stores", "Commercial Complex — Co-operative Ltd", "—", "₹3.6 Cr"],
    ["Firemen Quarters, Manapparai", "Firemen Quarters — TNPHC Ltd", "—", "₹1.5 Cr"],
  ];
  const body = rows.map((r, ri) => r.map((c, ci) => ({
    text: ci === 2 && c !== "—" ? c + " sqft" : c,
    options: { fill: { color: ri % 2 ? "F1EBE0" : WHITE }, color: ci === 3 ? GOLDD : SLATE, bold: ci === 0 || ci === 3, fontSize: 9.7, align: ci >= 2 ? "center" : "left", valign: "middle" },
  })));
  s.addTable([head, ...body], { x: 0.55, y: 1.5, w: 8.9, colW: [2.65, 3.7, 1.25, 1.3], rowH: 0.285, border: { type: "solid", pt: 0.5, color: "E0D8CC" }, valign: "middle", margin: [2, 5, 2, 5] });
  s.addText("Representative projects · total value over ₹82 Crore across 8+ sectors.", { x: 0.55, y: 5.22, w: 9, h: 0.3, fontFace: BF, italic: true, fontSize: 9.5, color: SLATEL, margin: 0 });
})();

// ---- Projects photo slides ----
function projects(eb, ti, cards) {
  const s = p.addSlide(); s.background = { color: CREAM };
  logo(s, 8.6, 0.4, 1.0); eyebrow(s, eb, 0.55, 0.5); title(s, ti, 0.5, 0.8);
  const n = cards.length, cw = n === 2 ? 4.3 : 2.86, ch = 3.2, gx = 0.21, x0 = n === 2 ? 0.7 : 0.55, y0 = 1.55;
  cards.forEach((c, i) => pcard(s, x0 + i * (cw + gx), y0, cw, ch, c[0], c[1], c[2]));
  footer(s, false);
}
projects("Featured Projects", "Educational Buildings", [
  ["narayana-school.jpeg", "Narayana e-Techno School", "Tiruchengode · 60,000 sqft · ₹15.1 Cr"],
  ["sagar-school.jpeg", "Sagar International School", "Erode · 30,000 sqft · ₹8.7 Cr"],
]);
projects("Featured Projects", "Medical & Industrial", [
  ["venkateshwara-medical.jpeg", "Sri Venkateshwara Medical College", "Gents Hostel, Puducherry · ₹10.1 Cr"],
  ["vka-factory.jpeg", "VKA Polymers — Factory", "Karur · 60,000 sqft · ₹10.1 Cr"],
  ["skm-egg.jpeg", "SKM Egg Products", "Bio-Gas Plant & ETP · ₹12.9 Cr"],
]);
projects("Featured Projects", "Government & Public Works", [
  ["fireservice_salem.jpg", "Fire & Rescue Services", "Salem · Public Works Dept."],
  ["police-ooty.jpeg", "Police Quarters, Ooty", "TNPHC Ltd · ₹3.5 Cr"],
  ["govt-school-nambiyur.jpeg", "Government School, Nambiyur", "35,000 sqft · ₹3.5 Cr"],
]);

// ============ TRUSTED BY ============
(() => {
  const s = p.addSlide(); s.background = { color: NAVY };
  logo(s, 8.6, 0.45, 1.0); eyebrow(s, "Our Clients", 0.55, 0.55, GOLD); title(s, "Trusted by Leading Institutions", 0.5, 0.85, WHITE, 9);
  const clients = ["Narayana e-Techno School", "Sri Venkateshwara Medical College", "SKM Egg Products", "Sagar International School", "VKA Polymers", "TN Police Housing Corporation", "Public Works Department", "Udumalpet Co-operative Stores", "Government of Tamil Nadu"];
  const cw = 2.95, ch = 0.95, gx = 0.2, gy = 0.2, x0 = 0.55, y0 = 1.9;
  clients.forEach((c, i) => {
    const x = x0 + (i % 3) * (cw + gx), y = y0 + Math.floor(i / 3) * (ch + gy);
    s.addShape(p.shapes.RECTANGLE, { x, y, w: cw, h: ch, fill: { color: NAVY2 }, line: { color: "27405E", width: 1 } });
    s.addShape(p.shapes.RECTANGLE, { x, y, w: 0.09, h: ch, fill: { color: GOLD } });
    s.addText(c, { x: x + 0.22, y, w: cw - 0.35, h: ch, fontFace: BF, fontSize: 12.5, bold: true, color: "EAF0F6", valign: "middle", margin: 0 });
  });
})();

// ============ THANK YOU ============
(() => {
  const s = p.addSlide(); s.background = { color: NAVY };
  s.addImage({ path: IMG("vka-warehouse.jpeg"), x: 6.4, y: 0, w: 3.6, h: 5.625, sizing: { type: "cover", w: 3.6, h: 5.625 } });
  s.addShape(p.shapes.RECTANGLE, { x: 6.4, y: 0, w: 3.6, h: 5.625, fill: { color: NAVY, transparency: 30 } });
  s.addShape(p.shapes.RECTANGLE, { x: 6.32, y: 0, w: 0.08, h: 5.625, fill: { color: GOLD } });
  logo(s, 0.55, 0.5, 1.2);
  s.addText("THANK YOU", { x: 0.5, y: 1.9, w: 6, h: 1.0, fontFace: HF, fontSize: 48, bold: true, color: WHITE, margin: 0 });
  s.addText("Let's build something that lasts.", { x: 0.55, y: 2.85, w: 5.6, h: 0.4, fontFace: BF, italic: true, fontSize: 14, color: GOLD, margin: 0 });
  s.addShape(p.shapes.RECTANGLE, { x: 0.55, y: 3.5, w: 5.5, h: 1.6, fill: { color: NAVY2 }, shadow: sh() });
  s.addShape(p.shapes.RECTANGLE, { x: 0.55, y: 3.5, w: 0.09, h: 1.6, fill: { color: GOLD } });
  s.addText([
    { text: "+91 70109 52509   ·   +91 99655 27112", options: { breakLine: true, paraSpaceAfter: 7, bold: true } },
    { text: "sakthiveln7038@gmail.com", options: { breakLine: true, paraSpaceAfter: 7, color: GOLD } },
    { text: "7-9, Muthuvelappa Street, Kaikolan Thottam,", options: { breakLine: true, fontSize: 12 } },
    { text: "Erode-638001, Tamil Nadu", options: { fontSize: 12 } },
  ], { x: 0.85, y: 3.62, w: 5.0, h: 1.4, fontFace: BF, fontSize: 13.5, color: "EAF0F6", valign: "middle", margin: 0 });
  s.addText("nsakthivelandco.in", { x: 0.6, y: 5.2, w: 5, h: 0.3, fontFace: BF, fontSize: 11, bold: true, color: GOLD, margin: 0 });
})();

p.writeFile({ fileName: "N-Sakthivel-Co-Company-Profile.pptx" }).then((f) => console.log("WROTE", f));
