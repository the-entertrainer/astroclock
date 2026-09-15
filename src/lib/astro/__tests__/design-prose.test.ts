import { describe, expect, it } from 'vitest';
import { FIXTURE_CHARTS } from '../__fixtures__/charts';
import { computeNatalProfile, natalLonMap } from '../profile';
import { computeTodayInsights } from '../insights';
import { computeInfluence } from '../influence';
import { findBannedHits, hasBannedProse } from '../rules/prose';
import { stitchParagraphs } from '../rules/compose';
import {
  WELCOME_COPY,
  TOUR_STEP_IDS,
  ONBOARD_KEY,
} from '@/components/WelcomeTour';
import { NAKSHATRA_RULES } from '../rules/nakshatra';

/** Negative fixture — the exact bad style the user rejected */
const BAD_EXAMPLE =
  'Swati pada 4 adds a ripening completion... Star-texture Swati... Personal spotlight: transit Mercury is oppose your natal Sun (0.4°, separating)... opposition to natal sets up a temporary mirror — relate, do not declare war When Rahu is in the link...';

describe('Design lane — prose must be human-readable', () => {
  it('negative fixture (user bad example) trips banned detector', () => {
    expect(hasBannedProse(BAD_EXAMPLE)).toBe(true);
    expect(findBannedHits(BAD_EXAMPLE).length).toBeGreaterThan(0);
  });

  it('stitchParagraphs never concatenates without punctuation', () => {
    const out = stitchParagraphs(
      [
        { text: 'You need room to move', specificity: 50 },
        { text: 'finish one loop today', specificity: 40 },
      ],
      { perPara: 2, maxFrags: 4 },
    );
    expect(out).toMatch(/move\./i);
    expect(out).not.toMatch(/move finish/i);
  });

  it('nakshatra/pada strings avoid mechanic templates', () => {
    for (const [name, r] of Object.entries(NAKSHATRA_RULES)) {
      expect(r.temperament.toLowerCase()).not.toMatch(/star-texture/);
      for (const p of r.pada) {
        expect(p.toLowerCase()).not.toMatch(/adds an? (initiatory|ripening|stabilising)/);
        expect(p.toLowerCase()).not.toMatch(/ripening completion/);
        expect(findBannedHits(p).filter((h) => !h.includes('°'))).toEqual([]);
      }
      void name;
    }
  });

  for (const fx of FIXTURE_CHARTS) {
    it(`${fx.id}: Profile/Today/Advice pass banned-prose gate`, () => {
      const profile = computeNatalProfile(fx.birth, new Date('2026-09-15T12:00:00Z'))!;
      for (const sample of [
        profile.summary,
        ...profile.advice.items,
        ...profile.sections.map((s) => s.body),
      ]) {
        const hits = findBannedHits(sample);
        expect(hits, `banned in profile: ${hits} :: ${sample.slice(0, 120)}`).toEqual([]);
      }

      const today = computeTodayInsights(
        new Date('2026-09-15T12:00:00Z'),
        fx.birth,
        natalLonMap(fx.birth),
      );
      for (const sample of [today.daySummary, ...today.dayAdvice.items]) {
        const hits = findBannedHits(sample);
        expect(hits, `banned in today: ${hits} :: ${sample.slice(0, 120)}`).toEqual([]);
      }

      // jargon density: Lagnesha / Gochaara should not dominate body
      const body = profile.summary + ' ' + today.daySummary;
      const jargon = (body.match(/\b(Lagnesha|Gochaara|gochara|pada|subplot)\b/gi) || [])
        .length;
      expect(jargon).toBeLessThanOrEqual(1);
    });
  }

  it('tap-influence reading is plain English', () => {
    const fx = FIXTURE_CHARTS[0];
    const reading = computeInfluence({
      graha: 'Moon',
      rashi: 'Kumbha',
      house: 9,
      nakshatra: 'Shatabhisha',
      speed: 13,
      natal: { rashi: 'Kumbha', house: 9 },
      aspects: [],
      dasha: { maha: 'Saturn', antar: 'Ketu' },
      isDemo: false,
    });
    for (const sample of [
      reading.meansForYou,
      reading.influencingNow,
      reading.changing,
      ...reading.advice.items,
    ]) {
      expect(findBannedHits(sample)).toEqual([]);
    }
  });
});

describe('Design lane — welcome + tour contracts', () => {
  it('welcome copy has compass / will / passion project spirit', () => {
    const c = WELCOME_COPY.toLowerCase();
    expect(c).toMatch(/compass/);
    expect(c).toMatch(/pathfinder/);
    expect(c).toMatch(/will/);
    expect(c).toMatch(/stars/);
    expect(c).toMatch(/passion project|geek/);
    expect(c).toMatch(/indian philosophy|astrology/);
  });

  it('tour steps: setup → dial → today → profile; onboard flag key', () => {
    expect(TOUR_STEP_IDS).toEqual([
      'welcome',
      'setup',
      'dial',
      'today',
      'profile',
    ]);
    expect(ONBOARD_KEY).toBe('astroclock-onboarded-v1');
  });
});

describe('P3 snapshot bands', () => {
  for (const fx of FIXTURE_CHARTS) {
    it(`${fx.id}: summary/advice length bands`, () => {
      const profile = computeNatalProfile(fx.birth, new Date('2026-09-15T12:00:00Z'))!;
      expect(profile.summary.length).toBeGreaterThan(100);
      expect(profile.summary.length).toBeLessThan(2000);
      expect(profile.advice.items.length).toBeGreaterThanOrEqual(1);
      expect(profile.advice.items.length).toBeLessThanOrEqual(8);

      const today = computeTodayInsights(
        new Date('2026-09-15T12:00:00Z'),
        fx.birth,
        natalLonMap(fx.birth),
      );
      expect(today.daySummary.length).toBeGreaterThan(80);
      expect(today.daySummary.length).toBeLessThan(2000);
      expect(today.dayAdvice.items.length).toBeGreaterThanOrEqual(1);
    });
  }
});
