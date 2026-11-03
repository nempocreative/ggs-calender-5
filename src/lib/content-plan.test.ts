import { describe, expect, it } from "vitest";
import { briefs, catalogService, scheduledBrief, type Brand } from "./content-plan";
import { PILLARS, schedBeauty, schedHair, pillarName, dualName } from "./schedule";

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