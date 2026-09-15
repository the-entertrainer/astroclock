import type { GrahaId } from '../constants';

export interface DashaPairRule {
  tone: string;
  advice: string;
}

const LORDS: GrahaId[] = ['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn','Rahu','Ketu'];

export const DASHA_PAIR: Record<string, DashaPairRule> = {
  'Sun_Sun': {
    tone: 'You’re in a strong Sun chapter — you want to be seen and lead. Themes concentrate; keep perspective.',
    advice: 'Own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
  },
  'Sun_Moon': {
    tone: 'You’re in a Sun chapter with a Moon flavour right now. The long arc is about how you want to be seen and lead; the near weeks lean toward how your moods and needs set the weather.',
    advice: 'Own one clear act of presence, then share the spotlight. In the near stretch, also eat, drink water, and find a soft landing before hard talks.',
  },
  'Sun_Mars': {
    tone: 'You’re in a Sun chapter with a Mars flavour right now. The long arc is about how you want to be seen and lead; the near weeks lean toward how you push hard for what you want.',
    advice: 'Own one clear act of presence, then share the spotlight. In the near stretch, also put the heat into one clean effort, not a public fight.',
  },
  'Sun_Mercury': {
    tone: 'You’re in a Sun chapter with a Mercury flavour right now. The long arc is about how you want to be seen and lead; the near weeks lean toward how your mind wants to talk, learn, and sort details.',
    advice: 'Own one clear act of presence, then share the spotlight. In the near stretch, also write it down, then send the short clear version.',
  },
  'Sun_Jupiter': {
    tone: 'You’re in a Sun chapter with a Jupiter flavour right now. The long arc is about how you want to be seen and lead; the near weeks lean toward how you look for meaning, growth, and a wider frame.',
    advice: 'Own one clear act of presence, then share the spotlight. In the near stretch, also learn something or help someone — skip the lecture.',
  },
  'Sun_Venus': {
    tone: 'You’re in a Sun chapter with a Venus flavour right now. The long arc is about how you want to be seen and lead; the near weeks lean toward how you care about comfort, beauty, and how you bond.',
    advice: 'Own one clear act of presence, then share the spotlight. In the near stretch, also choose kindness and one beautiful detail on purpose.',
  },
  'Sun_Saturn': {
    tone: 'You’re in a Sun chapter with a Saturn flavour right now. The long arc is about how you want to be seen and lead; the near weeks lean toward how you build patiently and finish what others abandon.',
    advice: 'Own one clear act of presence, then share the spotlight. In the near stretch, also take one sober step instead of a grand promise.',
  },
  'Sun_Rahu': {
    tone: 'You’re in a Sun chapter with a Rahu flavour right now. The long arc is about how you want to be seen and lead; the near weeks lean toward how you hunger for the new and unfamiliar.',
    advice: 'Own one clear act of presence, then share the spotlight. In the near stretch, also follow curiosity with a timer and a reality check.',
  },
  'Sun_Ketu': {
    tone: 'You’re in a Sun chapter with a Ketu flavour right now. The long arc is about how you want to be seen and lead; the near weeks lean toward how you already know some things sideways and like to simplify.',
    advice: 'Own one clear act of presence, then share the spotlight. In the near stretch, also drop one extra obligation and keep the lesson.',
  },
  'Moon_Sun': {
    tone: 'You’re in a Moon chapter with a Sun flavour right now. The long arc is about how your moods and needs set the weather; the near weeks lean toward how you want to be seen and lead.',
    advice: 'Eat, drink water, and find a soft landing before hard talks. In the near stretch, also own one clear act of presence, then share the spotlight.',
  },
  'Moon_Moon': {
    tone: 'You’re in a strong Moon chapter — your moods and needs set the weather. Themes concentrate; keep perspective.',
    advice: 'Eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
  },
  'Moon_Mars': {
    tone: 'You’re in a Moon chapter with a Mars flavour right now. The long arc is about how your moods and needs set the weather; the near weeks lean toward how you push hard for what you want.',
    advice: 'Eat, drink water, and find a soft landing before hard talks. In the near stretch, also put the heat into one clean effort, not a public fight.',
  },
  'Moon_Mercury': {
    tone: 'You’re in a Moon chapter with a Mercury flavour right now. The long arc is about how your moods and needs set the weather; the near weeks lean toward how your mind wants to talk, learn, and sort details.',
    advice: 'Eat, drink water, and find a soft landing before hard talks. In the near stretch, also write it down, then send the short clear version.',
  },
  'Moon_Jupiter': {
    tone: 'You’re in a Moon chapter with a Jupiter flavour right now. The long arc is about how your moods and needs set the weather; the near weeks lean toward how you look for meaning, growth, and a wider frame.',
    advice: 'Eat, drink water, and find a soft landing before hard talks. In the near stretch, also learn something or help someone — skip the lecture.',
  },
  'Moon_Venus': {
    tone: 'You’re in a Moon chapter with a Venus flavour right now. The long arc is about how your moods and needs set the weather; the near weeks lean toward how you care about comfort, beauty, and how you bond.',
    advice: 'Eat, drink water, and find a soft landing before hard talks. In the near stretch, also choose kindness and one beautiful detail on purpose.',
  },
  'Moon_Saturn': {
    tone: 'You’re in a Moon chapter with a Saturn flavour right now. The long arc is about how your moods and needs set the weather; the near weeks lean toward how you build patiently and finish what others abandon.',
    advice: 'Eat, drink water, and find a soft landing before hard talks. In the near stretch, also take one sober step instead of a grand promise.',
  },
  'Moon_Rahu': {
    tone: 'You’re in a Moon chapter with a Rahu flavour right now. The long arc is about how your moods and needs set the weather; the near weeks lean toward how you hunger for the new and unfamiliar.',
    advice: 'Eat, drink water, and find a soft landing before hard talks. In the near stretch, also follow curiosity with a timer and a reality check.',
  },
  'Moon_Ketu': {
    tone: 'You’re in a Moon chapter with a Ketu flavour right now. The long arc is about how your moods and needs set the weather; the near weeks lean toward how you already know some things sideways and like to simplify.',
    advice: 'Eat, drink water, and find a soft landing before hard talks. In the near stretch, also drop one extra obligation and keep the lesson.',
  },
  'Mars_Sun': {
    tone: 'You’re in a Mars chapter with a Sun flavour right now. The long arc is about how you push hard for what you want; the near weeks lean toward how you want to be seen and lead.',
    advice: 'Put the heat into one clean effort, not a public fight. In the near stretch, also own one clear act of presence, then share the spotlight.',
  },
  'Mars_Moon': {
    tone: 'You’re in a Mars chapter with a Moon flavour right now. The long arc is about how you push hard for what you want; the near weeks lean toward how your moods and needs set the weather.',
    advice: 'Put the heat into one clean effort, not a public fight. In the near stretch, also eat, drink water, and find a soft landing before hard talks.',
  },
  'Mars_Mars': {
    tone: 'You’re in a strong Mars chapter — you push hard for what you want. Themes concentrate; keep perspective.',
    advice: 'Put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
  },
  'Mars_Mercury': {
    tone: 'You’re in a Mars chapter with a Mercury flavour right now. The long arc is about how you push hard for what you want; the near weeks lean toward how your mind wants to talk, learn, and sort details.',
    advice: 'Put the heat into one clean effort, not a public fight. In the near stretch, also write it down, then send the short clear version.',
  },
  'Mars_Jupiter': {
    tone: 'You’re in a Mars chapter with a Jupiter flavour right now. The long arc is about how you push hard for what you want; the near weeks lean toward how you look for meaning, growth, and a wider frame.',
    advice: 'Put the heat into one clean effort, not a public fight. In the near stretch, also learn something or help someone — skip the lecture.',
  },
  'Mars_Venus': {
    tone: 'You’re in a Mars chapter with a Venus flavour right now. The long arc is about how you push hard for what you want; the near weeks lean toward how you care about comfort, beauty, and how you bond.',
    advice: 'Put the heat into one clean effort, not a public fight. In the near stretch, also choose kindness and one beautiful detail on purpose.',
  },
  'Mars_Saturn': {
    tone: 'You’re in a Mars chapter with a Saturn flavour right now. The long arc is about how you push hard for what you want; the near weeks lean toward how you build patiently and finish what others abandon.',
    advice: 'Put the heat into one clean effort, not a public fight. In the near stretch, also take one sober step instead of a grand promise.',
  },
  'Mars_Rahu': {
    tone: 'You’re in a Mars chapter with a Rahu flavour right now. The long arc is about how you push hard for what you want; the near weeks lean toward how you hunger for the new and unfamiliar.',
    advice: 'Put the heat into one clean effort, not a public fight. In the near stretch, also follow curiosity with a timer and a reality check.',
  },
  'Mars_Ketu': {
    tone: 'You’re in a Mars chapter with a Ketu flavour right now. The long arc is about how you push hard for what you want; the near weeks lean toward how you already know some things sideways and like to simplify.',
    advice: 'Put the heat into one clean effort, not a public fight. In the near stretch, also drop one extra obligation and keep the lesson.',
  },
  'Mercury_Sun': {
    tone: 'You’re in a Mercury chapter with a Sun flavour right now. The long arc is about how your mind wants to talk, learn, and sort details; the near weeks lean toward how you want to be seen and lead.',
    advice: 'Write it down, then send the short clear version. In the near stretch, also own one clear act of presence, then share the spotlight.',
  },
  'Mercury_Moon': {
    tone: 'You’re in a Mercury chapter with a Moon flavour right now. The long arc is about how your mind wants to talk, learn, and sort details; the near weeks lean toward how your moods and needs set the weather.',
    advice: 'Write it down, then send the short clear version. In the near stretch, also eat, drink water, and find a soft landing before hard talks.',
  },
  'Mercury_Mars': {
    tone: 'You’re in a Mercury chapter with a Mars flavour right now. The long arc is about how your mind wants to talk, learn, and sort details; the near weeks lean toward how you push hard for what you want.',
    advice: 'Write it down, then send the short clear version. In the near stretch, also put the heat into one clean effort, not a public fight.',
  },
  'Mercury_Mercury': {
    tone: 'You’re in a strong Mercury chapter — your mind wants to talk, learn, and sort details. Themes concentrate; keep perspective.',
    advice: 'Write it down, then send the short clear version. Prefer use wit to understand, not to win.',
  },
  'Mercury_Jupiter': {
    tone: 'You’re in a Mercury chapter with a Jupiter flavour right now. The long arc is about how your mind wants to talk, learn, and sort details; the near weeks lean toward how you look for meaning, growth, and a wider frame.',
    advice: 'Write it down, then send the short clear version. In the near stretch, also learn something or help someone — skip the lecture.',
  },
  'Mercury_Venus': {
    tone: 'You’re in a Mercury chapter with a Venus flavour right now. The long arc is about how your mind wants to talk, learn, and sort details; the near weeks lean toward how you care about comfort, beauty, and how you bond.',
    advice: 'Write it down, then send the short clear version. In the near stretch, also choose kindness and one beautiful detail on purpose.',
  },
  'Mercury_Saturn': {
    tone: 'You’re in a Mercury chapter with a Saturn flavour right now. The long arc is about how your mind wants to talk, learn, and sort details; the near weeks lean toward how you build patiently and finish what others abandon.',
    advice: 'Write it down, then send the short clear version. In the near stretch, also take one sober step instead of a grand promise.',
  },
  'Mercury_Rahu': {
    tone: 'You’re in a Mercury chapter with a Rahu flavour right now. The long arc is about how your mind wants to talk, learn, and sort details; the near weeks lean toward how you hunger for the new and unfamiliar.',
    advice: 'Write it down, then send the short clear version. In the near stretch, also follow curiosity with a timer and a reality check.',
  },
  'Mercury_Ketu': {
    tone: 'You’re in a Mercury chapter with a Ketu flavour right now. The long arc is about how your mind wants to talk, learn, and sort details; the near weeks lean toward how you already know some things sideways and like to simplify.',
    advice: 'Write it down, then send the short clear version. In the near stretch, also drop one extra obligation and keep the lesson.',
  },
  'Jupiter_Sun': {
    tone: 'You’re in a Jupiter chapter with a Sun flavour right now. The long arc is about how you look for meaning, growth, and a wider frame; the near weeks lean toward how you want to be seen and lead.',
    advice: 'Learn something or help someone — skip the lecture. In the near stretch, also own one clear act of presence, then share the spotlight.',
  },
  'Jupiter_Moon': {
    tone: 'You’re in a Jupiter chapter with a Moon flavour right now. The long arc is about how you look for meaning, growth, and a wider frame; the near weeks lean toward how your moods and needs set the weather.',
    advice: 'Learn something or help someone — skip the lecture. In the near stretch, also eat, drink water, and find a soft landing before hard talks.',
  },
  'Jupiter_Mars': {
    tone: 'You’re in a Jupiter chapter with a Mars flavour right now. The long arc is about how you look for meaning, growth, and a wider frame; the near weeks lean toward how you push hard for what you want.',
    advice: 'Learn something or help someone — skip the lecture. In the near stretch, also put the heat into one clean effort, not a public fight.',
  },
  'Jupiter_Mercury': {
    tone: 'You’re in a Jupiter chapter with a Mercury flavour right now. The long arc is about how you look for meaning, growth, and a wider frame; the near weeks lean toward how your mind wants to talk, learn, and sort details.',
    advice: 'Learn something or help someone — skip the lecture. In the near stretch, also write it down, then send the short clear version.',
  },
  'Jupiter_Jupiter': {
    tone: 'You’re in a strong Jupiter chapter — you look for meaning, growth, and a wider frame. Themes concentrate; keep perspective.',
    advice: 'Learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
  },
  'Jupiter_Venus': {
    tone: 'You’re in a Jupiter chapter with a Venus flavour right now. The long arc is about how you look for meaning, growth, and a wider frame; the near weeks lean toward how you care about comfort, beauty, and how you bond.',
    advice: 'Learn something or help someone — skip the lecture. In the near stretch, also choose kindness and one beautiful detail on purpose.',
  },
  'Jupiter_Saturn': {
    tone: 'You’re in a Jupiter chapter with a Saturn flavour right now. The long arc is about how you look for meaning, growth, and a wider frame; the near weeks lean toward how you build patiently and finish what others abandon.',
    advice: 'Learn something or help someone — skip the lecture. In the near stretch, also take one sober step instead of a grand promise.',
  },
  'Jupiter_Rahu': {
    tone: 'You’re in a Jupiter chapter with a Rahu flavour right now. The long arc is about how you look for meaning, growth, and a wider frame; the near weeks lean toward how you hunger for the new and unfamiliar.',
    advice: 'Learn something or help someone — skip the lecture. In the near stretch, also follow curiosity with a timer and a reality check.',
  },
  'Jupiter_Ketu': {
    tone: 'You’re in a Jupiter chapter with a Ketu flavour right now. The long arc is about how you look for meaning, growth, and a wider frame; the near weeks lean toward how you already know some things sideways and like to simplify.',
    advice: 'Learn something or help someone — skip the lecture. In the near stretch, also drop one extra obligation and keep the lesson.',
  },
  'Venus_Sun': {
    tone: 'You’re in a Venus chapter with a Sun flavour right now. The long arc is about how you care about comfort, beauty, and how you bond; the near weeks lean toward how you want to be seen and lead.',
    advice: 'Choose kindness and one beautiful detail on purpose. In the near stretch, also own one clear act of presence, then share the spotlight.',
  },
  'Venus_Moon': {
    tone: 'You’re in a Venus chapter with a Moon flavour right now. The long arc is about how you care about comfort, beauty, and how you bond; the near weeks lean toward how your moods and needs set the weather.',
    advice: 'Choose kindness and one beautiful detail on purpose. In the near stretch, also eat, drink water, and find a soft landing before hard talks.',
  },
  'Venus_Mars': {
    tone: 'You’re in a Venus chapter with a Mars flavour right now. The long arc is about how you care about comfort, beauty, and how you bond; the near weeks lean toward how you push hard for what you want.',
    advice: 'Choose kindness and one beautiful detail on purpose. In the near stretch, also put the heat into one clean effort, not a public fight.',
  },
  'Venus_Mercury': {
    tone: 'You’re in a Venus chapter with a Mercury flavour right now. The long arc is about how you care about comfort, beauty, and how you bond; the near weeks lean toward how your mind wants to talk, learn, and sort details.',
    advice: 'Choose kindness and one beautiful detail on purpose. In the near stretch, also write it down, then send the short clear version.',
  },
  'Venus_Jupiter': {
    tone: 'You’re in a Venus chapter with a Jupiter flavour right now. The long arc is about how you care about comfort, beauty, and how you bond; the near weeks lean toward how you look for meaning, growth, and a wider frame.',
    advice: 'Choose kindness and one beautiful detail on purpose. In the near stretch, also learn something or help someone — skip the lecture.',
  },
  'Venus_Venus': {
    tone: 'You’re in a strong Venus chapter — you care about comfort, beauty, and how you bond. Themes concentrate; keep perspective.',
    advice: 'Choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
  },
  'Venus_Saturn': {
    tone: 'You’re in a Venus chapter with a Saturn flavour right now. The long arc is about how you care about comfort, beauty, and how you bond; the near weeks lean toward how you build patiently and finish what others abandon.',
    advice: 'Choose kindness and one beautiful detail on purpose. In the near stretch, also take one sober step instead of a grand promise.',
  },
  'Venus_Rahu': {
    tone: 'You’re in a Venus chapter with a Rahu flavour right now. The long arc is about how you care about comfort, beauty, and how you bond; the near weeks lean toward how you hunger for the new and unfamiliar.',
    advice: 'Choose kindness and one beautiful detail on purpose. In the near stretch, also follow curiosity with a timer and a reality check.',
  },
  'Venus_Ketu': {
    tone: 'You’re in a Venus chapter with a Ketu flavour right now. The long arc is about how you care about comfort, beauty, and how you bond; the near weeks lean toward how you already know some things sideways and like to simplify.',
    advice: 'Choose kindness and one beautiful detail on purpose. In the near stretch, also drop one extra obligation and keep the lesson.',
  },
  'Saturn_Sun': {
    tone: 'You’re in a Saturn chapter with a Sun flavour right now. The long arc is about how you build patiently and finish what others abandon; the near weeks lean toward how you want to be seen and lead.',
    advice: 'Take one sober step instead of a grand promise. In the near stretch, also own one clear act of presence, then share the spotlight.',
  },
  'Saturn_Moon': {
    tone: 'You’re in a Saturn chapter with a Moon flavour right now. The long arc is about how you build patiently and finish what others abandon; the near weeks lean toward how your moods and needs set the weather.',
    advice: 'Take one sober step instead of a grand promise. In the near stretch, also eat, drink water, and find a soft landing before hard talks.',
  },
  'Saturn_Mars': {
    tone: 'You’re in a Saturn chapter with a Mars flavour right now. The long arc is about how you build patiently and finish what others abandon; the near weeks lean toward how you push hard for what you want.',
    advice: 'Take one sober step instead of a grand promise. In the near stretch, also put the heat into one clean effort, not a public fight.',
  },
  'Saturn_Mercury': {
    tone: 'You’re in a Saturn chapter with a Mercury flavour right now. The long arc is about how you build patiently and finish what others abandon; the near weeks lean toward how your mind wants to talk, learn, and sort details.',
    advice: 'Take one sober step instead of a grand promise. In the near stretch, also write it down, then send the short clear version.',
  },
  'Saturn_Jupiter': {
    tone: 'You’re in a Saturn chapter with a Jupiter flavour right now. The long arc is about how you build patiently and finish what others abandon; the near weeks lean toward how you look for meaning, growth, and a wider frame.',
    advice: 'Take one sober step instead of a grand promise. In the near stretch, also learn something or help someone — skip the lecture.',
  },
  'Saturn_Venus': {
    tone: 'You’re in a Saturn chapter with a Venus flavour right now. The long arc is about how you build patiently and finish what others abandon; the near weeks lean toward how you care about comfort, beauty, and how you bond.',
    advice: 'Take one sober step instead of a grand promise. In the near stretch, also choose kindness and one beautiful detail on purpose.',
  },
  'Saturn_Saturn': {
    tone: 'You’re in a strong Saturn chapter — you build patiently and finish what others abandon. Themes concentrate; keep perspective.',
    advice: 'Take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
  },
  'Saturn_Rahu': {
    tone: 'You’re in a Saturn chapter with a Rahu flavour right now. The long arc is about how you build patiently and finish what others abandon; the near weeks lean toward how you hunger for the new and unfamiliar.',
    advice: 'Take one sober step instead of a grand promise. In the near stretch, also follow curiosity with a timer and a reality check.',
  },
  'Saturn_Ketu': {
    tone: 'You’re in a Saturn chapter with a Ketu flavour right now. The long arc is about how you build patiently and finish what others abandon; the near weeks lean toward how you already know some things sideways and like to simplify.',
    advice: 'Take one sober step instead of a grand promise. In the near stretch, also drop one extra obligation and keep the lesson.',
  },
  'Rahu_Sun': {
    tone: 'You’re in a Rahu chapter with a Sun flavour right now. The long arc is about how you hunger for the new and unfamiliar; the near weeks lean toward how you want to be seen and lead.',
    advice: 'Follow curiosity with a timer and a reality check. In the near stretch, also own one clear act of presence, then share the spotlight.',
  },
  'Rahu_Moon': {
    tone: 'You’re in a Rahu chapter with a Moon flavour right now. The long arc is about how you hunger for the new and unfamiliar; the near weeks lean toward how your moods and needs set the weather.',
    advice: 'Follow curiosity with a timer and a reality check. In the near stretch, also eat, drink water, and find a soft landing before hard talks.',
  },
  'Rahu_Mars': {
    tone: 'You’re in a Rahu chapter with a Mars flavour right now. The long arc is about how you hunger for the new and unfamiliar; the near weeks lean toward how you push hard for what you want.',
    advice: 'Follow curiosity with a timer and a reality check. In the near stretch, also put the heat into one clean effort, not a public fight.',
  },
  'Rahu_Mercury': {
    tone: 'You’re in a Rahu chapter with a Mercury flavour right now. The long arc is about how you hunger for the new and unfamiliar; the near weeks lean toward how your mind wants to talk, learn, and sort details.',
    advice: 'Follow curiosity with a timer and a reality check. In the near stretch, also write it down, then send the short clear version.',
  },
  'Rahu_Jupiter': {
    tone: 'You’re in a Rahu chapter with a Jupiter flavour right now. The long arc is about how you hunger for the new and unfamiliar; the near weeks lean toward how you look for meaning, growth, and a wider frame.',
    advice: 'Follow curiosity with a timer and a reality check. In the near stretch, also learn something or help someone — skip the lecture.',
  },
  'Rahu_Venus': {
    tone: 'You’re in a Rahu chapter with a Venus flavour right now. The long arc is about how you hunger for the new and unfamiliar; the near weeks lean toward how you care about comfort, beauty, and how you bond.',
    advice: 'Follow curiosity with a timer and a reality check. In the near stretch, also choose kindness and one beautiful detail on purpose.',
  },
  'Rahu_Saturn': {
    tone: 'You’re in a Rahu chapter with a Saturn flavour right now. The long arc is about how you hunger for the new and unfamiliar; the near weeks lean toward how you build patiently and finish what others abandon.',
    advice: 'Follow curiosity with a timer and a reality check. In the near stretch, also take one sober step instead of a grand promise.',
  },
  'Rahu_Rahu': {
    tone: 'You’re in a strong Rahu chapter — you hunger for the new and unfamiliar. Themes concentrate; keep perspective.',
    advice: 'Follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
  },
  'Rahu_Ketu': {
    tone: 'You’re in a Rahu chapter with a Ketu flavour right now. The long arc is about how you hunger for the new and unfamiliar; the near weeks lean toward how you already know some things sideways and like to simplify.',
    advice: 'Follow curiosity with a timer and a reality check. In the near stretch, also drop one extra obligation and keep the lesson.',
  },
  'Ketu_Sun': {
    tone: 'You’re in a Ketu chapter with a Sun flavour right now. The long arc is about how you already know some things sideways and like to simplify; the near weeks lean toward how you want to be seen and lead.',
    advice: 'Drop one extra obligation and keep the lesson. In the near stretch, also own one clear act of presence, then share the spotlight.',
  },
  'Ketu_Moon': {
    tone: 'You’re in a Ketu chapter with a Moon flavour right now. The long arc is about how you already know some things sideways and like to simplify; the near weeks lean toward how your moods and needs set the weather.',
    advice: 'Drop one extra obligation and keep the lesson. In the near stretch, also eat, drink water, and find a soft landing before hard talks.',
  },
  'Ketu_Mars': {
    tone: 'You’re in a Ketu chapter with a Mars flavour right now. The long arc is about how you already know some things sideways and like to simplify; the near weeks lean toward how you push hard for what you want.',
    advice: 'Drop one extra obligation and keep the lesson. In the near stretch, also put the heat into one clean effort, not a public fight.',
  },
  'Ketu_Mercury': {
    tone: 'You’re in a Ketu chapter with a Mercury flavour right now. The long arc is about how you already know some things sideways and like to simplify; the near weeks lean toward how your mind wants to talk, learn, and sort details.',
    advice: 'Drop one extra obligation and keep the lesson. In the near stretch, also write it down, then send the short clear version.',
  },
  'Ketu_Jupiter': {
    tone: 'You’re in a Ketu chapter with a Jupiter flavour right now. The long arc is about how you already know some things sideways and like to simplify; the near weeks lean toward how you look for meaning, growth, and a wider frame.',
    advice: 'Drop one extra obligation and keep the lesson. In the near stretch, also learn something or help someone — skip the lecture.',
  },
  'Ketu_Venus': {
    tone: 'You’re in a Ketu chapter with a Venus flavour right now. The long arc is about how you already know some things sideways and like to simplify; the near weeks lean toward how you care about comfort, beauty, and how you bond.',
    advice: 'Drop one extra obligation and keep the lesson. In the near stretch, also choose kindness and one beautiful detail on purpose.',
  },
  'Ketu_Saturn': {
    tone: 'You’re in a Ketu chapter with a Saturn flavour right now. The long arc is about how you already know some things sideways and like to simplify; the near weeks lean toward how you build patiently and finish what others abandon.',
    advice: 'Drop one extra obligation and keep the lesson. In the near stretch, also take one sober step instead of a grand promise.',
  },
  'Ketu_Rahu': {
    tone: 'You’re in a Ketu chapter with a Rahu flavour right now. The long arc is about how you already know some things sideways and like to simplify; the near weeks lean toward how you hunger for the new and unfamiliar.',
    advice: 'Drop one extra obligation and keep the lesson. In the near stretch, also follow curiosity with a timer and a reality check.',
  },
  'Ketu_Ketu': {
    tone: 'You’re in a strong Ketu chapter — you already know some things sideways and like to simplify. Themes concentrate; keep perspective.',
    advice: 'Drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
  },
};

export function dashaPairRule(maha: string, antar: string): DashaPairRule | null {
  return DASHA_PAIR[`${maha}_${antar}`] ?? null;
}
