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
}): string {
  const lagEn = signEn(args.lagRashi);
  const moonEn = signEn(args.moon.rashi);
  const sunEn = signEn(args.sun.rashi);
  const lagBit =
    LAGNA_ESSENCE[args.lagRashi] ||
    `With ${lagEn} rising, you have a distinct outer style people notice quickly.`;
  const moonBit =
    MOON_SIGN[args.moon.rashi] ||
    `Inside, a ${moonEn} Moon sets the emotional weather.`;
  const lordLife =
    HOUSE_LIFE[args.lagLordP.house] || 'a central life arena';
  const sunBit =
    SUN_DRIVE[args.sun.rashi] ||
    `Solar drive through ${sunEn} wants expression.`;

  const p1 = `${lagBit} (Rising ${lagEn}.)`;
  const p2 = `${moonBit} Your Moon also sits in the area of life about ${HOUSE_LIFE[args.moon.house] || 'daily experience'}, so feelings often show up there first.`;
  const p3 = `${sunBit} The planet that rules your rising sign (${args.lagLord}) lives in the house of ${lordLife} — that is a practical stage where your style becomes biography. Together, rising + Moon + Sun sketch how you tend to think, feel, act, and relate when nobody is performing for an audience.`;

  return `${p1}\n\n${p2}\n\n${p3}`;
}


const LAGNA_ADVICE: Record<string, string> = {
  Mesha:
    'Useful to start before the committee finishes — then course-correct in motion rather than waiting for perfect clarity.',
  Vrishabha:
    'Build trust and routines slowly; once you commit, protect that steadiness from fashion-chasing pivots.',
  Mithuna:
    'Schedule curiosity on purpose — conversation and learning are fuel, but pick one channel to finish.',
  Karka:
    'Protect belonging and private harbour time; when the base feels safe, your generosity leads naturally.',
  Simha:
    'Give your work a clear signature and ask for recognition without apology — then share the spotlight.',
  Kanya:
    'Let competence be care, and soften critique with one kind sentence before the fix list.',
  Tula:
    'Practice naming your own preference before you negotiate; fairness includes you.',
  Vrischika:
    'Choose depth over half-open doors — trust and honesty wake you up more than surface charm.',
  Dhanu:
    'Keep a horizon (learning, travel, meaning) so petty loops do not shrink your kindness.',
  Makara:
    'Climb with structure, then schedule softness so the long game does not become a cage.',
  Kumbha:
    'Invest in odd, systems-minded friendships; belonging still matters, just on your terms.',
  Meena:
    'Choose company like climate, and keep one daily vessel (walk, craft, list) so empathy does not dissolve you.',
};

const MOON_ADVICE: Record<string, string> = {
  Mesha: 'When mood ignites, aim the heat into one clean act instead of sitting on hot iron.',
  Vrishabha: 'Secure comfort and sensory proof before big emotional pivots — slow attachment is a feature.',
  Mithuna: 'Talk it through, then check whether you are flirting with ideas or with people.',
  Karka: 'Caregiving cuts both ways — ask for harbour as often as you offer it.',
  Simha: 'Warmth thrives with a witness; ask for appreciation without making it a test.',
  Kanya: 'Usefulness is love — also leave room for messy feelings that will not fit a checklist.',
  Tula: 'Notice when relational weather becomes your weather; step outside to reset.',
  Vrischika: 'All-or-nothing feelings need clear trust gates; half-measures starve this Moon.',
  Dhanu: 'Widen the emotional frame with humour, belief, or a literal change of scenery.',
  Makara: 'Endurance is devotion — also let one feeling land out loud before it calcifies.',
  Kumbha: 'Friendship-toned care is valid; name quirky needs early so intimacy does not feel odd.',
  Meena: 'Beautiful empathy needs boundaries — choose sanctuary before you absorb the room.',
};

const SUN_ADVICE: Record<string, string> = {
  Mesha: 'Vitality peaks in clean contests — pioneer something small each week.',
  Vrishabha: 'Shine by building and keeping; body and craft steady the will.',
  Mithuna: 'Dialogue fuels you — prune extra channels so the signal stays clear.',
  Karka: 'Protect home base first, then lead; emotional weather powers the will.',
  Simha: 'Creative centre-stage is fuel when it lifts others, not only ego.',
  Kanya: 'Craft mastery keeps you lit — keep a personal signature even in humble service.',
  Tula: 'Fair exchange feeds vitality; strengthen your own preferences alongside partnership.',
  Vrischika: 'Renew through honest intimacy and motive integrity, not power theatre.',
  Dhanu: 'Belief quests wake the will — keep dogma from freezing the quest.',
  Makara: 'Achievement architecture sustains you; soften so the climb stays human.',
  Kumbha: 'Innovators and future tribes light you up — still belong somewhere specific.',
  Meena: 'Imagination immerses you; keep a daily vessel so you do not dissolve.',
};

const STRESS_HOUSE_ADVICE: Record<number, string> = {
  6: 'With heat in the work/health house, go easy on rivals and keep routines small and doable.',
  8: 'With charge in the reset/intimacy house, pace shared money and big life changes — honesty over secrecy.',
  12: 'With emphasis on solitude and endings, schedule real recharge; withdrawal can be strategy, not failure.',
};

function buildProfileAdvice(args: {
  lagRashi: string;
  moon: ProfilePlacement;
  sun: ProfilePlacement;
  lagLord: GrahaId;
  lagLordP: ProfilePlacement;
  grahas: ProfilePlacement[];
  topHouses: number[];
}): AdviceBlock {
  const items: string[] = [];
  const cites: string[] = [
    `Rising ${signEn(args.lagRashi)}`,
    `Moon in ${signEn(args.moon.rashi)}, house ${args.moon.house}`,
    `Sun in ${signEn(args.sun.rashi)}, house ${args.sun.house}`,
  ];

  items.push(
    LAGNA_ADVICE[args.lagRashi] ||
      `Work with your rising style in ${signEn(args.lagRashi)} as a habit, not a costume.`,
  );
  items.push(
    MOON_ADVICE[args.moon.rashi] ||
      `Tend emotional weather through the house of ${HOUSE_LIFE[args.moon.house] || 'daily life'}.`,
  );
  items.push(
    SUN_ADVICE[args.sun.rashi] ||
      `Aim vitality toward what renews a sense of self in the house of ${HOUSE_LIFE[args.sun.house] || 'focus'}.`,
  );

  // Stressed / dusthana emphasis
  const stressOcc = args.grahas.filter((g) => [6, 8, 12].includes(g.house));
  const stressHouses = [...new Set(stressOcc.map((g) => g.house))].sort();
  if (stressHouses.length > 0) {
    const h = stressHouses[0];
    items.push(
      STRESS_HOUSE_ADVICE[h] ||
        `Notice pressure in house ${h} and meet it with pacing, not panic.`,
    );
    const who = stressOcc
      .filter((g) => g.house === h)
      .map((g) => g.id)
      .slice(0, 3)
      .join(', ');
    cites.push(`House ${h}: ${who}`);
  } else if (args.topHouses[0]) {
    const h = args.topHouses[0];
    items.push(
      `Your loudest life area is house ${h} (${HOUSE_LIFE[h] || 'focus'}) — put habits and care there first.`,
    );
    cites.push(`Loud house ${h}`);
  }

  if (args.lagLordP.retrograde) {
    items.push(
      `Your rising ruler (${args.lagLord}) is retrograde — useful to revisit style privately before showing the polished version.`,
    );
    cites.push(`${args.lagLord} R in house ${args.lagLordP.house}`);
  } else if (items.length < 5) {
    items.push(
      `Let ${args.lagLord} in the house of ${HOUSE_LIFE[args.lagLordP.house] || 'life focus'} be a weekly practice stage — small reps beat grand resolutions.`,
    );
    cites.push(
      `${args.lagLord} in ${signEn(args.lagLordP.rashi)}, house ${args.lagLordP.house}`,
    );
  }

  return {
    title: 'Advice for how to work with your nature',
    items: items.slice(0, 5),
    cites: [...new Set(cites)].slice(0, 6),
  };
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

  const summary = buildSummary({
    lagRashi,
    moon,
    sun,
    lagLord,
    lagLordP,
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
    lagRashi === moon.rashi
      ? `Rising and Moon share ${signEn(lagRashi)}, so outer style and inner weather often agree — you may feel “of a piece,” and life asks you to refine one strong tone rather than juggle two.`
      : `Rising in ${signEn(lagRashi)} with a ${signEn(moon.rashi)} Moon means appearance and feeling negotiate daily. Neither mask nor mood should win every argument; skill is learning when each leads.`;

  sections.push({
    id: 'essence',
    title: 'How you come across',
    body: `${LAGNA_ESSENCE[lagRashi] || ''} ${blendNote} Your rising ruler (${lagLord}) sits in the area of ${HOUSE_LIFE[lagLordP.house] || 'life focus'}${lagLordP.retrograde ? ' — and because it is retrograde, that theme often turns inward first: revisit, revise, then show.' : '.'}`,
    cites: [
      `Rising ${signEn(lagRashi)} ${lagDeg.toFixed(1)}°`,
      `Moon in ${signEn(moon.rashi)}, house ${moon.house}`,
      citeGraha(lagLordP),
    ],
  });

  const padaNote =
    moon.pada === 1
      ? 'This quarter of the star leans initiatory — first-foot energy.'
      : moon.pada === 2
        ? 'This quarter of the star seeks stability and something keepable.'
        : moon.pada === 3
          ? 'This quarter of the star sharpens effort and skillful hustle.'
          : 'This quarter of the star ripens toward completion and counsel.';

  sections.push({
    id: 'mind',
    title: 'Mind & emotions',
    body: `${MOON_SIGN[moon.rashi] || ''} In the house of ${HOUSE_LIFE[moon.house] || 'daily life'}, feelings show up first. Star-texture ${moon.nakshatra}: ${NAK_MIND[moon.nakshatra] || 'a distinctive lunar habit.'} ${padaNote} Emotionally, themes linked to ${moonNakLord} often colour the stories your heart rehearses.`,
    cites: [
      `Moon in ${signEn(moon.rashi)}, house ${moon.house}`,
      `${moon.nakshatra} (part ${moon.pada})`,
      `Tone lord ${moonNakLord}`,
    ],
  });

  sections.push({
    id: 'drive',
    title: 'Drive & vitality',
    body: `${SUN_DRIVE[sun.rashi] || ''} The Sun in the house of ${HOUSE_LIFE[sun.house] || 'focus'} marks where identity heat concentrates. ${sun.nakshatra} adds a method to how you prefer to shine and renew a sense of self.`,
    cites: [
      `Sun in ${signEn(sun.rashi)}, house ${sun.house} · ${sun.nakshatra}`,
    ],
  });

  const merc = byId.Mercury;
  const ven = byId.Venus;
  const mars = byId.Mars;
  const mercLine =
    PLANET_SIGN_PLAIN.Mercury?.[merc.rashi] ||
    `Mercury in ${signEn(merc.rashi)} colours how you think`;
  const venLine =
    PLANET_SIGN_PLAIN.Venus?.[ven.rashi] ||
    `Venus in ${signEn(ven.rashi)} colours desire`;
  const marsLine =
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

  const mahaTone: Record<string, string> = {
    Sun: 'visibility, authority tests, and identity heat are louder',
    Moon: 'moods, care loops, and private-public tides lead',
    Mars: 'decisive force and initiative spike',
    Mercury: 'ideas, skills, and nervous agility trade faster',
    Jupiter: 'growth, teaching, and ethical opportunity widen',
    Venus: 'bond, art, and desire-harmony colour choices',
    Saturn: 'long grind, structure, and sober accountability',
    Rahu: 'unconventional hunger and novel vectors',
    Ketu: 'release, distill, and sideways insight',
  };

  sections.push({
    id: 'dasha',
    title: 'This chapter of life',
    body: `You are in a ${dasha.maha} period with a ${dasha.antar} subplot: ${mahaTone[dasha.maha] || 'period themes are active'}, while ${dasha.antar} ${mahaTone[dasha.antar] || 'modulates the tone'}. Think of it as a chapter heading across your chart — not a rewrite of who you are. Practice the period’s better habits rather than fearing its stereotype.`,
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

// silence unused if tree-shaken oddly
