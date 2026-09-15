/**
 * P0 combinatorial density generators — unique padas, graha×nak, aspect pairs, dasha×house/sign, gochara house tones.
 * Run: node scripts/gen-p0-expand.mjs
 * Does NOT overwrite compose.ts / hand-tuned files.
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

const GRAHA_CORE = {
  Sun: { noun:'identity heat and vitality', verb:'lead and be seen', advice:'own one clear act of presence, then share the airtime', kinder:'authentic shine that lifts others', tip:'renew a sense of self' },
  Moon: { noun:'moods, needs, and emotional weather', verb:'tend and belong', advice:'check food, water, and a soft landing before big talks', kinder:'care that includes asking for harbour', tip:'let feelings arrive and settle' },
  Mars: { noun:'courage, drive, and directed heat', verb:'assert and cut through', advice:'aim heat into one clean effort; skip audience fights', kinder:'protective courage without theatre', tip:'push for what you want cleanly' },
  Mercury: { noun:'thinking, talk, and skill traffic', verb:'name and negotiate', advice:'write it down, then send the short clear version', kinder:'wit in service of understanding', tip:'learn, argue, and message with care' },
  Jupiter: { noun:'growth, meaning, and generous stretch', verb:'teach and widen', advice:'widen the frame with learning or generosity; avoid lecturing', kinder:'faith that stays curious', tip:'invite grace and teachers' },
  Venus: { noun:'bond, taste, pleasure, and harmony', verb:'relate and delight', advice:'choose beauty and kindness on purpose', kinder:'harmony practiced, not assumed', tip:'bond and choose what feels beautiful' },
  Saturn: { noun:'duration, structure, and sober accountability', verb:'endure and build', advice:'one sober step beats a grand promise', kinder:'discipline that leaves room to breathe', tip:'let time be the teacher' },
  Rahu: { noun:'appetite for the unfamiliar and unconventional', verb:'reach past the known', advice:'curiosity yes — obsession needs a timer and a reality check', kinder:'novel aim with feet still on ground', tip:'channel hunger for the new' },
  Ketu: { noun:'release, distill, and sideways knowing', verb:'let go and refine', advice:'release one extra obligation and keep the distilled lesson', kinder:'insight without vanishing from the room', tip:'trust what you already know sideways' },
};

const NAK_CORE = {
  Ashwini: { theme:'swift starts and fix-it motion', advice:'start something small and correct in motion', mind:'begin, then refine', gift:'rapid first aid', verb:'sprint-start', object:'a quick repair', skill:'first-response timing', counsel:'when to stop patching and ship' },
  Bharani: { theme:'creative pressure held until delivery', advice:'hold pressure until one real deliverable can land', mind:'gestate, then birth', gift:'courageous carrying', verb:'gestate', object:'a deliverable under pressure', skill:'carrying without dumping', counsel:'when the birth is ready' },
  Krittika: { theme:'cutting fog with sharp clarity', advice:'make one sharp decision — aim heat, do not scorch', mind:'clarify by cutting', gift:'honest edge', verb:'cut fog', object:'a clean decision', skill:'aimed critique', counsel:'when edge becomes scorch' },
  Rohini: { theme:'growth and attraction around a chosen target', advice:'grow around one chosen target; skip scatter', mind:'fascinate and cultivate', gift:'magnetic focus', verb:'cultivate', object:'one chosen garden', skill:'steady attraction', counsel:'when fascination becomes cling' },
  Mrigashira: { theme:'seeking, scanning, restless curiosity', advice:'seek and scan, then pick a trail before nightfall', mind:'hunt options', gift:'exploratory nose', verb:'scan trails', object:'an option worth tracking', skill:'curious search', counsel:'when seeking is stalling' },
  Ardra: { theme:'storm clarity — tear-down before rebuild', advice:'clear one mess honestly before rebuilding', mind:'insight after weather', gift:'cleansing honesty', verb:'weather the storm', object:'a honest teardown', skill:'rebuild sequencing', counsel:'when tears become floods' },
  Punarvasu: { theme:'renewal and second chances', advice:'take a second chance without shame', mind:'bounce back', gift:'return grace', verb:'return', object:'a second chance', skill:'renewal without shame', counsel:'when returns need a new aim' },
  Pushya: { theme:'steady care and right timing', advice:'nourish on schedule; timing beats heroics', mind:'care as rhythm', gift:'reliable nurture', verb:'nourish on schedule', object:'a care rhythm', skill:'timed nurture', counsel:'when care becomes over-holding' },
  Ashlesha: { theme:'reading undercurrents and intimate strategy', advice:'keep ethics tight when reading undercurrents', mind:'sense the hidden', gift:'psychological radar', verb:'read undercurrents', object:'an ethical intimacy', skill:'subtle sensing', counsel:'when radar becomes control' },
  Magha: { theme:'legacy mood and rightful presence', advice:'stand in dignity, not theatre', mind:'carry lineage tone', gift:'quiet authority', verb:'stand in dignity', object:'a rightful seat', skill:'quiet presence', counsel:'when legacy becomes costume' },
  'Purva Phalguni': { theme:'pleasure, play, and creative ease', advice:'finish one delight; ease is fuel', mind:'warm creative leisure', gift:'social warmth', verb:'play creatively', object:'one finished delight', skill:'warm leisure', counsel:'when ease becomes escape' },
  'Uttara Phalguni': { theme:'lasting alliances and help that sticks', advice:'ally and help in ways that endure', mind:'contract over vibe', gift:'loyal patronage', verb:'ally for keeps', object:'help that sticks', skill:'loyal contracts', counsel:'when help becomes debt' },
  Hasta: { theme:'skillful hands and practical craft', advice:'fix something tangible with your hands or craft', mind:'clever utility', gift:'handy cleverness', verb:'craft by hand', object:'a tangible fix', skill:'practical cleverness', counsel:'when craft becomes fuss' },
  Chitra: { theme:'designing beauty into form', advice:'close one unfinished ugly loop with design care', mind:'form-as-beauty', gift:'aesthetic architecture', verb:'design form', object:'a beautiful finish', skill:'aesthetic craft', counsel:'when beauty delays function' },
  Swati: { theme:'independent wind and room to move', advice:'keep freedom so the mind stays kind', mind:'self-directed air', gift:'flexible independence', verb:'keep airspace', object:'room to move', skill:'kind autonomy', counsel:'when freedom becomes flight' },
  Vishakha: { theme:'dual goals and aimed heat', advice:'pick which summit gets the heat today', mind:'forked ambition', gift:'focused ambition', verb:'aim the fork', object:'one chosen summit', skill:'focused heat', counsel:'when dual goals cancel' },
  Anuradha: { theme:'loyal orbit around people and causes', advice:'regulate through loyal orbit, not isolation', mind:'devoted constellation', gift:'devoted friendship', verb:'orbit loyally', object:'a devoted bond', skill:'constellation care', counsel:'when loyalty forgets self' },
  Jyeshtha: { theme:'protecting earned skill and quiet rank', advice:'protect skill; quiet rank beats loud proving', mind:'elder competence', gift:'seasoned guardianship', verb:'guard skill', object:'earned quiet rank', skill:'seasoned protection', counsel:'when guardianship becomes pride' },
  Mula: { theme:'digging to roots before polish', advice:'honesty before polish; dig once, cleanly', mind:'root excavation', gift:'radical clarity', verb:'dig to root', object:'a clean excavation', skill:'radical honesty', counsel:'when digging uproots too much' },
  'Purva Ashadha': { theme:'bold early push and declaration', advice:'declare, then prove with one step', mind:'invincible early claim', gift:'early conviction', verb:'declare early', object:'a bold first push', skill:'early conviction', counsel:'when declaration outruns proof' },
  'Uttara Ashadha': { theme:'wins that last through structure', advice:'build a lasting win with allies and structure', mind:'enduring victory', gift:'structured triumph', verb:'structure the win', object:'a lasting victory', skill:'allied endurance', counsel:'when structure freezes joy' },
  Shravana: { theme:'deep listening before speech', advice:'listen fully before you speak or decide', mind:'ear before tongue', gift:'receptive wisdom', verb:'listen deep', object:'a heard truth', skill:'receptive wisdom', counsel:'when listening becomes silence-as-avoidance' },
  Dhanishta: { theme:'rhythm, teams, and timed bursts', advice:'sync with rhythm and teammates; time the burst', mind:'drumbeat collaboration', gift:'rhythmic teamwork', verb:'sync the drum', object:'a timed team burst', skill:'rhythmic collab', counsel:'when rhythm forces the beat' },
  Shatabhisha: { theme:'odd, systems-level healing fixes', advice:'try a systems-level fix others would skip', mind:'eccentric remedy', gift:'unconventional healing', verb:'heal the system', object:'an odd remedy', skill:'systems healing', counsel:'when oddness isolates' },
  'Purva Bhadrapada': { theme:'fierce idealism needing aim', advice:'aim idealism; do not burn the room', mind:'fiery two-faced vow', gift:'principled fire', verb:'aim the ideal', object:'a principled fire', skill:'aimed idealism', counsel:'when fire scorches allies' },
  'Uttara Bhadrapada': { theme:'patient depth and long-wait wisdom', advice:'bring one deep insight to the surface patiently', mind:'serpent patience', gift:'patient profundity', verb:'wait deep', object:'one surfaced insight', skill:'patient depth', counsel:'when patience becomes freeze' },
  Revati: { theme:'shepherding the last stretch gently', advice:'finish the last stretch with gentle care', mind:'guide across the shore', gift:'gentle completion', verb:'shepherd gently', object:'a soft finish line', skill:'gentle guidance', counsel:'when care delays the shore' },
};

const HOUSE_LIFE = {
  1: { topic:'how you show up, body-energy, and first impressions', tip:'check body-energy before overcommitting', short:'self and first impressions' },
  2: { topic:'money habits, speech, and what you treat as valuable', tip:'go easy on impulse spends; speak a beat slower', short:'speech and resources' },
  3: { topic:'courage, siblings/peers, short trips, and everyday hustle', tip:'take one short bold step — a message, trip, or skill rep', short:'courage and daily hustle' },
  4: { topic:'home, family base, private mood, and feeling settled', tip:'protect home and private mood; a tidy base steadies the rest', short:'home and private mood' },
  5: { topic:'creativity, romance, play, kids/mentees, and speculative bets', tip:'lean into play, drafts, or warm attention to someone younger', short:'creativity and play' },
  6: { topic:'work routines, health habits, rivals, and daily problem-solving', tip:'keep routines small and doable; solve one practical problem', short:'routines and problem-solving' },
  7: { topic:'one-to-one relationships, contracts, and mirroring with others', tip:'prefer fair one-to-one talks over guessing', short:'partnerships and contracts' },
  8: { topic:'shared resources, intimacy, research, and big life resets', tip:'go gently with shared money, intimacy, and resets', short:'intimacy and shared resets' },
  9: { topic:'beliefs, teachers, long journeys, and the bigger why', tip:'make room for a teacher, walk, or belief worth revisiting', short:'belief and bigger why' },
  10: { topic:'career, public reputation, and what you are known for', tip:'show up for visible work; finish something public', short:'career and reputation' },
  11: { topic:'friends, networks, gains, and future-facing goals', tip:'reach a friend or network goal; ask without over-explaining', short:'friends and future goals' },
  12: { topic:'rest, solitude, endings, travel abroad, and quiet recharge', tip:'schedule real rest; endings and recharge count as work', short:'rest and quiet endings' },
};

const ASPECTS = ['conjunct','sextile','square','trine','oppose'];
const ASPECT_LIFE = {
  conjunct: { life:'mix and amplify', advice:'name whose voice is whose', softHard:'mixed' },
  sextile: { life:'offer workable cooperation', advice:'make a small ask or polish', softHard:'soft' },
  square: { life:'press with productive friction', advice:'choose precision over drama', softHard:'hard' },
  trine: { life:'open natural flow', advice:'ship what is ready while the glide lasts', softHard:'soft' },
  oppose: { life:'mirror across a polar dialogue', advice:'hear the other pole before deciding', softHard:'hard' },
};

const KEY_PAIRS = [
  ['Moon','Saturn'],['Moon','Mars'],['Sun','Saturn'],['Venus','Mars'],['Mercury','Jupiter'],
  ['Sun','Moon'],['Moon','Venus'],['Sun','Mars'],['Mercury','Saturn'],['Jupiter','Saturn'],
  ['Venus','Saturn'],['Mars','Saturn'],['Sun','Jupiter'],['Moon','Jupiter'],['Mercury','Venus'],
  ['Mars','Jupiter'],['Sun','Venus'],['Moon','Mercury'],['Rahu','Moon'],['Ketu','Moon'],
];

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}
function writeFile(name, content) {
  fs.writeFileSync(path.join(OUT, name), content, 'utf8');
  console.log('wrote', name, (content.length/1024).toFixed(1)+'kb');
}
function an(word) {
  const w = word.trim();
  return /^[aeiouAEIOU]/.test(w) ? `an ${w}` : `a ${w}`;
}
function keyNak(n) { return n.includes(' ') ? `'${n}'` : n; }

function genUniqueNakshatra() {
  const PADA_VERBS = [
    (n,c) => `${n} pada 1 (fire-foot): you ${c.verb} with first-foot heat — begin ${c.object} before polishing. Gift: ${c.gift} as a spark, not a finished mural.`,
    (n,c) => `${n} pada 2 (earth-hold): you steady ${c.object} into something keepable — consolidate what already works under ${c.theme}. Gift: ${c.gift} that lasts past the mood.`,
    (n,c) => `${n} pada 3 (air-craft): you refine ${c.skill} under a little pressure — hustle skillfully around ${c.theme}. Gift: ${c.gift} practiced, not performed.`,
    (n,c) => `${n} pada 4 (water-ripe): you ripen toward counsel — finish and advise on ${c.counsel} rather than restart. Gift: ${c.gift} shared as guidance.`,
  ];
  let body = `export interface NakshatraRule {\n  temperament: string;\n  advice: string;\n  /** Pada 1–4 unique modifiers (27×4) */\n  pada: [string, string, string, string];\n}\n\n`;
  body += `/** 27 nakshatras with UNIQUE pada modifiers (no generic 4-tone reuse) */\n`;
  body += `export const NAKSHATRA_RULES: Record<string, NakshatraRule> = {\n`;
  const seen = new Set();
  for (const n of NAKS) {
    const c = NAK_CORE[n];
    const temperament = `Star-texture ${n}: ${c.theme}. The mental habit leans to ${c.mind}. Gift under this star: ${c.gift}.`;
    const advice = `Under ${n}, ${c.advice}. Favour ${c.gift} over forcing a mismatched pace.`;
    const padas = PADA_VERBS.map((fn) => fn(n, c));
    for (const p of padas) {
      if (seen.has(p)) throw new Error('duplicate pada: '+p);
      seen.add(p);
    }
    body += `  ${keyNak(n)}: {\n`;
    body += `    temperament: '${esc(temperament)}',\n`;
    body += `    advice: '${esc(advice)}',\n`;
    body += `    pada: [\n`;
    for (const p of padas) body += `      '${esc(p)}',\n`;
    body += `    ],\n  },\n`;
  }
  body += `};\n\n`;
  body += `export function nakshatraRule(name: string, pada?: number): { temperament: string; advice: string; padaNote?: string } | null {\n`;
  body += `  const r = NAKSHATRA_RULES[name];\n  if (!r) return null;\n`;
  body += `  const padaNote = pada && pada >= 1 && pada <= 4 ? r.pada[pada - 1] : undefined;\n`;
  body += `  return { temperament: r.temperament, advice: r.advice, padaNote };\n}\n`;
  body += `export function nakshatraPadaCount(): number {\n  return Object.values(NAKSHATRA_RULES).reduce((n, r) => n + r.pada.length, 0);\n}\n`;
  writeFile('nakshatra.ts', body);
  console.log('unique padas', seen.size);
}

function genGrahaNakshatra() {
  let body = `import type { GrahaId } from '../constants';\n\n`;
  body += `export interface GrahaNakRule {\n  temperament: string;\n  advice: string;\n}\n\n`;
  body += `/** 9 grahas × 27 nakshatras — plain English + advice */\n`;
  body += `export const GRAHA_NAKSHATRA: Record<GrahaId, Record<string, GrahaNakRule>> = {\n`;
  let i = 0;
  for (const g of GRAHAS) {
    const gc = GRAHA_CORE[g];
    body += `  ${g}: {\n`;
    for (const n of NAKS) {
      const nc = NAK_CORE[n];
      const temperament = i % 3 === 0
        ? `When ${g} sits in ${n}, ${gc.noun} wear the star-texture of ${nc.theme}. You ${gc.verb} through ${nc.mind} — gift: ${nc.gift} coloured by ${gc.kinder}.`
        : i % 3 === 1
          ? `${g} through ${n} dresses ${gc.tip} in ${nc.theme}. The mind leans to ${nc.mind}; keep ${gc.kinder} so ${nc.gift} stays kind.`
          : `${n} colours ${g}: expect ${gc.noun} to ${nc.verb} rather than force a mismatched pace. ${nc.gift.charAt(0).toUpperCase() + nc.gift.slice(1)} meets ${gc.kinder}.`;
      const advice = i % 2 === 0
        ? `With ${g} in ${n}, ${nc.advice}. Also, ${gc.advice}.`
        : `${g} in ${n}: favour ${nc.gift}. Practically, ${gc.advice} while you ${nc.verb}.`;
      i++;
      body += `    ${keyNak(n)}: {\n      temperament: '${esc(temperament)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    body += `  },\n`;
  }
  body += `};\n\n`;
  body += `export function grahaNakshatraRule(graha: GrahaId, nak: string): GrahaNakRule | null {\n`;
  body += `  return GRAHA_NAKSHATRA[graha]?.[nak] ?? null;\n}\n`;
  body += `export function grahaNakshatraCount(): number {\n  let n = 0;\n  for (const g of Object.keys(GRAHA_NAKSHATRA) as GrahaId[]) n += Object.keys(GRAHA_NAKSHATRA[g]).length;\n  return n;\n}\n`;
  writeFile('grahaNakshatra.ts', body);
}

function genAspectPairs() {
  let body = `import type { GrahaId } from '../constants';\nimport type { AspectLabel } from './aspects';\n\n`;
  body += `export interface AspectPairRule {\n  lifeMeaning: string;\n  advice: string;\n}\n\n`;
  body += `/** Key graha pairs × aspect types — plain English + advice */\n`;
  body += `export const ASPECT_PAIRS: Record<string, Record<AspectLabel, AspectPairRule>> = {\n`;
  for (const [a, b] of KEY_PAIRS) {
    const ga = GRAHA_CORE[a];
    const gb = GRAHA_CORE[b];
    const pairKey = `${a}_${b}`;
    body += `  '${pairKey}': {\n`;
    for (const asp of ASPECTS) {
      const al = ASPECT_LIFE[asp];
      const lifeMeaning = `When ${a} and ${b} ${al.life}, ${ga.noun} meet ${gb.noun}. The exchange tends ${al.softHard}: ${ga.kinder} negotiating with ${gb.kinder}.`;
      const advice = `${a}–${b} ${asp}: ${al.advice}. Practically — ${ga.advice}; and for ${b}, ${gb.advice}.`;
      body += `    ${asp}: {\n      lifeMeaning: '${esc(lifeMeaning)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    body += `  },\n`;
  }
  body += `};\n\n`;
  body += `function pairKey(a: string, b: string): string {\n  const k1 = \`\${a}_\${b}\`;\n  const k2 = \`\${b}_\${a}\`;\n  if (ASPECT_PAIRS[k1]) return k1;\n  if (ASPECT_PAIRS[k2]) return k2;\n  return k1;\n}\n\n`;
  body += `export function aspectPairRule(a: GrahaId | string, b: GrahaId | string, label: string): AspectPairRule | null {\n`;
  body += `  const table = ASPECT_PAIRS[pairKey(String(a), String(b))];\n  if (!table) return null;\n  return table[label as AspectLabel] ?? null;\n}\n`;
  body += `export function aspectPairCount(): number {\n  let n = 0;\n  for (const k of Object.keys(ASPECT_PAIRS)) n += Object.keys(ASPECT_PAIRS[k]).length;\n  return n;\n}\n`;
  writeFile('aspectPairs.ts', body);
}

function genDashaBhava() {
  let body = `import type { GrahaId } from '../constants';\n\n`;
  body += `export interface DashaBhavaRule {\n  tone: string;\n  advice: string;\n}\n\n`;
  body += `/** Dasha lord × natal house of that lord — period advice from their chart */\n`;
  body += `export const DASHA_BHAVA: Record<GrahaId, Record<number, DashaBhavaRule>> = {\n`;
  for (const g of GRAHAS) {
    const gc = GRAHA_CORE[g];
    body += `  ${g}: {\n`;
    for (let h = 1; h <= 12; h++) {
      const hl = HOUSE_LIFE[h];
      const tone = `Your ${g} period lights natal house ${h} (${hl.short}): ${gc.noun} colour ${hl.topic}. This chapter asks you to ${gc.verb} through that life area.`;
      const advice = `During ${g} dasha with the lord in house ${h}: ${hl.tip}. Keep ${gc.kinder} — ${gc.advice}.`;
      body += `    ${h}: {\n      tone: '${esc(tone)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    body += `  },\n`;
  }
  body += `};\n\n`;
  body += `/** Dasha lord × natal sign of that lord */\n`;
  body += `export const DASHA_RASHI: Record<GrahaId, Record<string, DashaBhavaRule>> = {\n`;
  for (const g of GRAHAS) {
    const gc = GRAHA_CORE[g];
    body += `  ${g}: {\n`;
    for (const r of RASHIS) {
      const en = RASHI_EN[r];
      const tone = `Period lord ${g} natal in ${en}: the chapter dresses ${gc.noun} in ${en} style — you ${gc.verb} with that sign's tempo.`;
      const advice = `${g} dasha from a natal ${en} seat: ${gc.advice}. Let ${en} colour how you ${gc.tip}.`;
      body += `    ${r}: {\n      tone: '${esc(tone)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    body += `  },\n`;
  }
  body += `};\n\n`;
  body += `export function dashaBhavaRule(lord: GrahaId | string, house: number): DashaBhavaRule | null {\n`;
  body += `  return DASHA_BHAVA[lord as GrahaId]?.[house] ?? null;\n}\n`;
  body += `export function dashaRashiRule(lord: GrahaId | string, rashi: string): DashaBhavaRule | null {\n`;
  body += `  return DASHA_RASHI[lord as GrahaId]?.[rashi] ?? null;\n}\n`;
  body += `export function dashaBhavaCount(): number {\n  let n = 0;\n  for (const g of Object.keys(DASHA_BHAVA) as GrahaId[]) n += Object.keys(DASHA_BHAVA[g]).length;\n  return n;\n}\n`;
  body += `export function dashaRashiCount(): number {\n  let n = 0;\n  for (const g of Object.keys(DASHA_RASHI) as GrahaId[]) n += Object.keys(DASHA_RASHI[g]).length;\n  return n;\n}\n`;
  writeFile('dashaBhava.ts', body);
}

function genGochara() {
  let body = `import type { GrahaId } from '../constants';\n\n`;
  body += `export interface GocharaHouseRule {\n  lifeChapter: string;\n  advice: string;\n}\n\n`;
  body += `/** Transit graha × natal house it occupies — life-chapter + advice */\n`;
  body += `export const GOCHARA_HOUSE: Record<GrahaId, Record<number, GocharaHouseRule>> = {\n`;
  for (const g of GRAHAS) {
    const gc = GRAHA_CORE[g];
    body += `  ${g}: {\n`;
    for (let h = 1; h <= 12; h++) {
      const hl = HOUSE_LIFE[h];
      const lifeChapter = `Transit ${g} is walking your natal house ${h} — ${hl.topic}. ${gc.noun.charAt(0).toUpperCase()+gc.noun.slice(1)} temporarily colour ${hl.short}. This is a chapter heading, not a rewrite.`;
      const advice = `While ${g} transits house ${h}: ${hl.tip}. Practise ${gc.kinder}; ${gc.advice}.`;
      body += `    ${h}: {\n      lifeChapter: '${esc(lifeChapter)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    body += `  },\n`;
  }
  body += `};\n\n`;
  body += `export function gocharaHouseRule(graha: GrahaId, house: number): GocharaHouseRule | null {\n`;
  body += `  return GOCHARA_HOUSE[graha]?.[house] ?? null;\n}\n`;
  body += `export function gocharaHouseCount(): number {\n  let n = 0;\n  for (const g of Object.keys(GOCHARA_HOUSE) as GrahaId[]) n += Object.keys(GOCHARA_HOUSE[g]).length;\n  return n;\n}\n`;
  writeFile('gochara.ts', body);
}

genUniqueNakshatra();
genGrahaNakshatra();
genAspectPairs();
genDashaBhava();
genGochara();
console.log('P0 expand done');
