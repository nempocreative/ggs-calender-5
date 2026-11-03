import { describe, expect, it } from "vitest";
import { briefs, catalogService, scheduledBrief, type Brand } from "./content-plan";
import { PILLARS, schedBeauty, schedHair } from "./schedule";

describe("Repository-backed service content", () => {
  for (const brand of ["beauty", "hair"] as Brand[]) {
    it(`${brand}: every brief uses a service from the supplied repository menu`, () => {
      for (const pillar of PILLARS) {
        for (const brief of briefs[brand][pillar.key]) {
          expect(catalogService(brand, brief), `${pillar.key}: ${brief.service}`).toBeDefined();
        }
      }
    });
    it(`${brand}: three posts daily include a non-video format`, () => {
      const schedule = brand === "beauty" ? schedBeauty : schedHair;
      for (let day = 0; day < schedule.length; day++) {
        expect(schedule[day]).toHaveLength(3);
        const posts = [0, 1, 2].map((slot) => scheduledBrief(brand, schedule, day, slot));
        expect(posts.every(Boolean)).toBe(true);
        expect(posts.filter((post) => post?.format.startsWith("Reels")).length).toBeLessThanOrEqual(2);
      }
    });
  }
});