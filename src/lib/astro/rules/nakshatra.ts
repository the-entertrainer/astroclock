export interface NakshatraRule {
  temperament: string;
  advice: string;
  /** Pada 1–4 modifiers */
  pada: [string, string, string, string];
}

/** 27 nakshatras with pada modifiers */
export const NAKSHATRA_RULES: Record<string, NakshatraRule> = {
  Ashwini: {
    temperament: 'Star-texture Ashwini: swift starts and fix-it motion. The mental habit leans to begin, then refine. Gift under this star: rapid first aid.',
    advice: 'Under Ashwini, start something small and correct in motion. Favour rapid first aid over forcing a mismatched pace.',
    pada: [
      'Ashwini pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Ashwini pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Ashwini pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Ashwini pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Bharani: {
    temperament: 'Star-texture Bharani: creative pressure held until delivery. The mental habit leans to gestate, then birth. Gift under this star: courageous carrying.',
    advice: 'Under Bharani, hold pressure until one real deliverable can land. Favour courageous carrying over forcing a mismatched pace.',
    pada: [
      'Bharani pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Bharani pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Bharani pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Bharani pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Krittika: {
    temperament: 'Star-texture Krittika: cutting fog with sharp clarity. The mental habit leans to clarify by cutting. Gift under this star: honest edge.',
    advice: 'Under Krittika, make one sharp decision — aim heat, do not scorch. Favour honest edge over forcing a mismatched pace.',
    pada: [
      'Krittika pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Krittika pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Krittika pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Krittika pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Rohini: {
    temperament: 'Star-texture Rohini: growth and attraction around a chosen target. The mental habit leans to fascinate and cultivate. Gift under this star: magnetic focus.',
    advice: 'Under Rohini, grow around one chosen target; skip scatter. Favour magnetic focus over forcing a mismatched pace.',
    pada: [
      'Rohini pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Rohini pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Rohini pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Rohini pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Mrigashira: {
    temperament: 'Star-texture Mrigashira: seeking, scanning, restless curiosity. The mental habit leans to hunt options. Gift under this star: exploratory nose.',
    advice: 'Under Mrigashira, seek and scan, then pick a trail before nightfall. Favour exploratory nose over forcing a mismatched pace.',
    pada: [
      'Mrigashira pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Mrigashira pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Mrigashira pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Mrigashira pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Ardra: {
    temperament: 'Star-texture Ardra: storm clarity — tear-down before rebuild. The mental habit leans to insight after weather. Gift under this star: cleansing honesty.',
    advice: 'Under Ardra, clear one mess honestly before rebuilding. Favour cleansing honesty over forcing a mismatched pace.',
    pada: [
      'Ardra pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Ardra pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Ardra pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Ardra pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Punarvasu: {
    temperament: 'Star-texture Punarvasu: renewal and second chances. The mental habit leans to bounce back. Gift under this star: return grace.',
    advice: 'Under Punarvasu, take a second chance without shame. Favour return grace over forcing a mismatched pace.',
    pada: [
      'Punarvasu pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Punarvasu pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Punarvasu pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Punarvasu pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Pushya: {
    temperament: 'Star-texture Pushya: steady care and right timing. The mental habit leans to care as rhythm. Gift under this star: reliable nurture.',
    advice: 'Under Pushya, nourish on schedule; timing beats heroics. Favour reliable nurture over forcing a mismatched pace.',
    pada: [
      'Pushya pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Pushya pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Pushya pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Pushya pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Ashlesha: {
    temperament: 'Star-texture Ashlesha: reading undercurrents and intimate strategy. The mental habit leans to sense the hidden. Gift under this star: psychological radar.',
    advice: 'Under Ashlesha, keep ethics tight when reading undercurrents. Favour psychological radar over forcing a mismatched pace.',
    pada: [
      'Ashlesha pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Ashlesha pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Ashlesha pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Ashlesha pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Magha: {
    temperament: 'Star-texture Magha: legacy mood and rightful presence. The mental habit leans to carry lineage tone. Gift under this star: quiet authority.',
    advice: 'Under Magha, stand in dignity, not theatre. Favour quiet authority over forcing a mismatched pace.',
    pada: [
      'Magha pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Magha pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Magha pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Magha pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  'Purva Phalguni': {
    temperament: 'Star-texture Purva Phalguni: pleasure, play, and creative ease. The mental habit leans to warm creative leisure. Gift under this star: social warmth.',
    advice: 'Under Purva Phalguni, finish one delight; ease is fuel. Favour social warmth over forcing a mismatched pace.',
    pada: [
      'Purva Phalguni pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Purva Phalguni pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Purva Phalguni pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Purva Phalguni pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  'Uttara Phalguni': {
    temperament: 'Star-texture Uttara Phalguni: lasting alliances and help that sticks. The mental habit leans to contract over vibe. Gift under this star: loyal patronage.',
    advice: 'Under Uttara Phalguni, ally and help in ways that endure. Favour loyal patronage over forcing a mismatched pace.',
    pada: [
      'Uttara Phalguni pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Uttara Phalguni pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Uttara Phalguni pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Uttara Phalguni pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Hasta: {
    temperament: 'Star-texture Hasta: skillful hands and practical craft. The mental habit leans to clever utility. Gift under this star: handy cleverness.',
    advice: 'Under Hasta, fix something tangible with your hands or craft. Favour handy cleverness over forcing a mismatched pace.',
    pada: [
      'Hasta pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Hasta pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Hasta pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Hasta pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Chitra: {
    temperament: 'Star-texture Chitra: designing beauty into form. The mental habit leans to form-as-beauty. Gift under this star: aesthetic architecture.',
    advice: 'Under Chitra, close one unfinished ugly loop with design care. Favour aesthetic architecture over forcing a mismatched pace.',
    pada: [
      'Chitra pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Chitra pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Chitra pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Chitra pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Swati: {
    temperament: 'Star-texture Swati: independent wind and room to move. The mental habit leans to self-directed air. Gift under this star: flexible independence.',
    advice: 'Under Swati, keep freedom so the mind stays kind. Favour flexible independence over forcing a mismatched pace.',
    pada: [
      'Swati pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Swati pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Swati pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Swati pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Vishakha: {
    temperament: 'Star-texture Vishakha: dual goals and aimed heat. The mental habit leans to forked ambition. Gift under this star: focused ambition.',
    advice: 'Under Vishakha, pick which summit gets the heat today. Favour focused ambition over forcing a mismatched pace.',
    pada: [
      'Vishakha pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Vishakha pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Vishakha pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Vishakha pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Anuradha: {
    temperament: 'Star-texture Anuradha: loyal orbit around people and causes. The mental habit leans to devoted constellation. Gift under this star: devoted friendship.',
    advice: 'Under Anuradha, regulate through loyal orbit, not isolation. Favour devoted friendship over forcing a mismatched pace.',
    pada: [
      'Anuradha pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Anuradha pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Anuradha pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Anuradha pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Jyeshtha: {
    temperament: 'Star-texture Jyeshtha: protecting earned skill and quiet rank. The mental habit leans to elder competence. Gift under this star: seasoned guardianship.',
    advice: 'Under Jyeshtha, protect skill; quiet rank beats loud proving. Favour seasoned guardianship over forcing a mismatched pace.',
    pada: [
      'Jyeshtha pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Jyeshtha pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Jyeshtha pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Jyeshtha pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Mula: {
    temperament: 'Star-texture Mula: digging to roots before polish. The mental habit leans to root excavation. Gift under this star: radical clarity.',
    advice: 'Under Mula, honesty before polish; dig once, cleanly. Favour radical clarity over forcing a mismatched pace.',
    pada: [
      'Mula pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Mula pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Mula pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Mula pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  'Purva Ashadha': {
    temperament: 'Star-texture Purva Ashadha: bold early push and declaration. The mental habit leans to invincible early claim. Gift under this star: early conviction.',
    advice: 'Under Purva Ashadha, declare, then prove with one step. Favour early conviction over forcing a mismatched pace.',
    pada: [
      'Purva Ashadha pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Purva Ashadha pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Purva Ashadha pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Purva Ashadha pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  'Uttara Ashadha': {
    temperament: 'Star-texture Uttara Ashadha: wins that last through structure. The mental habit leans to enduring victory. Gift under this star: structured triumph.',
    advice: 'Under Uttara Ashadha, build a lasting win with allies and structure. Favour structured triumph over forcing a mismatched pace.',
    pada: [
      'Uttara Ashadha pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Uttara Ashadha pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Uttara Ashadha pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Uttara Ashadha pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Shravana: {
    temperament: 'Star-texture Shravana: deep listening before speech. The mental habit leans to ear before tongue. Gift under this star: receptive wisdom.',
    advice: 'Under Shravana, listen fully before you speak or decide. Favour receptive wisdom over forcing a mismatched pace.',
    pada: [
      'Shravana pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Shravana pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Shravana pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Shravana pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Dhanishta: {
    temperament: 'Star-texture Dhanishta: rhythm, teams, and timed bursts. The mental habit leans to drumbeat collaboration. Gift under this star: rhythmic teamwork.',
    advice: 'Under Dhanishta, sync with rhythm and teammates; time the burst. Favour rhythmic teamwork over forcing a mismatched pace.',
    pada: [
      'Dhanishta pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Dhanishta pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Dhanishta pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Dhanishta pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Shatabhisha: {
    temperament: 'Star-texture Shatabhisha: odd, systems-level healing fixes. The mental habit leans to eccentric remedy. Gift under this star: unconventional healing.',
    advice: 'Under Shatabhisha, try a systems-level fix others would skip. Favour unconventional healing over forcing a mismatched pace.',
    pada: [
      'Shatabhisha pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Shatabhisha pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Shatabhisha pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Shatabhisha pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  'Purva Bhadrapada': {
    temperament: 'Star-texture Purva Bhadrapada: fierce idealism needing aim. The mental habit leans to fiery two-faced vow. Gift under this star: principled fire.',
    advice: 'Under Purva Bhadrapada, aim idealism; do not burn the room. Favour principled fire over forcing a mismatched pace.',
    pada: [
      'Purva Bhadrapada pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Purva Bhadrapada pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Purva Bhadrapada pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Purva Bhadrapada pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  'Uttara Bhadrapada': {
    temperament: 'Star-texture Uttara Bhadrapada: patient depth and long-wait wisdom. The mental habit leans to serpent patience. Gift under this star: patient profundity.',
    advice: 'Under Uttara Bhadrapada, bring one deep insight to the surface patiently. Favour patient profundity over forcing a mismatched pace.',
    pada: [
      'Uttara Bhadrapada pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Uttara Bhadrapada pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Uttara Bhadrapada pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Uttara Bhadrapada pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
  Revati: {
    temperament: 'Star-texture Revati: shepherding the last stretch gently. The mental habit leans to guide across the shore. Gift under this star: gentle completion.',
    advice: 'Under Revati, finish the last stretch with gentle care. Favour gentle completion over forcing a mismatched pace.',
    pada: [
      'Revati pada 1 adds an initiatory spark: it leans initiatory — first-foot energy; begin before polishing.',
      'Revati pada 2 adds a stabilising hold: it seeks stability and something keepable; consolidate what already works.',
      'Revati pada 3 adds an effortful craft: it sharpens effort and skillful hustle; refine craft under a little pressure.',
      'Revati pada 4 adds a ripening completion: it ripens toward completion and counsel; finish and advise rather than restart.',
    ],
  },
};

export function nakshatraRule(name: string, pada?: number): { temperament: string; advice: string; padaNote?: string } | null {
  const r = NAKSHATRA_RULES[name];
  if (!r) return null;
  const padaNote = pada && pada >= 1 && pada <= 4 ? r.pada[pada - 1] : undefined;
  return { temperament: r.temperament, advice: r.advice, padaNote };
}
