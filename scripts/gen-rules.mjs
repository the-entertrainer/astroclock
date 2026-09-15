/**
 * Generates fully-populated Astroved-style combinatorial rule tables.
 * Run: node scripts/gen-rules.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../src/lib/astro/rules');

const GRAHAS = ['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn','Rahu','Ketu'];
const RASHIS = ['Mesha','Vrishabha','Mithuna','Karka','Simha','Kanya','Tula','Vrischika','Dhanu','Makara','Kumbha','Meena'];
const RASHI_EN = {
  Mesha:'Aries', Vrishabha:'Taurus', Mithuna:'Gemini', Karka:'Cancer', Simha:'Leo',
  Kanya:'Virgo', Tula:'Libra', Vrischika:'Scorpio', Dhanu:'Sagittarius', Makara:'Capricorn',
  Kumbha:'Aquarius', Meena:'Pisces',
};
const NAKS = [
  'Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushya','Ashlesha',
  'Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha',
  'Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishta','Shatabhisha','Purva Bhadrapada',
  'Uttara Bhadrapada','Revati',
];

function an(word) {
  const w = word.trim();
  return /^[aeiouAEIOU]/.test(w) ? `an ${w}` : `a ${w}`;
}

const GRAHA_CORE = {
  Sun: {
    noun:'identity heat and vitality', verb:'lead and be seen',
    advice:'own one clear act of presence, then share the airtime',
    kinder:'authentic shine that lifts others',
    natalHint:'where you renew a sense of self',
  },
  Moon: {
    noun:'moods, needs, and emotional weather', verb:'tend and belong',
    advice:'check food, water, and a soft landing before big talks',
    kinder:'care that includes asking for harbour',
    natalHint:'how feelings arrive and settle',
  },
  Mars: {
    noun:'courage, drive, and directed heat', verb:'assert and cut through',
    advice:'aim heat into one clean effort; skip audience fights',
    kinder:'protective courage without theatre',
    natalHint:'how you push for what you want',
  },
  Mercury: {
    noun:'thinking, talk, and skill traffic', verb:'name and negotiate',
    advice:'write it down, then send the short clear version',
    kinder:'wit in service of understanding',
    natalHint:'how you learn, argue, and message',
  },
  Jupiter: {
    noun:'growth, meaning, and generous stretch', verb:'teach and widen',
    advice:'widen the frame with learning or generosity; avoid lecturing',
    kinder:'faith that stays curious',
    natalHint:'where grace and teachers show up',
  },
  Venus: {
    noun:'bond, taste, pleasure, and harmony', verb:'relate and delight',
    advice:'choose beauty and kindness on purpose',
    kinder:'harmony practiced, not assumed',
    natalHint:'how you bond and what you find beautiful',
  },
  Saturn: {
    noun:'duration, structure, and sober accountability', verb:'endure and build',
    advice:'one sober step beats a grand promise',
    kinder:'discipline that leaves room to breathe',
    natalHint:'where time is the teacher',
  },
  Rahu: {
    noun:'appetite for the unfamiliar and unconventional', verb:'reach past the known',
    advice:'curiosity yes — obsession needs a timer and a reality check',
    kinder:'novel aim with feet still on ground',
    natalHint:'where hunger for the new concentrates',
  },
  Ketu: {
    noun:'release, distill, and sideways knowing', verb:'let go and refine',
    advice:'release one extra obligation and keep the distilled lesson',
    kinder:'insight without vanishing from the room',
    natalHint:'what you already know sideways and may over-release',
  },
};

const RASHI_STYLE = {
  Mesha: { adj:'direct, fast-starting, and contest-ready', how:'head-on and initiatory', tip:'start before perfect clarity, then course-correct', avoid:'waiting rooms and fog', gift:'clean initiative' },
  Vrishabha: { adj:'steady, sensory, and loyalty-minded', how:'slow to pivot and keepable', tip:'build trust and comfort before big pivots', avoid:'fashion-chasing change', gift:'durable loyalty' },
  Mithuna: { adj:'curious, talkative, and dual-tracked', how:'through exchange and ideas', tip:'pick one channel to finish', avoid:'boredom dressed as multitasking', gift:'lively intelligence' },
  Karka: { adj:'protective, tide-sensitive, and harbour-seeking', how:'from feeling and belonging', tip:'secure the base before leading', avoid:'absorbing every room unchecked', gift:'loyal care' },
  Simha: { adj:'warm, proud, and creatively centred', how:'with signature and witness', tip:'ask for recognition without apology, then share the spotlight', avoid:'being taken for granted silently', gift:'generous presence' },
  Kanya: { adj:'precise, useful, and quietly critical of mess', how:'through competence and craft', tip:'soften critique with one kind sentence first', avoid:'perfection as a cage', gift:'useful precision' },
  Tula: { adj:'diplomatic, fairness-seeking, and partnership-toned', how:'by weighing and relating', tip:'name your preference before negotiating', avoid:'discord that lands in the body', gift:'negotiated grace' },
  Vrischika: { adj:'intense, private, and all-or-nothing with trust', how:'deep or not at all', tip:'choose honesty over half-open doors', avoid:'surface charm without loyalty', gift:'regenerative depth' },
  Dhanu: { adj:'meaning-hungry, humorous, and horizon-facing', how:'toward quest and belief', tip:'keep a horizon so petty loops do not shrink kindness', avoid:'dogma that freezes the quest', gift:'wide-angle faith' },
  Makara: { adj:'ambitious, reserved, and built for the long climb', how:'with structure and time', tip:'schedule softness so the climb is not a cage', avoid:'status without rest', gift:'earned endurance' },
  Kumbha: { adj:'future-minded, friendship-toned, and systems-odd', how:'among networks and odd allies', tip:'invest in belonging on your terms', avoid:'detachment that erases intimacy', gift:'inventive solidarity' },
  Meena: { adj:'empathic, imaginal, and porous at the edges', how:'through atmosphere and compassion', tip:'choose company like climate; keep one daily vessel', avoid:'dissolving without a shore', gift:'compassionate imagination' },
};

const HOUSE_LIFE = {
  1: { topic:'how you show up, body-energy, and first impressions', tip:'check body-energy before overcommitting', verb:'present', short:'self and first impressions' },
  2: { topic:'money habits, speech, and what you treat as valuable', tip:'go easy on impulse spends; speak a beat slower', verb:'resource', short:'speech and resources' },
  3: { topic:'courage, siblings/peers, short trips, and everyday hustle', tip:'take one short bold step — a message, trip, or skill rep', verb:'hustle', short:'courage and daily hustle' },
  4: { topic:'home, family base, private mood, and feeling settled', tip:'protect home and private mood; a tidy base steadies the rest', verb:'nest', short:'home and private mood' },
  5: { topic:'creativity, romance, play, kids/mentees, and speculative bets', tip:'lean into play, drafts, or warm attention to someone younger', verb:'create', short:'creativity and play' },
  6: { topic:'work routines, health habits, rivals, and daily problem-solving', tip:'keep routines small and doable; solve one practical problem', verb:'serve', short:'routines and problem-solving' },
  7: { topic:'one-to-one relationships, contracts, and mirroring with others', tip:'prefer fair one-to-one talks over guessing', verb:'partner', short:'partnerships and contracts' },
  8: { topic:'shared resources, intimacy, research, and big life resets', tip:'go gently with shared money, intimacy, and resets', verb:'transform', short:'intimacy and shared resets' },
  9: { topic:'beliefs, teachers, long journeys, and the bigger why', tip:'make room for a teacher, walk, or belief worth revisiting', verb:'quest', short:'belief and bigger why' },
  10: { topic:'career, public reputation, and what you are known for', tip:'show up for visible work; finish something public', verb:'achieve', short:'career and reputation' },
  11: { topic:'friends, networks, gains, and future-facing goals', tip:'reach a friend or network goal; ask without over-explaining', verb:'network', short:'friends and future goals' },
  12: { topic:'rest, solitude, endings, travel abroad, and quiet recharge', tip:'schedule real rest; endings and recharge count as work', verb:'withdraw', short:'rest and quiet endings' },
};

const NAK_CORE = {
  Ashwini: { theme:'swift starts and fix-it motion', advice:'start something small and correct in motion', mind:'begin, then refine', gift:'rapid first aid' },
  Bharani: { theme:'creative pressure held until delivery', advice:'hold pressure until one real deliverable can land', mind:'gestate, then birth', gift:'courageous carrying' },
  Krittika: { theme:'cutting fog with sharp clarity', advice:'make one sharp decision — aim heat, do not scorch', mind:'clarify by cutting', gift:'honest edge' },
  Rohini: { theme:'growth and attraction around a chosen target', advice:'grow around one chosen target; skip scatter', mind:'fascinate and cultivate', gift:'magnetic focus' },
  Mrigashira: { theme:'seeking, scanning, restless curiosity', advice:'seek and scan, then pick a trail before nightfall', mind:'hunt options', gift:'exploratory nose' },
  Ardra: { theme:'storm clarity — tear-down before rebuild', advice:'clear one mess honestly before rebuilding', mind:'insight after weather', gift:'cleansing honesty' },
  Punarvasu: { theme:'renewal and second chances', advice:'take a second chance without shame', mind:'bounce back', gift:'return grace' },
  Pushya: { theme:'steady care and right timing', advice:'nourish on schedule; timing beats heroics', mind:'care as rhythm', gift:'reliable nurture' },
  Ashlesha: { theme:'reading undercurrents and intimate strategy', advice:'keep ethics tight when reading undercurrents', mind:'sense the hidden', gift:'psychological radar' },
  Magha: { theme:'legacy mood and rightful presence', advice:'stand in dignity, not theatre', mind:'carry lineage tone', gift:'quiet authority' },
  'Purva Phalguni': { theme:'pleasure, play, and creative ease', advice:'finish one delight; ease is fuel', mind:'warm creative leisure', gift:'social warmth' },
  'Uttara Phalguni': { theme:'lasting alliances and help that sticks', advice:'ally and help in ways that endure', mind:'contract over vibe', gift:'loyal patronage' },
  Hasta: { theme:'skillful hands and practical craft', advice:'fix something tangible with your hands or craft', mind:'clever utility', gift:'handy cleverness' },
  Chitra: { theme:'designing beauty into form', advice:'close one unfinished ugly loop with design care', mind:'form-as-beauty', gift:'aesthetic architecture' },
  Swati: { theme:'independent wind and room to move', advice:'keep freedom so the mind stays kind', mind:'self-directed air', gift:'flexible independence' },
  Vishakha: { theme:'dual goals and aimed heat', advice:'pick which summit gets the heat today', mind:'forked ambition', gift:'focused ambition' },
  Anuradha: { theme:'loyal orbit around people and causes', advice:'regulate through loyal orbit, not isolation', mind:'devoted constellation', gift:'devoted friendship' },
  Jyeshtha: { theme:'protecting earned skill and quiet rank', advice:'protect skill; quiet rank beats loud proving', mind:'elder competence', gift:'seasoned guardianship' },
  Mula: { theme:'digging to roots before polish', advice:'honesty before polish; dig once, cleanly', mind:'root excavation', gift:'radical clarity' },
  'Purva Ashadha': { theme:'bold early push and declaration', advice:'declare, then prove with one step', mind:'invincible early claim', gift:'early conviction' },
  'Uttara Ashadha': { theme:'wins that last through structure', advice:'build a lasting win with allies and structure', mind:'enduring victory', gift:'structured triumph' },
  Shravana: { theme:'deep listening before speech', advice:'listen fully before you speak or decide', mind:'ear before tongue', gift:'receptive wisdom' },
  Dhanishta: { theme:'rhythm, teams, and timed bursts', advice:'sync with rhythm and teammates; time the burst', mind:'drumbeat collaboration', gift:'rhythmic teamwork' },
  Shatabhisha: { theme:'odd, systems-level healing fixes', advice:'try a systems-level fix others would skip', mind:'eccentric remedy', gift:'unconventional healing' },
  'Purva Bhadrapada': { theme:'fierce idealism needing aim', advice:'aim idealism; do not burn the room', mind:'fiery two-faced vow', gift:'principled fire' },
  'Uttara Bhadrapada': { theme:'patient depth and long-wait wisdom', advice:'bring one deep insight to the surface patiently', mind:'serpent patience', gift:'patient profundity' },
  Revati: { theme:'shepherding the last stretch gently', advice:'finish the last stretch with gentle care', mind:'guide across the shore', gift:'gentle completion' },
};

const PADA_MOD = [
  { n:1, tip:'leans initiatory — first-foot energy; begin before polishing.', flavour:'initiatory spark' },
  { n:2, tip:'seeks stability and something keepable; consolidate what already works.', flavour:'stabilising hold' },
  { n:3, tip:'sharpens effort and skillful hustle; refine craft under a little pressure.', flavour:'effortful craft' },
  { n:4, tip:'ripens toward completion and counsel; finish and advise rather than restart.', flavour:'ripening completion' },
];

const ASPECT_TYPES = {
  conjunct: { softHard:'mixed', life:'voices mix closely — themes blend and amplify', advice:'name whose voice is whose before you act on the blend', natal:'when transit meets natal by conjunction, that natal theme gets a loud temporary spotlight' },
  sextile: { softHard:'soft', life:'easier cooperation and opportunity with a little effort', advice:'reach out; soft links want a small ask or polish', natal:'sextile to natal lights a workable growth edge — lean in lightly' },
  square: { softHard:'hard', life:'productive friction that wants precision under pressure', advice:'pause before reacting; choose a precise response over drama', natal:'square to natal presses a growth edge — technique over theatre' },
  trine: { softHard:'soft', life:'natural flow and support that can be underused if you coast', advice:'ship what is ready; collaborate while the glide lasts', natal:'trine to natal opens an easier channel — use it, do not sleep on it' },
  oppose: { softHard:'hard', life:'polar dialogue — mirroring, negotiation, and both/and tension', advice:'hear the other pole before deciding; both sides hold data', natal:'opposition to natal sets up a temporary mirror — relate, do not declare war' },
};

const TITHI_COLOUR = {
  Pratipada: { tone:'Fresh-start lunar day — beginnings want a light touch.', advice:'Plant one small intention; do not overplant.' },
  Dwitiya: { tone:'Early-building lunar day — momentum is young.', advice:'Add one brick to yesterday’s start.' },
  Tritiya: { tone:'Effort-warming lunar day — skill likes practice.', advice:'Practice a craft rep; small mastery counts.' },
  Chaturthi: { tone:'Obstacle-aware lunar day — stubborn focus helps.', advice:'Name one blocker and work around it cleanly.' },
  Panchami: { tone:'Creative-intelligence lunar day — learning sparks.', advice:'Study or draft something curious.' },
  Shashthi: { tone:'Courage-edged lunar day — competitive spark without war.', advice:'Take one brave micro-step; skip grand battles.' },
  Saptami: { tone:'Vitality-forward lunar day — purpose wants motion.', advice:'Align action with a clear why.' },
  Ashtami: { tone:'Intensity-deep lunar day — emotions run thicker.', advice:'Go gently with moods; depth without drama.' },
  Navami: { tone:'Determination lunar day — finishing heat rises.', advice:'Close a loop that has been waiting.' },
  Dashami: { tone:'Duty-clear lunar day — dharma in small acts.', advice:'Do the right small thing you already know.' },
  Ekadashi: { tone:'Restraint-subtle lunar day — clarity loves less.', advice:'Fast from one distraction; clarity follows.' },
  Dwadashi: { tone:'Nourishment lunar day — replenish after restraint.', advice:'Replenish body and bonds thoughtfully.' },
  Trayodashi: { tone:'Refinement lunar day — polish signals care.', advice:'Polish one detail that signals care.' },
  Chaturdashi: { tone:'Edge-before-culmination lunar day — tidy loose ends.', advice:'Tidy loose ends; avoid last-minute chaos.' },
  Purnima: { tone:'Full-illumination lunar day — visibility peaks.', advice:'Share, celebrate, or complete in the open — then rest.' },
  Amavasya: { tone:'Quiet-reset lunar day — seed darkness, not forced launch.', advice:'Release and rest; plant silently, do not force launch.' },
};

// Unique temperament variants by graha×element-ish buckets to reduce sameness
const TEMP_VARIANTS = [
  (g, en, gc, rs) => `In ${en}, ${g}'s ${gc.noun} move ${rs.how}. People may notice ${rs.gift} coloured by ${gc.kinder}.`,
  (g, en, gc, rs) => `${g} through ${en} dresses ${gc.natalHint} in a ${rs.adj} style. The kinder form — ${gc.kinder} — still wants room to breathe.`,
  (g, en, gc, rs) => `When ${g} occupies ${en}, expect ${gc.noun} to favour ${rs.gift}. The default tempo is ${rs.how}, not a verdict.`,
];

const ADVICE_VARIANTS = [
  (g, en, gc, rs) => `With ${g} in ${en}, ${gc.advice}. Practically: ${rs.tip}. Watch ${rs.avoid}.`,
  (g, en, gc, rs) => `${g} in ${en} works best when you ${rs.tip}. Keep ${gc.kinder} in view, and sidestep ${rs.avoid}.`,
  (g, en, gc, rs) => `Useful ${en} move for ${g}: ${rs.tip}. ${gc.advice.charAt(0).toUpperCase() + gc.advice.slice(1)}.`,
];

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function writeFile(name, content) {
  fs.writeFileSync(path.join(OUT, name), content, 'utf8');
  console.log('wrote', name, content.length, 'bytes');
}

function hashPick(i, arr) {
  return arr[i % arr.length];
}

function genRashiGraha() {
  let body = `import type { GrahaId } from '../constants';\n\n`;
  body += `export interface GrahaRashiRule {\n  temperament: string;\n  advice: string;\n}\n\n`;
  body += `/** 9 grahas × 12 rashis — temperament + advice */\n`;
  body += `export const RASHI_GRAHA: Record<GrahaId, Record<string, GrahaRashiRule>> = {\n`;
  let i = 0;
  for (const g of GRAHAS) {
    const gc = GRAHA_CORE[g];
    body += `  ${g}: {\n`;
    for (const r of RASHIS) {
      const rs = RASHI_STYLE[r];
      const en = RASHI_EN[r];
      const temperament = hashPick(i, TEMP_VARIANTS)(g, en, gc, rs);
      const advice = hashPick(i + 1, ADVICE_VARIANTS)(g, en, gc, rs);
      i++;
      body += `    ${r}: {\n      temperament: '${esc(temperament)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    body += `  },\n`;
  }
  body += `};\n\n`;
  body += `export function grahaRashiRule(graha: GrahaId, rashi: string): GrahaRashiRule | null {\n`;
  body += `  return RASHI_GRAHA[graha]?.[rashi] ?? null;\n}\n`;
  writeFile('rashiGraha.ts', body);
}

function genNakshatra() {
  let body = `export interface NakshatraRule {\n  temperament: string;\n  advice: string;\n  /** Pada 1–4 modifiers */\n  pada: [string, string, string, string];\n}\n\n`;
  body += `/** 27 nakshatras with pada modifiers */\n`;
  body += `export const NAKSHATRA_RULES: Record<string, NakshatraRule> = {\n`;
  for (const n of NAKS) {
    const c = NAK_CORE[n];
    const key = n.includes(' ') ? `'${n}'` : n;
    const temperament = `Star-texture ${n}: ${c.theme}. The mental habit leans to ${c.mind}. Gift under this star: ${c.gift}.`;
    const advice = `Under ${n}, ${c.advice}. Favour ${c.gift} over forcing a mismatched pace.`;
    body += `  ${key}: {\n`;
    body += `    temperament: '${esc(temperament)}',\n`;
    body += `    advice: '${esc(advice)}',\n`;
    body += `    pada: [\n`;
    for (const p of PADA_MOD) {
      const line = `${n} pada ${p.n} adds ${an(p.flavour)}: it ${p.tip}`;
      body += `      '${esc(line)}',\n`;
    }
    body += `    ],\n  },\n`;
  }
  body += `};\n\n`;
  body += `export function nakshatraRule(name: string, pada?: number): { temperament: string; advice: string; padaNote?: string } | null {\n`;
  body += `  const r = NAKSHATRA_RULES[name];\n  if (!r) return null;\n`;
  body += `  const padaNote = pada && pada >= 1 && pada <= 4 ? r.pada[pada - 1] : undefined;\n`;
  body += `  return { temperament: r.temperament, advice: r.advice, padaNote };\n}\n`;
  writeFile('nakshatra.ts', body);
}

function genGrahaBhava() {
  let body = `import type { GrahaId } from '../constants';\n\n`;
  body += `export interface GrahaBhavaRule {\n  lifeArea: string;\n  advice: string;\n}\n\n`;
  body += `/** 9 grahas × 12 houses — life area + advice (natal/transit wording) */\n`;
  body += `export const GRAHA_BHAVA: Record<GrahaId, Record<number, GrahaBhavaRule>> = {\n`;
  let i = 0;
  for (const g of GRAHAS) {
    const gc = GRAHA_CORE[g];
    body += `  ${g}: {\n`;
    for (let h = 1; h <= 12; h++) {
      const hl = HOUSE_LIFE[h];
      const lifeArea = i % 2 === 0
        ? `${g} in the ${h}th house lights ${hl.topic}. ${gc.noun.charAt(0).toUpperCase() + gc.noun.slice(1)} show up especially around ${hl.short} — ${gc.natalHint}.`
        : `House ${h} becomes a stage for ${g}: attention gathers on ${hl.topic}. Expect ${gc.noun} to colour how you ${hl.verb}.`;
      const advice = i % 2 === 0
        ? `With ${g} emphasising the ${h}th, ${hl.tip}. Channel ${gc.kinder} into ${hl.short}.`
        : `${g} on ${hl.short}: ${hl.tip}. Also, ${gc.advice}.`;
      i++;
      body += `    ${h}: {\n      lifeArea: '${esc(lifeArea)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    body += `  },\n`;
  }
  body += `};\n\n`;
  body += `export function grahaBhavaRule(graha: GrahaId, house: number): GrahaBhavaRule | null {\n`;
  body += `  return GRAHA_BHAVA[graha]?.[house] ?? null;\n}\n`;
  writeFile('grahaBhava.ts', body);
}

function genAspects() {
  let body = `export type AspectLabel = 'conjunct' | 'sextile' | 'square' | 'trine' | 'oppose';\n\n`;
  body += `export interface AspectRule {\n  softHard: 'soft' | 'hard' | 'mixed';\n  lifeMeaning: string;\n  advice: string;\n  natalTransitNote: string;\n}\n\n`;
  body += `export const ASPECT_RULES: Record<AspectLabel, AspectRule> = {\n`;
  for (const [k, v] of Object.entries(ASPECT_TYPES)) {
    body += `  ${k}: {\n`;
    body += `    softHard: '${v.softHard}',\n`;
    body += `    lifeMeaning: '${esc(v.life)}',\n`;
    body += `    advice: '${esc(v.advice)}',\n`;
    body += `    natalTransitNote: '${esc(v.natal)}',\n`;
    body += `  },\n`;
  }
  body += `};\n\n`;
  body += `/** Graha-specific colour on aspect advice */\n`;
  body += `export const ASPECT_GRAHA_FLAVOUR: Record<string, string> = {\n`;
  for (const g of GRAHAS) {
    const gc = GRAHA_CORE[g];
    body += `  ${g}: '${esc(`When ${g} is in the link, ${gc.noun} colour the exchange — favour ${gc.kinder}.`)}',\n`;
  }
  body += `};\n\n`;
  // Soft/hard life meaning summaries for climate stitching
  body += `export const ASPECT_BAND = {\n`;
  body += `  soft: { lifeMeaning: 'Soft links favour cooperation, polish, and asking for help.', advice: 'Prefer alliance and finish what is already warm.' },\n`;
  body += `  hard: { lifeMeaning: 'Hard links favour precision under pressure over drama.', advice: 'Tighten scope; pause before sharp turns in conversation.' },\n`;
  body += `  mixed: { lifeMeaning: 'Mixed links ask you to alternate push and glide.', advice: 'Name friction honestly, then use any soft window to repair.' },\n`;
  body += `} as const;\n\n`;
  body += `export function aspectRule(label: string): AspectRule | null {\n`;
  body += `  const key = label as AspectLabel;\n  return ASPECT_RULES[key] ?? null;\n}\n`;
  writeFile('aspects.ts', body);
}

function genDasha() {
  let body = `import type { GrahaId } from '../constants';\n\n`;
  body += `export interface DashaPairRule {\n  tone: string;\n  advice: string;\n}\n\n`;
  body += `/** Maha × Antar 9×9 tone + advice */\n`;
  body += `export const DASHA_PAIR: Record<GrahaId, Record<GrahaId, DashaPairRule>> = {\n`;
  for (const maha of GRAHAS) {
    const mc = GRAHA_CORE[maha];
    body += `  ${maha}: {\n`;
    for (const antar of GRAHAS) {
      const ac = GRAHA_CORE[antar];
      let tone, advice;
      if (maha === antar) {
        tone = `A pure ${maha} chapter: ${mc.noun} are both heading and subplot — themes concentrate around ${mc.natalHint}.`;
        advice = `In a double-${maha} stretch, ${mc.advice}. Practice the kinder form: ${mc.kinder}.`;
      } else {
        tone = `${maha} period with ${antar} subplot: the long arc centres ${mc.noun}, while the near chapter modulates with ${ac.noun}.`;
        advice = `Live the ${maha} chapter’s better habits (${mc.advice}) while the ${antar} subplot asks you to ${ac.verb} — ${ac.advice}.`;
      }
      body += `    ${antar}: {\n      tone: '${esc(tone)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    body += `  },\n`;
  }
  body += `};\n\n`;
  body += `export function dashaPairRule(maha: string, antar: string): DashaPairRule | null {\n`;
  body += `  const m = maha as GrahaId;\n  const a = antar as GrahaId;\n`;
  body += `  return DASHA_PAIR[m]?.[a] ?? null;\n}\n`;
  writeFile('dasha.ts', body);
}

function genTithi() {
  let body = `export interface TithiRule {\n  colour: string;\n  advice: string;\n}\n\n`;
  body += `export const TITHI_RULES: Record<string, TithiRule> = {\n`;
  for (const [name, v] of Object.entries(TITHI_COLOUR)) {
    body += `  ${name}: {\n    colour: '${esc(v.tone)}',\n    advice: '${esc(v.advice)}',\n  },\n`;
  }
  body += `};\n\n`;
  body += `export const PAKSHA_RULES = {\n`;
  body += `  Shukla: {\n    colour: 'Waxing (bright) fortnight — appetite and visibility tend to grow.',\n`;
  body += `    advice: 'Lean into starts, visibility, and nourishment more than hard cuts.',\n  },\n`;
  body += `  Krishna: {\n    colour: 'Waning (dark) fortnight — editing and release often feel smarter than launching.',\n`;
  body += `    advice: 'Prefer finishing, releasing, and quiet repair over big openings.',\n  },\n`;
  body += `} as const;\n\n`;
  body += `export function tithiRule(tithiName: string, paksha?: 'Shukla' | 'Krishna'): { colour: string; advice: string; pakshaColour?: string; pakshaAdvice?: string } {\n`;
  body += `  const t = TITHI_RULES[tithiName] || { colour: 'lunar day colour', advice: 'Work with the Moon’s day-tone gently.' };\n`;
  body += `  const p = paksha ? PAKSHA_RULES[paksha] : undefined;\n`;
  body += `  return { colour: t.colour, advice: t.advice, pakshaColour: p?.colour, pakshaAdvice: p?.advice };\n}\n`;
  writeFile('tithiMoon.ts', body);
}

function genLagnaMoon() {
  let body = `/** 12×12 Profile openers — rising × Moon sign blends */\n`;
  body += `export const LAGNA_MOON_BLEND: Record<string, Record<string, string>> = {\n`;
  for (const lag of RASHIS) {
    const ls = RASHI_STYLE[lag];
    const len = RASHI_EN[lag];
    body += `  ${lag}: {\n`;
    for (const moon of RASHIS) {
      const ms = RASHI_STYLE[moon];
      const men = RASHI_EN[moon];
      let opener;
      if (lag === moon) {
        opener = `With ${len} rising and ${an(men)} Moon, outer style and inner weather often agree — you feel of a piece. Life asks you to refine one strong ${ls.adj} tone rather than juggle two. The gift is coherence (${ls.gift}); the work is not mistaking intensity for destiny.`;
      } else {
        opener = `Rising in ${len} with ${an(men)} Moon means appearance and feeling negotiate daily. Outwardly you meet life ${ls.how}; inwardly the heart is ${ms.adj}. Skill is learning when the ${len} mask leads and when the ${men} mood should — neither should win every argument. Blend ${ls.gift} with ${ms.gift}.`;
      }
      body += `    ${moon}: '${esc(opener)}',\n`;
    }
    body += `  },\n`;
  }
  body += `};\n\n`;
  body += `export function lagnaMoonBlend(lagna: string, moonRashi: string): string | null {\n`;
  body += `  return LAGNA_MOON_BLEND[lagna]?.[moonRashi] ?? null;\n}\n`;
  writeFile('lagnaMoonBlend.ts', body);
}

function genRetro() {
  let body = `import type { GrahaId } from '../constants';\n\n`;
  body += `export interface RetroRule {\n  temperament: string;\n  advice: string;\n}\n\n`;
  body += `export const RETROGRADE_RULES: Record<GrahaId, RetroRule> = {\n`;
  for (const g of GRAHAS) {
    const gc = GRAHA_CORE[g];
    const temperament = `When ${g} is retrograde, ${gc.noun} turn more inward — review, redo, and rethink before pushing outward. The kinder form still holds: ${gc.kinder}.`;
    const advice = `${g} retrograde: useful to revisit how you ${gc.verb} privately before showing the polished version. ${gc.advice.charAt(0).toUpperCase() + gc.advice.slice(1)}, with an extra beat of reflection.`;
    body += `  ${g}: {\n    temperament: '${esc(temperament)}',\n    advice: '${esc(advice)}',\n  },\n`;
  }
  body += `};\n\n`;
  body += `export function retrogradeRule(graha: GrahaId): RetroRule | null {\n`;
  body += `  return RETROGRADE_RULES[graha] ?? null;\n}\n`;
  writeFile('retrograde.ts', body);
}

function genCompose() {
  const body = `import type { GrahaId } from '../constants';
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
  return paras.join('\\n\\n');
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
  return {
    title,
    items: picked.map((f) => f.text),
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
      cite: \`\${args.graha} in \${args.rashi}\`,
    });
    frags.push({
      text: gr.advice,
      specificity: 48,
      cite: \`\${args.graha} in \${args.rashi}\`,
    });
  }
  const gb = grahaBhavaRule(args.graha, args.house);
  if (gb) {
    frags.push({
      text: gb.lifeArea,
      specificity: 55,
      cite: \`House \${args.house}\`,
    });
    frags.push({
      text: gb.advice,
      specificity: 52,
      cite: \`\${args.graha} house \${args.house}\`,
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
          cite: \`\${args.nakshatra} p\${args.pada}\`,
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
        cite: \`\${args.graha} R\`,
      });
      frags.push({
        text: rr.advice,
        specificity: 64,
        cite: \`\${args.graha} R\`,
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
      cite: \`Rising \${args.lagna} · Moon \${args.moonRashi}\`,
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
        cite: \`\${args.dashaMaha}/\${args.dashaAntar}\`,
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
  if (moonGR) frags.push({ text: moonGR.advice, specificity: 60, cite: \`Moon \${args.moonRashi}\` });
  const sunGR = grahaRashiRule('Sun', args.sunRashi);
  if (sunGR) frags.push({ text: sunGR.advice, specificity: 55, cite: \`Sun \${args.sunRashi}\` });
  const lordGB = grahaBhavaRule(args.lagLord, args.lagLordHouse);
  if (lordGB) frags.push({ text: lordGB.advice, specificity: 58, cite: \`\${args.lagLord} house \${args.lagLordHouse}\` });
  const moonGB = grahaBhavaRule('Moon', args.moonHouse);
  if (moonGB) frags.push({ text: moonGB.advice, specificity: 57, cite: \`Moon house \${args.moonHouse}\` });
  const nk = nakshatraRule(args.moonNak, args.moonPada);
  if (nk) {
    frags.push({ text: nk.advice, specificity: 65, cite: args.moonNak });
    if (nk.padaNote) frags.push({ text: nk.padaNote, specificity: 70, cite: \`pada \${args.moonPada}\` });
  }
  if (args.lagLordRetro) {
    const rr = retrogradeRule(args.lagLord);
    if (rr) frags.push({ text: rr.advice, specificity: 68, cite: \`\${args.lagLord} R\` });
  }
  if (args.stressHouse) {
    const stress = grahaBhavaRule('Saturn', args.stressHouse);
    if (stress) {
      frags.push({
        text: \`Pressure in house \${args.stressHouse}: \${stress.advice}\`,
        specificity: 50,
        cite: \`House \${args.stressHouse}\`,
      });
    }
  }
  // Rising-sign style tip via a synthetic lagna line from Moon×lagna blend's first practical beat — use Rahu? No.
  // Use grahaRashi of lag lord in its own rashi for behavioural tip
  const lordGR = grahaRashiRule(args.lagLord, args.lagLordRashi);
  if (lordGR) frags.push({ text: lordGR.advice, specificity: 52, cite: \`Rising lord \${args.lagLord}\` });
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
        cite: \`pada \${args.moonPada}\`,
      });
    }
  }
  const moonR = grahaRashiRule('Moon', args.moonRashi);
  if (moonR) {
    frags.push({
      text: moonR.temperament,
      specificity: 55,
      cite: \`Moon \${args.moonRashi}\`,
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
      if (rr) frags.push({ text: rr.temperament, specificity: 60, cite: \`\${g} R\` });
    }
  }
  if (args.dashaMaha && args.dashaAntar && args.dashaMaha !== '—') {
    const dp = dashaPairRule(args.dashaMaha, args.dashaAntar);
    if (dp) {
      frags.push({
        text: dp.tone,
        specificity: 58,
        cite: \`\${args.dashaMaha}/\${args.dashaAntar}\`,
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
        cite: \`natal \${args.natalAspectLabel}\`,
      });
    }
  }
  const blend = lagnaMoonBlend(args.lagna, args.moonRashi);
  if (blend) {
    const short = blend.split('—')[0].trim() + '.';
    frags.push({
      text: \`Today's rising–Moon colour: \${short}\`,
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
  if (moonR) frags.push({ text: moonR.advice, specificity: 55, cite: \`Moon \${args.moonRashi}\` });
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
    if (rr) frags.push({ text: rr.advice, specificity: 60, cite: \`\${args.retrogrades[0]} R\` });
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
`;
  // Fix double-escaped newlines in stitchParagraphs - write carefully
  writeFile('compose.ts', body.replace("paras.join('\\\\n\\\\n')", "paras.join('\\n\\n')"));
}

function genIndex() {
  writeFile(
    'index.ts',
    `export * from './rashiGraha';
export * from './nakshatra';
export * from './grahaBhava';
export * from './aspects';
export * from './dasha';
export * from './tithiMoon';
export * from './lagnaMoonBlend';
export * from './retrograde';
export * from './compose';
`,
  );
}

genRashiGraha();
genNakshatra();
genGrahaBhava();
genAspects();
genDasha();
genTithi();
genLagnaMoon();
genRetro();
genCompose();
genIndex();

const counts = {
  rashiGraha: 9 * 12,
  nakshatra: 27,
  nakPada: 27 * 4,
  grahaBhava: 9 * 12,
  aspects: 5,
  aspectBand: 3,
  aspectGrahaFlavour: 9,
  dashaPair: 9 * 9,
  tithi: Object.keys(TITHI_COLOUR).length,
  paksha: 2,
  lagnaMoonBlend: 12 * 12,
  retrograde: 9,
};
console.log('COUNTS', JSON.stringify(counts, null, 2));
console.log('TOTAL_CELLS', Object.values(counts).reduce((a, b) => a + b, 0));
