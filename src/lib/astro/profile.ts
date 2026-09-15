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
import {
  HOUSE_LIFE,
  PLANET_SIGN_PLAIN,
  signEn,
  type AdviceBlock,
} from './influence';
import {
  adviceFromFrags,
  collectProfileAdviceFrags,
  collectProfileFrags,
  stitchParagraphs,
  grahaRashiRule,
  nakshatraRule,
  grahaBhavaRule,
  dashaPairRule,
  lagnaMoonBlend,
  detectYogas,
  atmakarakaLite,
  atmakarakaWording,
  lagneshaInHouseText,
  moonLordInHouseText,
  lordOfRashi,
  type Frag,
} from './rules';
import { lonMapFromPlanets } from './planets';

const RASHI_LORDS: GrahaId[] = [
  'Mars',
  'Venus',
  'Mercury',
  'Moon',
  'Sun',
  'Mercury',
  'Venus',
  'Mars',
  'Jupiter',
  'Saturn',
  'Saturn',
  'Jupiter',
];

/** Rising-sign character sketches — plain English */
const LAGNA_ESSENCE: Record<string, string> = {
  Mesha:
    'You tend to meet life head-on. People often read you as someone who starts before the committee finishes talking — warm under pressure, impatient with fog, and more honest in motion than in waiting rooms. Initiative is your comfort zone; restlessness shows when nothing needs doing.',
  Vrishabha:
    'You build trust slowly and keep what you value. Others may notice a calm body-sense, a good ear for comfort, and loyalty that outlasts fashion. You are not quick to pivot, and that steadiness is a feature — once you commit, you mean it.',
  Mithuna:
    'Curiosity is how you orient. You collect people, routes, and ideas the way others collect trophies, and boredom hits harder than hard work. Conversation is oxygen; you feel most yourself when something interesting is being exchanged.',
  Karka:
    'You lead from feeling and protectiveness. Belonging matters more than applause, and memory colours how you read a room. When the harbour feels safe, you are generous; when it does not, you shell up until trust returns.',
  Simha:
    'You carry a centre. Being invisible feels like a kind of exile, and creative warmth is how you lead — not only ego, but a need to put a signature on things. Recognition soothes; being taken for granted stings.',
  Kanya:
    'You refine and help through competence. Mess and vagueness bother you; usefulness feels like care. People may lean on your quiet precision more than they notice, and critique is often your love language in disguise.',
  Tula:
    'You weigh and relate. Fairness is not abstract — discord in a room becomes discord in your chest. Partnership and aesthetics are how you think, and you prefer negotiated grace to blunt force.',
  Vrischika:
    'You go deep or you go nowhere. Trust is a gate, not a greeting, and intensity sits under a still surface. Half-measures starve you; real loyalty and real honesty wake you up.',
  Dhanu:
    'You aim past the near field. Meaning, humour, and horizon keep you kind; petty loops make you irritable. You bond over shared quests more than shared furniture, and you need room to roam — literally or through learning.',
  Makara:
    'You climb with structure. Reliability outranks charm, and time is a collaborator. Status, for you, is sediment of work kept — not costume. Softness arrives after respect is earned.',
  Kumbha:
    'You network the future. Friendship-toned bonds often outlast romantic theatre, and you feel at home among odd, systems-minded people. Detachment is a shield; belonging still matters, just not on traditional terms.',
  Meena:
    'You feel through porous edges. Empathy and imagination are gifts and costs — you absorb atmospheres, so company is climate. Art, sanctuary, and quiet service suit you when feet stay on enough ground to deliver.',
};

const MOON_SIGN: Record<string, string> = {
  Mesha:
    'Emotionally you ignite fast and need an outlet. Feelings arrive as urges to act, speak, or start — sitting still with raw mood feels like holding hot iron. Honesty of temper beats polite fog, if you aim the heat.',
  Vrishabha:
    'You settle when comfort, beauty, and reliability are secured. Attachment runs deep and slow; abrupt change can feel like theft. Once your heart decides, revision takes time and sensory proof.',
  Mithuna:
    'Your heart narrates. Talk, novelty, and mental companionship regulate mood as much as hugs do. Emotions change costume when the conversation does — clarify whether you are flirting with ideas or with people.',
  Karka:
    'Sensitivity is oceanic. Belonging and family-memory colour responses, and other people’s weather enters your harbour easily. Caregiving and being cared for are lifelong themes, blood or chosen.',
  Simha:
    'Pride and warmth braid together. Recognition soothes; slight wounds the centre. You are generous when admired and creative when the heart has a witness.',
  Kanya:
    'You sort feelings into categories. Care shows as usefulness and quiet critique more than melodrama. Chaos in someone’s habits can fray the bond; repair manuals for emotion feel safer than storms.',
  Tula:
    'Harmony-seeking runs deep. Relational weather often dictates inner weather more than you admit. Beauty and fairness are emotional medicine; unfairness lands in the body.',
  Vrischika:
    'Feelings are all-or-nothing — loyalty, jealousy, regenerative depth. Surface calm may hide undertow. Trust is everything; half-open doors frustrate this Moon.',
  Dhanu:
    'Mood expands toward meaning. Boredom or dogma collapses the emotional sky. You want a horizon — belief, travel, teaching, humour that widens the frame.',
  Makara:
    'Affect is reserved and durable. Safety is earned through competence and time, not instant confession. Commitment shows as endurance; displays of feeling may come late and land heavy.',
  Kumbha:
    'Care can feel detached or friendship-toned. You may feel odd in private and lucid in groups. Quirky needs and egalitarian bonds soothe more than possessive romance.',
  Meena:
    'Empathy is diffuse. Dreams, music, and compassion blur self and other. Beautiful for art and healing; costly without boundaries. Choose company the way you choose climate.',
};

const NAK_MIND: Record<string, string> = {
  Ashwini: 'Your mind likes swift starts — begin, then correct in motion.',
  Bharani: 'You hold creative pressure until something real can be delivered.',
  Krittika: 'You cut through fog; clarity can scorch if unaimed.',
  Rohini: 'Once fascinated, you grow and attract around a chosen target.',
  Mrigashira: 'You hunt options; stillness is rare until the trail is sniffed.',
  Ardra: 'Insight often arrives after a storm — tear-down before rebuild.',
  Punarvasu: 'You bounce back; second chances feel native.',
  Pushya: 'You nourish on schedule; care and timing steady the mind.',
  Ashlesha: 'You read undercurrents; keep ethics tight in intimacy.',
  Magha: 'Legacy and rightful presence colour how you think.',
  'Purva Phalguni': 'Pleasure and creative ease loosen the mind — finish one delight.',
  'Uttara Phalguni': 'You think in lasting alliances and help that sticks.',
  Hasta: 'Skillful, hands-on cleverness; fix something tangible.',
  Chitra: 'You design beauty into form; unfinished ugliness irritates.',
  Swati: 'Independence keeps you kind; cages make you sharp.',
  Vishakha: 'You can chase dual goals — pick which summit gets heat.',
  Anuradha: 'Loyalty in orbit around people and causes regulates you.',
  Jyeshtha: 'You protect earned skill and quiet rank.',
  Mula: 'You dig to roots; honesty before polish.',
  'Purva Ashadha': 'Bold early push — declare, then prove.',
  'Uttara Ashadha': 'You prefer wins that last, through structure and allies.',
  Shravana: 'You learn by listening deeply before speaking.',
  Dhanishta: 'Rhythm and teamwork unlock you; timed bursts land.',
  Shatabhisha: 'You find odd, systems-level fixes others miss.',
  'Purva Bhadrapada': 'Ideals can fire you past comfort — aim the heat.',
  'Uttara Bhadrapada': 'Patient depth; bring one insight to the surface.',
  Revati: 'You shepherd people across finish lines gently.',
};

const SUN_DRIVE: Record<string, string> = {
  Mesha: 'Vitality peaks when you pioneer. Identity forges in clean contests, not waiting rooms.',
  Vrishabha: 'You shine by building and keeping — body, craft, and valued things steady the will.',
  Mithuna: 'Dialogue and learning loops fuel you. Too many channels scatter the signal.',
  Karka: 'Home base and emotional weather power the will. Protect the harbour, then lead.',
  Simha: 'Centre-stage creative leadership is fuel. Authentic shine includes lifting others.',
  Kanya: 'Craft mastery and useful service keep you lit. Keep a signature even in humility.',
  Tula: 'Fair exchange and aesthetic partnership feed vitality. Strengthen your own preferences.',
  Vrischika: 'Crisis alchemy and intimate power renew you. Motive integrity is the real test.',
  Dhanu: 'Belief quests and far aims wake the will. Avoid dogma that freezes the quest.',
  Makara: 'Achievement architecture and earned status sustain you. Soften so the climb is not a cage.',
  Kumbha: 'Innovators and future tribes light you up. Still belong somewhere specific.',
  Meena: 'Imagination and compassionate cause immerse you. Keep a daily vessel so you do not dissolve.',
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
  cites: string[];
}

export interface NatalProfile {
  name: string;
  placeLabel?: string;
  birthSummary: string;
  /** Plain-English character sketch (1–3 short paragraphs) */
  summary: string;
  /** Practical habits / relational / work-style tips */
  advice: AdviceBlock;
  lagna: { rashi: string; degree: number; lord: GrahaId };
  moon: { rashi: string; nakshatra: string; pada: number; house: number };
  sun: { rashi: string; nakshatra: string; pada: number; house: number };
  grahas: ProfilePlacement[];
  dominant: string[];
  sections: ProfileSection[];
  dasha: { maha: string; antar: string };
}

function nakLord(nakIndex: number): GrahaId {
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
  return `${p.id} in ${signEn(p.rashi)}, ${p.house}th${r}`;
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

function buildSummary(args: {
  lagRashi: string;
  moon: ProfilePlacement;
  sun: ProfilePlacement;
  lagLord: GrahaId;
  lagLordP: ProfilePlacement;
  dasha: { maha: string; antar: string };
  dashaLordHouse?: number;
  dashaLordRashi?: string;
  extra?: Frag[];
}): string {
  const frags = collectProfileFrags({
    lagna: args.lagRashi,
    moonRashi: args.moon.rashi,
    moonHouse: args.moon.house,
    moonNak: args.moon.nakshatra,
    moonPada: args.moon.pada,
    sunRashi: args.sun.rashi,
    sunHouse: args.sun.house,
    lagLord: args.lagLord,
    lagLordRashi: args.lagLordP.rashi,
    lagLordHouse: args.lagLordP.house,
    lagLordRetro: args.lagLordP.retrograde,
    dashaMaha: args.dasha.maha,
    dashaAntar: args.dasha.antar,
    dashaLordHouse: args.dashaLordHouse,
    dashaLordRashi: args.dashaLordRashi,
    extra: args.extra,
  });
  const stitched = stitchParagraphs(frags, { perPara: 3, maxFrags: 9, maxChars: 1200 });
  if (stitched) return stitched;

  // Fallback (should rarely hit)
  const lagEn = signEn(args.lagRashi);
  const blend = lagnaMoonBlend(args.lagRashi, args.moon.rashi);
  return (
    blend ||
    `With ${lagEn} rising and a ${signEn(args.moon.rashi)} Moon, outer style and inner weather sketch how you meet life.`
  );
}




function buildProfileAdvice(args: {
  lagRashi: string;
  moon: ProfilePlacement;
  sun: ProfilePlacement;
  lagLord: GrahaId;
  lagLordP: ProfilePlacement;
  grahas: ProfilePlacement[];
  topHouses: number[];
}): AdviceBlock {
  const stressOcc = args.grahas.filter((g) => [6, 8, 12].includes(g.house));
  const stressHouses = [...new Set(stressOcc.map((g) => g.house))].sort();
  const frags = collectProfileAdviceFrags({
    lagna: args.lagRashi,
    moonRashi: args.moon.rashi,
    moonHouse: args.moon.house,
    moonNak: args.moon.nakshatra,
    moonPada: args.moon.pada,
    sunRashi: args.sun.rashi,
    sunHouse: args.sun.house,
    lagLord: args.lagLord,
    lagLordRashi: args.lagLordP.rashi,
    lagLordHouse: args.lagLordP.house,
    lagLordRetro: args.lagLordP.retrograde,
    stressHouse: stressHouses[0],
  });
  if (args.topHouses[0] && !stressHouses.length) {
    const h = args.topHouses[0];
    const gb = grahaBhavaRule(args.lagLord, h);
    if (gb) {
      frags.push({
        text: `Your loudest life area is house ${h} — ${gb.advice}`,
        specificity: 48,
        cite: `Loud house ${h}`,
      });
    }
  }
  return adviceFromFrags(
    'Advice for how to work with your nature',
    frags,
    5,
  );
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
    `Rising ${signEn(lagRashi)} (ruled by ${lagLord})`,
    `Moon ${signEn(moon.rashi)} · ${moon.nakshatra}`,
    `Sun ${signEn(sun.rashi)}`,
    `Loud life areas: ${topHouses.map((h) => `${h}`).join(', ')}`,
    `Moon-star tone lord: ${moonNakLord}`,
  ];

  let dasha = { maha: '—', antar: '—' };
  try {
    const d = vimshottari(birthDt, nowDate);
    dasha = { maha: d.maha, antar: d.antar };
  } catch {
    /* ignore */
  }

  const lonMap = lonMapFromPlanets(planets);
  const yogaHits = detectYogas(lonMap);
  const ak = atmakarakaLite(grahas.map((g) => ({ id: g.id, degree: g.degree })));
  const extraFrags: Frag[] = [];
  for (const y of yogaHits) {
    extraFrags.push({ text: y.body, specificity: 82, cite: y.id });
  }
  if (ak) {
    const aw = atmakarakaWording(ak.id, ak.degree);
    extraFrags.push({ text: aw.body, specificity: 81, cite: `AK ${ak.id}` });
  }
  const lagChain = lagneshaInHouseText(lagLord, lagLordP.house);
  extraFrags.push({ text: lagChain.body, specificity: 79, cite: 'rising ruler' });
  const mLord = lordOfRashi(moon.rashi);
  const mLordP = byId[mLord];
  if (mLordP) {
    const ml = moonLordInHouseText(moon.rashi, mLordP.house, mLord);
    extraFrags.push({ text: ml.body, specificity: 78, cite: 'moon lord' });
  }
  const dashaLordP = byId[dasha.maha as GrahaId];

  const summary = buildSummary({
    lagRashi,
    moon,
    sun,
    lagLord,
    lagLordP,
    dasha,
    dashaLordHouse: dashaLordP?.house,
    dashaLordRashi: dashaLordP?.rashi,
    extra: extraFrags,
  });

  const advice = buildProfileAdvice({
    lagRashi,
    moon,
    sun,
    lagLord,
    lagLordP,
    grahas,
    topHouses,
  });

  const sections: ProfileSection[] = [];

  const blendNote =
    lagnaMoonBlend(lagRashi, moon.rashi) ||
    (lagRashi === moon.rashi
      ? `Rising and Moon share ${signEn(lagRashi)}, so outer style and inner weather often agree — you may feel “of a piece,” and life asks you to refine one strong tone rather than juggle two.`
      : `Rising in ${signEn(lagRashi)} with a ${signEn(moon.rashi)} Moon means appearance and feeling negotiate daily. Neither mask nor mood should win every argument; skill is learning when each leads.`);

  const lagLordHouse = grahaBhavaRule(lagLord, lagLordP.house);
  sections.push({
    id: 'essence',
    title: 'How you come across',
    body: `${LAGNA_ESSENCE[lagRashi] || ''} ${blendNote} Your rising ruler (${lagLord}) sits in the area of ${HOUSE_LIFE[lagLordP.house] || 'life focus'}${lagLordP.retrograde ? ' — and because it is retrograde, that theme often turns inward first: revisit, revise, then show.' : '.'}${lagLordHouse ? ' ' + lagLordHouse.lifeArea : ''}`,
    cites: [
      `Rising ${signEn(lagRashi)} ${lagDeg.toFixed(1)}°`,
      `Moon in ${signEn(moon.rashi)}, house ${moon.house}`,
      citeGraha(lagLordP),
    ],
  });

  const moonNakRule = nakshatraRule(moon.nakshatra, moon.pada);
  const moonSignRule = grahaRashiRule('Moon', moon.rashi);
  const moonHouseRule = grahaBhavaRule('Moon', moon.house);
  const padaNote =
    moonNakRule?.padaNote ||
    (moon.pada === 1
      ? 'You’re in a beginning mood under this Moon — start before you polish.'
      : moon.pada === 2
        ? 'You’re in a steadying mood — consolidate what already works.'
        : moon.pada === 3
          ? 'You’re in a craft mood — refine under a little pressure.'
          : 'You’re in a finishing mood — close loops and advise rather than restart.');

  sections.push({
    id: 'mind',
    title: 'Mind & emotions',
    body: `${moonSignRule?.temperament || MOON_SIGN[moon.rashi] || ''} ${moonHouseRule?.lifeArea || `In the house of ${HOUSE_LIFE[moon.house] || 'daily life'}, feelings show up first.`} ${moonNakRule?.temperament || `${NAK_MIND[moon.nakshatra] || 'Your Moon has a distinctive habit.'}`} ${padaNote} Emotionally, stories your heart rehearses often lean toward ${moonNakLord}-flavoured themes.`,
    cites: [
      `Moon in ${signEn(moon.rashi)}, house ${moon.house}`,
      `${moon.nakshatra} (part ${moon.pada})`,
      `Tone lord ${moonNakLord}`,
    ],
  });

  const sunSignRule = grahaRashiRule('Sun', sun.rashi);
  const sunHouseRule = grahaBhavaRule('Sun', sun.house);
  const sunNakRule = nakshatraRule(sun.nakshatra, sun.pada);
  sections.push({
    id: 'drive',
    title: 'Drive & vitality',
    body: `${sunSignRule?.temperament || SUN_DRIVE[sun.rashi] || ''} ${sunHouseRule?.lifeArea || `The Sun in the house of ${HOUSE_LIFE[sun.house] || 'focus'} marks where identity heat concentrates.`} ${sunNakRule?.temperament || `${sun.nakshatra} adds a method to how you prefer to shine and renew a sense of self.`}`,
    cites: [
      `Sun in ${signEn(sun.rashi)}, house ${sun.house} · ${sun.nakshatra}`,
    ],
  });

  const merc = byId.Mercury;
  const ven = byId.Venus;
  const mars = byId.Mars;
  const mercLine =
    grahaRashiRule('Mercury', merc.rashi)?.temperament ||
    PLANET_SIGN_PLAIN.Mercury?.[merc.rashi] ||
    `Mercury in ${signEn(merc.rashi)} colours how you think`;
  const venLine =
    grahaRashiRule('Venus', ven.rashi)?.temperament ||
    PLANET_SIGN_PLAIN.Venus?.[ven.rashi] ||
    `Venus in ${signEn(ven.rashi)} colours desire`;
  const marsLine =
    grahaRashiRule('Mars', mars.rashi)?.temperament ||
    PLANET_SIGN_PLAIN.Mars?.[mars.rashi] ||
    `Mars in ${signEn(mars.rashi)} colours assertion`;

  sections.push({
    id: 'behaviour',
    title: 'Behavioural style',
    body: `Your rising ruler ${lagLord} in ${signEn(lagLordP.rashi)} (house of ${HOUSE_LIFE[lagLordP.house] || 'focus'}) is a primary behavioural engine${lagLordP.retrograde ? ' — retrograde means you may rehearse the same lesson until style ripens' : ''}. Mercury: ${mercLine}; that shows in ${HOUSE_LIFE[merc.house] || 'daily life'}. Venus: ${venLine}; routed through ${HOUSE_LIFE[ven.house] || 'relating'}. Mars: ${marsLine}; spent on ${HOUSE_LIFE[mars.house] || 'effort'}. Together they describe how you move, argue, desire, and decide on ordinary days.`,
    cites: [
      citeGraha(lagLordP),
      citeGraha(merc),
      citeGraha(ven),
      citeGraha(mars),
    ],
  });

  const jup = byId.Jupiter;
  const h7occupants = grahas.filter((g) => g.house === 7).map((g) => g.id);
  const lord7 = RASHI_LORDS[(rashiIndex(asc.sidereal) + 6) % 12];
  const relBody = h7occupants.length
    ? `Your one-to-one house hosts ${h7occupants.join(', ')} — partners and open counterparts often mirror those tones. Venus in ${signEn(ven.rashi)} (house of ${HOUSE_LIFE[ven.house]}) sets pleasure and bonding style; Jupiter in ${signEn(jup.rashi)} (house of ${HOUSE_LIFE[jup.house]}) expands grace, teachers, and ethical stretch${jup.retrograde ? ' — Jupiter retrograde turns faith inward and revises mentors' : ''}. Read partners as curricula, not verdicts.`
    : `Your one-to-one house is empty of planets — relationships often activate through the ruler of that house (${lord7}) rather than crowded conjunctions. Venus in ${signEn(ven.rashi)} (house of ${HOUSE_LIFE[ven.house]}) sets bonding style; Jupiter in ${signEn(jup.rashi)} (house of ${HOUSE_LIFE[jup.house]}) expands grace and counsel${jup.retrograde ? ' — Jupiter retrograde turns faith inward' : ''}. Absence is quieter staging, not missing destiny.`;

  sections.push({
    id: 'relational',
    title: 'Relational / outer life',
    body: relBody,
    cites: [
      `7th from rising ${signEn(lagRashi)}`,
      citeGraha(ven),
      citeGraha(jup),
      ...(h7occupants.length
        ? h7occupants.map((id) => citeGraha(byId[id]))
        : [`7th ruler ${lord7}`]),
    ],
  });

  const sat = byId.Saturn;
  const rahu = byId.Rahu;
  const ketu = byId.Ketu;
  let growth = `Saturn in ${signEn(sat.rashi)} (house of ${HOUSE_LIFE[sat.house]}) asks for time-discipline there — delay as teacher, not punishment. Rahu in ${signEn(rahu.rashi)} (house of ${HOUSE_LIFE[rahu.house]}) hungers toward unfamiliar mastery; Ketu in ${signEn(ketu.rashi)} (house of ${HOUSE_LIFE[ketu.house]}) releases or distills the opposite axis.`;
  if (mars.house === 1 || mars.house === 8 || mars.house === 12) {
    growth += ` Mars in house ${mars.house} sharpens heat in self, crisis, or withdrawal zones — aim it into clean effort.`;
  } else if (mars.retrograde) {
    growth += ' Mars retrograde turns assertion inward first — strategize before you strike.';
  } else {
    growth += ` Mars in the house of ${HOUSE_LIFE[mars.house]} supplies courage that wants a worthy contest.`;
  }
  growth +=
    ' Meet pressure as training: Saturn teaches duration, Rahu appetite, Ketu release, Mars directed heat.';

  sections.push({
    id: 'growth',
    title: 'Pressures & growth',
    body: growth,
    cites: [citeGraha(sat), citeGraha(rahu), citeGraha(ketu), citeGraha(mars)],
  });

  const pair = dashaPairRule(dasha.maha, dasha.antar);
  if (yogaHits.length) {
    sections.push({
      id: 'yogas',
      title: 'Notable patterns',
      body: yogaHits.map((y) => `${y.body} ${y.advice}`).join(' '),
      cites: yogaHits.map((y) => y.id),
    });
  }

  sections.push({
    id: 'dasha',
    title: 'This chapter of life',
    body: pair
      ? `${pair.tone} ${pair.advice} Think of it as a chapter heading across your chart — not a rewrite of who you are.`
      : `You’re in a ${dasha.maha} chapter with a ${dasha.antar} flavour. Think of it as a heading across your chart — not a rewrite of who you are. Practise the better habits of this chapter rather than fearing a stereotype.`,
    cites: [`Period ${dasha.maha}`, `Sub-period ${dasha.antar}`],
  });

  const place =
    birth.placeLabel || `${lat.toFixed(2)}°, ${lon.toFixed(2)}°`;

  return {
    name: birth.name || 'Native',
    placeLabel: birth.placeLabel,
    birthSummary: `${birth.date} ${String(birth.h).padStart(2, '0')}:${String(birth.m).padStart(2, '0')}:${String(birth.s).padStart(2, '0')} UTC · ${place}`,
    summary,
    advice,
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

