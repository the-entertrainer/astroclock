/**
 * Human-voice rule tables — everyday sentences about mood/work/relationships.
 * Run: node scripts/gen-human-rules.mjs
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

const G = {
  Sun: { you:'you want to be seen and lead', do:'own one clear act of presence, then share the spotlight', soft:'show up warmly without needing a standing ovation' },
  Moon: { you:'your moods and needs set the weather', do:'eat, drink water, and find a soft landing before hard talks', soft:'ask for care instead of toughing it out alone' },
  Mars: { you:'you push hard for what you want', do:'put the heat into one clean effort, not a public fight', soft:'be brave without turning it into theatre' },
  Mercury: { you:'your mind wants to talk, learn, and sort details', do:'write it down, then send the short clear version', soft:'use wit to understand, not to win' },
  Jupiter: { you:'you look for meaning, growth, and a wider frame', do:'learn something or help someone — skip the lecture', soft:'keep faith curious, not preachy' },
  Venus: { you:'you care about comfort, beauty, and how you bond', do:'choose kindness and one beautiful detail on purpose', soft:'practise harmony — don’t just assume it' },
  Saturn: { you:'you take the long road and notice what’s unfinished', do:'take one sober step instead of a grand promise', soft:'stay disciplined but leave room to breathe' },
  Rahu: { you:'you hunger for the new and unfamiliar', do:'follow curiosity with a timer and a reality check', soft:'aim for novelty with both feet on the ground' },
  Ketu: { you:'you already know some things sideways and like to simplify', do:'drop one extra obligation and keep the lesson', soft:'share the insight without disappearing from the room' },
};

const N = {
  Ashwini: { mood:'You’re in a quick-start mood — begin, then fix as you go.', tip:'Start something small and correct it in motion rather than waiting for perfect.', p:[
    'You’re itching to begin — take the first step before you polish.',
    'Steady the quick start into something you can keep.',
    'Put skill into the hustle — refine while you move.',
    'You’re in a finishing mood — close the loop and help someone else start.',
  ]},
  Bharani: { mood:'You’re holding creative pressure until something real can land.', tip:'Carry one deliverable all the way instead of dumping the weight early.', p:[
    'Start the hard creative carry — don’t wait for inspiration to feel light.',
    'Protect what you’re gestating; keep the base steady.',
    'Work the craft under pressure without drama.',
    'Deliver and advise — the birth is ready; stop restarting.',
  ]},
  Krittika: { mood:'You want sharp clarity — fog bothers you today.', tip:'Make one clean decision. Aim the edge; don’t scorch people.', p:[
    'Cut through one foggy choice now.',
    'Turn clarity into something durable, not just a hot take.',
    'Use critique as craft, not as a weapon.',
    'Finish the cut cleanly, then counsel rather than keep slicing.',
  ]},
  Rohini: { mood:'You’re drawn to grow and attract around one chosen thing.', tip:'Pick one garden. Skip scatter.', p:[
    'Choose the target that fascinates you and begin tending it.',
    'Build loyalty and comfort around what you already chose.',
    'Practise the craft of attraction — show up consistently.',
    'Ripen what grew; share it instead of planting ten more.',
  ]},
  Mrigashira: { mood:'You’re scanning options — curiosity is loud.', tip:'Seek, then pick a trail before nightfall.', p:[
    'Follow the interesting scent — explore first.',
    'Narrow the hunt to something keepable.',
    'Skill up on the path you chose; hustle with focus.',
    'Stop scanning; advise from what you already found.',
  ]},
  Ardra: { mood:'Insight may arrive after a storm — tear-down before rebuild.', tip:'Clear one honest mess before you rebuild.', p:[
    'Name the mess without sugarcoating.',
    'Stabilise after the weather; keep what still works.',
    'Rebuild with careful effort, not another blow-up.',
    'Share the lesson; don’t reopen the storm for sport.',
  ]},
  Punarvasu: { mood:'Second chances feel available — renewal is in the air.', tip:'Take a return without shame, then aim it freshly.', p:[
    'Say yes to a second chance today.',
    'Make the return sturdy — habits, not hopes.',
    'Practise the comeback with skill.',
    'Help someone else return; you’re past the restart panic.',
  ]},
  Pushya: { mood:'Care and timing matter more than heroics.', tip:'Nourish on a schedule — food, rest, people.', p:[
    'Start a simple care ritual today.',
    'Keep the nurture steady and boring in a good way.',
    'Refine how you care under a little pressure.',
    'Advise others from your care practice; don’t invent new chaos.',
  ]},
  Ashlesha: { mood:'You’re reading undercurrents — intimacy needs ethics.', tip:'Keep honesty tight when you sense the hidden.', p:[
    'Notice what’s unspoken, then ask kindly.',
    'Build trust you can keep — no games.',
    'Use psychological skill without control.',
    'Share wisdom; don’t cling to the secret.',
  ]},
  Magha: { mood:'Dignity and rightful presence are on your mind.', tip:'Stand tall without theatre.', p:[
    'Claim a seat you earned — quietly.',
    'Make that presence reliable, not flashy.',
    'Lead with craft under pressure.',
    'Mentor; legacy is sharing, not posing.',
  ]},
  'Purva Phalguni': { mood:'Pleasure, play, and creative ease want airtime.', tip:'Finish one delight; ease is fuel, not escape.', p:[
    'Start something warm and creative.',
    'Turn fun into something you can keep enjoying.',
    'Practise the craft of pleasure without guilt.',
    'Close the party gracefully; rest and advise.',
  ]},
  'Uttara Phalguni': { mood:'You want alliances and help that actually stick.', tip:'Ally in ways that endure past the vibe.', p:[
    'Offer or ask for real help today.',
    'Put the alliance on solid ground.',
    'Work the relationship with skill.',
    'Be the reliable patron; finish what you promised.',
  ]},
  Hasta: { mood:'Your hands and practical cleverness want a job.', tip:'Fix something tangible.', p:[
    'Pick up a tool or a to-do and start.',
    'Make the fix durable.',
    'Hone the craft under a deadline.',
    'Teach the fix; don’t keep reinventing it.',
  ]},
  Chitra: { mood:'You want beauty designed into form — unfinished messes irritate.', tip:'Close one ugly unfinished loop with care.', p:[
    'Begin the redesign of one messy thing.',
    'Make beauty sturdy, not just pretty.',
    'Craft under pressure without perfectionism.',
    'Show the finished form; stop tinkering forever.',
  ]},
  Swati: { mood:'You need room to move — freedom keeps you kind.', tip:'Protect a little independence so you don’t snap.', p:[
    'Claim airspace for your own pace.',
    'Build freedom into a sustainable rhythm.',
    'Negotiate independence with skill, not flight.',
    'You’re ready to advise others on breathing room — and to finish, not flee.',
  ]},
  Vishakha: { mood:'Two goals may tug — heat wants a single summit.', tip:'Pick which goal gets the energy today.', p:[
    'Choose one summit and take a step.',
    'Stabilise that choice; don’t flip-flop.',
    'Work the climb with focused hustle.',
    'Arrive and counsel; stop opening a second front.',
  ]},
  Anuradha: { mood:'Loyal orbit around people and causes soothes you.', tip:'Regulate through friendship, not isolation.', p:[
    'Reach one loyal person or cause.',
    'Deepen the bond you already have.',
    'Serve the orbit with skillful effort.',
    'Advise from loyalty; don’t lose yourself in it.',
  ]},
  Jyeshtha: { mood:'You’re protective of earned skill and quiet rank.', tip:'Guard competence; skip loud proving.', p:[
    'Protect one skill you’ve earned.',
    'Make that guardianship steady.',
    'Refine mastery under pressure.',
    'Mentor from experience; stop defending status.',
  ]},
  Mula: { mood:'You want roots, not polish — honesty first.', tip:'Dig once, cleanly; don’t excavate the whole yard.', p:[
    'Ask the root question you’ve been avoiding.',
    'Keep what the dig revealed; stabilize.',
    'Work the truth into usable form.',
    'Share the insight; stop digging for sport.',
  ]},
  'Purva Ashadha': { mood:'Bold early push — declare, then prove.', tip:'Say it, then take one proving step.', p:[
    'Declare the aim out loud.',
    'Back the claim with something keepable.',
    'Prove it with craft under pressure.',
    'Let the win mature; advise instead of re-declaring.',
  ]},
  'Uttara Ashadha': { mood:'You want wins that last — structure and allies.', tip:'Build something durable with help.', p:[
    'Lay one brick of a lasting win.',
    'Invite an ally into the structure.',
    'Work the long game with skill.',
    'Celebrate a real finish; teach the method.',
  ]},
  Shravana: { mood:'Listening wants to lead speaking.', tip:'Hear fully before you decide or reply.', p:[
    'Listen first in the next conversation.',
    'Hold what you heard; don’t rush to perform.',
    'Turn listening into a careful response.',
    'Advise from what you absorbed; stop mid-sentence interruptions.',
  ]},
  Dhanishta: { mood:'Rhythm and teammates unlock you.', tip:'Sync, then time your burst.', p:[
    'Find the beat with your people.',
    'Lock in a reliable rhythm.',
    'Deliver the timed burst with craft.',
    'Let others lead a round; finish clean.',
  ]},
  Shatabhisha: { mood:'Odd, systems-level fixes appeal to you.', tip:'Try the unusual remedy others skip — keep ethics.', p:[
    'Propose the weird fix that might work.',
    'Ground the experiment so it doesn’t float away.',
    'Engineer the remedy carefully.',
    'Share the healing pattern; don’t isolate in eccentricity.',
  ]},
  'Purva Bhadrapada': { mood:'Ideals run hot — aim the fire.', tip:'Stand for something without burning the room.', p:[
    'Name the ideal that matters.',
    'Give it a stable channel.',
    'Work it with discipline, not rage.',
    'Temper the fire into counsel.',
  ]},
  'Uttara Bhadrapada': { mood:'Patient depth — wisdom from the long wait.', tip:'Bring one deep insight up slowly.', p:[
    'Sit with the deep question without forcing.',
    'Anchor the insight in daily life.',
    'Shape it with careful effort.',
    'Offer the wisdom; stop waiting forever to speak.',
  ]},
  Revati: { mood:'You’re shepherding a last stretch gently.', tip:'Finish with care; guide someone across.', p:[
    'Begin the gentle last mile.',
    'Keep the crossing steady and safe.',
    'Guide with skill under soft pressure.',
    'Arrive together; rest and bless the finish.',
  ]},
};

const HOUSE = {
  1: { life:'how you show up and your body-energy', tip:'Check your energy before you overcommit.' },
  2: { life:'money talk and what you treat as valuable', tip:'Slow the impulse spend; speak a beat slower.' },
  3: { life:'courage, short trips, and everyday hustle', tip:'Send the message or take the short bold step.' },
  4: { life:'home, family base, and private mood', tip:'Tidy the base; protect private mood.' },
  5: { life:'creativity, romance, play, and mentees', tip:'Make something fun or warm toward someone younger.' },
  6: { life:'routines, health habits, and daily problems', tip:'Keep routines tiny; solve one practical problem.' },
  7: { life:'one-to-one bonds and fair contracts', tip:'Have the honest one-to-one talk instead of guessing.' },
  8: { life:'shared money, intimacy, and big resets', tip:'Go gently with shared resources and vulnerability.' },
  9: { life:'beliefs, teachers, and the bigger why', tip:'Make room for a walk, a teacher, or a belief check.' },
  10: { life:'career and what you’re known for', tip:'Finish something visible at work.' },
  11: { life:'friends, networks, and future goals', tip:'Reach a friend or ask for a network favour cleanly.' },
  12: { life:'rest, solitude, and quiet endings', tip:'Schedule real rest — endings count as work.' },
};

const ASPECTS = {
  conjunct: { life:'when these two mix, their themes blend and get louder', tip:'Name whose voice is whose before you act.' },
  sextile: { life:'they’re offering easier cooperation if you make a small move', tip:'Reach out or polish something already warm.' },
  square: { life:'they’re creating useful friction that wants precision', tip:'Pause before reacting; choose a precise response.' },
  trine: { life:'they’re flowing easily — support you might underuse', tip:'Ship what’s ready while the glide lasts.' },
  oppose: { life:'they’re sitting across from each other like a debate', tip:'Hear the other side before you dig in.' },
};

const KEY_PAIRS = [
  ['Moon','Saturn'],['Moon','Mars'],['Sun','Saturn'],['Venus','Mars'],['Mercury','Jupiter'],
  ['Sun','Moon'],['Moon','Venus'],['Sun','Mars'],['Mercury','Saturn'],['Jupiter','Saturn'],
  ['Venus','Saturn'],['Mars','Saturn'],['Sun','Jupiter'],['Moon','Jupiter'],['Mercury','Venus'],
  ['Mars','Jupiter'],['Sun','Venus'],['Moon','Mercury'],['Rahu','Moon'],['Ketu','Moon'],
];

function esc(s){return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'");}
function write(name, content){
  fs.writeFileSync(path.join(OUT,name), content, 'utf8');
  console.log('wrote', name, (content.length/1024).toFixed(1)+'kb');
}
function kNak(n){return n.includes(' ')?`'${n}'`:n;}

// --- nakshatra ---
{
  let b = `export interface NakshatraRule {\n  temperament: string;\n  advice: string;\n  pada: [string, string, string, string];\n}\n\n`;
  b += `/** 27 nakshatras — everyday mood + unique pada notes */\nexport const NAKSHATRA_RULES: Record<string, NakshatraRule> = {\n`;
  const seen = new Set();
  for (const n of NAKS) {
    const c = N[n];
    for (const p of c.p) {
      if (seen.has(p)) throw new Error('dup pada '+p);
      seen.add(p);
    }
    b += `  ${kNak(n)}: {\n    temperament: '${esc(c.mood)}',\n    advice: '${esc(c.tip)}',\n    pada: [\n`;
    for (const p of c.p) b += `      '${esc(p)}',\n`;
    b += `    ],\n  },\n`;
  }
  b += `};\n\nexport function nakshatraRule(name: string, pada?: number): { temperament: string; advice: string; padaNote?: string } | null {\n  const r = NAKSHATRA_RULES[name];\n  if (!r) return null;\n  const padaNote = pada && pada >= 1 && pada <= 4 ? r.pada[pada - 1] : undefined;\n  return { temperament: r.temperament, advice: r.advice, padaNote };\n}\nexport function nakshatraPadaCount(): number {\n  return Object.values(NAKSHATRA_RULES).reduce((n, r) => n + r.pada.length, 0);\n}\n`;
  write('nakshatra.ts', b);
  console.log('padas', seen.size);
}

// --- graha × nak ---
{
  let b = `import type { GrahaId } from '../constants';\n\nexport interface GrahaNakRule {\n  temperament: string;\n  advice: string;\n}\n\nexport const GRAHA_NAKSHATRA: Record<GrahaId, Record<string, GrahaNakRule>> = {\n`;
  for (const g of GRAHAS) {
    const gc = G[g];
    b += `  ${g}: {\n`;
    for (const n of NAKS) {
      const nc = N[n];
      const temperament = `When ${g} sits here, ${gc.you}. ${nc.mood}`;
      const advice = `${gc.do.charAt(0).toUpperCase()+gc.do.slice(1)}. Also: ${nc.tip}`;
      b += `    ${kNak(n)}: {\n      temperament: '${esc(temperament)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    b += `  },\n`;
  }
  b += `};\n\nexport function grahaNakshatraRule(graha: GrahaId, nak: string): GrahaNakRule | null {\n  return GRAHA_NAKSHATRA[graha]?.[nak] ?? null;\n}\nexport function grahaNakshatraCount(): number {\n  let n = 0;\n  for (const g of Object.keys(GRAHA_NAKSHATRA) as GrahaId[]) n += Object.keys(GRAHA_NAKSHATRA[g]).length;\n  return n;\n}\n`;
  write('grahaNakshatra.ts', b);
}

// --- gochara ---
{
  let b = `import type { GrahaId } from '../constants';\n\nexport interface GocharaHouseRule {\n  lifeChapter: string;\n  advice: string;\n}\n\nexport const GOCHARA_HOUSE: Record<GrahaId, Record<number, GocharaHouseRule>> = {\n`;
  for (const g of GRAHAS) {
    const gc = G[g];
    b += `  ${g}: {\n`;
    for (let h = 1; h <= 12; h++) {
      const hl = HOUSE[h];
      const lifeChapter = `${g} is highlighting ${hl.life} for a while. ${gc.you.charAt(0).toUpperCase()+gc.you.slice(1)} — especially there. This is weather, not a verdict.`;
      const advice = `${hl.tip} Meanwhile, ${gc.do}.`;
      b += `    ${h}: {\n      lifeChapter: '${esc(lifeChapter)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    b += `  },\n`;
  }
  b += `};\n\nexport function gocharaHouseRule(graha: GrahaId, house: number): GocharaHouseRule | null {\n  return GOCHARA_HOUSE[graha]?.[house] ?? null;\n}\nexport function gocharaHouseCount(): number {\n  let n = 0;\n  for (const g of Object.keys(GOCHARA_HOUSE) as GrahaId[]) n += Object.keys(GOCHARA_HOUSE[g]).length;\n  return n;\n}\n`;
  write('gochara.ts', b);
}

// --- aspect pairs ---
{
  let b = `import type { GrahaId } from '../constants';\nimport type { AspectLabel } from './aspects';\n\nexport interface AspectPairRule {\n  lifeMeaning: string;\n  advice: string;\n}\n\nexport const ASPECT_PAIRS: Record<string, Record<AspectLabel, AspectPairRule>> = {\n`;
  for (const [a,b2] of KEY_PAIRS) {
    const ga = G[a], gb = G[b2];
    b += `  '${a}_${b2}': {\n`;
    for (const [asp, al] of Object.entries(ASPECTS)) {
      const lifeMeaning = `${a} and ${b2} are ${al.life}. That mixes “${ga.you}” with “${gb.you}.”`;
      const advice = `${al.tip.charAt(0).toUpperCase()+al.tip.slice(1)} For you: ${ga.do} — and also ${gb.do}.`;
      b += `    ${asp}: {\n      lifeMeaning: '${esc(lifeMeaning)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    b += `  },\n`;
  }
  b += `};\n\nfunction pairKey(a: string, b: string): string {\n  const k1 = \`\${a}_\${b}\`;\n  const k2 = \`\${b}_\${a}\`;\n  if (ASPECT_PAIRS[k1]) return k1;\n  if (ASPECT_PAIRS[k2]) return k2;\n  return k1;\n}\nexport function aspectPairRule(a: GrahaId | string, b: GrahaId | string, label: string): AspectPairRule | null {\n  const table = ASPECT_PAIRS[pairKey(String(a), String(b))];\n  if (!table) return null;\n  return table[label as AspectLabel] ?? null;\n}\nexport function aspectPairCount(): number {\n  let n = 0;\n  for (const k of Object.keys(ASPECT_PAIRS)) n += Object.keys(ASPECT_PAIRS[k]).length;\n  return n;\n}\n`;
  write('aspectPairs.ts', b);
}

// --- dasha × house/sign ---
{
  let b = `import type { GrahaId } from '../constants';\n\nexport interface DashaBhavaRule {\n  tone: string;\n  advice: string;\n}\n\nexport const DASHA_BHAVA: Record<GrahaId, Record<number, DashaBhavaRule>> = {\n`;
  for (const g of GRAHAS) {
    const gc = G[g];
    b += `  ${g}: {\n`;
    for (let h = 1; h <= 12; h++) {
      const hl = HOUSE[h];
      const tone = `This ${g} chapter puts the spotlight on ${hl.life}. ${gc.you.charAt(0).toUpperCase()+gc.you.slice(1)} through that area of life.`;
      const advice = `${hl.tip} In this chapter: ${gc.do}. Prefer ${gc.soft}.`;
      b += `    ${h}: {\n      tone: '${esc(tone)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    b += `  },\n`;
  }
  b += `};\n\nexport const DASHA_RASHI: Record<GrahaId, Record<string, DashaBhavaRule>> = {\n`;
  for (const g of GRAHAS) {
    const gc = G[g];
    b += `  ${g}: {\n`;
    for (const r of RASHIS) {
      const en = RASHI_EN[r];
      const tone = `Your ${g} chapter wears a ${en} style — ${gc.you}, with that sign’s tempo.`;
      const advice = `${gc.do.charAt(0).toUpperCase()+gc.do.slice(1)}. Let a ${en} mood colour how you do it; prefer ${gc.soft}.`;
      b += `    ${r}: {\n      tone: '${esc(tone)}',\n      advice: '${esc(advice)}',\n    },\n`;
    }
    b += `  },\n`;
  }
  b += `};\n\nexport function dashaBhavaRule(lord: GrahaId | string, house: number): DashaBhavaRule | null {\n  return DASHA_BHAVA[lord as GrahaId]?.[house] ?? null;\n}\nexport function dashaRashiRule(lord: GrahaId | string, rashi: string): DashaBhavaRule | null {\n  return DASHA_RASHI[lord as GrahaId]?.[rashi] ?? null;\n}\nexport function dashaBhavaCount(): number {\n  let n = 0;\n  for (const g of Object.keys(DASHA_BHAVA) as GrahaId[]) n += Object.keys(DASHA_BHAVA[g]).length;\n  return n;\n}\nexport function dashaRashiCount(): number {\n  let n = 0;\n  for (const g of Object.keys(DASHA_RASHI) as GrahaId[]) n += Object.keys(DASHA_RASHI[g]).length;\n  return n;\n}\n`;
  write('dashaBhava.ts', b);
}

// --- rewrite dasha pairs (maha/antar) without "subplot" ---
{
  let b = `import type { GrahaId } from '../constants';\n\nexport interface DashaPairRule {\n  tone: string;\n  advice: string;\n}\n\nconst LORDS: GrahaId[] = ['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn','Rahu','Ketu'];\n\nexport const DASHA_PAIR: Record<string, DashaPairRule> = {\n`;
  for (const m of GRAHAS) {
    for (const a of GRAHAS) {
      const gm = G[m], ga = G[a];
      const tone = m === a
        ? `You’re in a strong ${m} chapter — ${gm.you}. Themes concentrate; keep perspective.`
        : `You’re in a ${m} chapter with a ${a} flavour right now. The long arc is about how ${gm.you}; the near weeks lean toward how ${ga.you}.`;
      const advice = m === a
        ? `${gm.do.charAt(0).toUpperCase()+gm.do.slice(1)}. Prefer ${gm.soft}.`
        : `${gm.do.charAt(0).toUpperCase()+gm.do.slice(1)}. In the near stretch, also ${ga.do}.`;
      b += `  '${m}_${a}': {\n    tone: '${esc(tone)}',\n    advice: '${esc(advice)}',\n  },\n`;
    }
  }
  b += `};\n\nexport function dashaPairRule(maha: string, antar: string): DashaPairRule | null {\n  return DASHA_PAIR[\`\${maha}_\${antar}\`] ?? null;\n}\n`;
  write('dasha.ts', b);
}

// --- aspects base ---
{
  const b = `export type AspectLabel = 'conjunct' | 'sextile' | 'square' | 'trine' | 'oppose';

export interface AspectRule {
  softHard: 'soft' | 'hard' | 'mixed';
  lifeMeaning: string;
  advice: string;
  natalTransitNote: string;
}

export const ASPECT_RULES: Record<AspectLabel, AspectRule> = {
  conjunct: {
    softHard: 'mixed',
    lifeMeaning: 'Two voices are mixing closely — themes blend and get louder.',
    advice: 'Name whose need is whose before you act on the mix.',
    natalTransitNote: 'A personal theme is getting a temporary spotlight — tend it, don’t panic.',
  },
  sextile: {
    softHard: 'soft',
    lifeMeaning: 'There’s easier cooperation available if you make a small move.',
    advice: 'Reach out or polish something already warm.',
    natalTransitNote: 'A growth edge is lightly lit — lean in without forcing.',
  },
  square: {
    softHard: 'hard',
    lifeMeaning: 'There’s useful friction that wants precision under pressure.',
    advice: 'Pause before reacting; choose a precise response over drama.',
    natalTransitNote: 'A growth edge is pressed — technique over theatre.',
  },
  trine: {
    softHard: 'soft',
    lifeMeaning: 'Support is flowing more easily — you might underuse it if you coast.',
    advice: 'Ship what’s ready and collaborate while the glide lasts.',
    natalTransitNote: 'An easier channel is open — use it.',
  },
  oppose: {
    softHard: 'hard',
    lifeMeaning: 'It can feel like a polar debate — both sides hold data.',
    advice: 'Hear the other side before you dig in.',
    natalTransitNote: 'A personal theme is mirrored back — relate, don’t declare war.',
  },
};

export const ASPECT_GRAHA_FLAVOUR: Record<string, string> = {
  Sun: 'Identity and vitality colour the exchange — show up warmly and leave room for others.',
  Moon: 'Moods and needs colour the exchange — check care and harbour first.',
  Mars: 'Drive and heat colour the exchange — be brave without theatre.',
  Mercury: 'Talk and thinking colour the exchange — aim wit at understanding.',
  Jupiter: 'Meaning and growth colour the exchange — stay curious, not preachy.',
  Venus: 'Bond and harmony colour the exchange — practise kindness on purpose.',
  Saturn: 'Time and accountability colour the exchange — one sober step beats a speech.',
  Rahu: 'Appetite for the new colours the exchange — curiosity with a reality check.',
  Ketu: 'Simplifying and sideways knowing colour the exchange — share insight without vanishing.',
};

export const ASPECT_BAND = {
  soft: { lifeMeaning: 'The sky favours cooperation and polish today.', advice: 'Prefer alliance and finish what’s already warm.' },
  hard: { lifeMeaning: 'The sky favours precision under pressure over drama.', advice: 'Tighten scope; pause before sharp turns in conversation.' },
  mixed: { lifeMeaning: 'The sky mixes push and glide — alternate honestly.', advice: 'Name friction, then use any soft window to repair.' },
} as const;

export function aspectRule(label: string): AspectRule | null {
  return ASPECT_RULES[label as AspectLabel] ?? null;
}
`;
  write('aspects.ts', b);
}

console.log('human rules done');
