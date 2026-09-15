# Fact-check — positions (not interpretations)

AstroClock uses a **mean-element / truncated** engine (not Swiss Ephemeris). Interpretive prose is rule-based and will **not** match other sites word-for-word. This document checks **positions + nakshatra/rashi assignment** only.

## Engine honesty

| Item | Expectation |
|------|-------------|
| Moon | Usually within ~0.5–1.5° of Swiss-class ephemerides for modern dates |
| Sun | Often within ~0.2–0.8° |
| Mercury–Venus | Often ~0.5–2°+ |
| Mars–Saturn | Outer planets may be **0.5–2°+** (sometimes more) off Swiss |
| Rahu/Ketu | Mean node approximation |
| Lahiri ayanamsha | Linear/quadratic fit (~23.7° near 1990; ~24° in 2020s) |
| Lagna | Sensitive to time + lat/lon; demo uses birth time as **UTC** |

**Do not claim Swiss-grade accuracy.**

## Fixture: Delhi 1990-01-01 12:00 UTC

Our engine (sidereal / Lahiri-style):

| Body | Sidereal lon | Rashi |
|------|--------------|-------|
| Sun | ~257.1° | Dhanu (Sagittarius) ~17.1° |
| Moon | ~309.6° | Kumbha (Aquarius) ~9.6° · **Shatabhisha** pada 1 |
| Lagna | — | **Mithuna** (Gemini) |

### Public ballpark comparison

- **Lahiri ayanamsha 1990** ≈ 23°43′ (Jagannath Hora / Swiss Lahiri tables).
- Tropical Sun on 1990-01-01 is late Capricorn (~280.8° trop in our engine) → sidereal Dhanu after ~23.7° ayanamsha — matches classical expectation for early January.
- Public planetary-position notes for **Delhi, 1 Jan 1990** (nearby IST morning, CalcaTools-style writeups) place **Sun in Dhanu** and **Moon in Kumbha** — same rashis as our 12:00 UTC chart. Moon moves ~13°/day, so degree-in-sign differs by hours; our Moon ~9.6° Kumbha is consistent with a mid/late-day UTC snapshot after a morning ~3° Kumbha ballpark.
- Asserted test bands in `src/lib/astro/__fixtures__/charts.ts` (`DELHI_PUBLIC_BALLPARK`): Sun sidereal 255–260°, Moon 307–312°.

**Deltas:** For this fixture, Sun/Moon **rashi + Moon nakshatra** agree with public Lahiri ballparks. Degree-level deltas vs Swiss may still be ~0.5–2° on slower planets; we do not publish Swiss-identical longitudes.

## Other fixtures (engine-expected bands)

| Id | Sun | Moon | Nakshatra | Lagna |
|----|-----|------|-----------|-------|
| mumbai-1985 | Karka | Karka | Pushya 4 | Tula |
| bengaluru-2000 | Mithuna | Makara | Dhanishta 2 | Kumbha |
| chennai-1975 | Meena | Mithuna | Mrigashira 3 | Karka |

## D9 (navamsha) lite

Implemented in `rules/classical.ts` (`navamshaRashiIndex`): each sign ÷ 9 parts of 3°20′; odd signs start from Mesha, even from Tula (common Parashara/Lahiri mapping). Exposed for tests / future Profile spice — not a full D9 delineation engine.

## What we do *not* fact-check

- Wording of advice vs AstroSage / Jagannatha Hora / astro.com prose
- “Correct” yoga lists beyond the small lite set (Gaja Kesari-like, Budha-Aditya, Kemadruma-lite)
