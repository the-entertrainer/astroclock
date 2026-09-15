# Test gates (three lanes)

After **each** phase (P0 → P1 → P2 → P3 → polish), all three lanes must pass before advancing.

```bash
npm test
npm run build
```

## 1) Code lane

- Table completeness: 27×4 unique padas, 9×27 graha×nak, gochara 9×12, aspect pairs, dasha×house/sign
- Collectors return min fragment counts
- Yoga detectors, compose stitch, moment helpers
- `npm run build` green

## 2) Factual lane

- Fixture charts (`src/lib/astro/__fixtures__/charts.ts`) assert Moon/Sun rashi, nakshatra/pada, Lagna bands
- Delhi fixture within `DELHI_PUBLIC_BALLPARK` (see `docs/FACTCHECK.md`)
- Gochara house math, aspect angles, dasha lord from Moon nakshatra consistent
- Saved-birth fixtures: Profile + Today summaries non-empty; advice ≥ 1

## 3) Design lane

- Banned-prose detector fails the user’s bad-example negative fixture
- Sample Profile/Today/Advice/influence bodies must not contain mechanic jargon (`Star-texture`, `pada N adds…`, `Personal spotlight`, raw `oppose`/`conjunct` with transit/natal, degrees in body, etc.)
- Welcome copy: compass not pathfinder; will/stars spirit; passion project / Indian philosophy & astrology
- Tour steps: welcome → setup → dial → today → profile; Skip; flag `astroclock-onboarded-v1`
- UI landmarks covered by component exports / copy contracts (Dial|Today, Profile, Config)

## Phase checklist

| Phase | Focus | Gate |
|-------|--------|------|
| P0 | Combinatorial density + human strings | code + factual + design |
| P1 | Moment sharpness | + panchanga/orb/combustion/volume in day summary |
| P2 | Yogas / chains / AK / house tones / D9 lite | yoga unit tests on fixtures |
| P3 | Compose quality + length bands | snapshot bands + banned prose |
| Polish | Welcome + guided tour | design welcome/tour contracts |
