# AstroClock

Self-contained mobile Vedic sidereal clockwork. One HTML file — open via `file://` or any static server.

## Stack

- HTML5 + Vanilla ES6+
- Tailwind CSS (CDN)
- Lucide icons (CDN)
- Google Fonts: Inter, JetBrains Mono
- Canvas 2D (retina / `devicePixelRatio`)
- **No npm, no build, no astronomy libraries, no API keys**

## Run

```bash
# option A
open index.html

# option B
python3 -m http.server 8080 --directory .
# then visit http://localhost:8080
```

## Features

- Live UTC + local clocks to milliseconds
- Canvas rings: 12 Rashis, 27 Nakshatras (+ padas), gear escapement, transit hands, natal markers, aspect beams, LST hub
- Vimshottari Maha + Antardasha, Tithi, Lagna
- Graha speed / retro chips, Harmonic Resonance Score
- LIVE tick + ±3 day scrubber for simulation time
- Birth config (presets: Delhi, Tokyo, London, New York, San Francisco) → `localStorage` key `astroclock-v1`
- Dial: **0° sidereal Mesha at top** (documented in source)

## Defaults

Until you save a birth chart, a demo natal is used: **Delhi, 1990-01-01 12:00:00** (overwritable). Birth H:M:S is treated as UTC for offline determinism (no timezone database).

## Approximation limits

Mean-element / truncated VSOP-lite longitudes (not full Swiss Ephemeris). Moon is better than planets but still approximate. Lahiri ayanamsha is a linear/quadratic fit (~24° in the 2020s). Speeds via 1-hour finite difference. Suitable for visualization and dasha/tithi UX — not for professional chart casting.
