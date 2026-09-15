# AstroClock

Premium mobile Vedic sidereal clockwork — Next.js App Router + TypeScript + Tailwind.

## Stack

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- lucide-react
- next/font: Inter + JetBrains Mono
- Canvas 2D (HiDPI / `devicePixelRatio`)
- Pure TS astronomy math (no ephemeris libs, no API keys)

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Import `the-entertrainer/astroclock` in the Vercel dashboard.
2. Framework preset: **Next.js** (auto-detected).
3. Deploy — no env vars required.

## Features

- Live UTC + local clocks to milliseconds
- Canvas rings: 12 Rashis (Devanagari + labels), 27 Nakshatras (+ padas), gear escapement, transit hands, natal markers, aspect beams (transit↔transit & natal↔transit), LST hub
- Vimshottari Maha + Antardasha, Tithi, Lagna
- Graha speed / retro chips, Harmonic Resonance Score
- LIVE tick + ±3 day scrubber for simulation time
- **Worldwide place search** — ConfigDrawer search (debounced ≥400ms) via Next.js route `GET /api/geocode` proxying OpenStreetMap Nominatim (server User-Agent; no browser CORS). Quick city chips kept as shortcuts. Place label persisted in `localStorage` with birth config.
- **Today** tab — live changes (dasha tone, Moon rashi/nak/pada + boundaries, lagna flip vs ~2h, retrogrades, tight aspects applying/separating, HRS climate) plus rule-based interpretive cards from `src/lib/astro/insights.ts` (not LLM).
- **Profile / Character** — after saving a non-demo birth, opens a delineation drawer from `src/lib/astro/profile.ts`: Essence, Mind, Drive, Behaviour, Relational, Pressures, Dasha colour — each claim cites placements (e.g. Moon in Rohini, 4th).
- Birth config → `localStorage` key `astroclock-v1` (includes `placeLabel`)
- Natal chart lerp (~700ms) on save/reset
- Visibility pause when tab hidden
- Dial: **0° sidereal Mesha at top**

## Defaults

Until you save a birth chart, a demo natal is used: **Delhi, 1990-01-01 12:00:00** (overwritable). Birth H:M:S is treated as UTC for offline determinism (no timezone database).

## Approximation limits

Mean-element / truncated VSOP-lite longitudes (not full Swiss Ephemeris). Moon is better than planets but still approximate. Lahiri ayanamsha is a linear/quadratic fit (~24° in the 2020s). Speeds via 1-hour finite difference. Suitable for visualization and dasha/tithi UX — not for professional chart casting. Today/Profile copy is deterministic rule text from those placements — interpretive, not fate.

## Project layout

```
src/
  app/           # App Router entry + /api/geocode (Nominatim proxy)
  components/    # TopBar, ClockCanvas, HUD, TodayPanel, ProfileDrawer, drawers
  lib/astro/     # julianDay, planets, dasha, insights, profile…
  lib/storage.ts # localStorage birth config (+ placeLabel)
```
