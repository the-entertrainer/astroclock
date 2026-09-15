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
    lifeMeaning: 'voices mix closely — themes blend and amplify',
    advice: 'name whose voice is whose before you act on the blend',
    natalTransitNote: 'when transit meets natal by conjunction, that natal theme gets a loud temporary spotlight',
  },
  sextile: {
    softHard: 'soft',
    lifeMeaning: 'easier cooperation and opportunity with a little effort',
    advice: 'reach out; soft links want a small ask or polish',
    natalTransitNote: 'sextile to natal lights a workable growth edge — lean in lightly',
  },
  square: {
    softHard: 'hard',
    lifeMeaning: 'productive friction that wants precision under pressure',
    advice: 'pause before reacting; choose a precise response over drama',
    natalTransitNote: 'square to natal presses a growth edge — technique over theatre',
  },
  trine: {
    softHard: 'soft',
    lifeMeaning: 'natural flow and support that can be underused if you coast',
    advice: 'ship what is ready; collaborate while the glide lasts',
    natalTransitNote: 'trine to natal opens an easier channel — use it, do not sleep on it',
  },
  oppose: {
    softHard: 'hard',
    lifeMeaning: 'polar dialogue — mirroring, negotiation, and both/and tension',
    advice: 'hear the other pole before deciding; both sides hold data',
    natalTransitNote: 'opposition to natal sets up a temporary mirror — relate, do not declare war',
  },
};

/** Graha-specific colour on aspect advice */
export const ASPECT_GRAHA_FLAVOUR: Record<string, string> = {
  Sun: 'When Sun is in the link, identity heat and vitality colour the exchange — favour authentic shine that lifts others.',
  Moon: 'When Moon is in the link, moods, needs, and emotional weather colour the exchange — favour care that includes asking for harbour.',
  Mars: 'When Mars is in the link, courage, drive, and directed heat colour the exchange — favour protective courage without theatre.',
  Mercury: 'When Mercury is in the link, thinking, talk, and skill traffic colour the exchange — favour wit in service of understanding.',
  Jupiter: 'When Jupiter is in the link, growth, meaning, and generous stretch colour the exchange — favour faith that stays curious.',
  Venus: 'When Venus is in the link, bond, taste, pleasure, and harmony colour the exchange — favour harmony practiced, not assumed.',
  Saturn: 'When Saturn is in the link, duration, structure, and sober accountability colour the exchange — favour discipline that leaves room to breathe.',
  Rahu: 'When Rahu is in the link, appetite for the unfamiliar and unconventional colour the exchange — favour novel aim with feet still on ground.',
  Ketu: 'When Ketu is in the link, release, distill, and sideways knowing colour the exchange — favour insight without vanishing from the room.',
};

export const ASPECT_BAND = {
  soft: { lifeMeaning: 'Soft links favour cooperation, polish, and asking for help.', advice: 'Prefer alliance and finish what is already warm.' },
  hard: { lifeMeaning: 'Hard links favour precision under pressure over drama.', advice: 'Tighten scope; pause before sharp turns in conversation.' },
  mixed: { lifeMeaning: 'Mixed links ask you to alternate push and glide.', advice: 'Name friction honestly, then use any soft window to repair.' },
} as const;

export function aspectRule(label: string): AspectRule | null {
  const key = label as AspectLabel;
  return ASPECT_RULES[key] ?? null;
}
