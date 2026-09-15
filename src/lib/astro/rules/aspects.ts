export type AspectLabel = 'conjunct' | 'sextile' | 'square' | 'trine' | 'oppose';

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
