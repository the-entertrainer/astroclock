import {
  GRAHAS,
  type BirthConfig,
  type GrahaId,
  type LonMap,
  type PlanetMap,
  type SpeedMap,
} from './constants';
import { absShortest, ascendant, julianDay, lst, norm360, shortestArc } from './math';
import {
  computePlanets,
  computeSpeeds,
  computeTithi,
  findAspect,
  harmonicScore,
  nakshatraInfo,
  rashiIndex,
  rashiName,
} from './planets';
import { vimshottari } from './dasha';

/** Personal planets used for natal spotlight hits */
const PERSONAL: GrahaId[] = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'];

const ASPECT_LABEL: Record<number, string> = {
  0: 'conjunct',
  60: 'sextile',
  90: 'square',
  120: 'trine',
  180: 'oppose',
};

const NAK_THEMES: Record<string, string> = {
  Ashwini: 'swift starts · heal & initiate',
  Bharani: 'hold & transform · creative pressure',
  Krittika: 'cut clean · sharpen focus',
  Rohini: 'grow & attract · sensual craft',
  Mrigashira: 'seek & scan · curious hunt',
  Ardra: 'storm clarity · tear then rebuild',
  Punarvasu: 'renew · return with bounty',
  Pushya: 'nourish · steady care',
  Ashlesha: 'coil insight · psychic edge',
  Magha: 'ancestral fire · claim seat',
  'Purva Phalguni': 'play & pleasure · creative ease',
  'Uttara Phalguni': 'ally & contract · lasting bonds',
  Hasta: 'skillful hands · craft precision',
  Chitra: 'design brilliance · shape beauty',
  Swati: 'independent wind · flexible path',
  Vishakha: 'aim dual goals · determined fork',
  Anuradha: 'devotion network · loyal orbit',
  Jyeshtha: 'elder authority · protect rank',
  Mula: 'root dig · dismantle to truth',
  'Purva Ashadha': 'early victory · invincible push',
  'Uttara Ashadha': 'lasting win · structured triumph',
  Shravana: 'listen deep · learn transmission',
  Dhanishta: 'rhythm & fame · ensemble drive',
  Shatabhisha: 'veiled healing · systems cure',
  'Purva Bhadrapada': 'fierce idealism · edge sacrifice',
  'Uttara Bhadrapada': 'deep wisdom · patient depth',
  Revati: 'shepherd close · soft completion',
};

const RASHI_THEMES: Record<string, string> = {
  Mesha: 'initiate · raw momentum',
  Vrishabha: 'stabilize · value & body',
  Mithuna: 'connect · message traffic',
  Karka: 'shelter · emotional tide',
  Simha: 'radiate · creative center',
  Kanya: 'refine · analyze & serve',
  Tula: 'balance · relate & weigh',
  Vrischika: 'intensify · covert power',
  Dhanu: 'expand · aim beyond',
  Makara: 'structure · climb & endure',
  Kumbha: 'network · future systems',
  Meena: 'dissolve · dream & merge',
};

const DASHA_TONE: Record<string, string> = {
  Sun: 'identity heat · visibility',
  Moon: 'mood current · care loops',
  Mars: 'drive & cut · decisive force',
  Mercury: 'signal traffic · trade ideas',
  Jupiter: 'expand grace · teach & trust',
  Venus: 'desire harmony · art & bond',
  Saturn: 'pressure craft · long grind',
  Rahu: 'hunger vector · unconventional pull',
  Ketu: 'release vector · detach & distill',
};

export type ClimateLabel = 'tense' | 'fluid' | 'peak' | 'quiet' | 'volatile';

export interface AspectHit {
  a: GrahaId;
  b: GrahaId;
  angle: number;
  label: string;
  orb: number;
  kind: 'transit' | 'natal';
  motion: 'applying' | 'separating' | 'exact';
}

export interface InsightCard {
  id: string;
  tone: 'sky' | 'soft' | 'hard' | 'spotlight' | 'dasha' | 'quiet';
  title: string;
  body: string;
}

export interface TodayInsights {
  dasha: { maha: string; antar: string; tone: string };
  moon: {
    rashi: string;
    nakshatra: string;
    pada: number;
    waxing: boolean;
    hoursToNextNak: number | null;
    hoursToNextRashi: number | null;
  };
  lagna: {
    rashi: string;
    degree: number;
    changedVs2h: boolean;
    prevRashi: string;
  };
  retrogrades: GrahaId[];
  aspects: AspectHit[];
  hrs: number;
  climate: ClimateLabel;
  climateNote: string;
  cards: InsightCard[];
  isDemoNatal: boolean;
}

function hoursToBoundary(
  currentLon: number,
  speedDegPerDay: number,
  boundaryEvery: number,
): number | null {
  if (Math.abs(speedDegPerDay) < 1e-6) return null;
  const lon = norm360(currentLon);
  const into = lon % boundaryEvery;
  if (speedDegPerDay > 0) {
    const rem = boundaryEvery - into;
    return (rem / speedDegPerDay) * 24;
  }
  const rem = into === 0 ? boundaryEvery : into;
  return (rem / Math.abs(speedDegPerDay)) * 24;
}

function aspectMotion(
  lonA: number,
  lonB: number,
  speedA: number,
  speedB: number,
  angle: number,
): 'applying' | 'separating' | 'exact' {
  const rel = speedA - speedB;
  const dNow = Math.abs(absShortest(lonA, lonB) - angle);
  if (dNow < 0.15) return 'exact';
  const dLater = Math.abs(absShortest(lonA + rel / 24, lonB) - angle);
  if (Math.abs(dNow - dLater) < 1e-4) return 'exact';
  return dLater < dNow ? 'applying' : 'separating';
}

function collectTransitAspects(
  planets: PlanetMap,
  speeds: SpeedMap,
): AspectHit[] {
  const hits: AspectHit[] = [];
  const ids = GRAHAS.map((g) => g.id);
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      const a = ids[i];
      const b = ids[j];
      const asp = findAspect(planets[a].sidereal, planets[b].sidereal);
      if (!asp) continue;
      const orb = absShortest(planets[a].sidereal, planets[b].sidereal);
      const trueOrb = Math.abs(orb - asp.angle);
      if (trueOrb > 3) continue;
      hits.push({
        a,
        b,
        angle: asp.angle,
        label: ASPECT_LABEL[asp.angle] || `${asp.angle}°`,
        orb: trueOrb,
        kind: 'transit',
        motion: aspectMotion(
          planets[a].sidereal,
          planets[b].sidereal,
          speeds[a],
          speeds[b],
          asp.angle,
        ),
      });
    }
  }
  hits.sort((x, y) => x.orb - y.orb);
  return hits.slice(0, 8);
}

function collectNatalHits(
  transit: PlanetMap,
  natal: LonMap,
  speeds: SpeedMap,
): AspectHit[] {
  const hits: AspectHit[] = [];
  for (const t of PERSONAL) {
    for (const n of GRAHAS) {
      const asp = findAspect(transit[t].sidereal, natal[n.id]);
      if (!asp) continue;
      const trueOrb = Math.abs(
        absShortest(transit[t].sidereal, natal[n.id]) - asp.angle,
      );
      if (trueOrb > 2.5) continue;
      hits.push({
        a: t,
        b: n.id,
        angle: asp.angle,
        label: ASPECT_LABEL[asp.angle] || `${asp.angle}°`,
        orb: trueOrb,
        kind: 'natal',
        motion: aspectMotion(
          transit[t].sidereal,
          natal[n.id],
          speeds[t],
          0,
          asp.angle,
        ),
      });
    }
  }
  hits.sort((x, y) => x.orb - y.orb);
  return hits.slice(0, 6);
}

function climateFrom(
  hrs: number,
  soft: number,
  hard: number,
  exactHard: number,
): { climate: ClimateLabel; note: string } {
  if (exactHard >= 2 || (hard >= 4 && soft <= 1)) {
    return { climate: 'volatile', note: 'many hard edges locking in' };
  }
  if (soft + hard <= 1) {
    return { climate: 'quiet', note: 'sparse aspect weave — void-ish sky' };
  }
  if (hrs >= 72 && soft >= hard) {
    return { climate: 'peak', note: 'soft density cresting' };
  }
  if (hard > soft + 1) {
    return { climate: 'tense', note: 'squares/oppositions dominate' };
  }
  return { climate: 'fluid', note: 'trines/sextiles ease traffic' };
}

function buildCards(args: {
  moonNak: string;
  moonRashi: string;
  soft: number;
  hard: number;
  natalHits: AspectHit[];
  dasha: { maha: string; antar: string };
  natal: LonMap | null;
  transit: PlanetMap;
  isDemo: boolean;
  climate: ClimateLabel;
}): InsightCard[] {
  const cards: InsightCard[] = [];

  const nakTheme = NAK_THEMES[args.moonNak] || 'lunar weather shift';
  const rashiTheme = RASHI_THEMES[args.moonRashi] || 'sign tone';
  cards.push({
    id: 'moon-nak',
    tone: 'sky',
    title: `Moon · ${args.moonNak}`,
    body: `${nakTheme}. In ${args.moonRashi}: ${rashiTheme}.`,
  });

  if (args.soft > args.hard + 1) {
    cards.push({
      id: 'texture-soft',
      tone: 'soft',
      title: 'Day texture · fluid',
      body: `${args.soft} soft vs ${args.hard} hard — collaboration and flow favored over friction.`,
    });
  } else if (args.hard > args.soft + 1) {
    cards.push({
      id: 'texture-hard',
      tone: 'hard',
      title: 'Day texture · edged',
      body: `${args.hard} hard vs ${args.soft} soft — precision under pressure; watch sharp turns.`,
    });
  } else if (args.soft + args.hard <= 1) {
    cards.push({
      id: 'texture-quiet',
      tone: 'quiet',
      title: 'Day texture · quiet',
      body: 'Few exact aspects — sparse sky. Good for deep work, poor for forced pivots.',
    });
  } else {
    cards.push({
      id: 'texture-mixed',
      tone: 'sky',
      title: 'Day texture · mixed',
      body: `${args.soft} soft · ${args.hard} hard — alternate push and glide.`,
    });
  }

  if (args.isDemo || !args.natal) {
    cards.push({
      id: 'nudge-birth',
      tone: 'quiet',
      title: 'Transit sky only',
      body: 'Set birth data for natal↔transit spotlights and dasha-lord hits.',
    });
  } else {
    for (const hit of args.natalHits.slice(0, 3)) {
      const conj = hit.angle === 0;
      cards.push({
        id: `spot-${hit.a}-${hit.b}-${hit.angle}`,
        tone: 'spotlight',
        title: conj
          ? `Spotlight · t${hit.a} ☌ n${hit.b}`
          : `Hit · t${hit.a} ${hit.label} n${hit.b}`,
        body: `${hit.orb.toFixed(1)}° ${hit.motion} — personal planet lighting natal ${hit.b}.`,
      });
    }

    const maha = args.dasha.maha as GrahaId;
    const antar = args.dasha.antar as GrahaId;
    const lords = [maha, antar].filter((x, i, a) => a.indexOf(x) === i);
    let dashaCardAdded = false;
    for (const lord of lords) {
      if (dashaCardAdded || !args.natal[lord]) continue;
      for (const t of PERSONAL) {
        const toLord = findAspect(args.transit[t].sidereal, args.natal[lord]);
        if (
          toLord &&
          Math.abs(
            absShortest(args.transit[t].sidereal, args.natal[lord]) -
              toLord.angle,
          ) <= 2.5
        ) {
          cards.push({
            id: `dasha-${t}-${lord}`,
            tone: 'dasha',
            title: `Dasha echo · ${lord}`,
            body: `t${t} ${ASPECT_LABEL[toLord.angle]} natal ${lord} (period lord). Theme amp.`,
          });
          dashaCardAdded = true;
          break;
        }
        const toMoon = findAspect(args.transit[t].sidereal, args.natal.Moon);
        if (
          toMoon &&
          lord !== 'Moon' &&
          Math.abs(
            absShortest(args.transit[t].sidereal, args.natal.Moon) -
              toMoon.angle,
          ) <= 2
        ) {
          cards.push({
            id: `dasha-moon-${t}`,
            tone: 'dasha',
            title: 'Dasha · Moon lit',
            body: `t${t} touches natal Moon while ${maha}/${antar} runs — mood is the channel.`,
          });
          dashaCardAdded = true;
          break;
        }
      }
    }
  }

  if (args.climate === 'volatile') {
    cards.push({
      id: 'vol',
      tone: 'hard',
      title: 'Volatile window',
      body: 'Multiple exact hard aspects — expect rapid polarity flips; tighten scope.',
    });
  }

  const seen = new Set<string>();
  return cards
    .filter((c) => {
      if (seen.has(c.id)) return false;
      seen.add(c.id);
      return true;
    })
    .slice(0, 7);
}

export function computeTodayInsights(
  simDate: Date,
  birth: BirthConfig,
  natalLons: LonMap | null,
): TodayInsights {
  const jd = julianDay(simDate);
  const planets = computePlanets(jd);
  const speeds = computeSpeeds(jd);
  const lat = +birth.lat;
  const lon = +birth.lon;

  const asc = ascendant(lst(jd, lon), lat, jd);
  const lagDeg = asc.sidereal % 30;
  const lagRashi = rashiName(asc.sidereal);

  const jd2h = jd - 2 / 24;
  const asc2h = ascendant(lst(jd2h, lon), lat, jd2h);
  const prevRashi = rashiName(asc2h.sidereal);
  const changedVs2h = rashiIndex(asc.sidereal) !== rashiIndex(asc2h.sidereal);

  const moonLon = planets.Moon.sidereal;
  const nak = nakshatraInfo(moonLon);
  const moonRashi = rashiName(moonLon);
  const tithi = computeTithi(moonLon, planets.Sun.sidereal);
  const waxing = tithi.paksha === 'Shukla';

  const moonSpeed = speeds.Moon;
  const hoursToNextNak = hoursToBoundary(moonLon, moonSpeed, 360 / 27);
  const hoursToNextRashi = hoursToBoundary(moonLon, moonSpeed, 30);

  let dasha = { maha: '—', antar: '—', tone: '' };
  try {
    const birthDt = new Date(
      Date.UTC(
        +birth.date.slice(0, 4),
        +birth.date.slice(5, 7) - 1,
        +birth.date.slice(8, 10),
        +birth.h,
        +birth.m,
        +birth.s,
      ),
    );
    const d = vimshottari(birthDt, simDate);
    dasha = {
      maha: d.maha,
      antar: d.antar,
      tone: `${DASHA_TONE[d.maha] || 'period tone'} · antar ${d.antar}: ${DASHA_TONE[d.antar] || '—'}`,
    };
  } catch {
    /* keep defaults */
  }

  const retrogrades = GRAHAS.filter((g) => speeds[g.id] < -0.01).map(
    (g) => g.id,
  );

  const transitAspects = collectTransitAspects(planets, speeds);
  const natalHits =
    natalLons && !birth.isDemo
      ? collectNatalHits(planets, natalLons, speeds)
      : [];

  let soft = 0;
  let hard = 0;
  let exactHard = 0;
  for (const h of transitAspects) {
    if (h.angle === 60 || h.angle === 120 || h.angle === 0) soft++;
    else {
      hard++;
      if (h.orb < 1) exactHard++;
    }
  }

  const hrs = harmonicScore(planets);
  const { climate, note } = climateFrom(hrs, soft, hard, exactHard);

  const cards = buildCards({
    moonNak: nak.name,
    moonRashi,
    soft,
    hard,
    natalHits,
    dasha,
    natal: natalLons,
    transit: planets,
    isDemo: !!birth.isDemo,
    climate,
  });

  return {
    dasha,
    moon: {
      rashi: moonRashi,
      nakshatra: nak.name,
      pada: nak.pada,
      waxing,
      hoursToNextNak,
      hoursToNextRashi,
    },
    lagna: {
      rashi: lagRashi,
      degree: lagDeg,
      changedVs2h,
      prevRashi,
    },
    retrogrades,
    aspects: [...transitAspects.slice(0, 5), ...natalHits.slice(0, 3)],
    hrs,
    climate,
    climateNote: note,
    cards,
    isDemoNatal: !!birth.isDemo,
  };
}

