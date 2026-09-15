# AstroClock

Premium mobile Vedic sidereal clockwork — Next.js App Router + TypeScript + Tailwind.

**Compass, not pathfinder.** Rule-based plain-English readings (no LLM APIs, no secrets).

## Stack

- Next.js (App Router) · TypeScript · Tailwind · lucide-react
- Canvas 2D clock dial · pure TS astronomy (mean-element; not Swiss Ephemeris)

## Run

```bash
npm install
npm run dev
# http://localhost:3000

npm test          # vitest — code + factual + design lanes
npm run build
```

## Phased rules

Interpretive copy is built from combinatorial tables under `src/lib/astro/rules/` (P0–P3):

| Phase | What |
|-------|------|
| **P0** | Graha×nakshatra, unique nakshatra padas, gochara→natal house, aspect pairs, dasha×house/sign |
| **P1** | Panchanga-lite, orb bands, combustion, hourly Lagna chapter, quiet/loud day |
| **P2** | Small yoga set, rising-ruler / Moon-lord chains, atmakaraka-lite, dusthana/upachaya, D9 lite mapping |
| **P3** | Compose stitch, dedupe, length caps, voice pass |
| **Polish** | First-time welcome + guided tour (`astroclock-onboarded-v1`) |

Regenerate human-voice tables (optional):

```bash
node scripts/gen-human-rules.mjs
```

See `docs/TEST_GATES.md` and `docs/FACTCHECK.md`.

## Welcome tour

On first visit, a glass welcome panel explains the project and walks: **setup details → dial → Today → Profile**. Skip or Done sets `localStorage` key `astroclock-onboarded-v1`. Clear that key to replay.

## Features

- Live UTC + local clocks; sidereal dial (rashis, nakshatras, natal markers, aspects)
- Vimshottari dasha, tithi, Lagna; Today + Profile + tap-to-influence advice (deterministic rules)
- Worldwide place search via `/api/geocode` (Nominatim proxy; no API keys in client)
- Birth config in `localStorage` (`astroclock-v1`)

## Defaults & limits

Demo natal until you save: **Delhi, 1990-01-01 12:00:00 UTC**. Birth H:M:S treated as UTC (no TZ DB).

Mean-element longitudes — suitable for visualization and UX, **not** professional casting. Moon tighter than outer planets (see `docs/FACTCHECK.md`).

## Deploy (Vercel)

Import `the-entertrainer/astroclock` — Next.js preset, no env vars required.
