import type { GrahaId } from '../constants';

export interface RetroRule {
  temperament: string;
  advice: string;
}

export const RETROGRADE_RULES: Record<GrahaId, RetroRule> = {
  Sun: {
    temperament: 'When Sun is retrograde, identity heat and vitality turn more inward — review, redo, and rethink before pushing outward. The kinder form still holds: authentic shine that lifts others.',
    advice: 'Sun retrograde: useful to revisit how you lead and be seen privately before showing the polished version. Own one clear act of presence, then share the airtime, with an extra beat of reflection.',
  },
  Moon: {
    temperament: 'When Moon is retrograde, moods, needs, and emotional weather turn more inward — review, redo, and rethink before pushing outward. The kinder form still holds: care that includes asking for harbour.',
    advice: 'Moon retrograde: useful to revisit how you tend and belong privately before showing the polished version. Check food, water, and a soft landing before big talks, with an extra beat of reflection.',
  },
  Mars: {
    temperament: 'When Mars is retrograde, courage, drive, and directed heat turn more inward — review, redo, and rethink before pushing outward. The kinder form still holds: protective courage without theatre.',
    advice: 'Mars retrograde: useful to revisit how you assert and cut through privately before showing the polished version. Aim heat into one clean effort; skip audience fights, with an extra beat of reflection.',
  },
  Mercury: {
    temperament: 'When Mercury is retrograde, thinking, talk, and skill traffic turn more inward — review, redo, and rethink before pushing outward. The kinder form still holds: wit in service of understanding.',
    advice: 'Mercury retrograde: useful to revisit how you name and negotiate privately before showing the polished version. Write it down, then send the short clear version, with an extra beat of reflection.',
  },
  Jupiter: {
    temperament: 'When Jupiter is retrograde, growth, meaning, and generous stretch turn more inward — review, redo, and rethink before pushing outward. The kinder form still holds: faith that stays curious.',
    advice: 'Jupiter retrograde: useful to revisit how you teach and widen privately before showing the polished version. Widen the frame with learning or generosity; avoid lecturing, with an extra beat of reflection.',
  },
  Venus: {
    temperament: 'When Venus is retrograde, bond, taste, pleasure, and harmony turn more inward — review, redo, and rethink before pushing outward. The kinder form still holds: harmony practiced, not assumed.',
    advice: 'Venus retrograde: useful to revisit how you relate and delight privately before showing the polished version. Choose beauty and kindness on purpose, with an extra beat of reflection.',
  },
  Saturn: {
    temperament: 'When Saturn is retrograde, duration, structure, and sober accountability turn more inward — review, redo, and rethink before pushing outward. The kinder form still holds: discipline that leaves room to breathe.',
    advice: 'Saturn retrograde: useful to revisit how you endure and build privately before showing the polished version. One sober step beats a grand promise, with an extra beat of reflection.',
  },
  Rahu: {
    temperament: 'When Rahu is retrograde, appetite for the unfamiliar and unconventional turn more inward — review, redo, and rethink before pushing outward. The kinder form still holds: novel aim with feet still on ground.',
    advice: 'Rahu retrograde: useful to revisit how you reach past the known privately before showing the polished version. Curiosity yes — obsession needs a timer and a reality check, with an extra beat of reflection.',
  },
  Ketu: {
    temperament: 'When Ketu is retrograde, release, distill, and sideways knowing turn more inward — review, redo, and rethink before pushing outward. The kinder form still holds: insight without vanishing from the room.',
    advice: 'Ketu retrograde: useful to revisit how you let go and refine privately before showing the polished version. Release one extra obligation and keep the distilled lesson, with an extra beat of reflection.',
  },
};

export function retrogradeRule(graha: GrahaId): RetroRule | null {
  return RETROGRADE_RULES[graha] ?? null;
}
