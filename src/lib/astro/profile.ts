import {
  GRAHAS,
  NAKSHATRAS,
  type BirthConfig,
  type GrahaId,
  type LonMap,
} from './constants';
import { ascendant, julianDay, lst } from './math';
import {
  computePlanets,
  computeSpeeds,
  nakshatraInfo,
  rashiIndex,
  rashiName,
  wholeSignHouse,
} from './planets';
import { vimshottari } from './dasha';

/** Sign lords (whole-sign) */
const RASHI_LORDS: GrahaId[] = [
  'Mars', // Mesha
  'Venus', // Vrishabha
  'Mercury', // Mithuna
  'Moon', // Karka
  'Sun', // Simha
  'Mercury', // Kanya
  'Venus', // Tula
  'Mars', // Vrischika
  'Jupiter', // Dhanu
  'Saturn', // Makara
  'Saturn', // Kumbha
  'Jupiter', // Meena
];

const LAGNA_ESSENCE: Record<string, string> = {
  Mesha: 'You meet the world head-on — initiative, heat, and a bias toward action before consensus.',
  Vrishabha: 'You build through steadiness and taste — value, body-sense, and loyalty to what lasts.',
  Mithuna: 'You orient through curiosity and exchange — words, routes, and dual tracks of attention.',
  Karka: 'You lead from the emotional tide — protectiveness, memory, and a need for safe harbour.',
  Simha: 'You radiate a centre — dignity, creative will, and an instinct to be seen as sovereign.',
  Kanya: 'You refine and serve through precision — analysis, craft, and quiet competence.',
  Tula: 'You weigh and relate — diplomacy, aesthetic balance, and partnership as a mirror.',
  Vrischika: 'You intensify and probe — depth, secrecy, and transformative will under pressure.',
  Dhanu: 'You aim beyond the near field — belief, teaching, and restless expansion of horizon.',
  Makara: 'You climb with structure — duty, endurance, and long-game authority.',
  Kumbha: 'You network the future — systems, unconventional peers, and detached idealism.',
  Meena: 'You dissolve boundaries — empathy, dream logic, and porous edges between self and other.',
};

const MOON_SIGN: Record<string, string> = {
  Mesha: 'Emotions ignite quickly and seek an outlet; mood is martial and restless until expressed.',
  Vrishabha: 'Feelings settle when comfort, beauty, and reliability are secured; attachment runs deep.',
  Mithuna: 'The mind narrates feeling — talk, novelty, and mental companionship regulate the heart.',
  Karka: 'Sensitivity is oceanic; belonging and ancestral memory colour every response.',
  Simha: 'Pride and warmth braid together; recognition soothes, slight wounds the centre.',
  Kanya: 'Emotion is sorted into categories; care shows as usefulness and quiet critique.',
  Tula: 'Harmony-seeking; relational weather dictates inner weather more than admitted.',
  Vrischika: 'Feelings are all-or-nothing — loyalty, jealousy, and regenerative depth.',
  Dhanu: 'Mood expands toward meaning; boredom or dogma collapses the emotional sky.',
  Makara: 'Affect is reserved and durable; safety is earned through competence and time.',
  Kumbha: 'Detached care — friendship-toned emotion, quirky needs, group belonging.',
  Meena: 'Diffuse empathy; dreams, music, and compassion blur self/other lines.',
};

const NAK_MIND: Record<string, string> = {
  Ashwini: 'Swift healer impulse — start before the map is finished.',
  Bharani: 'Creative pressure and containment; birth-through-constraint motif.',
  Krittika: 'Cutting clarity; purification and sharp discernment.',
  Rohini: 'Growth, allure, and fertile focus once a target is chosen.',
  Mrigashira: 'Seeking mind — hunt, sniff, revise; rarely still.',
  Ardra: 'Storm-clearing intellect; tear-down before rebuild.',
  Punarvasu: 'Return and renew; optimism after scatter.',
  Pushya: 'Nourishing steadiness; priestly care and timing.',
  Ashlesha: 'Coiled insight; hypnotic perception and caution with entanglement.',
  Magha: 'Ancestral throne; pride in lineage and ceremonial presence.',
  'Purva Phalguni': 'Pleasure-craft; creative ease and social warmth.',
  'Uttara Phalguni': 'Allied contracts; lasting bonds through duty.',
  Hasta: 'Skillful hands; craft, sleight, and practical magic.',
  Chitra: 'Design brilliance; shape beauty into form.',
  Swati: 'Independent wind; flexible path, self-directed.',
  Vishakha: 'Forked determination; aim at dual goals until one wins.',
  Anuradha: 'Devotional network; loyalty in orbit around a cause.',
  Jyeshtha: 'Elder authority; protect rank and earned expertise.',
  Mula: 'Root excavation; dismantle to find bare truth.',
  'Purva Ashadha': 'Invincible early push; declare victory mid-climb.',
  'Uttara Ashadha': 'Structured triumph; lasting win through alliance.',
  Shravana: 'Deep listening; learn by transmission and echo.',
  Dhanishta: 'Rhythm and fame; ensemble drive, timed bursts.',
  Shatabhisha: 'Veiled systems healer; eccentric cures.',
  'Purva Bhadrapada': 'Fierce idealism; edge sacrifice for vision.',
  'Uttara Bhadrapada': 'Patient depth; wisdom from the long dark.',
  Revati: 'Shepherding close; soft completion and guidance.',
};

const SUN_DRIVE: Record<string, string> = {
  Mesha: 'Vitality peaks when pioneering; identity forged in contest.',
  Vrishabha: 'Vitality through embodied security and creative possession.',
  Mithuna: 'Vitality in dialogue, learning loops, and dual roles.',
  Karka: 'Vitality tied to home base, family field, and emotional weather.',
  Simha: 'Vitality when centre-stage — creative leadership is fuel.',
  Kanya: 'Vitality via craft mastery and useful service.',
  Tula: 'Vitality in fair exchange and aesthetic partnership.',
  Vrischika: 'Vitality in crisis alchemy and intimate power.',
  Dhanu: 'Vitality through belief quests and far-range aims.',
  Makara: 'Vitality in achievement architecture and status earned.',
  Kumbha: 'Vitality among innovators and future-facing tribes.',
  Meena: 'Vitality in imaginative immersion and compassionate cause.',
};

const HOUSE_BEHAVIOUR: Record<number, string> = {
  1: 'colours self-presentation and body language directly',
  2: 'shows in speech, values, and resource habits',
  3: 'drives courage, siblings/peers, and short-range hustle',
  4: 'roots in home, mother-field, and private mood base',
  5: 'expresses via creativity, romance, and speculative play',
  6: 'works through service, rivals, and daily discipline',
  7: 'plays out in one-to-one contracts and mirroring others',
  8: 'deepens via shared resources, secrecy, and rebirth cycles',
  9: 'orients toward dharma, teachers, and long journeys',
  10: 'aims at vocation, public face, and hierarchical climb',
  11: 'networks gains, allies, and future-facing groups',
  12: 'withdraws into solitude, loss, and liminal spaces',
};

const PLANET_STYLE: Partial<Record<GrahaId, Record<string, string>>> = {
  Mercury: {
    Mesha: 'blunt, fast speech; ideas as weapons or sparks',
    Vrishabha: 'deliberate, sensory language; stubborn opinions once set',
    Mithuna: 'native wit; restless multitasking intellect',
    Karka: 'feeling-toned logic; memory-rich conversation',
    Simha: 'dramatic phrasing; opinions as performance',
    Kanya: 'analytic scalpel; lists, edits, service-minded mind',
    Tula: 'diplomatic phrasing; weighs both sides aloud',
    Vrischika: 'probing questions; strategic silence',
    Dhanu: 'big-picture talk; preachy when unchecked',
    Makara: 'structured argument; dry professional tone',
    Kumbha: 'systems thinker; eccentric vocabulary',
    Meena: 'poetic/diffuse mind; intuition over syllabus',
  },
  Venus: {
    Mesha: 'desire pursues; romance as conquest spark',
    Vrishabha: 'sensual loyalty; beauty as nest',
    Mithuna: 'flirtatious exchange; variety in affection',
    Karka: 'nurturing love; attachment to familiar',
    Simha: 'grand gestures; pride in the beloved',
    Kanya: 'care through utility; critical affection',
    Tula: 'partnership artist; harmony as craft',
    Vrischika: 'intense bond; transformative desire',
    Dhanu: 'love of freedom and shared ideals',
    Makara: 'committed, status-aware affection',
    Kumbha: 'friendly, unconventional bonding',
    Meena: 'devotional/romantic idealism; porous edges',
  },
  Mars: {
    Mesha: 'direct force; competitive ignition',
    Vrishabha: 'stubborn endurance; slow-burn assertiveness',
    Mithuna: 'argumentative drive; scattered heat',
    Karka: 'defensive passion; mood-fuelled action',
    Simha: 'proud courage; theatrical will',
    Kanya: 'precise effort; craft-warrior',
    Tula: 'assertiveness via negotiation and charm',
    Vrischika: 'strategic intensity; surgical will',
    Dhanu: 'ideological crusader; restless campaign',
    Makara: 'disciplined ambition; climb-as-combat',
    Kumbha: 'collective fighter; cause over ego',
    Meena: 'diffused drive; sacrifice or escape under stress',
  },
};

export interface ProfilePlacement {
  id: GrahaId;
  lon: number;
  rashi: string;
  degree: number;
  house: number;
  nakshatra: string;
  pada: number;
  retrograde: boolean;
}

export interface ProfileSection {
  id: string;
  title: string;
  body: string;
  /** Placement citations that drove the copy */
  cites: string[];
}

export interface NatalProfile {
  name: string;
  placeLabel?: string;
  birthSummary: string;
  lagna: { rashi: string; degree: number; lord: GrahaId };
  moon: { rashi: string; nakshatra: string; pada: number; house: number };
  sun: { rashi: string; nakshatra: string; pada: number; house: number };
  grahas: ProfilePlacement[];
  dominant: string[];
  sections: ProfileSection[];
  dasha: { maha: string; antar: string };
}

function nakLord(nakIndex: number): GrahaId {
  // Vimshottari: Ashwini=Ketu, then Venus, Sun, Moon, Mars, Rahu, Jupiter, Saturn, Mercury
  const lords: GrahaId[] = [
    'Ketu',
    'Venus',
    'Sun',
    'Moon',
    'Mars',
    'Rahu',
    'Jupiter',
    'Saturn',
    'Mercury',
  ];
  return lords[nakIndex % 9];
}

function citeGraha(p: ProfilePlacement): string {
  const r = p.retrograde ? ' R' : '';
  return `${p.id} in ${p.rashi}, ${p.house}th${r}`;
}

function houseWeight(grahas: ProfilePlacement[]): Map<number, number> {
  const w = new Map<number, number>();
  const weight: Partial<Record<GrahaId, number>> = {
    Sun: 3,
    Moon: 3,
    Mars: 2,
    Mercury: 2,
    Jupiter: 2,
    Venus: 2,
    Saturn: 2,
    Rahu: 1.5,
    Ketu: 1.5,
  };
  for (const g of grahas) {
    w.set(g.house, (w.get(g.house) || 0) + (weight[g.id] || 1));
  }
  return w;
}

export function computeNatalProfile(
  birth: BirthConfig,
  nowDate: Date = new Date(),
): NatalProfile | null {
  if (birth.isDemo) return null;

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
  const jd = julianDay(birthDt);
  const planets = computePlanets(jd);
  const speeds = computeSpeeds(jd);
  const lat = +birth.lat;
  const lon = +birth.lon;
  const asc = ascendant(lst(jd, lon), lat, jd);
  const lagRashi = rashiName(asc.sidereal);
  const lagDeg = asc.sidereal % 30;
  const lagLord = RASHI_LORDS[rashiIndex(asc.sidereal)];

  const grahas: ProfilePlacement[] = GRAHAS.map((g) => {
    const lonS = planets[g.id].sidereal;
    const nak = nakshatraInfo(lonS);
    return {
      id: g.id,
      lon: lonS,
      rashi: rashiName(lonS),
      degree: lonS % 30,
      house: wholeSignHouse(lonS, asc.sidereal),
      nakshatra: nak.name,
      pada: nak.pada,
      retrograde: speeds[g.id] < -0.01,
    };
  });

  const byId = Object.fromEntries(grahas.map((g) => [g.id, g])) as Record<
    GrahaId,
    ProfilePlacement
  >;
  const moon = byId.Moon;
  const sun = byId.Sun;
  const lagLordP = byId[lagLord];
  const moonNakIdx = NAKSHATRAS.indexOf(
    moon.nakshatra as (typeof NAKSHATRAS)[number],
  );
  const moonNakLord = nakLord(moonNakIdx >= 0 ? moonNakIdx : 0);

  const weights = houseWeight(grahas);
  const topHouses = [...weights.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([h]) => h);

  const dominant: string[] = [
    `Lagna ${lagRashi} (lord ${lagLord})`,
    `Moon ${moon.rashi} · ${moon.nakshatra} p${moon.pada}`,
    `Sun ${sun.rashi}`,
    `Emphasized houses: ${topHouses.map((h) => `${h}`).join(', ')}`,
    `Moon nak lord: ${moonNakLord}`,
  ];

  let dasha = { maha: '—', antar: '—' };
  try {
    const d = vimshottari(birthDt, nowDate);
    dasha = { maha: d.maha, antar: d.antar };
  } catch {
    /* ignore */
  }

  const sections: ProfileSection[] = [];

  // 1 Essence
  const lagnaText = LAGNA_ESSENCE[lagRashi] || 'Lagna sets the outer style.';
  const moonBlend = MOON_SIGN[moon.rashi] || '';
  sections.push({
    id: 'essence',
    title: 'Essence',
    body: `${lagnaText} Internally, ${moonBlend} The blend of ${lagRashi} rising with a ${moon.rashi} Moon gives a temperament that ${
      lagRashi === moon.rashi
        ? 'reinforces one clear signature — outer style and inner weather agree.'
        : 'negotiates between how you appear and how you feel; integration is lifelong craft.'
    } Lagna lord ${lagLord} in the ${lagLordP.house}th ${HOUSE_BEHAVIOUR[lagLordP.house] || 'shapes the life vector'}.`,
    cites: [
      `Lagna ${lagRashi} ${lagDeg.toFixed(1)}°`,
      `Moon in ${moon.rashi}, ${moon.house}th · ${moon.nakshatra} p${moon.pada}`,
      citeGraha(lagLordP),
    ],
  });

  // 2 Mind & emotions
  const padaNote =
    moon.pada === 1
      ? 'Pada 1 leans initiatory within the nakshatra.'
      : moon.pada === 2
        ? 'Pada 2 seeks stability and resource inside the star.'
        : moon.pada === 3
          ? 'Pada 3 sharpens courage and skillful effort.'
          : 'Pada 4 ripens toward wisdom and completion tones.';
  sections.push({
    id: 'mind',
    title: 'Mind & emotions',
    body: `${MOON_SIGN[moon.rashi] || ''} Nakshatra ${moon.nakshatra}: ${NAK_MIND[moon.nakshatra] || 'lunar texture unique to this star.'} ${padaNote} Ruled in Vimshottari by ${moonNakLord}, the emotional narrative often runs through ${moonNakLord}-flavoured themes.`,
    cites: [
      `Moon in ${moon.rashi}, ${moon.house}th`,
      `${moon.nakshatra} p${moon.pada}`,
      `Nak lord ${moonNakLord}`,
    ],
  });

  // 3 Drive & vitality
  sections.push({
    id: 'drive',
    title: 'Drive & vitality',
    body: `${SUN_DRIVE[sun.rashi] || 'Solar identity seeks expression through its sign.'} Sun in the ${sun.house}th ${HOUSE_BEHAVIOUR[sun.house] || ''}. Nakshatra ${sun.nakshatra} (p${sun.pada}) tints the will with that star’s method.`,
    cites: [
      `Sun in ${sun.rashi}, ${sun.house}th · ${sun.nakshatra} p${sun.pada}`,
    ],
  });

  // 4 Behavioural style
  const merc = byId.Mercury;
  const ven = byId.Venus;
  const mars = byId.Mars;
  const mercLine =
    PLANET_STYLE.Mercury?.[merc.rashi] ||
    `Mercury in ${merc.rashi} colours cognition`;
  const venLine =
    PLANET_STYLE.Venus?.[ven.rashi] || `Venus in ${ven.rashi} colours desire`;
  const marsLine =
    PLANET_STYLE.Mars?.[mars.rashi] || `Mars in ${mars.rashi} colours assertion`;
  sections.push({
    id: 'behaviour',
    title: 'Behavioural style',
    body: `Lagna lord ${lagLord} in ${lagLordP.rashi} (${lagLordP.house}th) is the primary behavioural engine — it ${HOUSE_BEHAVIOUR[lagLordP.house] || 'steers conduct'}${lagLordP.retrograde ? ' (retrograde: internalized / revisited expression)' : ''}. Mercury: ${mercLine}; occupies ${merc.house}th. Venus: ${venLine}; ${ven.house}th. Mars: ${marsLine}; ${mars.house}th.`,
    cites: [
      citeGraha(lagLordP),
      citeGraha(merc),
      citeGraha(ven),
      citeGraha(mars),
    ],
  });

  // 5 Relational / outer
  const jup = byId.Jupiter;
  const h7occupants = grahas.filter((g) => g.house === 7).map((g) => g.id);
  const relBits: string[] = [];
  relBits.push(
    `7th-house field ${
      h7occupants.length
        ? `hosts ${h7occupants.join(', ')} — partners mirror those tones`
        : `is empty of grahas — relationships often activate through lord of 7th (${RASHI_LORDS[(rashiIndex(asc.sidereal) + 6) % 12]}) rather than packed conjunctions`
    }.`,
  );
  relBits.push(
    `Venus in ${ven.rashi}/${ven.house}th sets pleasure and bonding style; Jupiter in ${jup.rashi}/${jup.house}th expands grace, teachers, and ethical stretch${jup.retrograde ? ' (Jupiter R: internalized faith, revised mentors)' : ''}.`,
  );
  sections.push({
    id: 'relational',
    title: 'Relational / outer life',
    body: relBits.join(' '),
    cites: [
      `7th from Lagna ${lagRashi}`,
      citeGraha(ven),
      citeGraha(jup),
      ...(h7occupants.length
        ? h7occupants.map((id) => citeGraha(byId[id]))
        : [`7th lord ${RASHI_LORDS[(rashiIndex(asc.sidereal) + 6) % 12]}`]),
    ],
  });

  // 6 Pressures & growth
  const sat = byId.Saturn;
  const rahu = byId.Rahu;
  const ketu = byId.Ketu;
  const pressure: string[] = [];
  pressure.push(
    `Saturn in ${sat.rashi}/${sat.house}th asks for time-discipline where that house lives — delay as teacher, not punishment.`,
  );
  pressure.push(
    `Rahu in ${rahu.rashi}/${rahu.house}th hungers toward unfamiliar mastery there; Ketu in ${ketu.rashi}/${ketu.house}th releases or distills the opposite axis.`,
  );
  if (mars.house === 1 || mars.house === 8 || mars.house === 12) {
    pressure.push(
      `Mars in ${mars.house}th sharpens heat in self/crisis/withdrawal zones — channel into clean effort.`,
    );
  } else if (mars.retrograde) {
    pressure.push(
      'Mars retrograde turns assertion inward first — strategize before strike.',
    );
  } else {
    pressure.push(
      `Mars in ${mars.house}th supplies courage that ${HOUSE_BEHAVIOUR[mars.house] || 'needs a worthy contest'}.`,
    );
  }
  sections.push({
    id: 'growth',
    title: 'Pressures & growth',
    body: pressure.join(' '),
    cites: [citeGraha(sat), citeGraha(rahu), citeGraha(ketu), citeGraha(mars)],
  });

  // 7 Dasha colour
  const mahaTone: Record<string, string> = {
    Sun: 'visibility, authority tests, and identity heat are foregrounded',
    Moon: 'mood currents, care loops, and public-private tides lead',
    Mars: 'decisive force, conflict craft, and initiative spike',
    Mercury: 'commerce of ideas, skill traffic, and nervous agility',
    Jupiter: 'expansion, teaching, and ethical opportunity widen',
    Venus: 'bond, art, and desire-harmony colour choices',
    Saturn: 'long grind, structure, and sober accountability',
    Rahu: 'unconventional hunger and foreign/novel vectors',
    Ketu: 'release, distill, and sideways insight',
  };
  sections.push({
    id: 'dasha',
    title: 'Dasha colour · now',
    body: `Current Mahadasha ${dasha.maha} with Antardasha ${dasha.antar}: ${mahaTone[dasha.maha] || 'period themes active'}, while antar ${dasha.antar} ${mahaTone[dasha.antar] || 'modulates the subplot'}. This is how the natal pattern shows in the present chapter — not a rewrite of the chart.`,
    cites: [`Maha ${dasha.maha}`, `Antar ${dasha.antar}`],
  });

  const place =
    birth.placeLabel ||
    `${lat.toFixed(2)}°, ${lon.toFixed(2)}°`;

  return {
    name: birth.name || 'Native',
    placeLabel: birth.placeLabel,
    birthSummary: `${birth.date} ${String(birth.h).padStart(2, '0')}:${String(birth.m).padStart(2, '0')}:${String(birth.s).padStart(2, '0')} UTC · ${place}`,
    lagna: { rashi: lagRashi, degree: lagDeg, lord: lagLord },
    moon: {
      rashi: moon.rashi,
      nakshatra: moon.nakshatra,
      pada: moon.pada,
      house: moon.house,
    },
    sun: {
      rashi: sun.rashi,
      nakshatra: sun.nakshatra,
      pada: sun.pada,
      house: sun.house,
    },
    grahas,
    dominant,
    sections,
    dasha,
  };
}

/** Convenience: natal lon map at birth (for other callers) */
export function natalLonMap(birth: BirthConfig): LonMap {
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
  const pl = computePlanets(julianDay(birthDt));
  const out = {} as LonMap;
  for (const g of GRAHAS) out[g.id] = pl[g.id].sidereal;
  return out;
}

