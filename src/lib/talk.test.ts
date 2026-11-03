import { describe, expect, it } from "vitest";
import { talkEpisodes, talkQuestions, talkRules, talkRundown, talkClips } from "./talk";
import { PODCAST_DAYS } from "./schedule";

describe("Acuan GGS Talk", () => {
  it("mencocokkan 3 episode dengan hari podcast yang tayang", () => {
    for (const brand of ["beauty", "hair"] as const) {
      const eps = talkEpisodes[brand];
      expect(eps.map((e) => e.day)).toEqual(PODCAST_DAYS);
      expect(new Set(eps.map((e) => e.topic)).size).toBe(3);
      for (const e of eps) {
        expect(e.topic.length).toBeGreaterThan(5);
        expect(e.guest.length).toBeGreaterThan(2);
        expect(e.air).toMatch(/Jum \d+ Nov/);
      }
    }
  });

  it("rundown menutup 25 menit tanpa tumpang tindih", () => {
    expect(talkRundown[0]!.t).toBe("00:00–02:00");
    expect(talkRundown[talkRundown.length - 1]!.t).toBe("23:00–25:00");
    expect(talkRundown.every((s) => s.name && s.note)).toBe(true);
  });

  it("aturan host menyebut Garut dan melarang klaim tanpa konfirmasi", () => {
    expect(talkRules.some((r) => /garut/i.test(r))).toBe(true);
    expect(talkRules.some((r) => /klaim medis/i.test(r))).toBe(true);
    expect(talkClips.length).toBe(3);
    for (const brand of ["beauty", "hair"] as const) {
      expect(talkQuestions[brand].length).toBeGreaterThanOrEqual(5);
      expect(new Set(talkQuestions[brand]).size).toBe(talkQuestions[brand].length);
    }
  });
});
