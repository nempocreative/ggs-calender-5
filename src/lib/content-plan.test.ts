import { describe, expect, it } from "vitest";
import { briefs, catalogService, scheduledBrief, type Brand } from "./content-plan";
import {
  PILLARS,
  PODCAST_BLACKOUT,
  PODCAST_DAYS,
  TARGET,
  JAPAN_DAYS,
  JAPAN_TARGET,
  schedJapan,
  schedBeauty,
  schedHair,
  pillarName,
  dualName,
  type PillarKey,
} from "./schedule";

const VIDEO_KEYS = new Set(PILLARS.filter((p) => p.video).map((p) => p.key));

function countsOf(schedule: string[][]) {
  const counts = {} as Record<PillarKey, number>;
  for (const p of PILLARS) counts[p.key] = 0;
  for (const key of schedule.flat()) counts[key as PillarKey]++;
  return counts;
}

describe("Comedy pillar naming per account", () => {
  it("GGS Hair Studio runs the comedy pillar as Comedy, never Si Elis", () => {
    expect(pillarName("elis", "hair")).toBe("Comedy");
    expect(pillarName("elis", "beauty")).toBe("Si Elis");
    expect(dualName("elis")).toBe("Si Elis / Comedy");
    for (const brief of briefs.hair.elis) {
      expect(`${brief.topic} ${brief.flow}`).not.toMatch(/Elis/);
    }
  });
});

describe("Podcast Ngopi Sore cadence", () => {
  for (const brand of ["beauty", "hair"] as Brand[]) {
    it(`${brand}: three episodes, none during the 16–24 November blackout`, () => {
      const schedule = brand === "beauty" ? schedBeauty : schedHair;
      expect(schedule.flat().filter((k) => k === "talk").length).toBe(3);
      for (const day of PODCAST_DAYS) {
        expect(schedule[day]?.[1]).toBe("talk");
      }
      for (let day = PODCAST_BLACKOUT[0]; day <= PODCAST_BLACKOUT[1]; day++) {
        expect(schedule[day]?.includes("talk"), `day ${day}`).toBe(false);
      }
      for (const week of [0, 1, 3]) {
        const inWeek = schedule.slice(week * 7, week * 7 + 7).flat().filter((k) => k === "talk").length;
        expect(inWeek).toBe(1);
      }
      expect(schedule.slice(14, 21).flat().filter((k) => k === "talk").length).toBe(0);
    });
  }
});

describe("Repository-backed service content", () => {
  for (const brand of ["beauty", "hair"] as Brand[]) {
    it(`${brand}: every brief uses a service from the supplied repository menu`, () => {
      // Japan Diaries and Promo Lotion are owner/product content, not salon menu services.
      for (const pillar of PILLARS.filter((p) => p.key !== "jpn" && p.key !== "lotion")) {
        for (const brief of briefs[brand][pillar.key]) {
          expect(catalogService(brand, brief), `${pillar.key}: ${brief.service}`).toBeDefined();
        }
      }
    });
    it(`${brand}: schedule hits every pillar target`, () => {
      const schedule = brand === "beauty" ? schedBeauty : schedHair;
      const counts = countsOf(schedule);
      for (const pillar of PILLARS) {
        expect(counts[pillar.key], pillar.key).toBe(TARGET[pillar.key]);
      }
      expect(Object.values(counts).reduce((a, b) => a + b, 0)).toBe(84);
    });
    it(`${brand}: three posts daily, at most two videos and always a non-video`, () => {
      const schedule = brand === "beauty" ? schedBeauty : schedHair;
      for (let day = 0; day < schedule.length; day++) {
        expect(schedule[day]).toHaveLength(3);
        const posts = [0, 1, 2].map((slot) => scheduledBrief(brand, schedule, day, slot));
        expect(posts.every(Boolean)).toBe(true);
        const videos = schedule[day]?.filter((k) => VIDEO_KEYS.has(k as PillarKey)).length ?? 0;
        expect(videos).toBeLessThanOrEqual(2);
        expect(3 - videos).toBeGreaterThanOrEqual(1);
      }
    });
  }
});

describe("Separate Japan and salon production", () => {
  it("Japan has its own nine-day schedule, 16–24 November, for owner and lotion only", () => {
    expect(JAPAN_DAYS).toEqual([12, 20]);
    expect(schedJapan).toHaveLength(9);
    expect(countsOf(schedJapan).jpn).toBe(JAPAN_TARGET.jpn);
    expect(countsOf(schedJapan).lotion).toBe(JAPAN_TARGET.lotion);
    expect(schedJapan.flat().every((k) => k === "jpn" || k === "lotion")).toBe(true);
  });
  for (const brand of ["beauty", "hair"] as Brand[]) {
    it(`${brand}: salon continues three daily service posts without Japan or lotion entries`, () => {
      const schedule = brand === "beauty" ? schedBeauty : schedHair;
      expect(schedule.flat().some((k) => k === "jpn" || k === "lotion")).toBe(false);
      for (let day = 12; day <= 20; day++) {
        expect(schedule[day]).toHaveLength(3);
        expect(schedule[day]).toContain("promo");
        for (let slot = 0; slot < 3; slot++) {
          const brief = scheduledBrief(brand, schedule, day, slot);
          expect(brief && catalogService(brand, brief)).toBeDefined();
        }
      }
    });
  }
});
