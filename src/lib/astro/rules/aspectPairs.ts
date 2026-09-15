import type { GrahaId } from '../constants';
import type { AspectLabel } from './aspects';

export interface AspectPairRule {
  lifeMeaning: string;
  advice: string;
}

export const ASPECT_PAIRS: Record<string, Record<AspectLabel, AspectPairRule>> = {
  'Moon_Saturn': {
    conjunct: {
      lifeMeaning: 'Moon and Saturn are when these two mix, their themes blend and get louder. That mixes “your moods and needs set the weather” with “you take the long road and notice what’s unfinished.”',
      advice: 'Name whose voice is whose before you act. For you: eat, drink water, and find a soft landing before hard talks — and also take one sober step instead of a grand promise.',
    },
    sextile: {
      lifeMeaning: 'Moon and Saturn are they’re offering easier cooperation if you make a small move. That mixes “your moods and needs set the weather” with “you take the long road and notice what’s unfinished.”',
      advice: 'Reach out or polish something already warm. For you: eat, drink water, and find a soft landing before hard talks — and also take one sober step instead of a grand promise.',
    },
    square: {
      lifeMeaning: 'Moon and Saturn are they’re creating useful friction that wants precision. That mixes “your moods and needs set the weather” with “you take the long road and notice what’s unfinished.”',
      advice: 'Pause before reacting; choose a precise response. For you: eat, drink water, and find a soft landing before hard talks — and also take one sober step instead of a grand promise.',
    },
    trine: {
      lifeMeaning: 'Moon and Saturn are they’re flowing easily — support you might underuse. That mixes “your moods and needs set the weather” with “you take the long road and notice what’s unfinished.”',
      advice: 'Ship what’s ready while the glide lasts. For you: eat, drink water, and find a soft landing before hard talks — and also take one sober step instead of a grand promise.',
    },
    oppose: {
      lifeMeaning: 'Moon and Saturn are they’re sitting across from each other like a debate. That mixes “your moods and needs set the weather” with “you take the long road and notice what’s unfinished.”',
      advice: 'Hear the other side before you dig in. For you: eat, drink water, and find a soft landing before hard talks — and also take one sober step instead of a grand promise.',
    },
  },
  'Moon_Mars': {
    conjunct: {
      lifeMeaning: 'Moon and Mars are when these two mix, their themes blend and get louder. That mixes “your moods and needs set the weather” with “you push hard for what you want.”',
      advice: 'Name whose voice is whose before you act. For you: eat, drink water, and find a soft landing before hard talks — and also put the heat into one clean effort, not a public fight.',
    },
    sextile: {
      lifeMeaning: 'Moon and Mars are they’re offering easier cooperation if you make a small move. That mixes “your moods and needs set the weather” with “you push hard for what you want.”',
      advice: 'Reach out or polish something already warm. For you: eat, drink water, and find a soft landing before hard talks — and also put the heat into one clean effort, not a public fight.',
    },
    square: {
      lifeMeaning: 'Moon and Mars are they’re creating useful friction that wants precision. That mixes “your moods and needs set the weather” with “you push hard for what you want.”',
      advice: 'Pause before reacting; choose a precise response. For you: eat, drink water, and find a soft landing before hard talks — and also put the heat into one clean effort, not a public fight.',
    },
    trine: {
      lifeMeaning: 'Moon and Mars are they’re flowing easily — support you might underuse. That mixes “your moods and needs set the weather” with “you push hard for what you want.”',
      advice: 'Ship what’s ready while the glide lasts. For you: eat, drink water, and find a soft landing before hard talks — and also put the heat into one clean effort, not a public fight.',
    },
    oppose: {
      lifeMeaning: 'Moon and Mars are they’re sitting across from each other like a debate. That mixes “your moods and needs set the weather” with “you push hard for what you want.”',
      advice: 'Hear the other side before you dig in. For you: eat, drink water, and find a soft landing before hard talks — and also put the heat into one clean effort, not a public fight.',
    },
  },
  'Sun_Saturn': {
    conjunct: {
      lifeMeaning: 'Sun and Saturn are when these two mix, their themes blend and get louder. That mixes “you want to be seen and lead” with “you take the long road and notice what’s unfinished.”',
      advice: 'Name whose voice is whose before you act. For you: own one clear act of presence, then share the spotlight — and also take one sober step instead of a grand promise.',
    },
    sextile: {
      lifeMeaning: 'Sun and Saturn are they’re offering easier cooperation if you make a small move. That mixes “you want to be seen and lead” with “you take the long road and notice what’s unfinished.”',
      advice: 'Reach out or polish something already warm. For you: own one clear act of presence, then share the spotlight — and also take one sober step instead of a grand promise.',
    },
    square: {
      lifeMeaning: 'Sun and Saturn are they’re creating useful friction that wants precision. That mixes “you want to be seen and lead” with “you take the long road and notice what’s unfinished.”',
      advice: 'Pause before reacting; choose a precise response. For you: own one clear act of presence, then share the spotlight — and also take one sober step instead of a grand promise.',
    },
    trine: {
      lifeMeaning: 'Sun and Saturn are they’re flowing easily — support you might underuse. That mixes “you want to be seen and lead” with “you take the long road and notice what’s unfinished.”',
      advice: 'Ship what’s ready while the glide lasts. For you: own one clear act of presence, then share the spotlight — and also take one sober step instead of a grand promise.',
    },
    oppose: {
      lifeMeaning: 'Sun and Saturn are they’re sitting across from each other like a debate. That mixes “you want to be seen and lead” with “you take the long road and notice what’s unfinished.”',
      advice: 'Hear the other side before you dig in. For you: own one clear act of presence, then share the spotlight — and also take one sober step instead of a grand promise.',
    },
  },
  'Venus_Mars': {
    conjunct: {
      lifeMeaning: 'Venus and Mars are when these two mix, their themes blend and get louder. That mixes “you care about comfort, beauty, and how you bond” with “you push hard for what you want.”',
      advice: 'Name whose voice is whose before you act. For you: choose kindness and one beautiful detail on purpose — and also put the heat into one clean effort, not a public fight.',
    },
    sextile: {
      lifeMeaning: 'Venus and Mars are they’re offering easier cooperation if you make a small move. That mixes “you care about comfort, beauty, and how you bond” with “you push hard for what you want.”',
      advice: 'Reach out or polish something already warm. For you: choose kindness and one beautiful detail on purpose — and also put the heat into one clean effort, not a public fight.',
    },
    square: {
      lifeMeaning: 'Venus and Mars are they’re creating useful friction that wants precision. That mixes “you care about comfort, beauty, and how you bond” with “you push hard for what you want.”',
      advice: 'Pause before reacting; choose a precise response. For you: choose kindness and one beautiful detail on purpose — and also put the heat into one clean effort, not a public fight.',
    },
    trine: {
      lifeMeaning: 'Venus and Mars are they’re flowing easily — support you might underuse. That mixes “you care about comfort, beauty, and how you bond” with “you push hard for what you want.”',
      advice: 'Ship what’s ready while the glide lasts. For you: choose kindness and one beautiful detail on purpose — and also put the heat into one clean effort, not a public fight.',
    },
    oppose: {
      lifeMeaning: 'Venus and Mars are they’re sitting across from each other like a debate. That mixes “you care about comfort, beauty, and how you bond” with “you push hard for what you want.”',
      advice: 'Hear the other side before you dig in. For you: choose kindness and one beautiful detail on purpose — and also put the heat into one clean effort, not a public fight.',
    },
  },
  'Mercury_Jupiter': {
    conjunct: {
      lifeMeaning: 'Mercury and Jupiter are when these two mix, their themes blend and get louder. That mixes “your mind wants to talk, learn, and sort details” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Name whose voice is whose before you act. For you: write it down, then send the short clear version — and also learn something or help someone — skip the lecture.',
    },
    sextile: {
      lifeMeaning: 'Mercury and Jupiter are they’re offering easier cooperation if you make a small move. That mixes “your mind wants to talk, learn, and sort details” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Reach out or polish something already warm. For you: write it down, then send the short clear version — and also learn something or help someone — skip the lecture.',
    },
    square: {
      lifeMeaning: 'Mercury and Jupiter are they’re creating useful friction that wants precision. That mixes “your mind wants to talk, learn, and sort details” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Pause before reacting; choose a precise response. For you: write it down, then send the short clear version — and also learn something or help someone — skip the lecture.',
    },
    trine: {
      lifeMeaning: 'Mercury and Jupiter are they’re flowing easily — support you might underuse. That mixes “your mind wants to talk, learn, and sort details” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Ship what’s ready while the glide lasts. For you: write it down, then send the short clear version — and also learn something or help someone — skip the lecture.',
    },
    oppose: {
      lifeMeaning: 'Mercury and Jupiter are they’re sitting across from each other like a debate. That mixes “your mind wants to talk, learn, and sort details” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Hear the other side before you dig in. For you: write it down, then send the short clear version — and also learn something or help someone — skip the lecture.',
    },
  },
  'Sun_Moon': {
    conjunct: {
      lifeMeaning: 'Sun and Moon are when these two mix, their themes blend and get louder. That mixes “you want to be seen and lead” with “your moods and needs set the weather.”',
      advice: 'Name whose voice is whose before you act. For you: own one clear act of presence, then share the spotlight — and also eat, drink water, and find a soft landing before hard talks.',
    },
    sextile: {
      lifeMeaning: 'Sun and Moon are they’re offering easier cooperation if you make a small move. That mixes “you want to be seen and lead” with “your moods and needs set the weather.”',
      advice: 'Reach out or polish something already warm. For you: own one clear act of presence, then share the spotlight — and also eat, drink water, and find a soft landing before hard talks.',
    },
    square: {
      lifeMeaning: 'Sun and Moon are they’re creating useful friction that wants precision. That mixes “you want to be seen and lead” with “your moods and needs set the weather.”',
      advice: 'Pause before reacting; choose a precise response. For you: own one clear act of presence, then share the spotlight — and also eat, drink water, and find a soft landing before hard talks.',
    },
    trine: {
      lifeMeaning: 'Sun and Moon are they’re flowing easily — support you might underuse. That mixes “you want to be seen and lead” with “your moods and needs set the weather.”',
      advice: 'Ship what’s ready while the glide lasts. For you: own one clear act of presence, then share the spotlight — and also eat, drink water, and find a soft landing before hard talks.',
    },
    oppose: {
      lifeMeaning: 'Sun and Moon are they’re sitting across from each other like a debate. That mixes “you want to be seen and lead” with “your moods and needs set the weather.”',
      advice: 'Hear the other side before you dig in. For you: own one clear act of presence, then share the spotlight — and also eat, drink water, and find a soft landing before hard talks.',
    },
  },
  'Moon_Venus': {
    conjunct: {
      lifeMeaning: 'Moon and Venus are when these two mix, their themes blend and get louder. That mixes “your moods and needs set the weather” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Name whose voice is whose before you act. For you: eat, drink water, and find a soft landing before hard talks — and also choose kindness and one beautiful detail on purpose.',
    },
    sextile: {
      lifeMeaning: 'Moon and Venus are they’re offering easier cooperation if you make a small move. That mixes “your moods and needs set the weather” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Reach out or polish something already warm. For you: eat, drink water, and find a soft landing before hard talks — and also choose kindness and one beautiful detail on purpose.',
    },
    square: {
      lifeMeaning: 'Moon and Venus are they’re creating useful friction that wants precision. That mixes “your moods and needs set the weather” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Pause before reacting; choose a precise response. For you: eat, drink water, and find a soft landing before hard talks — and also choose kindness and one beautiful detail on purpose.',
    },
    trine: {
      lifeMeaning: 'Moon and Venus are they’re flowing easily — support you might underuse. That mixes “your moods and needs set the weather” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Ship what’s ready while the glide lasts. For you: eat, drink water, and find a soft landing before hard talks — and also choose kindness and one beautiful detail on purpose.',
    },
    oppose: {
      lifeMeaning: 'Moon and Venus are they’re sitting across from each other like a debate. That mixes “your moods and needs set the weather” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Hear the other side before you dig in. For you: eat, drink water, and find a soft landing before hard talks — and also choose kindness and one beautiful detail on purpose.',
    },
  },
  'Sun_Mars': {
    conjunct: {
      lifeMeaning: 'Sun and Mars are when these two mix, their themes blend and get louder. That mixes “you want to be seen and lead” with “you push hard for what you want.”',
      advice: 'Name whose voice is whose before you act. For you: own one clear act of presence, then share the spotlight — and also put the heat into one clean effort, not a public fight.',
    },
    sextile: {
      lifeMeaning: 'Sun and Mars are they’re offering easier cooperation if you make a small move. That mixes “you want to be seen and lead” with “you push hard for what you want.”',
      advice: 'Reach out or polish something already warm. For you: own one clear act of presence, then share the spotlight — and also put the heat into one clean effort, not a public fight.',
    },
    square: {
      lifeMeaning: 'Sun and Mars are they’re creating useful friction that wants precision. That mixes “you want to be seen and lead” with “you push hard for what you want.”',
      advice: 'Pause before reacting; choose a precise response. For you: own one clear act of presence, then share the spotlight — and also put the heat into one clean effort, not a public fight.',
    },
    trine: {
      lifeMeaning: 'Sun and Mars are they’re flowing easily — support you might underuse. That mixes “you want to be seen and lead” with “you push hard for what you want.”',
      advice: 'Ship what’s ready while the glide lasts. For you: own one clear act of presence, then share the spotlight — and also put the heat into one clean effort, not a public fight.',
    },
    oppose: {
      lifeMeaning: 'Sun and Mars are they’re sitting across from each other like a debate. That mixes “you want to be seen and lead” with “you push hard for what you want.”',
      advice: 'Hear the other side before you dig in. For you: own one clear act of presence, then share the spotlight — and also put the heat into one clean effort, not a public fight.',
    },
  },
  'Mercury_Saturn': {
    conjunct: {
      lifeMeaning: 'Mercury and Saturn are when these two mix, their themes blend and get louder. That mixes “your mind wants to talk, learn, and sort details” with “you take the long road and notice what’s unfinished.”',
      advice: 'Name whose voice is whose before you act. For you: write it down, then send the short clear version — and also take one sober step instead of a grand promise.',
    },
    sextile: {
      lifeMeaning: 'Mercury and Saturn are they’re offering easier cooperation if you make a small move. That mixes “your mind wants to talk, learn, and sort details” with “you take the long road and notice what’s unfinished.”',
      advice: 'Reach out or polish something already warm. For you: write it down, then send the short clear version — and also take one sober step instead of a grand promise.',
    },
    square: {
      lifeMeaning: 'Mercury and Saturn are they’re creating useful friction that wants precision. That mixes “your mind wants to talk, learn, and sort details” with “you take the long road and notice what’s unfinished.”',
      advice: 'Pause before reacting; choose a precise response. For you: write it down, then send the short clear version — and also take one sober step instead of a grand promise.',
    },
    trine: {
      lifeMeaning: 'Mercury and Saturn are they’re flowing easily — support you might underuse. That mixes “your mind wants to talk, learn, and sort details” with “you take the long road and notice what’s unfinished.”',
      advice: 'Ship what’s ready while the glide lasts. For you: write it down, then send the short clear version — and also take one sober step instead of a grand promise.',
    },
    oppose: {
      lifeMeaning: 'Mercury and Saturn are they’re sitting across from each other like a debate. That mixes “your mind wants to talk, learn, and sort details” with “you take the long road and notice what’s unfinished.”',
      advice: 'Hear the other side before you dig in. For you: write it down, then send the short clear version — and also take one sober step instead of a grand promise.',
    },
  },
  'Jupiter_Saturn': {
    conjunct: {
      lifeMeaning: 'Jupiter and Saturn are when these two mix, their themes blend and get louder. That mixes “you look for meaning, growth, and a wider frame” with “you take the long road and notice what’s unfinished.”',
      advice: 'Name whose voice is whose before you act. For you: learn something or help someone — skip the lecture — and also take one sober step instead of a grand promise.',
    },
    sextile: {
      lifeMeaning: 'Jupiter and Saturn are they’re offering easier cooperation if you make a small move. That mixes “you look for meaning, growth, and a wider frame” with “you take the long road and notice what’s unfinished.”',
      advice: 'Reach out or polish something already warm. For you: learn something or help someone — skip the lecture — and also take one sober step instead of a grand promise.',
    },
    square: {
      lifeMeaning: 'Jupiter and Saturn are they’re creating useful friction that wants precision. That mixes “you look for meaning, growth, and a wider frame” with “you take the long road and notice what’s unfinished.”',
      advice: 'Pause before reacting; choose a precise response. For you: learn something or help someone — skip the lecture — and also take one sober step instead of a grand promise.',
    },
    trine: {
      lifeMeaning: 'Jupiter and Saturn are they’re flowing easily — support you might underuse. That mixes “you look for meaning, growth, and a wider frame” with “you take the long road and notice what’s unfinished.”',
      advice: 'Ship what’s ready while the glide lasts. For you: learn something or help someone — skip the lecture — and also take one sober step instead of a grand promise.',
    },
    oppose: {
      lifeMeaning: 'Jupiter and Saturn are they’re sitting across from each other like a debate. That mixes “you look for meaning, growth, and a wider frame” with “you take the long road and notice what’s unfinished.”',
      advice: 'Hear the other side before you dig in. For you: learn something or help someone — skip the lecture — and also take one sober step instead of a grand promise.',
    },
  },
  'Venus_Saturn': {
    conjunct: {
      lifeMeaning: 'Venus and Saturn are when these two mix, their themes blend and get louder. That mixes “you care about comfort, beauty, and how you bond” with “you take the long road and notice what’s unfinished.”',
      advice: 'Name whose voice is whose before you act. For you: choose kindness and one beautiful detail on purpose — and also take one sober step instead of a grand promise.',
    },
    sextile: {
      lifeMeaning: 'Venus and Saturn are they’re offering easier cooperation if you make a small move. That mixes “you care about comfort, beauty, and how you bond” with “you take the long road and notice what’s unfinished.”',
      advice: 'Reach out or polish something already warm. For you: choose kindness and one beautiful detail on purpose — and also take one sober step instead of a grand promise.',
    },
    square: {
      lifeMeaning: 'Venus and Saturn are they’re creating useful friction that wants precision. That mixes “you care about comfort, beauty, and how you bond” with “you take the long road and notice what’s unfinished.”',
      advice: 'Pause before reacting; choose a precise response. For you: choose kindness and one beautiful detail on purpose — and also take one sober step instead of a grand promise.',
    },
    trine: {
      lifeMeaning: 'Venus and Saturn are they’re flowing easily — support you might underuse. That mixes “you care about comfort, beauty, and how you bond” with “you take the long road and notice what’s unfinished.”',
      advice: 'Ship what’s ready while the glide lasts. For you: choose kindness and one beautiful detail on purpose — and also take one sober step instead of a grand promise.',
    },
    oppose: {
      lifeMeaning: 'Venus and Saturn are they’re sitting across from each other like a debate. That mixes “you care about comfort, beauty, and how you bond” with “you take the long road and notice what’s unfinished.”',
      advice: 'Hear the other side before you dig in. For you: choose kindness and one beautiful detail on purpose — and also take one sober step instead of a grand promise.',
    },
  },
  'Mars_Saturn': {
    conjunct: {
      lifeMeaning: 'Mars and Saturn are when these two mix, their themes blend and get louder. That mixes “you push hard for what you want” with “you take the long road and notice what’s unfinished.”',
      advice: 'Name whose voice is whose before you act. For you: put the heat into one clean effort, not a public fight — and also take one sober step instead of a grand promise.',
    },
    sextile: {
      lifeMeaning: 'Mars and Saturn are they’re offering easier cooperation if you make a small move. That mixes “you push hard for what you want” with “you take the long road and notice what’s unfinished.”',
      advice: 'Reach out or polish something already warm. For you: put the heat into one clean effort, not a public fight — and also take one sober step instead of a grand promise.',
    },
    square: {
      lifeMeaning: 'Mars and Saturn are they’re creating useful friction that wants precision. That mixes “you push hard for what you want” with “you take the long road and notice what’s unfinished.”',
      advice: 'Pause before reacting; choose a precise response. For you: put the heat into one clean effort, not a public fight — and also take one sober step instead of a grand promise.',
    },
    trine: {
      lifeMeaning: 'Mars and Saturn are they’re flowing easily — support you might underuse. That mixes “you push hard for what you want” with “you take the long road and notice what’s unfinished.”',
      advice: 'Ship what’s ready while the glide lasts. For you: put the heat into one clean effort, not a public fight — and also take one sober step instead of a grand promise.',
    },
    oppose: {
      lifeMeaning: 'Mars and Saturn are they’re sitting across from each other like a debate. That mixes “you push hard for what you want” with “you take the long road and notice what’s unfinished.”',
      advice: 'Hear the other side before you dig in. For you: put the heat into one clean effort, not a public fight — and also take one sober step instead of a grand promise.',
    },
  },
  'Sun_Jupiter': {
    conjunct: {
      lifeMeaning: 'Sun and Jupiter are when these two mix, their themes blend and get louder. That mixes “you want to be seen and lead” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Name whose voice is whose before you act. For you: own one clear act of presence, then share the spotlight — and also learn something or help someone — skip the lecture.',
    },
    sextile: {
      lifeMeaning: 'Sun and Jupiter are they’re offering easier cooperation if you make a small move. That mixes “you want to be seen and lead” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Reach out or polish something already warm. For you: own one clear act of presence, then share the spotlight — and also learn something or help someone — skip the lecture.',
    },
    square: {
      lifeMeaning: 'Sun and Jupiter are they’re creating useful friction that wants precision. That mixes “you want to be seen and lead” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Pause before reacting; choose a precise response. For you: own one clear act of presence, then share the spotlight — and also learn something or help someone — skip the lecture.',
    },
    trine: {
      lifeMeaning: 'Sun and Jupiter are they’re flowing easily — support you might underuse. That mixes “you want to be seen and lead” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Ship what’s ready while the glide lasts. For you: own one clear act of presence, then share the spotlight — and also learn something or help someone — skip the lecture.',
    },
    oppose: {
      lifeMeaning: 'Sun and Jupiter are they’re sitting across from each other like a debate. That mixes “you want to be seen and lead” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Hear the other side before you dig in. For you: own one clear act of presence, then share the spotlight — and also learn something or help someone — skip the lecture.',
    },
  },
  'Moon_Jupiter': {
    conjunct: {
      lifeMeaning: 'Moon and Jupiter are when these two mix, their themes blend and get louder. That mixes “your moods and needs set the weather” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Name whose voice is whose before you act. For you: eat, drink water, and find a soft landing before hard talks — and also learn something or help someone — skip the lecture.',
    },
    sextile: {
      lifeMeaning: 'Moon and Jupiter are they’re offering easier cooperation if you make a small move. That mixes “your moods and needs set the weather” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Reach out or polish something already warm. For you: eat, drink water, and find a soft landing before hard talks — and also learn something or help someone — skip the lecture.',
    },
    square: {
      lifeMeaning: 'Moon and Jupiter are they’re creating useful friction that wants precision. That mixes “your moods and needs set the weather” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Pause before reacting; choose a precise response. For you: eat, drink water, and find a soft landing before hard talks — and also learn something or help someone — skip the lecture.',
    },
    trine: {
      lifeMeaning: 'Moon and Jupiter are they’re flowing easily — support you might underuse. That mixes “your moods and needs set the weather” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Ship what’s ready while the glide lasts. For you: eat, drink water, and find a soft landing before hard talks — and also learn something or help someone — skip the lecture.',
    },
    oppose: {
      lifeMeaning: 'Moon and Jupiter are they’re sitting across from each other like a debate. That mixes “your moods and needs set the weather” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Hear the other side before you dig in. For you: eat, drink water, and find a soft landing before hard talks — and also learn something or help someone — skip the lecture.',
    },
  },
  'Mercury_Venus': {
    conjunct: {
      lifeMeaning: 'Mercury and Venus are when these two mix, their themes blend and get louder. That mixes “your mind wants to talk, learn, and sort details” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Name whose voice is whose before you act. For you: write it down, then send the short clear version — and also choose kindness and one beautiful detail on purpose.',
    },
    sextile: {
      lifeMeaning: 'Mercury and Venus are they’re offering easier cooperation if you make a small move. That mixes “your mind wants to talk, learn, and sort details” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Reach out or polish something already warm. For you: write it down, then send the short clear version — and also choose kindness and one beautiful detail on purpose.',
    },
    square: {
      lifeMeaning: 'Mercury and Venus are they’re creating useful friction that wants precision. That mixes “your mind wants to talk, learn, and sort details” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Pause before reacting; choose a precise response. For you: write it down, then send the short clear version — and also choose kindness and one beautiful detail on purpose.',
    },
    trine: {
      lifeMeaning: 'Mercury and Venus are they’re flowing easily — support you might underuse. That mixes “your mind wants to talk, learn, and sort details” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Ship what’s ready while the glide lasts. For you: write it down, then send the short clear version — and also choose kindness and one beautiful detail on purpose.',
    },
    oppose: {
      lifeMeaning: 'Mercury and Venus are they’re sitting across from each other like a debate. That mixes “your mind wants to talk, learn, and sort details” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Hear the other side before you dig in. For you: write it down, then send the short clear version — and also choose kindness and one beautiful detail on purpose.',
    },
  },
  'Mars_Jupiter': {
    conjunct: {
      lifeMeaning: 'Mars and Jupiter are when these two mix, their themes blend and get louder. That mixes “you push hard for what you want” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Name whose voice is whose before you act. For you: put the heat into one clean effort, not a public fight — and also learn something or help someone — skip the lecture.',
    },
    sextile: {
      lifeMeaning: 'Mars and Jupiter are they’re offering easier cooperation if you make a small move. That mixes “you push hard for what you want” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Reach out or polish something already warm. For you: put the heat into one clean effort, not a public fight — and also learn something or help someone — skip the lecture.',
    },
    square: {
      lifeMeaning: 'Mars and Jupiter are they’re creating useful friction that wants precision. That mixes “you push hard for what you want” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Pause before reacting; choose a precise response. For you: put the heat into one clean effort, not a public fight — and also learn something or help someone — skip the lecture.',
    },
    trine: {
      lifeMeaning: 'Mars and Jupiter are they’re flowing easily — support you might underuse. That mixes “you push hard for what you want” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Ship what’s ready while the glide lasts. For you: put the heat into one clean effort, not a public fight — and also learn something or help someone — skip the lecture.',
    },
    oppose: {
      lifeMeaning: 'Mars and Jupiter are they’re sitting across from each other like a debate. That mixes “you push hard for what you want” with “you look for meaning, growth, and a wider frame.”',
      advice: 'Hear the other side before you dig in. For you: put the heat into one clean effort, not a public fight — and also learn something or help someone — skip the lecture.',
    },
  },
  'Sun_Venus': {
    conjunct: {
      lifeMeaning: 'Sun and Venus are when these two mix, their themes blend and get louder. That mixes “you want to be seen and lead” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Name whose voice is whose before you act. For you: own one clear act of presence, then share the spotlight — and also choose kindness and one beautiful detail on purpose.',
    },
    sextile: {
      lifeMeaning: 'Sun and Venus are they’re offering easier cooperation if you make a small move. That mixes “you want to be seen and lead” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Reach out or polish something already warm. For you: own one clear act of presence, then share the spotlight — and also choose kindness and one beautiful detail on purpose.',
    },
    square: {
      lifeMeaning: 'Sun and Venus are they’re creating useful friction that wants precision. That mixes “you want to be seen and lead” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Pause before reacting; choose a precise response. For you: own one clear act of presence, then share the spotlight — and also choose kindness and one beautiful detail on purpose.',
    },
    trine: {
      lifeMeaning: 'Sun and Venus are they’re flowing easily — support you might underuse. That mixes “you want to be seen and lead” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Ship what’s ready while the glide lasts. For you: own one clear act of presence, then share the spotlight — and also choose kindness and one beautiful detail on purpose.',
    },
    oppose: {
      lifeMeaning: 'Sun and Venus are they’re sitting across from each other like a debate. That mixes “you want to be seen and lead” with “you care about comfort, beauty, and how you bond.”',
      advice: 'Hear the other side before you dig in. For you: own one clear act of presence, then share the spotlight — and also choose kindness and one beautiful detail on purpose.',
    },
  },
  'Moon_Mercury': {
    conjunct: {
      lifeMeaning: 'Moon and Mercury are when these two mix, their themes blend and get louder. That mixes “your moods and needs set the weather” with “your mind wants to talk, learn, and sort details.”',
      advice: 'Name whose voice is whose before you act. For you: eat, drink water, and find a soft landing before hard talks — and also write it down, then send the short clear version.',
    },
    sextile: {
      lifeMeaning: 'Moon and Mercury are they’re offering easier cooperation if you make a small move. That mixes “your moods and needs set the weather” with “your mind wants to talk, learn, and sort details.”',
      advice: 'Reach out or polish something already warm. For you: eat, drink water, and find a soft landing before hard talks — and also write it down, then send the short clear version.',
    },
    square: {
      lifeMeaning: 'Moon and Mercury are they’re creating useful friction that wants precision. That mixes “your moods and needs set the weather” with “your mind wants to talk, learn, and sort details.”',
      advice: 'Pause before reacting; choose a precise response. For you: eat, drink water, and find a soft landing before hard talks — and also write it down, then send the short clear version.',
    },
    trine: {
      lifeMeaning: 'Moon and Mercury are they’re flowing easily — support you might underuse. That mixes “your moods and needs set the weather” with “your mind wants to talk, learn, and sort details.”',
      advice: 'Ship what’s ready while the glide lasts. For you: eat, drink water, and find a soft landing before hard talks — and also write it down, then send the short clear version.',
    },
    oppose: {
      lifeMeaning: 'Moon and Mercury are they’re sitting across from each other like a debate. That mixes “your moods and needs set the weather” with “your mind wants to talk, learn, and sort details.”',
      advice: 'Hear the other side before you dig in. For you: eat, drink water, and find a soft landing before hard talks — and also write it down, then send the short clear version.',
    },
  },
  'Rahu_Moon': {
    conjunct: {
      lifeMeaning: 'Rahu and Moon are when these two mix, their themes blend and get louder. That mixes “you hunger for the new and unfamiliar” with “your moods and needs set the weather.”',
      advice: 'Name whose voice is whose before you act. For you: follow curiosity with a timer and a reality check — and also eat, drink water, and find a soft landing before hard talks.',
    },
    sextile: {
      lifeMeaning: 'Rahu and Moon are they’re offering easier cooperation if you make a small move. That mixes “you hunger for the new and unfamiliar” with “your moods and needs set the weather.”',
      advice: 'Reach out or polish something already warm. For you: follow curiosity with a timer and a reality check — and also eat, drink water, and find a soft landing before hard talks.',
    },
    square: {
      lifeMeaning: 'Rahu and Moon are they’re creating useful friction that wants precision. That mixes “you hunger for the new and unfamiliar” with “your moods and needs set the weather.”',
      advice: 'Pause before reacting; choose a precise response. For you: follow curiosity with a timer and a reality check — and also eat, drink water, and find a soft landing before hard talks.',
    },
    trine: {
      lifeMeaning: 'Rahu and Moon are they’re flowing easily — support you might underuse. That mixes “you hunger for the new and unfamiliar” with “your moods and needs set the weather.”',
      advice: 'Ship what’s ready while the glide lasts. For you: follow curiosity with a timer and a reality check — and also eat, drink water, and find a soft landing before hard talks.',
    },
    oppose: {
      lifeMeaning: 'Rahu and Moon are they’re sitting across from each other like a debate. That mixes “you hunger for the new and unfamiliar” with “your moods and needs set the weather.”',
      advice: 'Hear the other side before you dig in. For you: follow curiosity with a timer and a reality check — and also eat, drink water, and find a soft landing before hard talks.',
    },
  },
  'Ketu_Moon': {
    conjunct: {
      lifeMeaning: 'Ketu and Moon are when these two mix, their themes blend and get louder. That mixes “you already know some things sideways and like to simplify” with “your moods and needs set the weather.”',
      advice: 'Name whose voice is whose before you act. For you: drop one extra obligation and keep the lesson — and also eat, drink water, and find a soft landing before hard talks.',
    },
    sextile: {
      lifeMeaning: 'Ketu and Moon are they’re offering easier cooperation if you make a small move. That mixes “you already know some things sideways and like to simplify” with “your moods and needs set the weather.”',
      advice: 'Reach out or polish something already warm. For you: drop one extra obligation and keep the lesson — and also eat, drink water, and find a soft landing before hard talks.',
    },
    square: {
      lifeMeaning: 'Ketu and Moon are they’re creating useful friction that wants precision. That mixes “you already know some things sideways and like to simplify” with “your moods and needs set the weather.”',
      advice: 'Pause before reacting; choose a precise response. For you: drop one extra obligation and keep the lesson — and also eat, drink water, and find a soft landing before hard talks.',
    },
    trine: {
      lifeMeaning: 'Ketu and Moon are they’re flowing easily — support you might underuse. That mixes “you already know some things sideways and like to simplify” with “your moods and needs set the weather.”',
      advice: 'Ship what’s ready while the glide lasts. For you: drop one extra obligation and keep the lesson — and also eat, drink water, and find a soft landing before hard talks.',
    },
    oppose: {
      lifeMeaning: 'Ketu and Moon are they’re sitting across from each other like a debate. That mixes “you already know some things sideways and like to simplify” with “your moods and needs set the weather.”',
      advice: 'Hear the other side before you dig in. For you: drop one extra obligation and keep the lesson — and also eat, drink water, and find a soft landing before hard talks.',
    },
  },
};

function pairKey(a: string, b: string): string {
  const k1 = `${a}_${b}`;
  const k2 = `${b}_${a}`;
  if (ASPECT_PAIRS[k1]) return k1;
  if (ASPECT_PAIRS[k2]) return k2;
  return k1;
}
export function aspectPairRule(a: GrahaId | string, b: GrahaId | string, label: string): AspectPairRule | null {
  const table = ASPECT_PAIRS[pairKey(String(a), String(b))];
  if (!table) return null;
  return table[label as AspectLabel] ?? null;
}
export function aspectPairCount(): number {
  let n = 0;
  for (const k of Object.keys(ASPECT_PAIRS)) n += Object.keys(ASPECT_PAIRS[k]).length;
  return n;
}
