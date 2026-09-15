import type { GrahaId } from '../constants';

export interface GrahaBhavaRule {
  lifeArea: string;
  advice: string;
}

export const GRAHA_BHAVA: Record<GrahaId, Record<number, GrahaBhavaRule>> = {
  Sun: {
    1: {
      lifeArea: 'Sun leans into how you show up, body-energy, and first impressions. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Check energy before overcommitting. Channel lead with warmth into that area.',
    },
    2: {
      lifeArea: 'Sun leans into money habits, speech, and what you treat as valuable. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel lead with warmth into that area.',
    },
    3: {
      lifeArea: 'Sun leans into courage, siblings and peers, short trips, and everyday hustle. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Take one short bold step. Channel lead with warmth into that area.',
    },
    4: {
      lifeArea: 'Sun leans into home, family base, private mood, and feeling settled. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Protect the base; a little tidy helps. Channel lead with warmth into that area.',
    },
    5: {
      lifeArea: 'Sun leans into creative work, romance, play, and mentoring. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Make something fun or warm. Channel lead with warmth into that area.',
    },
    6: {
      lifeArea: 'Sun leans into work routines, health habits, rivals, and daily problem-solving. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel lead with warmth into that area.',
    },
    7: {
      lifeArea: 'Sun leans into one-to-one relationships, contracts, and fair exchange. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel lead with warmth into that area.',
    },
    8: {
      lifeArea: 'Sun leans into shared resources, intimacy, research, and big life resets. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel lead with warmth into that area.',
    },
    9: {
      lifeArea: 'Sun leans into beliefs, teachers, long journeys, and the bigger why. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel lead with warmth into that area.',
    },
    10: {
      lifeArea: 'Sun leans into career, public reputation, and what you are known for. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Finish something visible. Channel lead with warmth into that area.',
    },
    11: {
      lifeArea: 'Sun leans into friends, networks, gains, and future-facing goals. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel lead with warmth into that area.',
    },
    12: {
      lifeArea: 'Sun leans into rest, solitude, endings, travel abroad, and quiet recharge. That is where brings identity-heat and a need to lead shows most clearly.',
      advice: 'Schedule real rest. Channel lead with warmth into that area.',
    },
  },
  Moon: {
    1: {
      lifeArea: 'Moon leans into how you show up, body-energy, and first impressions. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Check energy before overcommitting. Channel ask for care into that area.',
    },
    2: {
      lifeArea: 'Moon leans into money habits, speech, and what you treat as valuable. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel ask for care into that area.',
    },
    3: {
      lifeArea: 'Moon leans into courage, siblings and peers, short trips, and everyday hustle. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Take one short bold step. Channel ask for care into that area.',
    },
    4: {
      lifeArea: 'Moon leans into home, family base, private mood, and feeling settled. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Protect the base; a little tidy helps. Channel ask for care into that area.',
    },
    5: {
      lifeArea: 'Moon leans into creative work, romance, play, and mentoring. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Make something fun or warm. Channel ask for care into that area.',
    },
    6: {
      lifeArea: 'Moon leans into work routines, health habits, rivals, and daily problem-solving. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel ask for care into that area.',
    },
    7: {
      lifeArea: 'Moon leans into one-to-one relationships, contracts, and fair exchange. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel ask for care into that area.',
    },
    8: {
      lifeArea: 'Moon leans into shared resources, intimacy, research, and big life resets. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel ask for care into that area.',
    },
    9: {
      lifeArea: 'Moon leans into beliefs, teachers, long journeys, and the bigger why. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel ask for care into that area.',
    },
    10: {
      lifeArea: 'Moon leans into career, public reputation, and what you are known for. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Finish something visible. Channel ask for care into that area.',
    },
    11: {
      lifeArea: 'Moon leans into friends, networks, gains, and future-facing goals. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel ask for care into that area.',
    },
    12: {
      lifeArea: 'Moon leans into rest, solitude, endings, travel abroad, and quiet recharge. That is where sets emotional weather and care needs shows most clearly.',
      advice: 'Schedule real rest. Channel ask for care into that area.',
    },
  },
  Mars: {
    1: {
      lifeArea: 'Mars leans into how you show up, body-energy, and first impressions. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Check energy before overcommitting. Channel aim the heat into that area.',
    },
    2: {
      lifeArea: 'Mars leans into money habits, speech, and what you treat as valuable. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel aim the heat into that area.',
    },
    3: {
      lifeArea: 'Mars leans into courage, siblings and peers, short trips, and everyday hustle. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Take one short bold step. Channel aim the heat into that area.',
    },
    4: {
      lifeArea: 'Mars leans into home, family base, private mood, and feeling settled. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Protect the base; a little tidy helps. Channel aim the heat into that area.',
    },
    5: {
      lifeArea: 'Mars leans into creative work, romance, play, and mentoring. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Make something fun or warm. Channel aim the heat into that area.',
    },
    6: {
      lifeArea: 'Mars leans into work routines, health habits, rivals, and daily problem-solving. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel aim the heat into that area.',
    },
    7: {
      lifeArea: 'Mars leans into one-to-one relationships, contracts, and fair exchange. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel aim the heat into that area.',
    },
    8: {
      lifeArea: 'Mars leans into shared resources, intimacy, research, and big life resets. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel aim the heat into that area.',
    },
    9: {
      lifeArea: 'Mars leans into beliefs, teachers, long journeys, and the bigger why. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel aim the heat into that area.',
    },
    10: {
      lifeArea: 'Mars leans into career, public reputation, and what you are known for. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Finish something visible. Channel aim the heat into that area.',
    },
    11: {
      lifeArea: 'Mars leans into friends, networks, gains, and future-facing goals. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel aim the heat into that area.',
    },
    12: {
      lifeArea: 'Mars leans into rest, solitude, endings, travel abroad, and quiet recharge. That is where pushes with courage and competitive heat shows most clearly.',
      advice: 'Schedule real rest. Channel aim the heat into that area.',
    },
  },
  Mercury: {
    1: {
      lifeArea: 'Mercury leans into how you show up, body-energy, and first impressions. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Check energy before overcommitting. Channel clarify before you scatter into that area.',
    },
    2: {
      lifeArea: 'Mercury leans into money habits, speech, and what you treat as valuable. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel clarify before you scatter into that area.',
    },
    3: {
      lifeArea: 'Mercury leans into courage, siblings and peers, short trips, and everyday hustle. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Take one short bold step. Channel clarify before you scatter into that area.',
    },
    4: {
      lifeArea: 'Mercury leans into home, family base, private mood, and feeling settled. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Protect the base; a little tidy helps. Channel clarify before you scatter into that area.',
    },
    5: {
      lifeArea: 'Mercury leans into creative work, romance, play, and mentoring. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Make something fun or warm. Channel clarify before you scatter into that area.',
    },
    6: {
      lifeArea: 'Mercury leans into work routines, health habits, rivals, and daily problem-solving. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel clarify before you scatter into that area.',
    },
    7: {
      lifeArea: 'Mercury leans into one-to-one relationships, contracts, and fair exchange. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel clarify before you scatter into that area.',
    },
    8: {
      lifeArea: 'Mercury leans into shared resources, intimacy, research, and big life resets. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel clarify before you scatter into that area.',
    },
    9: {
      lifeArea: 'Mercury leans into beliefs, teachers, long journeys, and the bigger why. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel clarify before you scatter into that area.',
    },
    10: {
      lifeArea: 'Mercury leans into career, public reputation, and what you are known for. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Finish something visible. Channel clarify before you scatter into that area.',
    },
    11: {
      lifeArea: 'Mercury leans into friends, networks, gains, and future-facing goals. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel clarify before you scatter into that area.',
    },
    12: {
      lifeArea: 'Mercury leans into rest, solitude, endings, travel abroad, and quiet recharge. That is where wants talk, learning, and sorting details shows most clearly.',
      advice: 'Schedule real rest. Channel clarify before you scatter into that area.',
    },
  },
  Jupiter: {
    1: {
      lifeArea: 'Jupiter leans into how you show up, body-energy, and first impressions. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Check energy before overcommitting. Channel teach or grow without preaching into that area.',
    },
    2: {
      lifeArea: 'Jupiter leans into money habits, speech, and what you treat as valuable. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel teach or grow without preaching into that area.',
    },
    3: {
      lifeArea: 'Jupiter leans into courage, siblings and peers, short trips, and everyday hustle. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Take one short bold step. Channel teach or grow without preaching into that area.',
    },
    4: {
      lifeArea: 'Jupiter leans into home, family base, private mood, and feeling settled. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Protect the base; a little tidy helps. Channel teach or grow without preaching into that area.',
    },
    5: {
      lifeArea: 'Jupiter leans into creative work, romance, play, and mentoring. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Make something fun or warm. Channel teach or grow without preaching into that area.',
    },
    6: {
      lifeArea: 'Jupiter leans into work routines, health habits, rivals, and daily problem-solving. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel teach or grow without preaching into that area.',
    },
    7: {
      lifeArea: 'Jupiter leans into one-to-one relationships, contracts, and fair exchange. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel teach or grow without preaching into that area.',
    },
    8: {
      lifeArea: 'Jupiter leans into shared resources, intimacy, research, and big life resets. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel teach or grow without preaching into that area.',
    },
    9: {
      lifeArea: 'Jupiter leans into beliefs, teachers, long journeys, and the bigger why. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel teach or grow without preaching into that area.',
    },
    10: {
      lifeArea: 'Jupiter leans into career, public reputation, and what you are known for. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Finish something visible. Channel teach or grow without preaching into that area.',
    },
    11: {
      lifeArea: 'Jupiter leans into friends, networks, gains, and future-facing goals. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel teach or grow without preaching into that area.',
    },
    12: {
      lifeArea: 'Jupiter leans into rest, solitude, endings, travel abroad, and quiet recharge. That is where expands meaning, grace, and generosity shows most clearly.',
      advice: 'Schedule real rest. Channel teach or grow without preaching into that area.',
    },
  },
  Venus: {
    1: {
      lifeArea: 'Venus leans into how you show up, body-energy, and first impressions. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Check energy before overcommitting. Channel choose pleasure with taste into that area.',
    },
    2: {
      lifeArea: 'Venus leans into money habits, speech, and what you treat as valuable. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel choose pleasure with taste into that area.',
    },
    3: {
      lifeArea: 'Venus leans into courage, siblings and peers, short trips, and everyday hustle. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Take one short bold step. Channel choose pleasure with taste into that area.',
    },
    4: {
      lifeArea: 'Venus leans into home, family base, private mood, and feeling settled. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Protect the base; a little tidy helps. Channel choose pleasure with taste into that area.',
    },
    5: {
      lifeArea: 'Venus leans into creative work, romance, play, and mentoring. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Make something fun or warm. Channel choose pleasure with taste into that area.',
    },
    6: {
      lifeArea: 'Venus leans into work routines, health habits, rivals, and daily problem-solving. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel choose pleasure with taste into that area.',
    },
    7: {
      lifeArea: 'Venus leans into one-to-one relationships, contracts, and fair exchange. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel choose pleasure with taste into that area.',
    },
    8: {
      lifeArea: 'Venus leans into shared resources, intimacy, research, and big life resets. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel choose pleasure with taste into that area.',
    },
    9: {
      lifeArea: 'Venus leans into beliefs, teachers, long journeys, and the bigger why. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel choose pleasure with taste into that area.',
    },
    10: {
      lifeArea: 'Venus leans into career, public reputation, and what you are known for. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Finish something visible. Channel choose pleasure with taste into that area.',
    },
    11: {
      lifeArea: 'Venus leans into friends, networks, gains, and future-facing goals. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel choose pleasure with taste into that area.',
    },
    12: {
      lifeArea: 'Venus leans into rest, solitude, endings, travel abroad, and quiet recharge. That is where seeks comfort, beauty, and bonding shows most clearly.',
      advice: 'Schedule real rest. Channel choose pleasure with taste into that area.',
    },
  },
  Saturn: {
    1: {
      lifeArea: 'Saturn leans into how you show up, body-energy, and first impressions. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Check energy before overcommitting. Channel keep one durable habit into that area.',
    },
    2: {
      lifeArea: 'Saturn leans into money habits, speech, and what you treat as valuable. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel keep one durable habit into that area.',
    },
    3: {
      lifeArea: 'Saturn leans into courage, siblings and peers, short trips, and everyday hustle. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Take one short bold step. Channel keep one durable habit into that area.',
    },
    4: {
      lifeArea: 'Saturn leans into home, family base, private mood, and feeling settled. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Protect the base; a little tidy helps. Channel keep one durable habit into that area.',
    },
    5: {
      lifeArea: 'Saturn leans into creative work, romance, play, and mentoring. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Make something fun or warm. Channel keep one durable habit into that area.',
    },
    6: {
      lifeArea: 'Saturn leans into work routines, health habits, rivals, and daily problem-solving. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel keep one durable habit into that area.',
    },
    7: {
      lifeArea: 'Saturn leans into one-to-one relationships, contracts, and fair exchange. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel keep one durable habit into that area.',
    },
    8: {
      lifeArea: 'Saturn leans into shared resources, intimacy, research, and big life resets. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel keep one durable habit into that area.',
    },
    9: {
      lifeArea: 'Saturn leans into beliefs, teachers, long journeys, and the bigger why. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel keep one durable habit into that area.',
    },
    10: {
      lifeArea: 'Saturn leans into career, public reputation, and what you are known for. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Finish something visible. Channel keep one durable habit into that area.',
    },
    11: {
      lifeArea: 'Saturn leans into friends, networks, gains, and future-facing goals. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel keep one durable habit into that area.',
    },
    12: {
      lifeArea: 'Saturn leans into rest, solitude, endings, travel abroad, and quiet recharge. That is where builds patiently and finishes what others abandon shows most clearly.',
      advice: 'Schedule real rest. Channel keep one durable habit into that area.',
    },
  },
  Rahu: {
    1: {
      lifeArea: 'Rahu leans into how you show up, body-energy, and first impressions. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Check energy before overcommitting. Channel feed curiosity without chaos into that area.',
    },
    2: {
      lifeArea: 'Rahu leans into money habits, speech, and what you treat as valuable. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel feed curiosity without chaos into that area.',
    },
    3: {
      lifeArea: 'Rahu leans into courage, siblings and peers, short trips, and everyday hustle. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Take one short bold step. Channel feed curiosity without chaos into that area.',
    },
    4: {
      lifeArea: 'Rahu leans into home, family base, private mood, and feeling settled. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Protect the base; a little tidy helps. Channel feed curiosity without chaos into that area.',
    },
    5: {
      lifeArea: 'Rahu leans into creative work, romance, play, and mentoring. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Make something fun or warm. Channel feed curiosity without chaos into that area.',
    },
    6: {
      lifeArea: 'Rahu leans into work routines, health habits, rivals, and daily problem-solving. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel feed curiosity without chaos into that area.',
    },
    7: {
      lifeArea: 'Rahu leans into one-to-one relationships, contracts, and fair exchange. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel feed curiosity without chaos into that area.',
    },
    8: {
      lifeArea: 'Rahu leans into shared resources, intimacy, research, and big life resets. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel feed curiosity without chaos into that area.',
    },
    9: {
      lifeArea: 'Rahu leans into beliefs, teachers, long journeys, and the bigger why. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel feed curiosity without chaos into that area.',
    },
    10: {
      lifeArea: 'Rahu leans into career, public reputation, and what you are known for. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Finish something visible. Channel feed curiosity without chaos into that area.',
    },
    11: {
      lifeArea: 'Rahu leans into friends, networks, gains, and future-facing goals. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel feed curiosity without chaos into that area.',
    },
    12: {
      lifeArea: 'Rahu leans into rest, solitude, endings, travel abroad, and quiet recharge. That is where hungers for the unfamiliar and slightly obsessive shows most clearly.',
      advice: 'Schedule real rest. Channel feed curiosity without chaos into that area.',
    },
  },
  Ketu: {
    1: {
      lifeArea: 'Ketu leans into how you show up, body-energy, and first impressions. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Check energy before overcommitting. Channel share insight without vanishing into that area.',
    },
    2: {
      lifeArea: 'Ketu leans into money habits, speech, and what you treat as valuable. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Slow impulse spends; speak a beat slower. Channel share insight without vanishing into that area.',
    },
    3: {
      lifeArea: 'Ketu leans into courage, siblings and peers, short trips, and everyday hustle. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Take one short bold step. Channel share insight without vanishing into that area.',
    },
    4: {
      lifeArea: 'Ketu leans into home, family base, private mood, and feeling settled. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Protect the base; a little tidy helps. Channel share insight without vanishing into that area.',
    },
    5: {
      lifeArea: 'Ketu leans into creative work, romance, play, and mentoring. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Make something fun or warm. Channel share insight without vanishing into that area.',
    },
    6: {
      lifeArea: 'Ketu leans into work routines, health habits, rivals, and daily problem-solving. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Keep routines tiny; solve one problem. Channel share insight without vanishing into that area.',
    },
    7: {
      lifeArea: 'Ketu leans into one-to-one relationships, contracts, and fair exchange. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Have the fair talk instead of guessing. Channel share insight without vanishing into that area.',
    },
    8: {
      lifeArea: 'Ketu leans into shared resources, intimacy, research, and big life resets. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Go gently with vulnerability and shared money. Channel share insight without vanishing into that area.',
    },
    9: {
      lifeArea: 'Ketu leans into beliefs, teachers, long journeys, and the bigger why. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Make room for a teacher or a long walk. Channel share insight without vanishing into that area.',
    },
    10: {
      lifeArea: 'Ketu leans into career, public reputation, and what you are known for. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Finish something visible. Channel share insight without vanishing into that area.',
    },
    11: {
      lifeArea: 'Ketu leans into friends, networks, gains, and future-facing goals. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Reach a friend or ask cleanly. Channel share insight without vanishing into that area.',
    },
    12: {
      lifeArea: 'Ketu leans into rest, solitude, endings, travel abroad, and quiet recharge. That is where simplifies, releases, and knows some things sideways shows most clearly.',
      advice: 'Schedule real rest. Channel share insight without vanishing into that area.',
    },
  },
};

export function grahaBhavaRule(graha: GrahaId, house: number): GrahaBhavaRule | null {
  return GRAHA_BHAVA[graha]?.[house] ?? null;
}
