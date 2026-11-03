// GGS content schedule generator — 28 days, 3 slots/day, per account.
// Rules: <=2 videos/day (always mixed with a non-video), GGS Talk always 16:00.

export type PillarKey = "talk" | "elis" | "cine" | "ngobras" | "promo";

export type Brand = "beauty" | "hair";

export interface Pillar {
  key: PillarKey;
  name: string;
  full: string;
  desc: string;
  video: boolean;
}

// Pillar labels per account: the comedy sketch character (Si Elis) only exists in GGS Beauty,
// so GGS Hair Studio runs the same pillar under the neutral name "Comedy".
const PILLAR_LABEL: Record<PillarKey, Record<Brand, string>> = {
  talk: { beauty: "GGS Talk", hair: "GGS Talk" },
  elis: { beauty: "Si Elis", hair: "Comedy" },
  cine: { beauty: "Cinematic", hair: "Cinematic" },
  ngobras: { beauty: "Ngobras", hair: "Ngobras" },
  promo: { beauty: "Promo", hair: "Promo" },
};

export const pillarName = (key: PillarKey, brand: Brand) => PILLAR_LABEL[key][brand];

// Label for slides that show both accounts at once.
export const dualName = (key: PillarKey) => {
  const b = PILLAR_LABEL[key].beauty;
  const h = PILLAR_LABEL[key].hair;
  return b === h ? b : `${b} / ${h}`;
};

export const PILLARS: Pillar[] = [
  { key: "talk", name: "GGS Talk", full: "GGS Talk — Podcast Ngopi Sore", desc: "Podcast sore: host ngobrol santai bareng tamu, tema seputar salon dan self care.", video: false },
  { key: "elis", name: "Si Elis", full: "Komedi — Si Elis (Beauty) • Comedy (Hair)", desc: "Sketsa komedi singkat, sisi lucu keseharian di salon.", video: true },
  { key: "cine", name: "Cinematic", full: "Video Cinematic Treatment", desc: "Video sinematik proses treatment, kualitas tinggi.", video: true },
  { key: "ngobras", name: "Ngobras", full: "Ngobras bareng Konsumen", desc: "Ngobrol santai bareng konsumen sambil treatment.", video: true },
  { key: "promo", name: "Promo", full: "Promo", desc: "Promo produk, harga spesial, dan informasi layanan.", video: false },
];

export const TARGET: Record<PillarKey, number> = { talk: 18, elis: 12, cine: 18, ngobras: 18, promo: 18 }; // 84 per account

export const SLOTS = ["11:00", "16:00", "19:30"];

function buildSchedule(extraDays: number[], promoFirst: boolean): string[][] {
  const counts: Record<PillarKey, number> = { ...TARGET };
  const result: string[][] = [];

  // 1) day types: nv2 (talk+promo+1 video) / talk-only / promo-only
  const dayTypes: string[] = [];
  let startTalk = true;
  for (let d = 0; d < 28; d++) {
    if (extraDays.includes(d)) {
      dayTypes.push("nv2");
      counts.talk--;
      counts.promo--;
      continue;
    }
    const pick = counts.talk === counts.promo ? ((startTalk = !startTalk), !startTalk) : counts.talk > counts.promo;
    dayTypes.push(pick ? "talk" : "promo");
    if (pick) counts.talk--;
    else counts.promo--;
  }

  // 2) deal video tokens: Si Elis (12x) spread across the 20 two-video days;
  //    cine/ngobras fill the rest, never the same video twice in a day.
  const twoSlotDays: number[] = [];
  for (let d = 0; d < 28; d++) if (dayTypes[d] !== "nv2") twoSlotDays.push(d);
  const elisDays = new Set<number>();
  for (let i = 0, prev = 0; i < twoSlotDays.length; i++) {
    const upto = Math.round(((i + 1) * 12) / twoSlotDays.length);
    if (upto > prev) {
      elisDays.add(twoSlotDays[i]!);
      prev = upto;
    }
  }
  const takeVG = (): PillarKey => {
    const v: PillarKey = counts.cine >= counts.ngobras ? "cine" : "ngobras";
    counts[v]--;
    return v;
  };
  const takePair = (): [PillarKey, PillarKey] => {
    const a: PillarKey = counts.cine >= counts.ngobras ? "cine" : "ngobras";
    const b: PillarKey = a === "cine" ? "ngobras" : "cine";
    counts[a]--;
    counts[b]--;
    return [a, b];
  };

  for (let d = 0; d < 28; d++) {
    const cells: (string | null)[] = [null, null, null];
    if (dayTypes[d] === "nv2") {
      cells[1] = "talk";
      const v = takeVG();
      const pSlot = promoFirst ? 0 : 2;
      cells[pSlot] = "promo";
      cells[pSlot === 0 ? 2 : 0] = v;
    } else if (dayTypes[d] === "talk") {
      cells[1] = "talk";
      if (elisDays.has(d) && counts.elis > 0) {
        cells[0] = "elis";
        counts.elis--;
        cells[2] = takeVG();
      } else {
        const [a, b] = takePair();
        cells[0] = a;
        cells[2] = b;
      }
    } else if (promoFirst) {
      cells[0] = "promo";
      if (elisDays.has(d) && counts.elis > 0) {
        cells[1] = "elis";
        counts.elis--;
        cells[2] = takeVG();
      } else {
        const [a, b] = takePair();
        cells[1] = a;
        cells[2] = b;
      }
    } else {
      cells[2] = "promo";
      if (elisDays.has(d) && counts.elis > 0) {
        cells[0] = "elis";
        counts.elis--;
        cells[1] = takeVG();
      } else {
        const [a, b] = takePair();
        cells[0] = a;
        cells[1] = b;
      }
    }
    result.push(cells as string[]);
  }
  return result;
}

const DOW = ["Rab", "Kam", "Jum", "Sab", "Min", "Sen", "Sel"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

export const days: string[] = [];
for (let i = 0; i < 28; i++) {
  const d = new Date(2026, 10, 4 + i);
  days.push(`${DOW[i % 7]} ${d.getDate()} ${MONTHS[d.getMonth()]}`);
}

// Beauty: 2 non-video days = Sundays + Thursdays; Hair: Mondays + Fridays
export const schedBeauty = buildSchedule([4, 11, 18, 25, 1, 8, 15, 22], true);
export const schedHair = buildSchedule([5, 12, 19, 26, 2, 9, 16, 23], false);

export const weekRanges = [
  "4 – 10 November 2026",
  "11 – 17 November 2026",
  "18 – 24 November 2026",
  "25 November – 1 Desember 2026",
];

export const shortName = (k: string, brand: Brand = "beauty") =>
  k in PILLAR_LABEL ? pillarName(k as PillarKey, brand) : k;
