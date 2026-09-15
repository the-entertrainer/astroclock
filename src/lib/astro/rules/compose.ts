import type { GrahaId } from '../constants';
import { grahaRashiRule } from './rashiGraha';
import { nakshatraRule } from './nakshatra';
import { grahaBhavaRule } from './grahaBhava';
import { aspectRule, ASPECT_GRAHA_FLAVOUR, ASPECT_BAND } from './aspects';
import { dashaPairRule } from './dasha';
import { tithiRule } from './tithiMoon';
import { lagnaMoonBlend } from './lagnaMoonBlend';
import { retrogradeRule } from './retrograde';

export interface AdviceBlock {
  title: string;
  items: string[];
  cites: string[];
}

export interface Frag {
  text: string;
  /** Higher = more specific / preferred */
  specificity: number;
  cite?: string;
}

/** Prefer specific keys; sort descending specificity, dedupe near-duplicates, stitch. */
export function pickMostSpecific(frags: Frag[], max = 8): Frag[] {
  const sorted = [...frags]
    .filter((f) => f.text && f.text.trim().length > 0)
    .sort((a, b) => b.specificity - a.specificity);
  const out: Frag[] = [];
  const seen = new Set<string>();
  for (const f of sorted) {
    const key = f.text.slice(0, 56).toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
    if (out.length >= max) break;
  }
  return out;
}

/** Stitch 4–10 fragments into flowing paragraphs (blank-line separated). */
export function stitchParagraphs(
  frags: Frag[],
  opts?: { perPara?: number; maxFrags?: number },
): string {
  const max = opts?.maxFrags ?? 10;
  const per = opts?.perPara ?? 2;
  const picked = pickMostSpecific(frags, max);
  if (picked.length === 0) return '';
  const paras: string[] = [];
  for (let i = 0; i < picked.length; i += per) {
    const chunk = picked.slice(i, i + per).map((f) => f.text.trim());
    paras.push(chunk.join(' '));
  }
  return paras.join('\n\n');
}

export function adviceFromFrags(
  title: string,
  frags: Frag[],
  maxItems = 5,
): AdviceBlock {
  const picked = pickMostSpecific(frags, maxItems);
  const cites = [
    ...new Set(picked.map((f) => f.cite).filter(Boolean) as string[]),
  ].slice(0, 6);
  const cap = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
  return {
    title,
    items: picked.map((f) => cap(f.text.trim())),
    cites,
  };
}

export function collectPlacementFrags(args: {
  graha: GrahaId;
  rashi: string;
  house: number;
  nakshatra?: string;
  pada?: number;
  retrograde?: boolean;
}): Frag[] {
  const frags: Frag[] = [];
  const gr = grahaRashiRule(args.graha, args.rashi);
  if (gr) {
    frags.push({
      text: gr.temperament,
      specificity: 50,
      cite: `${args.graha} in ${args.rashi}`,
    });
    frags.push({
      text: gr.advice,
      specificity: 48,
      cite: `${args.graha} in ${args.rashi}`,
    });
  }
  const gb = grahaBhavaRule(args.graha, args.house);
  if (gb) {
    frags.push({
      text: gb.lifeArea,
      specificity: 55,
      cite: `House ${args.house}`,
    });
    frags.push({
      text: gb.advice,
      specificity: 52,
      cite: `${args.graha} house ${args.house}`,
    });
  }
  if (args.nakshatra) {
    const nk = nakshatraRule(args.nakshatra, args.pada);
    if (nk) {
      frags.push({
        text: nk.temperament,
        specificity: 60,
        cite: args.nakshatra,
      });
      frags.push({
        text: nk.advice,
        specificity: 58,
        cite: args.nakshatra,
      });
      if (nk.padaNote) {
        frags.push({
          text: nk.padaNote,
          specificity: 70,
          cite: `${args.nakshatra} p${args.pada}`,
        });
      }
    }
  }
  if (args.retrograde) {
    const rr = retrogradeRule(args.graha);
    if (rr) {
      frags.push({
        text: rr.temperament,
        specificity: 65,
        cite: `${args.graha} R`,
      });
      frags.push({
        text: rr.advice,
        specificity: 64,
        cite: `${args.graha} R`,
      });
    }
  }
  return frags;
}

export function collectProfileFrags(args: {
  lagna: string;
  moonRashi: string;
  moonHouse: number;
  moonNak: string;
  moonPada: number;
  sunRashi: string;
  sunHouse: number;
  lagLord: GrahaId;
  lagLordRashi: string;
  lagLordHouse: number;
  lagLordRetro?: boolean;
  dashaMaha?: string;
  dashaAntar?: string;
}): Frag[] {
  const frags: Frag[] = [];
  const blend = lagnaMoonBlend(args.lagna, args.moonRashi);
  if (blend) {
    frags.push({
      text: blend,
      specificity: 80,
      cite: `Rising ${args.lagna} · Moon ${args.moonRashi}`,
    });
  }

  frags.push(
    ...collectPlacementFrags({
      graha: 'Moon',
      rashi: args.moonRashi,
      house: args.moonHouse,
      nakshatra: args.moonNak,
      pada: args.moonPada,
    }),
  );
  frags.push(
    ...collectPlacementFrags({
      graha: 'Sun',
      rashi: args.sunRashi,
      house: args.sunHouse,
    }),
  );
  frags.push(
    ...collectPlacementFrags({
      graha: args.lagLord,
      rashi: args.lagLordRashi,
      house: args.lagLordHouse,
      retrograde: args.lagLordRetro,
    }),
  );
  if (args.dashaMaha && args.dashaAntar && args.dashaMaha !== '—') {
    const dp = dashaPairRule(args.dashaMaha, args.dashaAntar);
    if (dp) {
      frags.push({
        text: dp.tone,
        specificity: 45,
        cite: `${args.dashaMaha}/${args.dashaAntar}`,
      });
    }
  }
  return frags;
}

export function collectProfileAdviceFrags(args: {
  lagna: string;
  moonRashi: string;
  moonHouse: number;
  moonNak: string;
  moonPada: number;
  sunRashi: string;
  sunHouse: number;
  lagLord: GrahaId;
  lagLordRashi: string;
  lagLordHouse: number;
  lagLordRetro?: boolean;
  stressHouse?: number;
}): Frag[] {
  const frags: Frag[] = [];
  const lagR = grahaRashiRule(
    // rising style via lord's sign + lagna moon blend tip — use Sun as proxy for rising energy advice via lagna's typical lord placement
    args.lagLord,
    args.lagna,
  );
  // Lagna advice via moon blend is long; pull graha-rashi for lag lord in lagna? Better: use placement advice keys
  const moonGR = grahaRashiRule('Moon', args.moonRashi);
  if (moonGR) frags.push({ text: moonGR.advice, specificity: 60, cite: `Moon ${args.moonRashi}` });
  const sunGR = grahaRashiRule('Sun', args.sunRashi);
  if (sunGR) frags.push({ text: sunGR.advice, specificity: 55, cite: `Sun ${args.sunRashi}` });
  const lordGB = grahaBhavaRule(args.lagLord, args.lagLordHouse);
  if (lordGB) frags.push({ text: lordGB.advice, specificity: 58, cite: `${args.lagLord} house ${args.lagLordHouse}` });
  const moonGB = grahaBhavaRule('Moon', args.moonHouse);
  if (moonGB) frags.push({ text: moonGB.advice, specificity: 57, cite: `Moon house ${args.moonHouse}` });
  const nk = nakshatraRule(args.moonNak, args.moonPada);
  if (nk) {
    frags.push({ text: nk.advice, specificity: 65, cite: args.moonNak });
    if (nk.padaNote) frags.push({ text: nk.padaNote, specificity: 70, cite: `pada ${args.moonPada}` });
  }
  if (args.lagLordRetro) {
    const rr = retrogradeRule(args.lagLord);
    if (rr) frags.push({ text: rr.advice, specificity: 68, cite: `${args.lagLord} R` });
  }
  if (args.stressHouse) {
    const stress = grahaBhavaRule('Saturn', args.stressHouse);
    if (stress) {
      frags.push({
        text: `Pressure in house ${args.stressHouse}: ${stress.advice}`,
        specificity: 50,
        cite: `House ${args.stressHouse}`,
      });
    }
  }
  // Rising-sign style tip via a synthetic lagna line from Moon×lagna blend's first practical beat — use Rahu? No.
  // Use grahaRashi of lag lord in its own rashi for behavioural tip
  const lordGR = grahaRashiRule(args.lagLord, args.lagLordRashi);
  if (lordGR) frags.push({ text: lordGR.advice, specificity: 52, cite: `Rising lord ${args.lagLord}` });
  void lagR;
  return frags;
}

export function collectDayFrags(args: {
  moonRashi: string;
  moonNak: string;
  moonPada?: number;
  waxing: boolean;
  tithiName?: string;
  paksha?: 'Shukla' | 'Krishna';
  lagna: string;
  climate?: 'tense' | 'fluid' | 'peak' | 'quiet' | 'volatile';
  climateNote?: string;
  soft?: number;
  hard?: number;
  retrogrades?: GrahaId[];
  dashaMaha?: string;
  dashaAntar?: string;
  aspectLabel?: string;
  aspectGraha?: GrahaId;
  natalAspectLabel?: string;
}): Frag[] {
  const frags: Frag[] = [];
  const nk = nakshatraRule(args.moonNak, args.moonPada);
  if (nk) {
    frags.push({ text: nk.temperament, specificity: 70, cite: args.moonNak });
    frags.push({ text: nk.advice, specificity: 68, cite: args.moonNak });
    if (nk.padaNote) {
      frags.push({
        text: nk.padaNote,
        specificity: 75,
        cite: `pada ${args.moonPada}`,
      });
    }
  }
  const moonR = grahaRashiRule('Moon', args.moonRashi);
  if (moonR) {
    frags.push({
      text: moonR.temperament,
      specificity: 55,
      cite: `Moon ${args.moonRashi}`,
    });
  }
  const paksha = args.paksha || (args.waxing ? 'Shukla' : 'Krishna');
  const tr = tithiRule(
    args.tithiName || (args.waxing ? 'Purnima' : 'Amavasya'),
    paksha,
  );
  frags.push({ text: tr.colour, specificity: 50, cite: args.tithiName || paksha });
  if (tr.pakshaColour) {
    frags.push({ text: tr.pakshaColour, specificity: 45, cite: paksha });
  }

  if (args.climateNote) {
    frags.push({ text: args.climateNote, specificity: 40, cite: 'climate' });
  }
  if (args.soft != null && args.hard != null) {
    const band =
      args.hard > args.soft + 1
        ? ASPECT_BAND.hard
        : args.soft > args.hard + 1
          ? ASPECT_BAND.soft
          : ASPECT_BAND.mixed;
    frags.push({ text: band.lifeMeaning, specificity: 42, cite: 'aspect band' });
  }
  if (args.retrogrades?.length) {
    for (const g of args.retrogrades.slice(0, 2)) {
      const rr = retrogradeRule(g);
      if (rr) frags.push({ text: rr.temperament, specificity: 60, cite: `${g} R` });
    }
  }
  if (args.dashaMaha && args.dashaAntar && args.dashaMaha !== '—') {
    const dp = dashaPairRule(args.dashaMaha, args.dashaAntar);
    if (dp) {
      frags.push({
        text: dp.tone,
        specificity: 58,
        cite: `${args.dashaMaha}/${args.dashaAntar}`,
      });
    }
  }
  if (args.aspectLabel) {
    const ar = aspectRule(args.aspectLabel);
    if (ar) {
      frags.push({ text: ar.lifeMeaning, specificity: 62, cite: args.aspectLabel });
      if (args.aspectGraha && ASPECT_GRAHA_FLAVOUR[args.aspectGraha]) {
        frags.push({
          text: ASPECT_GRAHA_FLAVOUR[args.aspectGraha],
          specificity: 63,
          cite: args.aspectGraha,
        });
      }
    }
  }
  if (args.natalAspectLabel) {
    const ar = aspectRule(args.natalAspectLabel);
    if (ar) {
      frags.push({
        text: ar.natalTransitNote,
        specificity: 66,
        cite: `natal ${args.natalAspectLabel}`,
      });
    }
  }
  const blend = lagnaMoonBlend(args.lagna, args.moonRashi);
  if (blend) {
    const short = blend.split('—')[0].trim() + '.';
    frags.push({
      text: `Today's rising–Moon colour: ${short}`,
      specificity: 35,
      cite: 'lagna/moon',
    });
  }
  return frags;
}

export function collectDayAdviceFrags(args: {
  moonRashi: string;
  moonNak: string;
  moonPada?: number;
  waxing: boolean;
  tithiName?: string;
  paksha?: 'Shukla' | 'Krishna';
  climate?: 'tense' | 'fluid' | 'peak' | 'quiet' | 'volatile';
  soft?: number;
  hard?: number;
  retrogrades?: GrahaId[];
  dashaMaha?: string;
  dashaAntar?: string;
  aspectLabel?: string;
  natalHit?: boolean;
}): Frag[] {
  const frags: Frag[] = [];
  const nk = nakshatraRule(args.moonNak, args.moonPada);
  if (nk) frags.push({ text: nk.advice, specificity: 70, cite: args.moonNak });
  const moonR = grahaRashiRule('Moon', args.moonRashi);
  if (moonR) frags.push({ text: moonR.advice, specificity: 55, cite: `Moon ${args.moonRashi}` });
  const paksha = args.paksha || (args.waxing ? 'Shukla' : 'Krishna');
  const tr = tithiRule(args.tithiName || (args.waxing ? 'Purnima' : 'Amavasya'), paksha);
  frags.push({ text: tr.advice, specificity: 50, cite: 'tithi' });
  if (tr.pakshaAdvice) frags.push({ text: tr.pakshaAdvice, specificity: 48, cite: paksha });

  if (args.soft != null && args.hard != null) {
    const band =
      args.hard > args.soft + 1
        ? ASPECT_BAND.hard
        : args.soft > args.hard + 1
          ? ASPECT_BAND.soft
          : ASPECT_BAND.mixed;
    frags.push({ text: band.advice, specificity: 45, cite: 'climate' });
  }
  if (args.retrogrades?.length) {
    const rr = retrogradeRule(args.retrogrades[0]);
    if (rr) frags.push({ text: rr.advice, specificity: 60, cite: `${args.retrogrades[0]} R` });
  }
  if (args.dashaMaha && args.dashaAntar && args.dashaMaha !== '—') {
    const dp = dashaPairRule(args.dashaMaha, args.dashaAntar);
    if (dp) frags.push({ text: dp.advice, specificity: 58, cite: 'dasha' });
  }
  if (args.aspectLabel) {
    const ar = aspectRule(args.aspectLabel);
    if (ar) frags.push({ text: ar.advice, specificity: 62, cite: args.aspectLabel });
  }
  if (args.natalHit) {
    frags.push({
      text: 'A personal natal theme is lit — tend it with care, not fatalism.',
      specificity: 52,
      cite: 'natal hit',
    });
  }
  return frags;
}

export {
  grahaRashiRule,
  nakshatraRule,
  grahaBhavaRule,
  aspectRule,
  dashaPairRule,
  tithiRule,
  lagnaMoonBlend,
  retrogradeRule,
};
