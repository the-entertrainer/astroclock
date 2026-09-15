import type { GrahaId } from '../constants';

export interface GrahaBhavaRule {
  lifeArea: string;
  advice: string;
}

export const GRAHA_BHAVA: Record<GrahaId, Record<number, GrahaBhavaRule>> = {
  Sun: {
    1: {
      lifeArea: 'Sun lights up how you show up and body-energy. That’s where you want to be seen and lead show most clearly.',
      advice: 'Check energy before overcommitting. Channel show up warmly into that area.',
    },
    2: {
      lifeArea: 'Sun lights up money and what you treat as valuable. That’s where you want to be seen and lead show most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel show up warmly into that area.',
    },
    3: {
      lifeArea: 'Sun lights up courage and everyday hustle. That’s where you want to be seen and lead show most clearly.',
      advice: 'Take one short bold step. Channel show up warmly into that area.',
    },
    4: {
      lifeArea: 'Sun lights up home and private mood. That’s where you want to be seen and lead show most clearly.',
      advice: 'Protect the base; tidy helps. Channel show up warmly into that area.',
    },
    5: {
      lifeArea: 'Sun lights up creativity, play, and romance. That’s where you want to be seen and lead show most clearly.',
      advice: 'Make something fun or warm. Channel show up warmly into that area.',
    },
    6: {
      lifeArea: 'Sun lights up routines and daily problems. That’s where you want to be seen and lead show most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel show up warmly into that area.',
    },
    7: {
      lifeArea: 'Sun lights up one-to-one bonds. That’s where you want to be seen and lead show most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel show up warmly into that area.',
    },
    8: {
      lifeArea: 'Sun lights up shared resources and deep resets. That’s where you want to be seen and lead show most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel show up warmly into that area.',
    },
    9: {
      lifeArea: 'Sun lights up beliefs and the bigger why. That’s where you want to be seen and lead show most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel show up warmly into that area.',
    },
    10: {
      lifeArea: 'Sun lights up career and reputation. That’s where you want to be seen and lead show most clearly.',
      advice: 'Finish something visible. Channel show up warmly into that area.',
    },
    11: {
      lifeArea: 'Sun lights up friends and future goals. That’s where you want to be seen and lead show most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel show up warmly into that area.',
    },
    12: {
      lifeArea: 'Sun lights up rest and quiet endings. That’s where you want to be seen and lead show most clearly.',
      advice: 'Schedule real rest. Channel show up warmly into that area.',
    },
  },
  Moon: {
    1: {
      lifeArea: 'Moon lights up how you show up and body-energy. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Check energy before overcommitting. Channel ask for care into that area.',
    },
    2: {
      lifeArea: 'Moon lights up money and what you treat as valuable. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel ask for care into that area.',
    },
    3: {
      lifeArea: 'Moon lights up courage and everyday hustle. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Take one short bold step. Channel ask for care into that area.',
    },
    4: {
      lifeArea: 'Moon lights up home and private mood. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Protect the base; tidy helps. Channel ask for care into that area.',
    },
    5: {
      lifeArea: 'Moon lights up creativity, play, and romance. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Make something fun or warm. Channel ask for care into that area.',
    },
    6: {
      lifeArea: 'Moon lights up routines and daily problems. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel ask for care into that area.',
    },
    7: {
      lifeArea: 'Moon lights up one-to-one bonds. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel ask for care into that area.',
    },
    8: {
      lifeArea: 'Moon lights up shared resources and deep resets. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel ask for care into that area.',
    },
    9: {
      lifeArea: 'Moon lights up beliefs and the bigger why. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel ask for care into that area.',
    },
    10: {
      lifeArea: 'Moon lights up career and reputation. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Finish something visible. Channel ask for care into that area.',
    },
    11: {
      lifeArea: 'Moon lights up friends and future goals. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel ask for care into that area.',
    },
    12: {
      lifeArea: 'Moon lights up rest and quiet endings. That’s where your moods and needs set the weather show most clearly.',
      advice: 'Schedule real rest. Channel ask for care into that area.',
    },
  },
  Mars: {
    1: {
      lifeArea: 'Mars lights up how you show up and body-energy. That’s where you push hard for what you want show most clearly.',
      advice: 'Check energy before overcommitting. Channel be brave without theatre into that area.',
    },
    2: {
      lifeArea: 'Mars lights up money and what you treat as valuable. That’s where you push hard for what you want show most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel be brave without theatre into that area.',
    },
    3: {
      lifeArea: 'Mars lights up courage and everyday hustle. That’s where you push hard for what you want show most clearly.',
      advice: 'Take one short bold step. Channel be brave without theatre into that area.',
    },
    4: {
      lifeArea: 'Mars lights up home and private mood. That’s where you push hard for what you want show most clearly.',
      advice: 'Protect the base; tidy helps. Channel be brave without theatre into that area.',
    },
    5: {
      lifeArea: 'Mars lights up creativity, play, and romance. That’s where you push hard for what you want show most clearly.',
      advice: 'Make something fun or warm. Channel be brave without theatre into that area.',
    },
    6: {
      lifeArea: 'Mars lights up routines and daily problems. That’s where you push hard for what you want show most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel be brave without theatre into that area.',
    },
    7: {
      lifeArea: 'Mars lights up one-to-one bonds. That’s where you push hard for what you want show most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel be brave without theatre into that area.',
    },
    8: {
      lifeArea: 'Mars lights up shared resources and deep resets. That’s where you push hard for what you want show most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel be brave without theatre into that area.',
    },
    9: {
      lifeArea: 'Mars lights up beliefs and the bigger why. That’s where you push hard for what you want show most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel be brave without theatre into that area.',
    },
    10: {
      lifeArea: 'Mars lights up career and reputation. That’s where you push hard for what you want show most clearly.',
      advice: 'Finish something visible. Channel be brave without theatre into that area.',
    },
    11: {
      lifeArea: 'Mars lights up friends and future goals. That’s where you push hard for what you want show most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel be brave without theatre into that area.',
    },
    12: {
      lifeArea: 'Mars lights up rest and quiet endings. That’s where you push hard for what you want show most clearly.',
      advice: 'Schedule real rest. Channel be brave without theatre into that area.',
    },
  },
  Mercury: {
    1: {
      lifeArea: 'Mercury lights up how you show up and body-energy. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Check energy before overcommitting. Channel use wit to understand into that area.',
    },
    2: {
      lifeArea: 'Mercury lights up money and what you treat as valuable. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel use wit to understand into that area.',
    },
    3: {
      lifeArea: 'Mercury lights up courage and everyday hustle. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Take one short bold step. Channel use wit to understand into that area.',
    },
    4: {
      lifeArea: 'Mercury lights up home and private mood. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Protect the base; tidy helps. Channel use wit to understand into that area.',
    },
    5: {
      lifeArea: 'Mercury lights up creativity, play, and romance. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Make something fun or warm. Channel use wit to understand into that area.',
    },
    6: {
      lifeArea: 'Mercury lights up routines and daily problems. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel use wit to understand into that area.',
    },
    7: {
      lifeArea: 'Mercury lights up one-to-one bonds. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel use wit to understand into that area.',
    },
    8: {
      lifeArea: 'Mercury lights up shared resources and deep resets. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel use wit to understand into that area.',
    },
    9: {
      lifeArea: 'Mercury lights up beliefs and the bigger why. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel use wit to understand into that area.',
    },
    10: {
      lifeArea: 'Mercury lights up career and reputation. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Finish something visible. Channel use wit to understand into that area.',
    },
    11: {
      lifeArea: 'Mercury lights up friends and future goals. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel use wit to understand into that area.',
    },
    12: {
      lifeArea: 'Mercury lights up rest and quiet endings. That’s where your mind wants to talk and sort details show most clearly.',
      advice: 'Schedule real rest. Channel use wit to understand into that area.',
    },
  },
  Jupiter: {
    1: {
      lifeArea: 'Jupiter lights up how you show up and body-energy. That’s where you look for meaning and growth show most clearly.',
      advice: 'Check energy before overcommitting. Channel stay curious, not preachy into that area.',
    },
    2: {
      lifeArea: 'Jupiter lights up money and what you treat as valuable. That’s where you look for meaning and growth show most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel stay curious, not preachy into that area.',
    },
    3: {
      lifeArea: 'Jupiter lights up courage and everyday hustle. That’s where you look for meaning and growth show most clearly.',
      advice: 'Take one short bold step. Channel stay curious, not preachy into that area.',
    },
    4: {
      lifeArea: 'Jupiter lights up home and private mood. That’s where you look for meaning and growth show most clearly.',
      advice: 'Protect the base; tidy helps. Channel stay curious, not preachy into that area.',
    },
    5: {
      lifeArea: 'Jupiter lights up creativity, play, and romance. That’s where you look for meaning and growth show most clearly.',
      advice: 'Make something fun or warm. Channel stay curious, not preachy into that area.',
    },
    6: {
      lifeArea: 'Jupiter lights up routines and daily problems. That’s where you look for meaning and growth show most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel stay curious, not preachy into that area.',
    },
    7: {
      lifeArea: 'Jupiter lights up one-to-one bonds. That’s where you look for meaning and growth show most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel stay curious, not preachy into that area.',
    },
    8: {
      lifeArea: 'Jupiter lights up shared resources and deep resets. That’s where you look for meaning and growth show most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel stay curious, not preachy into that area.',
    },
    9: {
      lifeArea: 'Jupiter lights up beliefs and the bigger why. That’s where you look for meaning and growth show most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel stay curious, not preachy into that area.',
    },
    10: {
      lifeArea: 'Jupiter lights up career and reputation. That’s where you look for meaning and growth show most clearly.',
      advice: 'Finish something visible. Channel stay curious, not preachy into that area.',
    },
    11: {
      lifeArea: 'Jupiter lights up friends and future goals. That’s where you look for meaning and growth show most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel stay curious, not preachy into that area.',
    },
    12: {
      lifeArea: 'Jupiter lights up rest and quiet endings. That’s where you look for meaning and growth show most clearly.',
      advice: 'Schedule real rest. Channel stay curious, not preachy into that area.',
    },
  },
  Venus: {
    1: {
      lifeArea: 'Venus lights up how you show up and body-energy. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Check energy before overcommitting. Channel practise harmony into that area.',
    },
    2: {
      lifeArea: 'Venus lights up money and what you treat as valuable. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel practise harmony into that area.',
    },
    3: {
      lifeArea: 'Venus lights up courage and everyday hustle. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Take one short bold step. Channel practise harmony into that area.',
    },
    4: {
      lifeArea: 'Venus lights up home and private mood. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Protect the base; tidy helps. Channel practise harmony into that area.',
    },
    5: {
      lifeArea: 'Venus lights up creativity, play, and romance. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Make something fun or warm. Channel practise harmony into that area.',
    },
    6: {
      lifeArea: 'Venus lights up routines and daily problems. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel practise harmony into that area.',
    },
    7: {
      lifeArea: 'Venus lights up one-to-one bonds. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel practise harmony into that area.',
    },
    8: {
      lifeArea: 'Venus lights up shared resources and deep resets. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel practise harmony into that area.',
    },
    9: {
      lifeArea: 'Venus lights up beliefs and the bigger why. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel practise harmony into that area.',
    },
    10: {
      lifeArea: 'Venus lights up career and reputation. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Finish something visible. Channel practise harmony into that area.',
    },
    11: {
      lifeArea: 'Venus lights up friends and future goals. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel practise harmony into that area.',
    },
    12: {
      lifeArea: 'Venus lights up rest and quiet endings. That’s where you care about comfort, beauty, and bonding show most clearly.',
      advice: 'Schedule real rest. Channel practise harmony into that area.',
    },
  },
  Saturn: {
    1: {
      lifeArea: 'Saturn lights up how you show up and body-energy. That’s where you take the long road show most clearly.',
      advice: 'Check energy before overcommitting. Channel leave room to breathe into that area.',
    },
    2: {
      lifeArea: 'Saturn lights up money and what you treat as valuable. That’s where you take the long road show most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel leave room to breathe into that area.',
    },
    3: {
      lifeArea: 'Saturn lights up courage and everyday hustle. That’s where you take the long road show most clearly.',
      advice: 'Take one short bold step. Channel leave room to breathe into that area.',
    },
    4: {
      lifeArea: 'Saturn lights up home and private mood. That’s where you take the long road show most clearly.',
      advice: 'Protect the base; tidy helps. Channel leave room to breathe into that area.',
    },
    5: {
      lifeArea: 'Saturn lights up creativity, play, and romance. That’s where you take the long road show most clearly.',
      advice: 'Make something fun or warm. Channel leave room to breathe into that area.',
    },
    6: {
      lifeArea: 'Saturn lights up routines and daily problems. That’s where you take the long road show most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel leave room to breathe into that area.',
    },
    7: {
      lifeArea: 'Saturn lights up one-to-one bonds. That’s where you take the long road show most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel leave room to breathe into that area.',
    },
    8: {
      lifeArea: 'Saturn lights up shared resources and deep resets. That’s where you take the long road show most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel leave room to breathe into that area.',
    },
    9: {
      lifeArea: 'Saturn lights up beliefs and the bigger why. That’s where you take the long road show most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel leave room to breathe into that area.',
    },
    10: {
      lifeArea: 'Saturn lights up career and reputation. That’s where you take the long road show most clearly.',
      advice: 'Finish something visible. Channel leave room to breathe into that area.',
    },
    11: {
      lifeArea: 'Saturn lights up friends and future goals. That’s where you take the long road show most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel leave room to breathe into that area.',
    },
    12: {
      lifeArea: 'Saturn lights up rest and quiet endings. That’s where you take the long road show most clearly.',
      advice: 'Schedule real rest. Channel leave room to breathe into that area.',
    },
  },
  Rahu: {
    1: {
      lifeArea: 'Rahu lights up how you show up and body-energy. That’s where you hunger for the new show most clearly.',
      advice: 'Check energy before overcommitting. Channel keep both feet on the ground into that area.',
    },
    2: {
      lifeArea: 'Rahu lights up money and what you treat as valuable. That’s where you hunger for the new show most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel keep both feet on the ground into that area.',
    },
    3: {
      lifeArea: 'Rahu lights up courage and everyday hustle. That’s where you hunger for the new show most clearly.',
      advice: 'Take one short bold step. Channel keep both feet on the ground into that area.',
    },
    4: {
      lifeArea: 'Rahu lights up home and private mood. That’s where you hunger for the new show most clearly.',
      advice: 'Protect the base; tidy helps. Channel keep both feet on the ground into that area.',
    },
    5: {
      lifeArea: 'Rahu lights up creativity, play, and romance. That’s where you hunger for the new show most clearly.',
      advice: 'Make something fun or warm. Channel keep both feet on the ground into that area.',
    },
    6: {
      lifeArea: 'Rahu lights up routines and daily problems. That’s where you hunger for the new show most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel keep both feet on the ground into that area.',
    },
    7: {
      lifeArea: 'Rahu lights up one-to-one bonds. That’s where you hunger for the new show most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel keep both feet on the ground into that area.',
    },
    8: {
      lifeArea: 'Rahu lights up shared resources and deep resets. That’s where you hunger for the new show most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel keep both feet on the ground into that area.',
    },
    9: {
      lifeArea: 'Rahu lights up beliefs and the bigger why. That’s where you hunger for the new show most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel keep both feet on the ground into that area.',
    },
    10: {
      lifeArea: 'Rahu lights up career and reputation. That’s where you hunger for the new show most clearly.',
      advice: 'Finish something visible. Channel keep both feet on the ground into that area.',
    },
    11: {
      lifeArea: 'Rahu lights up friends and future goals. That’s where you hunger for the new show most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel keep both feet on the ground into that area.',
    },
    12: {
      lifeArea: 'Rahu lights up rest and quiet endings. That’s where you hunger for the new show most clearly.',
      advice: 'Schedule real rest. Channel keep both feet on the ground into that area.',
    },
  },
  Ketu: {
    1: {
      lifeArea: 'Ketu lights up how you show up and body-energy. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Check energy before overcommitting. Channel share insight without vanishing into that area.',
    },
    2: {
      lifeArea: 'Ketu lights up money and what you treat as valuable. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel share insight without vanishing into that area.',
    },
    3: {
      lifeArea: 'Ketu lights up courage and everyday hustle. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Take one short bold step. Channel share insight without vanishing into that area.',
    },
    4: {
      lifeArea: 'Ketu lights up home and private mood. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Protect the base; tidy helps. Channel share insight without vanishing into that area.',
    },
    5: {
      lifeArea: 'Ketu lights up creativity, play, and romance. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Make something fun or warm. Channel share insight without vanishing into that area.',
    },
    6: {
      lifeArea: 'Ketu lights up routines and daily problems. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel share insight without vanishing into that area.',
    },
    7: {
      lifeArea: 'Ketu lights up one-to-one bonds. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel share insight without vanishing into that area.',
    },
    8: {
      lifeArea: 'Ketu lights up shared resources and deep resets. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel share insight without vanishing into that area.',
    },
    9: {
      lifeArea: 'Ketu lights up beliefs and the bigger why. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel share insight without vanishing into that area.',
    },
    10: {
      lifeArea: 'Ketu lights up career and reputation. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Finish something visible. Channel share insight without vanishing into that area.',
    },
    11: {
      lifeArea: 'Ketu lights up friends and future goals. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel share insight without vanishing into that area.',
    },
    12: {
      lifeArea: 'Ketu lights up rest and quiet endings. That’s where you simplify and know some things sideways show most clearly.',
      advice: 'Schedule real rest. Channel share insight without vanishing into that area.',
    },
  },
};

export function grahaBhavaRule(graha: GrahaId, house: number): GrahaBhavaRule | null {
  return GRAHA_BHAVA[graha]?.[house] ?? null;
}
