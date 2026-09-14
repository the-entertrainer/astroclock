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
- Birth config (presets: Delhi, Tokyo, London, New York, San Francisco) → `localStorage` key `astroclock-v1`
- Natal chart lerp (~700ms) on save/reset
- Visibility pause when tab hidden
- Dial: **0° sidereal Mesha at top**

## Defaults

Until you save a birth chart, a demo natal is used: **Delhi, 1990-01-01 12:00:00** (overwritable). Birth H:M:S is treated as UTC for offline determinism (no timezone database).

## Approximation limits

Mean-element / truncated VSOP-lite longitudes (not full Swiss Ephemeris). Moon is better than planets but still approximate. Lahiri ayanamsha is a linear/quadratic fit (~24° in the 2020s). Speeds via 1-hour finite difference. Suitable for visualization and dasha/tithi UX — not for professional chart casting.

## Project layout

```
src/
  app/           # App Router entry (layout, page, globals)
  components/    # TopBar, ClockCanvas, HUD, drawers, app shell
  lib/astro/     # julianDay, gmst, lst, planets, dasha, aspects…
  lib/storage.ts # localStorage birth config
```
