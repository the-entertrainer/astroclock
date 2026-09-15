import type { GrahaId } from '../constants';

export interface DashaPairRule {
  tone: string;
  advice: string;
}

/** Maha × Antar 9×9 tone + advice */
export const DASHA_PAIR: Record<GrahaId, Record<GrahaId, DashaPairRule>> = {
  Sun: {
    Sun: {
      tone: 'A pure Sun chapter: identity heat and vitality are both heading and subplot — themes concentrate around where you renew a sense of self.',
      advice: 'In a double-Sun stretch, own one clear act of presence, then share the airtime. Practice the kinder form: authentic shine that lifts others.',
    },
    Moon: {
      tone: 'Sun period with Moon subplot: the long arc centres identity heat and vitality, while the near chapter modulates with moods, needs, and emotional weather.',
      advice: 'Live the Sun chapter’s better habits (own one clear act of presence, then share the airtime) while the Moon subplot asks you to tend and belong — check food, water, and a soft landing before big talks.',
    },
    Mars: {
      tone: 'Sun period with Mars subplot: the long arc centres identity heat and vitality, while the near chapter modulates with courage, drive, and directed heat.',
      advice: 'Live the Sun chapter’s better habits (own one clear act of presence, then share the airtime) while the Mars subplot asks you to assert and cut through — aim heat into one clean effort; skip audience fights.',
    },
    Mercury: {
      tone: 'Sun period with Mercury subplot: the long arc centres identity heat and vitality, while the near chapter modulates with thinking, talk, and skill traffic.',
      advice: 'Live the Sun chapter’s better habits (own one clear act of presence, then share the airtime) while the Mercury subplot asks you to name and negotiate — write it down, then send the short clear version.',
    },
    Jupiter: {
      tone: 'Sun period with Jupiter subplot: the long arc centres identity heat and vitality, while the near chapter modulates with growth, meaning, and generous stretch.',
      advice: 'Live the Sun chapter’s better habits (own one clear act of presence, then share the airtime) while the Jupiter subplot asks you to teach and widen — widen the frame with learning or generosity; avoid lecturing.',
    },
    Venus: {
      tone: 'Sun period with Venus subplot: the long arc centres identity heat and vitality, while the near chapter modulates with bond, taste, pleasure, and harmony.',
      advice: 'Live the Sun chapter’s better habits (own one clear act of presence, then share the airtime) while the Venus subplot asks you to relate and delight — choose beauty and kindness on purpose.',
    },
    Saturn: {
      tone: 'Sun period with Saturn subplot: the long arc centres identity heat and vitality, while the near chapter modulates with duration, structure, and sober accountability.',
      advice: 'Live the Sun chapter’s better habits (own one clear act of presence, then share the airtime) while the Saturn subplot asks you to endure and build — one sober step beats a grand promise.',
    },
    Rahu: {
      tone: 'Sun period with Rahu subplot: the long arc centres identity heat and vitality, while the near chapter modulates with appetite for the unfamiliar and unconventional.',
      advice: 'Live the Sun chapter’s better habits (own one clear act of presence, then share the airtime) while the Rahu subplot asks you to reach past the known — curiosity yes — obsession needs a timer and a reality check.',
    },
    Ketu: {
      tone: 'Sun period with Ketu subplot: the long arc centres identity heat and vitality, while the near chapter modulates with release, distill, and sideways knowing.',
      advice: 'Live the Sun chapter’s better habits (own one clear act of presence, then share the airtime) while the Ketu subplot asks you to let go and refine — release one extra obligation and keep the distilled lesson.',
    },
  },
  Moon: {
    Sun: {
      tone: 'Moon period with Sun subplot: the long arc centres moods, needs, and emotional weather, while the near chapter modulates with identity heat and vitality.',
      advice: 'Live the Moon chapter’s better habits (check food, water, and a soft landing before big talks) while the Sun subplot asks you to lead and be seen — own one clear act of presence, then share the airtime.',
    },
    Moon: {
      tone: 'A pure Moon chapter: moods, needs, and emotional weather are both heading and subplot — themes concentrate around how feelings arrive and settle.',
      advice: 'In a double-Moon stretch, check food, water, and a soft landing before big talks. Practice the kinder form: care that includes asking for harbour.',
    },
    Mars: {
      tone: 'Moon period with Mars subplot: the long arc centres moods, needs, and emotional weather, while the near chapter modulates with courage, drive, and directed heat.',
      advice: 'Live the Moon chapter’s better habits (check food, water, and a soft landing before big talks) while the Mars subplot asks you to assert and cut through — aim heat into one clean effort; skip audience fights.',
    },
    Mercury: {
      tone: 'Moon period with Mercury subplot: the long arc centres moods, needs, and emotional weather, while the near chapter modulates with thinking, talk, and skill traffic.',
      advice: 'Live the Moon chapter’s better habits (check food, water, and a soft landing before big talks) while the Mercury subplot asks you to name and negotiate — write it down, then send the short clear version.',
    },
    Jupiter: {
      tone: 'Moon period with Jupiter subplot: the long arc centres moods, needs, and emotional weather, while the near chapter modulates with growth, meaning, and generous stretch.',
      advice: 'Live the Moon chapter’s better habits (check food, water, and a soft landing before big talks) while the Jupiter subplot asks you to teach and widen — widen the frame with learning or generosity; avoid lecturing.',
    },
    Venus: {
      tone: 'Moon period with Venus subplot: the long arc centres moods, needs, and emotional weather, while the near chapter modulates with bond, taste, pleasure, and harmony.',
      advice: 'Live the Moon chapter’s better habits (check food, water, and a soft landing before big talks) while the Venus subplot asks you to relate and delight — choose beauty and kindness on purpose.',
    },
    Saturn: {
      tone: 'Moon period with Saturn subplot: the long arc centres moods, needs, and emotional weather, while the near chapter modulates with duration, structure, and sober accountability.',
      advice: 'Live the Moon chapter’s better habits (check food, water, and a soft landing before big talks) while the Saturn subplot asks you to endure and build — one sober step beats a grand promise.',
    },
    Rahu: {
      tone: 'Moon period with Rahu subplot: the long arc centres moods, needs, and emotional weather, while the near chapter modulates with appetite for the unfamiliar and unconventional.',
      advice: 'Live the Moon chapter’s better habits (check food, water, and a soft landing before big talks) while the Rahu subplot asks you to reach past the known — curiosity yes — obsession needs a timer and a reality check.',
    },
    Ketu: {
      tone: 'Moon period with Ketu subplot: the long arc centres moods, needs, and emotional weather, while the near chapter modulates with release, distill, and sideways knowing.',
      advice: 'Live the Moon chapter’s better habits (check food, water, and a soft landing before big talks) while the Ketu subplot asks you to let go and refine — release one extra obligation and keep the distilled lesson.',
    },
  },
  Mars: {
    Sun: {
      tone: 'Mars period with Sun subplot: the long arc centres courage, drive, and directed heat, while the near chapter modulates with identity heat and vitality.',
      advice: 'Live the Mars chapter’s better habits (aim heat into one clean effort; skip audience fights) while the Sun subplot asks you to lead and be seen — own one clear act of presence, then share the airtime.',
    },
    Moon: {
      tone: 'Mars period with Moon subplot: the long arc centres courage, drive, and directed heat, while the near chapter modulates with moods, needs, and emotional weather.',
      advice: 'Live the Mars chapter’s better habits (aim heat into one clean effort; skip audience fights) while the Moon subplot asks you to tend and belong — check food, water, and a soft landing before big talks.',
    },
    Mars: {
      tone: 'A pure Mars chapter: courage, drive, and directed heat are both heading and subplot — themes concentrate around how you push for what you want.',
      advice: 'In a double-Mars stretch, aim heat into one clean effort; skip audience fights. Practice the kinder form: protective courage without theatre.',
    },
    Mercury: {
      tone: 'Mars period with Mercury subplot: the long arc centres courage, drive, and directed heat, while the near chapter modulates with thinking, talk, and skill traffic.',
      advice: 'Live the Mars chapter’s better habits (aim heat into one clean effort; skip audience fights) while the Mercury subplot asks you to name and negotiate — write it down, then send the short clear version.',
    },
    Jupiter: {
      tone: 'Mars period with Jupiter subplot: the long arc centres courage, drive, and directed heat, while the near chapter modulates with growth, meaning, and generous stretch.',
      advice: 'Live the Mars chapter’s better habits (aim heat into one clean effort; skip audience fights) while the Jupiter subplot asks you to teach and widen — widen the frame with learning or generosity; avoid lecturing.',
    },
    Venus: {
      tone: 'Mars period with Venus subplot: the long arc centres courage, drive, and directed heat, while the near chapter modulates with bond, taste, pleasure, and harmony.',
      advice: 'Live the Mars chapter’s better habits (aim heat into one clean effort; skip audience fights) while the Venus subplot asks you to relate and delight — choose beauty and kindness on purpose.',
    },
    Saturn: {
      tone: 'Mars period with Saturn subplot: the long arc centres courage, drive, and directed heat, while the near chapter modulates with duration, structure, and sober accountability.',
      advice: 'Live the Mars chapter’s better habits (aim heat into one clean effort; skip audience fights) while the Saturn subplot asks you to endure and build — one sober step beats a grand promise.',
    },
    Rahu: {
      tone: 'Mars period with Rahu subplot: the long arc centres courage, drive, and directed heat, while the near chapter modulates with appetite for the unfamiliar and unconventional.',
      advice: 'Live the Mars chapter’s better habits (aim heat into one clean effort; skip audience fights) while the Rahu subplot asks you to reach past the known — curiosity yes — obsession needs a timer and a reality check.',
    },
    Ketu: {
      tone: 'Mars period with Ketu subplot: the long arc centres courage, drive, and directed heat, while the near chapter modulates with release, distill, and sideways knowing.',
      advice: 'Live the Mars chapter’s better habits (aim heat into one clean effort; skip audience fights) while the Ketu subplot asks you to let go and refine — release one extra obligation and keep the distilled lesson.',
    },
  },
  Mercury: {
    Sun: {
      tone: 'Mercury period with Sun subplot: the long arc centres thinking, talk, and skill traffic, while the near chapter modulates with identity heat and vitality.',
      advice: 'Live the Mercury chapter’s better habits (write it down, then send the short clear version) while the Sun subplot asks you to lead and be seen — own one clear act of presence, then share the airtime.',
    },
    Moon: {
      tone: 'Mercury period with Moon subplot: the long arc centres thinking, talk, and skill traffic, while the near chapter modulates with moods, needs, and emotional weather.',
      advice: 'Live the Mercury chapter’s better habits (write it down, then send the short clear version) while the Moon subplot asks you to tend and belong — check food, water, and a soft landing before big talks.',
    },
    Mars: {
      tone: 'Mercury period with Mars subplot: the long arc centres thinking, talk, and skill traffic, while the near chapter modulates with courage, drive, and directed heat.',
      advice: 'Live the Mercury chapter’s better habits (write it down, then send the short clear version) while the Mars subplot asks you to assert and cut through — aim heat into one clean effort; skip audience fights.',
    },
    Mercury: {
      tone: 'A pure Mercury chapter: thinking, talk, and skill traffic are both heading and subplot — themes concentrate around how you learn, argue, and message.',
      advice: 'In a double-Mercury stretch, write it down, then send the short clear version. Practice the kinder form: wit in service of understanding.',
    },
    Jupiter: {
      tone: 'Mercury period with Jupiter subplot: the long arc centres thinking, talk, and skill traffic, while the near chapter modulates with growth, meaning, and generous stretch.',
      advice: 'Live the Mercury chapter’s better habits (write it down, then send the short clear version) while the Jupiter subplot asks you to teach and widen — widen the frame with learning or generosity; avoid lecturing.',
    },
    Venus: {
      tone: 'Mercury period with Venus subplot: the long arc centres thinking, talk, and skill traffic, while the near chapter modulates with bond, taste, pleasure, and harmony.',
      advice: 'Live the Mercury chapter’s better habits (write it down, then send the short clear version) while the Venus subplot asks you to relate and delight — choose beauty and kindness on purpose.',
    },
    Saturn: {
      tone: 'Mercury period with Saturn subplot: the long arc centres thinking, talk, and skill traffic, while the near chapter modulates with duration, structure, and sober accountability.',
      advice: 'Live the Mercury chapter’s better habits (write it down, then send the short clear version) while the Saturn subplot asks you to endure and build — one sober step beats a grand promise.',
    },
    Rahu: {
      tone: 'Mercury period with Rahu subplot: the long arc centres thinking, talk, and skill traffic, while the near chapter modulates with appetite for the unfamiliar and unconventional.',
      advice: 'Live the Mercury chapter’s better habits (write it down, then send the short clear version) while the Rahu subplot asks you to reach past the known — curiosity yes — obsession needs a timer and a reality check.',
    },
    Ketu: {
      tone: 'Mercury period with Ketu subplot: the long arc centres thinking, talk, and skill traffic, while the near chapter modulates with release, distill, and sideways knowing.',
      advice: 'Live the Mercury chapter’s better habits (write it down, then send the short clear version) while the Ketu subplot asks you to let go and refine — release one extra obligation and keep the distilled lesson.',
    },
  },
  Jupiter: {
    Sun: {
      tone: 'Jupiter period with Sun subplot: the long arc centres growth, meaning, and generous stretch, while the near chapter modulates with identity heat and vitality.',
      advice: 'Live the Jupiter chapter’s better habits (widen the frame with learning or generosity; avoid lecturing) while the Sun subplot asks you to lead and be seen — own one clear act of presence, then share the airtime.',
    },
    Moon: {
      tone: 'Jupiter period with Moon subplot: the long arc centres growth, meaning, and generous stretch, while the near chapter modulates with moods, needs, and emotional weather.',
      advice: 'Live the Jupiter chapter’s better habits (widen the frame with learning or generosity; avoid lecturing) while the Moon subplot asks you to tend and belong — check food, water, and a soft landing before big talks.',
    },
    Mars: {
      tone: 'Jupiter period with Mars subplot: the long arc centres growth, meaning, and generous stretch, while the near chapter modulates with courage, drive, and directed heat.',
      advice: 'Live the Jupiter chapter’s better habits (widen the frame with learning or generosity; avoid lecturing) while the Mars subplot asks you to assert and cut through — aim heat into one clean effort; skip audience fights.',
    },
    Mercury: {
      tone: 'Jupiter period with Mercury subplot: the long arc centres growth, meaning, and generous stretch, while the near chapter modulates with thinking, talk, and skill traffic.',
      advice: 'Live the Jupiter chapter’s better habits (widen the frame with learning or generosity; avoid lecturing) while the Mercury subplot asks you to name and negotiate — write it down, then send the short clear version.',
    },
    Jupiter: {
      tone: 'A pure Jupiter chapter: growth, meaning, and generous stretch are both heading and subplot — themes concentrate around where grace and teachers show up.',
      advice: 'In a double-Jupiter stretch, widen the frame with learning or generosity; avoid lecturing. Practice the kinder form: faith that stays curious.',
    },
    Venus: {
      tone: 'Jupiter period with Venus subplot: the long arc centres growth, meaning, and generous stretch, while the near chapter modulates with bond, taste, pleasure, and harmony.',
      advice: 'Live the Jupiter chapter’s better habits (widen the frame with learning or generosity; avoid lecturing) while the Venus subplot asks you to relate and delight — choose beauty and kindness on purpose.',
    },
    Saturn: {
      tone: 'Jupiter period with Saturn subplot: the long arc centres growth, meaning, and generous stretch, while the near chapter modulates with duration, structure, and sober accountability.',
      advice: 'Live the Jupiter chapter’s better habits (widen the frame with learning or generosity; avoid lecturing) while the Saturn subplot asks you to endure and build — one sober step beats a grand promise.',
    },
    Rahu: {
      tone: 'Jupiter period with Rahu subplot: the long arc centres growth, meaning, and generous stretch, while the near chapter modulates with appetite for the unfamiliar and unconventional.',
      advice: 'Live the Jupiter chapter’s better habits (widen the frame with learning or generosity; avoid lecturing) while the Rahu subplot asks you to reach past the known — curiosity yes — obsession needs a timer and a reality check.',
    },
    Ketu: {
      tone: 'Jupiter period with Ketu subplot: the long arc centres growth, meaning, and generous stretch, while the near chapter modulates with release, distill, and sideways knowing.',
      advice: 'Live the Jupiter chapter’s better habits (widen the frame with learning or generosity; avoid lecturing) while the Ketu subplot asks you to let go and refine — release one extra obligation and keep the distilled lesson.',
    },
  },
  Venus: {
    Sun: {
      tone: 'Venus period with Sun subplot: the long arc centres bond, taste, pleasure, and harmony, while the near chapter modulates with identity heat and vitality.',
      advice: 'Live the Venus chapter’s better habits (choose beauty and kindness on purpose) while the Sun subplot asks you to lead and be seen — own one clear act of presence, then share the airtime.',
    },
    Moon: {
      tone: 'Venus period with Moon subplot: the long arc centres bond, taste, pleasure, and harmony, while the near chapter modulates with moods, needs, and emotional weather.',
      advice: 'Live the Venus chapter’s better habits (choose beauty and kindness on purpose) while the Moon subplot asks you to tend and belong — check food, water, and a soft landing before big talks.',
    },
    Mars: {
      tone: 'Venus period with Mars subplot: the long arc centres bond, taste, pleasure, and harmony, while the near chapter modulates with courage, drive, and directed heat.',
      advice: 'Live the Venus chapter’s better habits (choose beauty and kindness on purpose) while the Mars subplot asks you to assert and cut through — aim heat into one clean effort; skip audience fights.',
    },
    Mercury: {
      tone: 'Venus period with Mercury subplot: the long arc centres bond, taste, pleasure, and harmony, while the near chapter modulates with thinking, talk, and skill traffic.',
      advice: 'Live the Venus chapter’s better habits (choose beauty and kindness on purpose) while the Mercury subplot asks you to name and negotiate — write it down, then send the short clear version.',
    },
    Jupiter: {
      tone: 'Venus period with Jupiter subplot: the long arc centres bond, taste, pleasure, and harmony, while the near chapter modulates with growth, meaning, and generous stretch.',
      advice: 'Live the Venus chapter’s better habits (choose beauty and kindness on purpose) while the Jupiter subplot asks you to teach and widen — widen the frame with learning or generosity; avoid lecturing.',
    },
    Venus: {
      tone: 'A pure Venus chapter: bond, taste, pleasure, and harmony are both heading and subplot — themes concentrate around how you bond and what you find beautiful.',
      advice: 'In a double-Venus stretch, choose beauty and kindness on purpose. Practice the kinder form: harmony practiced, not assumed.',
    },
    Saturn: {
      tone: 'Venus period with Saturn subplot: the long arc centres bond, taste, pleasure, and harmony, while the near chapter modulates with duration, structure, and sober accountability.',
      advice: 'Live the Venus chapter’s better habits (choose beauty and kindness on purpose) while the Saturn subplot asks you to endure and build — one sober step beats a grand promise.',
    },
    Rahu: {
      tone: 'Venus period with Rahu subplot: the long arc centres bond, taste, pleasure, and harmony, while the near chapter modulates with appetite for the unfamiliar and unconventional.',
      advice: 'Live the Venus chapter’s better habits (choose beauty and kindness on purpose) while the Rahu subplot asks you to reach past the known — curiosity yes — obsession needs a timer and a reality check.',
    },
    Ketu: {
      tone: 'Venus period with Ketu subplot: the long arc centres bond, taste, pleasure, and harmony, while the near chapter modulates with release, distill, and sideways knowing.',
      advice: 'Live the Venus chapter’s better habits (choose beauty and kindness on purpose) while the Ketu subplot asks you to let go and refine — release one extra obligation and keep the distilled lesson.',
    },
  },
  Saturn: {
    Sun: {
      tone: 'Saturn period with Sun subplot: the long arc centres duration, structure, and sober accountability, while the near chapter modulates with identity heat and vitality.',
      advice: 'Live the Saturn chapter’s better habits (one sober step beats a grand promise) while the Sun subplot asks you to lead and be seen — own one clear act of presence, then share the airtime.',
    },
    Moon: {
      tone: 'Saturn period with Moon subplot: the long arc centres duration, structure, and sober accountability, while the near chapter modulates with moods, needs, and emotional weather.',
      advice: 'Live the Saturn chapter’s better habits (one sober step beats a grand promise) while the Moon subplot asks you to tend and belong — check food, water, and a soft landing before big talks.',
    },
    Mars: {
      tone: 'Saturn period with Mars subplot: the long arc centres duration, structure, and sober accountability, while the near chapter modulates with courage, drive, and directed heat.',
      advice: 'Live the Saturn chapter’s better habits (one sober step beats a grand promise) while the Mars subplot asks you to assert and cut through — aim heat into one clean effort; skip audience fights.',
    },
    Mercury: {
      tone: 'Saturn period with Mercury subplot: the long arc centres duration, structure, and sober accountability, while the near chapter modulates with thinking, talk, and skill traffic.',
      advice: 'Live the Saturn chapter’s better habits (one sober step beats a grand promise) while the Mercury subplot asks you to name and negotiate — write it down, then send the short clear version.',
    },
    Jupiter: {
      tone: 'Saturn period with Jupiter subplot: the long arc centres duration, structure, and sober accountability, while the near chapter modulates with growth, meaning, and generous stretch.',
      advice: 'Live the Saturn chapter’s better habits (one sober step beats a grand promise) while the Jupiter subplot asks you to teach and widen — widen the frame with learning or generosity; avoid lecturing.',
    },
    Venus: {
      tone: 'Saturn period with Venus subplot: the long arc centres duration, structure, and sober accountability, while the near chapter modulates with bond, taste, pleasure, and harmony.',
      advice: 'Live the Saturn chapter’s better habits (one sober step beats a grand promise) while the Venus subplot asks you to relate and delight — choose beauty and kindness on purpose.',
    },
    Saturn: {
      tone: 'A pure Saturn chapter: duration, structure, and sober accountability are both heading and subplot — themes concentrate around where time is the teacher.',
      advice: 'In a double-Saturn stretch, one sober step beats a grand promise. Practice the kinder form: discipline that leaves room to breathe.',
    },
    Rahu: {
      tone: 'Saturn period with Rahu subplot: the long arc centres duration, structure, and sober accountability, while the near chapter modulates with appetite for the unfamiliar and unconventional.',
      advice: 'Live the Saturn chapter’s better habits (one sober step beats a grand promise) while the Rahu subplot asks you to reach past the known — curiosity yes — obsession needs a timer and a reality check.',
    },
    Ketu: {
      tone: 'Saturn period with Ketu subplot: the long arc centres duration, structure, and sober accountability, while the near chapter modulates with release, distill, and sideways knowing.',
      advice: 'Live the Saturn chapter’s better habits (one sober step beats a grand promise) while the Ketu subplot asks you to let go and refine — release one extra obligation and keep the distilled lesson.',
    },
  },
  Rahu: {
    Sun: {
      tone: 'Rahu period with Sun subplot: the long arc centres appetite for the unfamiliar and unconventional, while the near chapter modulates with identity heat and vitality.',
      advice: 'Live the Rahu chapter’s better habits (curiosity yes — obsession needs a timer and a reality check) while the Sun subplot asks you to lead and be seen — own one clear act of presence, then share the airtime.',
    },
    Moon: {
      tone: 'Rahu period with Moon subplot: the long arc centres appetite for the unfamiliar and unconventional, while the near chapter modulates with moods, needs, and emotional weather.',
      advice: 'Live the Rahu chapter’s better habits (curiosity yes — obsession needs a timer and a reality check) while the Moon subplot asks you to tend and belong — check food, water, and a soft landing before big talks.',
    },
    Mars: {
      tone: 'Rahu period with Mars subplot: the long arc centres appetite for the unfamiliar and unconventional, while the near chapter modulates with courage, drive, and directed heat.',
      advice: 'Live the Rahu chapter’s better habits (curiosity yes — obsession needs a timer and a reality check) while the Mars subplot asks you to assert and cut through — aim heat into one clean effort; skip audience fights.',
    },
    Mercury: {
      tone: 'Rahu period with Mercury subplot: the long arc centres appetite for the unfamiliar and unconventional, while the near chapter modulates with thinking, talk, and skill traffic.',
      advice: 'Live the Rahu chapter’s better habits (curiosity yes — obsession needs a timer and a reality check) while the Mercury subplot asks you to name and negotiate — write it down, then send the short clear version.',
    },
    Jupiter: {
      tone: 'Rahu period with Jupiter subplot: the long arc centres appetite for the unfamiliar and unconventional, while the near chapter modulates with growth, meaning, and generous stretch.',
      advice: 'Live the Rahu chapter’s better habits (curiosity yes — obsession needs a timer and a reality check) while the Jupiter subplot asks you to teach and widen — widen the frame with learning or generosity; avoid lecturing.',
    },
    Venus: {
      tone: 'Rahu period with Venus subplot: the long arc centres appetite for the unfamiliar and unconventional, while the near chapter modulates with bond, taste, pleasure, and harmony.',
      advice: 'Live the Rahu chapter’s better habits (curiosity yes — obsession needs a timer and a reality check) while the Venus subplot asks you to relate and delight — choose beauty and kindness on purpose.',
    },
    Saturn: {
      tone: 'Rahu period with Saturn subplot: the long arc centres appetite for the unfamiliar and unconventional, while the near chapter modulates with duration, structure, and sober accountability.',
      advice: 'Live the Rahu chapter’s better habits (curiosity yes — obsession needs a timer and a reality check) while the Saturn subplot asks you to endure and build — one sober step beats a grand promise.',
    },
    Rahu: {
      tone: 'A pure Rahu chapter: appetite for the unfamiliar and unconventional are both heading and subplot — themes concentrate around where hunger for the new concentrates.',
      advice: 'In a double-Rahu stretch, curiosity yes — obsession needs a timer and a reality check. Practice the kinder form: novel aim with feet still on ground.',
    },
    Ketu: {
      tone: 'Rahu period with Ketu subplot: the long arc centres appetite for the unfamiliar and unconventional, while the near chapter modulates with release, distill, and sideways knowing.',
      advice: 'Live the Rahu chapter’s better habits (curiosity yes — obsession needs a timer and a reality check) while the Ketu subplot asks you to let go and refine — release one extra obligation and keep the distilled lesson.',
    },
  },
  Ketu: {
    Sun: {
      tone: 'Ketu period with Sun subplot: the long arc centres release, distill, and sideways knowing, while the near chapter modulates with identity heat and vitality.',
      advice: 'Live the Ketu chapter’s better habits (release one extra obligation and keep the distilled lesson) while the Sun subplot asks you to lead and be seen — own one clear act of presence, then share the airtime.',
    },
    Moon: {
      tone: 'Ketu period with Moon subplot: the long arc centres release, distill, and sideways knowing, while the near chapter modulates with moods, needs, and emotional weather.',
      advice: 'Live the Ketu chapter’s better habits (release one extra obligation and keep the distilled lesson) while the Moon subplot asks you to tend and belong — check food, water, and a soft landing before big talks.',
    },
    Mars: {
      tone: 'Ketu period with Mars subplot: the long arc centres release, distill, and sideways knowing, while the near chapter modulates with courage, drive, and directed heat.',
      advice: 'Live the Ketu chapter’s better habits (release one extra obligation and keep the distilled lesson) while the Mars subplot asks you to assert and cut through — aim heat into one clean effort; skip audience fights.',
    },
    Mercury: {
      tone: 'Ketu period with Mercury subplot: the long arc centres release, distill, and sideways knowing, while the near chapter modulates with thinking, talk, and skill traffic.',
      advice: 'Live the Ketu chapter’s better habits (release one extra obligation and keep the distilled lesson) while the Mercury subplot asks you to name and negotiate — write it down, then send the short clear version.',
    },
    Jupiter: {
      tone: 'Ketu period with Jupiter subplot: the long arc centres release, distill, and sideways knowing, while the near chapter modulates with growth, meaning, and generous stretch.',
      advice: 'Live the Ketu chapter’s better habits (release one extra obligation and keep the distilled lesson) while the Jupiter subplot asks you to teach and widen — widen the frame with learning or generosity; avoid lecturing.',
    },
    Venus: {
      tone: 'Ketu period with Venus subplot: the long arc centres release, distill, and sideways knowing, while the near chapter modulates with bond, taste, pleasure, and harmony.',
      advice: 'Live the Ketu chapter’s better habits (release one extra obligation and keep the distilled lesson) while the Venus subplot asks you to relate and delight — choose beauty and kindness on purpose.',
    },
    Saturn: {
      tone: 'Ketu period with Saturn subplot: the long arc centres release, distill, and sideways knowing, while the near chapter modulates with duration, structure, and sober accountability.',
      advice: 'Live the Ketu chapter’s better habits (release one extra obligation and keep the distilled lesson) while the Saturn subplot asks you to endure and build — one sober step beats a grand promise.',
    },
    Rahu: {
      tone: 'Ketu period with Rahu subplot: the long arc centres release, distill, and sideways knowing, while the near chapter modulates with appetite for the unfamiliar and unconventional.',
      advice: 'Live the Ketu chapter’s better habits (release one extra obligation and keep the distilled lesson) while the Rahu subplot asks you to reach past the known — curiosity yes — obsession needs a timer and a reality check.',
    },
    Ketu: {
      tone: 'A pure Ketu chapter: release, distill, and sideways knowing are both heading and subplot — themes concentrate around what you already know sideways and may over-release.',
      advice: 'In a double-Ketu stretch, release one extra obligation and keep the distilled lesson. Practice the kinder form: insight without vanishing from the room.',
    },
  },
};

export function dashaPairRule(maha: string, antar: string): DashaPairRule | null {
  const m = maha as GrahaId;
  const a = antar as GrahaId;
  return DASHA_PAIR[m]?.[a] ?? null;
}
