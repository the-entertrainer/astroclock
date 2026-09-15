import type { GrahaId } from './constants';

/** Sanskrit rashi key -> everyday English sign name */
export const SIGN_EN: Record<string, string> = {
  Mesha: 'Aries',
  Vrishabha: 'Taurus',
  Mithuna: 'Gemini',
  Karka: 'Cancer',
  Simha: 'Leo',
  Kanya: 'Virgo',
  Tula: 'Libra',
  Vrischika: 'Scorpio',
  Dhanu: 'Sagittarius',
  Makara: 'Capricorn',
  Kumbha: 'Aquarius',
  Meena: 'Pisces',
};

export function signEn(rashi: string): string {
  return SIGN_EN[rashi] || rashi;
}

/** House topics in everyday life language */
export const HOUSE_LIFE: Record<number, string> = {
  1: 'how you show up, your body-energy, and first impressions',
  2: 'money habits, speech, and what you treat as valuable',
  3: 'courage, siblings/peers, short trips, and everyday hustle',
  4: 'home, family base, private mood, and feeling settled',
  5: 'creativity, romance, play, kids/mentees, and speculative bets',
  6: 'work routines, health habits, rivals, and daily problem-solving',
  7: 'one-to-one relationships, contracts, and mirroring with others',
  8: 'shared resources, intimacy, research, and big life resets',
  9: 'beliefs, teachers, long journeys, and the bigger “why”',
  10: 'career, public reputation, and what you are known for',
  11: 'friends, networks, gains, and future-facing goals',
  12: 'rest, solitude, endings, travel abroad, and quiet recharge',
};

const GRAHA_PLAIN: Record<GrahaId, string> = {
  Sun: 'your drive to be seen and lead — identity and vitality',
  Moon: 'your moods, needs, and emotional weather',
  Mars: 'your courage, anger, and how you push for what you want',
  Mercury: 'how you think, talk, learn, and negotiate',
  Jupiter: 'growth, luck-with-meaning, teachers, and generosity',
  Venus: 'love, taste, pleasure, and how you bond',
  Saturn: 'responsibility, delays that teach, and long-game structure',
  Rahu: 'appetite for the new, unfamiliar, or slightly obsessive',
  Ketu: 'what you release, distill, or already know sideways',
};

const SIGN_STYLE: Record<string, string> = {
  Mesha: 'direct, fast to start, and competitive when motivated',
  Vrishabha: 'steady, sensory, and loyal once committed',
  Mithuna: 'curious, talkative, and mentally restless',
  Karka: 'protective, feeling-led, and home-oriented',
  Simha: 'warm, proud, and creative when appreciated',
  Kanya: 'precise, helpful, and quietly critical of mess',
  Tula: 'diplomatic, fairness-seeking, and partnership-minded',
  Vrischika: 'intense, private, and all-or-nothing with trust',
  Dhanu: 'big-picture, restless for meaning, and horizon-hungry',
  Makara: 'ambitious, reserved, and built for the long climb',
  Kumbha: 'independent, future-minded, and friendship-forward',
  Meena: 'empathic, imaginative, and porous around other people',
};

const NAK_PLAIN: Record<string, string> = {
  Ashwini: 'quick to start and keen to fix things on the move',
  Bharani: 'able to hold pressure until something real is born',
  Krittika: 'sharp-eyed, cutting through fog to what matters',
  Rohini: 'growth-focused once a beautiful target is chosen',
  Mrigashira: 'always seeking, sniffing options, rarely fully still',
  Ardra: 'clears through storms — tear-down before rebuild',
  Punarvasu: 'bounces back and finds a second chance',
  Pushya: 'steady caregiver energy; timing and nourishment matter',
  Ashlesha: 'reads undercurrents; intimacy needs clear ethics',
  Magha: 'carries a sense of legacy and rightful presence',
  'Purva Phalguni': 'leans toward pleasure, creativity, and social warmth',
  'Uttara Phalguni': 'builds lasting alliances through reliable help',
  Hasta: 'clever with hands, craft, and practical problem-solving',
  Chitra: 'designs beauty into form; hates unfinished ugliness',
  Swati: 'needs room to move; freedom keeps the mind kind',
  Vishakha: 'can chase two goals — choose which summit gets heat',
  Anuradha: 'loyal in orbit around people and causes that matter',
  Jyeshtha: 'protective of earned skill and quiet rank',
  Mula: 'digs to the root; honesty before polish',
  'Purva Ashadha': 'bold early push — declare, then prove',
  'Uttara Ashadha': 'wins that last, through structure and allies',
  Shravana: 'learns by listening deeply before speaking',
  Dhanishta: 'syncs with rhythm, teams, and timed bursts',
  Shatabhisha: 'finds odd, systems-level fixes others miss',
  'Purva Bhadrapada': 'fires up for ideals worth a real edge',
  'Uttara Bhadrapada': 'patient depth; wisdom from the long wait',
  Revati: 'shepherds people across the finish line gently',
};

export interface InfluenceAspect {
  other: GrahaId;
  label: string;
  orb: number;
  motion: 'applying' | 'separating' | 'exact';
  kind: 'transit' | 'natal';
}

export interface AdviceBlock {
  title: string;
  /** 2–5 concrete, agency-oriented suggestions */
  items: string[];
  cites: string[];
}

export interface InfluenceInput {
  graha: GrahaId;
  rashi: string;
  house: number;
  nakshatra?: string;
  speed: number;
  /** Natal placement of same graha, if known */
  natal?: { rashi: string; house: number } | null;
  aspects: InfluenceAspect[];
  dasha?: { maha: string; antar: string } | null;
  isDemo: boolean;
}

export interface InfluenceReading {
  meansForYou: string;
  influencingNow: string;
  changing: string;
  advice: AdviceBlock;
  cites: string[];
}

function motionLife(m: InfluenceAspect['motion']): string {
  if (m === 'applying') return 'building toward a peak';
  if (m === 'separating') return 'easing after a peak — integrate what already happened';
  return 'right on the nose — loud right now';
}

function aspectLife(label: string): string {
  if (label === 'conjunct' || label.includes('conjunct'))
    return 'mixing voices closely';
  if (label === 'trine' || label === 'sextile') return 'offering easier cooperation';
  if (label === 'square') return 'creating productive friction';
  if (label === 'oppose') return 'setting up a polar dialogue';
  return `linking (${label})`;
}


const HOUSE_ADVICE: Record<number, string> = {
  1: 'Useful to check body-energy and first impressions before you overcommit.',
  2: 'Go easy on impulse spends; speak a little slower than the urge to reply.',
  3: 'Good day to take one short bold step — a message, a trip, a skill rep.',
  4: 'Protect home and private mood; a tidy base steadies everything else.',
  5: 'Lean into play, creative drafts, or warm attention to someone younger.',
  6: 'Keep routines small and doable; solve one practical problem cleanly.',
  7: 'Prefer fair one-to-one talks over guessing what the other person wants.',
  8: 'Go gently with shared money, intimacy, and anything that feels like a reset.',
  9: 'Make room for a bigger why — a teacher, a walk, a belief worth revisiting.',
  10: 'Show up for reputation work in public; finish something visible.',
  11: 'Reach a friend or network goal; ask for help without over-explaining.',
  12: 'Schedule real rest or solitude; endings and recharge count as work too.',
};

const GRAHA_ADVICE: Record<GrahaId, string> = {
  Sun: 'Useful to own one clear act of leadership — then let others have airtime.',
  Moon: 'Tend the emotional weather early; food, water, and a soft landing help.',
  Mars: 'Aim heat into one clean effort; skip fights that only want an audience.',
  Mercury: 'Write it down, then send the short version — clarity over cleverness.',
  Jupiter: 'Widen the frame with generosity or learning; avoid lecturing.',
  Venus: 'Choose beauty and kindness on purpose; harmony is a practice, not luck.',
  Saturn: 'One sober step beats a grand promise — keep the long game honest.',
  Rahu: 'Curiosity is fine; obsession needs a timer and a reality check.',
  Ketu: 'Useful to release one extra obligation and keep the distilled lesson.',
};

function buildInfluenceAdvice(input: InfluenceInput): AdviceBlock {
  const { graha, rashi, house, speed, aspects, dasha, natal, isDemo } = input;
  const sign = signEn(rashi);
  const items: string[] = [];
  const cites: string[] = [`${graha} in ${sign}`, `House ${house}`];

  items.push(GRAHA_ADVICE[graha] || `Work with ${graha}'s themes gently and specifically.`);
  items.push(HOUSE_ADVICE[house] || `Notice where attention keeps returning in daily life.`);

  if (speed < -0.01) {
    items.push(
      `${graha} is retrograde — useful to review, redo, and rethink before you push outward.`,
    );
    cites.push('Retrograde');
  } else {
    items.push(
      `${graha} is moving direct — good window to act or speak in the ${HOUSE_LIFE[house]?.split(',')[0] || 'highlighted'} arena.`,
    );
  }

  const hard = aspects.filter(
    (a) => a.label === 'square' || a.label === 'oppose',
  );
  const soft = aspects.filter(
    (a) => a.label === 'trine' || a.label === 'sextile' || a.label === 'conjunct',
  );
  if (hard.length > 0) {
    const h = hard[0];
    const who = h.kind === 'natal' ? `natal ${h.other}` : h.other;
    items.push(
      `With ${graha} ${h.label} ${who}, go easy on drama — pause before reacting, then choose a precise response.`,
    );
    cites.push(`${graha} ${h.label} ${h.other}`);
  } else if (soft.length > 0) {
    const s = soft[0];
    const who = s.kind === 'natal' ? `natal ${s.other}` : s.other;
    items.push(
      `${graha} linking softly with ${who} — good moment to collaborate, polish, or ask for a favour.`,
    );
    cites.push(`${graha} ${s.label} ${s.other}`);
  }

  const style = SIGN_STYLE[rashi];
  if (style && items.length < 5) {
    items.push(
      `In ${sign}, this planet tends to act ${style} — lean into the kinder version of that style today.`,
    );
  }

  if (dasha && (dasha.maha === graha || dasha.antar === graha) && items.length < 5) {
    items.push(
      `${graha} is a period lord right now — practice its better habits rather than fearing the stereotype.`,
    );
    cites.push(`Period ${dasha.maha}/${dasha.antar}`);
  }

  if (!isDemo && natal && items.length < 5) {
    items.push(
      `Your natal ${graha} lives in house ${natal.house} — keep that long-term theme in view while the sky colours it.`,
    );
    cites.push(`Natal house ${natal.house}`);
  }

  return {
    title: 'Advice',
    items: items.slice(0, 5),
    cites: [...new Set(cites)].slice(0, 6),
  };
}

export function computeInfluence(input: InfluenceInput): InfluenceReading {
  const { graha, rashi, house, speed, natal, aspects, dasha, isDemo } = input;
  const sign = signEn(rashi);
  const style = SIGN_STYLE[rashi] || 'coloured by its current sign';
  const life = HOUSE_LIFE[house] || 'a live area of day-to-day life';
  const grahaPlain = GRAHA_PLAIN[graha];
  const nakBit =
    input.nakshatra && NAK_PLAIN[input.nakshatra]
      ? ` The star-texture (${input.nakshatra}) adds a flavour of being ${NAK_PLAIN[input.nakshatra]}.`
      : '';

  const cites: string[] = [
    `${graha} in ${sign}`,
    `House ${house}`,
  ];
  if (input.nakshatra) cites.push(input.nakshatra);
  if (speed < -0.01) cites.push('Retrograde');

  let meansForYou: string;
  if (isDemo || !natal) {
    meansForYou = `Right now ${graha} is travelling through ${sign}, where it tends to act ${style}.${nakBit} In plain terms, ${graha} rules ${grahaPlain}. Without your birth chart saved, this is sky-weather — useful mood context, not a personal verdict.`;
  } else {
    const nSign = signEn(natal.rashi);
    const nLife = HOUSE_LIFE[natal.house] || 'a core life theme';
    meansForYou = `In your birth chart, ${graha} sits in ${nSign} and speaks especially through ${nLife}. That is the long-term setting for ${grahaPlain}. Today the same planet is moving through ${sign}, so the sky is temporarily colouring that natal theme with a ${sign.toLowerCase()} mood — ${style}.${nakBit}`;
    cites.push(`Natal ${graha} in ${nSign}, house ${natal.house}`);
  }

  const influencingNow = `In the current sky, ${graha} is lighting up house ${house} topics: ${life}. Expect more notice, decisions, or emotional charge around that area — not as fate, just as where attention wants to go. ${
    speed < -0.01
      ? `${graha} is retrograde, so the style turns more inward: review, redo, and rethink before you push outward.`
      : `${graha} is moving direct, so the impulse leans outward — act, speak, or show up in that life area.`
  }`;

  const changeBits: string[] = [];
  const top = aspects.slice(0, 3);
  if (top.length === 0) {
    changeBits.push(
      `No tight aspects involving ${graha} right now — the story is quieter, more about its house and sign than dramatic sky-links.`,
    );
  } else {
    for (const a of top) {
      const who =
        a.kind === 'natal' ? `your natal ${a.other}` : `transit ${a.other}`;
      changeBits.push(
        `${graha} is ${aspectLife(a.label)} with ${who} (${a.orb.toFixed(1)}°, ${motionLife(a.motion)}).`,
      );
    }
  }
  if (dasha && (dasha.maha === graha || dasha.antar === graha)) {
    changeBits.push(
      `${graha} is also a period lord right now (${dasha.maha} / ${dasha.antar}), so its themes get a louder chapter heading in your timeline — practice its better habits rather than fearing the stereotype.`,
    );
    cites.push(`Period: ${dasha.maha}/${dasha.antar}`);
  } else if (dasha && dasha.maha !== '—') {
    changeBits.push(
      `Background chapter: ${dasha.maha} period with ${dasha.antar} subplot — that colours the month even when ${graha} is not the headline.`,
    );
  }

  const advice = buildInfluenceAdvice(input);

  return {
    meansForYou,
    influencingNow,
    changing: changeBits.join(' '),
    advice,
    cites,
  };
}

/** Plain-English planet-in-sign lines for profile sections */
export const PLANET_SIGN_PLAIN: Partial<
  Record<GrahaId, Record<string, string>>
> = {
  Mercury: {
    Mesha: 'you speak blunt and fast; ideas land as sparks',
    Vrishabha: 'you think slowly and stick to opinions once set',
    Mithuna: 'your mind multitasks; wit is native oxygen',
    Karka: 'you think in feeling-tones and rich memory',
    Simha: 'you phrase things dramatically; opinions perform',
    Kanya: 'you analyse, edit, and make useful lists',
    Tula: 'you weigh both sides out loud before choosing',
    Vrischika: 'you ask probing questions and use strategic silence',
    Dhanu: 'you talk big-picture; meaning beats trivia',
    Makara: 'you argue in structured, professional tones',
    Kumbha: 'you think in systems and oddball vocabulary',
    Meena: 'you think poetically; intuition outruns the syllabus',
  },
  Venus: {
    Mesha: 'you pursue what you want; romance has a spark of conquest',
    Vrishabha: 'you love through loyalty, comfort, and sensory beauty',
    Mithuna: 'affection thrives on exchange, flirtation, and variety',
    Karka: 'you nurture; love feels like emotional home-cooking',
    Simha: 'you show love with warmth, pride, and generous gestures',
    Kanya: 'you care by being useful — service as love language',
    Tula: 'partnership is an art; fairness and harmony matter',
    Vrischika: 'bonds run intense and transformative',
    Dhanu: 'you love freedom and shared ideals on the road',
    Makara: 'affection is committed, sober, and long-game',
    Kumbha: 'you bond as friends first; unconventional is fine',
    Meena: 'love goes soft, idealistic, and a little boundary-blurry',
  },
  Mars: {
    Mesha: 'you assert directly; competition wakes you up',
    Vrishabha: 'you push with stubborn endurance, not flash',
    Mithuna: 'drive scatters into arguments and short hustles',
    Karka: 'anger and action flare when home or feelings are poked',
    Simha: 'courage wants a stage; pride fuels the fight',
    Kanya: 'you fight through precise craft and daily effort',
    Tula: 'you assert via negotiation and charm more than blunt force',
    Vrischika: 'will is strategic and intense under a calm surface',
    Dhanu: 'you crusade for beliefs and far-off targets',
    Makara: 'ambition is disciplined; you climb like it is combat',
    Kumbha: 'you fight for groups and causes more than ego wins',
    Meena: 'drive can diffuse into sacrifice or escape unless aimed',
  },
};
