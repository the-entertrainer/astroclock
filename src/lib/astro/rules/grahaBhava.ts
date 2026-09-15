import type { GrahaId } from '../constants';

export interface GrahaBhavaRule {
  lifeArea: string;
  advice: string;
}

/** 9 grahas × 12 houses — life area + advice (natal/transit wording) */
export const GRAHA_BHAVA: Record<GrahaId, Record<number, GrahaBhavaRule>> = {
  Sun: {
    1: {
      lifeArea: 'Sun in the 1th house lights how you show up, body-energy, and first impressions. Identity heat and vitality show up especially around self and first impressions — where you renew a sense of self.',
      advice: 'With Sun emphasising the 1th, check body-energy before overcommitting. Channel authentic shine that lifts others into self and first impressions.',
    },
    2: {
      lifeArea: 'House 2 becomes a stage for Sun: attention gathers on money habits, speech, and what you treat as valuable. Expect identity heat and vitality to colour how you resource.',
      advice: 'Sun on speech and resources: go easy on impulse spends; speak a beat slower. Also, own one clear act of presence, then share the airtime.',
    },
    3: {
      lifeArea: 'Sun in the 3th house lights courage, siblings/peers, short trips, and everyday hustle. Identity heat and vitality show up especially around courage and daily hustle — where you renew a sense of self.',
      advice: 'With Sun emphasising the 3th, take one short bold step — a message, trip, or skill rep. Channel authentic shine that lifts others into courage and daily hustle.',
    },
    4: {
      lifeArea: 'House 4 becomes a stage for Sun: attention gathers on home, family base, private mood, and feeling settled. Expect identity heat and vitality to colour how you nest.',
      advice: 'Sun on home and private mood: protect home and private mood; a tidy base steadies the rest. Also, own one clear act of presence, then share the airtime.',
    },
    5: {
      lifeArea: 'Sun in the 5th house lights creativity, romance, play, kids/mentees, and speculative bets. Identity heat and vitality show up especially around creativity and play — where you renew a sense of self.',
      advice: 'With Sun emphasising the 5th, lean into play, drafts, or warm attention to someone younger. Channel authentic shine that lifts others into creativity and play.',
    },
    6: {
      lifeArea: 'House 6 becomes a stage for Sun: attention gathers on work routines, health habits, rivals, and daily problem-solving. Expect identity heat and vitality to colour how you serve.',
      advice: 'Sun on routines and problem-solving: keep routines small and doable; solve one practical problem. Also, own one clear act of presence, then share the airtime.',
    },
    7: {
      lifeArea: 'Sun in the 7th house lights one-to-one relationships, contracts, and mirroring with others. Identity heat and vitality show up especially around partnerships and contracts — where you renew a sense of self.',
      advice: 'With Sun emphasising the 7th, prefer fair one-to-one talks over guessing. Channel authentic shine that lifts others into partnerships and contracts.',
    },
    8: {
      lifeArea: 'House 8 becomes a stage for Sun: attention gathers on shared resources, intimacy, research, and big life resets. Expect identity heat and vitality to colour how you transform.',
      advice: 'Sun on intimacy and shared resets: go gently with shared money, intimacy, and resets. Also, own one clear act of presence, then share the airtime.',
    },
    9: {
      lifeArea: 'Sun in the 9th house lights beliefs, teachers, long journeys, and the bigger why. Identity heat and vitality show up especially around belief and bigger why — where you renew a sense of self.',
      advice: 'With Sun emphasising the 9th, make room for a teacher, walk, or belief worth revisiting. Channel authentic shine that lifts others into belief and bigger why.',
    },
    10: {
      lifeArea: 'House 10 becomes a stage for Sun: attention gathers on career, public reputation, and what you are known for. Expect identity heat and vitality to colour how you achieve.',
      advice: 'Sun on career and reputation: show up for visible work; finish something public. Also, own one clear act of presence, then share the airtime.',
    },
    11: {
      lifeArea: 'Sun in the 11th house lights friends, networks, gains, and future-facing goals. Identity heat and vitality show up especially around friends and future goals — where you renew a sense of self.',
      advice: 'With Sun emphasising the 11th, reach a friend or network goal; ask without over-explaining. Channel authentic shine that lifts others into friends and future goals.',
    },
    12: {
      lifeArea: 'House 12 becomes a stage for Sun: attention gathers on rest, solitude, endings, travel abroad, and quiet recharge. Expect identity heat and vitality to colour how you withdraw.',
      advice: 'Sun on rest and quiet endings: schedule real rest; endings and recharge count as work. Also, own one clear act of presence, then share the airtime.',
    },
  },
  Moon: {
    1: {
      lifeArea: 'Moon in the 1th house lights how you show up, body-energy, and first impressions. Moods, needs, and emotional weather show up especially around self and first impressions — how feelings arrive and settle.',
      advice: 'With Moon emphasising the 1th, check body-energy before overcommitting. Channel care that includes asking for harbour into self and first impressions.',
    },
    2: {
      lifeArea: 'House 2 becomes a stage for Moon: attention gathers on money habits, speech, and what you treat as valuable. Expect moods, needs, and emotional weather to colour how you resource.',
      advice: 'Moon on speech and resources: go easy on impulse spends; speak a beat slower. Also, check food, water, and a soft landing before big talks.',
    },
    3: {
      lifeArea: 'Moon in the 3th house lights courage, siblings/peers, short trips, and everyday hustle. Moods, needs, and emotional weather show up especially around courage and daily hustle — how feelings arrive and settle.',
      advice: 'With Moon emphasising the 3th, take one short bold step — a message, trip, or skill rep. Channel care that includes asking for harbour into courage and daily hustle.',
    },
    4: {
      lifeArea: 'House 4 becomes a stage for Moon: attention gathers on home, family base, private mood, and feeling settled. Expect moods, needs, and emotional weather to colour how you nest.',
      advice: 'Moon on home and private mood: protect home and private mood; a tidy base steadies the rest. Also, check food, water, and a soft landing before big talks.',
    },
    5: {
      lifeArea: 'Moon in the 5th house lights creativity, romance, play, kids/mentees, and speculative bets. Moods, needs, and emotional weather show up especially around creativity and play — how feelings arrive and settle.',
      advice: 'With Moon emphasising the 5th, lean into play, drafts, or warm attention to someone younger. Channel care that includes asking for harbour into creativity and play.',
    },
    6: {
      lifeArea: 'House 6 becomes a stage for Moon: attention gathers on work routines, health habits, rivals, and daily problem-solving. Expect moods, needs, and emotional weather to colour how you serve.',
      advice: 'Moon on routines and problem-solving: keep routines small and doable; solve one practical problem. Also, check food, water, and a soft landing before big talks.',
    },
    7: {
      lifeArea: 'Moon in the 7th house lights one-to-one relationships, contracts, and mirroring with others. Moods, needs, and emotional weather show up especially around partnerships and contracts — how feelings arrive and settle.',
      advice: 'With Moon emphasising the 7th, prefer fair one-to-one talks over guessing. Channel care that includes asking for harbour into partnerships and contracts.',
    },
    8: {
      lifeArea: 'House 8 becomes a stage for Moon: attention gathers on shared resources, intimacy, research, and big life resets. Expect moods, needs, and emotional weather to colour how you transform.',
      advice: 'Moon on intimacy and shared resets: go gently with shared money, intimacy, and resets. Also, check food, water, and a soft landing before big talks.',
    },
    9: {
      lifeArea: 'Moon in the 9th house lights beliefs, teachers, long journeys, and the bigger why. Moods, needs, and emotional weather show up especially around belief and bigger why — how feelings arrive and settle.',
      advice: 'With Moon emphasising the 9th, make room for a teacher, walk, or belief worth revisiting. Channel care that includes asking for harbour into belief and bigger why.',
    },
    10: {
      lifeArea: 'House 10 becomes a stage for Moon: attention gathers on career, public reputation, and what you are known for. Expect moods, needs, and emotional weather to colour how you achieve.',
      advice: 'Moon on career and reputation: show up for visible work; finish something public. Also, check food, water, and a soft landing before big talks.',
    },
    11: {
      lifeArea: 'Moon in the 11th house lights friends, networks, gains, and future-facing goals. Moods, needs, and emotional weather show up especially around friends and future goals — how feelings arrive and settle.',
      advice: 'With Moon emphasising the 11th, reach a friend or network goal; ask without over-explaining. Channel care that includes asking for harbour into friends and future goals.',
    },
    12: {
      lifeArea: 'House 12 becomes a stage for Moon: attention gathers on rest, solitude, endings, travel abroad, and quiet recharge. Expect moods, needs, and emotional weather to colour how you withdraw.',
      advice: 'Moon on rest and quiet endings: schedule real rest; endings and recharge count as work. Also, check food, water, and a soft landing before big talks.',
    },
  },
  Mars: {
    1: {
      lifeArea: 'Mars in the 1th house lights how you show up, body-energy, and first impressions. Courage, drive, and directed heat show up especially around self and first impressions — how you push for what you want.',
      advice: 'With Mars emphasising the 1th, check body-energy before overcommitting. Channel protective courage without theatre into self and first impressions.',
    },
    2: {
      lifeArea: 'House 2 becomes a stage for Mars: attention gathers on money habits, speech, and what you treat as valuable. Expect courage, drive, and directed heat to colour how you resource.',
      advice: 'Mars on speech and resources: go easy on impulse spends; speak a beat slower. Also, aim heat into one clean effort; skip audience fights.',
    },
    3: {
      lifeArea: 'Mars in the 3th house lights courage, siblings/peers, short trips, and everyday hustle. Courage, drive, and directed heat show up especially around courage and daily hustle — how you push for what you want.',
      advice: 'With Mars emphasising the 3th, take one short bold step — a message, trip, or skill rep. Channel protective courage without theatre into courage and daily hustle.',
    },
    4: {
      lifeArea: 'House 4 becomes a stage for Mars: attention gathers on home, family base, private mood, and feeling settled. Expect courage, drive, and directed heat to colour how you nest.',
      advice: 'Mars on home and private mood: protect home and private mood; a tidy base steadies the rest. Also, aim heat into one clean effort; skip audience fights.',
    },
    5: {
      lifeArea: 'Mars in the 5th house lights creativity, romance, play, kids/mentees, and speculative bets. Courage, drive, and directed heat show up especially around creativity and play — how you push for what you want.',
      advice: 'With Mars emphasising the 5th, lean into play, drafts, or warm attention to someone younger. Channel protective courage without theatre into creativity and play.',
    },
    6: {
      lifeArea: 'House 6 becomes a stage for Mars: attention gathers on work routines, health habits, rivals, and daily problem-solving. Expect courage, drive, and directed heat to colour how you serve.',
      advice: 'Mars on routines and problem-solving: keep routines small and doable; solve one practical problem. Also, aim heat into one clean effort; skip audience fights.',
    },
    7: {
      lifeArea: 'Mars in the 7th house lights one-to-one relationships, contracts, and mirroring with others. Courage, drive, and directed heat show up especially around partnerships and contracts — how you push for what you want.',
      advice: 'With Mars emphasising the 7th, prefer fair one-to-one talks over guessing. Channel protective courage without theatre into partnerships and contracts.',
    },
    8: {
      lifeArea: 'House 8 becomes a stage for Mars: attention gathers on shared resources, intimacy, research, and big life resets. Expect courage, drive, and directed heat to colour how you transform.',
      advice: 'Mars on intimacy and shared resets: go gently with shared money, intimacy, and resets. Also, aim heat into one clean effort; skip audience fights.',
    },
    9: {
      lifeArea: 'Mars in the 9th house lights beliefs, teachers, long journeys, and the bigger why. Courage, drive, and directed heat show up especially around belief and bigger why — how you push for what you want.',
      advice: 'With Mars emphasising the 9th, make room for a teacher, walk, or belief worth revisiting. Channel protective courage without theatre into belief and bigger why.',
    },
    10: {
      lifeArea: 'House 10 becomes a stage for Mars: attention gathers on career, public reputation, and what you are known for. Expect courage, drive, and directed heat to colour how you achieve.',
      advice: 'Mars on career and reputation: show up for visible work; finish something public. Also, aim heat into one clean effort; skip audience fights.',
    },
    11: {
      lifeArea: 'Mars in the 11th house lights friends, networks, gains, and future-facing goals. Courage, drive, and directed heat show up especially around friends and future goals — how you push for what you want.',
      advice: 'With Mars emphasising the 11th, reach a friend or network goal; ask without over-explaining. Channel protective courage without theatre into friends and future goals.',
    },
    12: {
      lifeArea: 'House 12 becomes a stage for Mars: attention gathers on rest, solitude, endings, travel abroad, and quiet recharge. Expect courage, drive, and directed heat to colour how you withdraw.',
      advice: 'Mars on rest and quiet endings: schedule real rest; endings and recharge count as work. Also, aim heat into one clean effort; skip audience fights.',
    },
  },
  Mercury: {
    1: {
      lifeArea: 'Mercury in the 1th house lights how you show up, body-energy, and first impressions. Thinking, talk, and skill traffic show up especially around self and first impressions — how you learn, argue, and message.',
      advice: 'With Mercury emphasising the 1th, check body-energy before overcommitting. Channel wit in service of understanding into self and first impressions.',
    },
    2: {
      lifeArea: 'House 2 becomes a stage for Mercury: attention gathers on money habits, speech, and what you treat as valuable. Expect thinking, talk, and skill traffic to colour how you resource.',
      advice: 'Mercury on speech and resources: go easy on impulse spends; speak a beat slower. Also, write it down, then send the short clear version.',
    },
    3: {
      lifeArea: 'Mercury in the 3th house lights courage, siblings/peers, short trips, and everyday hustle. Thinking, talk, and skill traffic show up especially around courage and daily hustle — how you learn, argue, and message.',
      advice: 'With Mercury emphasising the 3th, take one short bold step — a message, trip, or skill rep. Channel wit in service of understanding into courage and daily hustle.',
    },
    4: {
      lifeArea: 'House 4 becomes a stage for Mercury: attention gathers on home, family base, private mood, and feeling settled. Expect thinking, talk, and skill traffic to colour how you nest.',
      advice: 'Mercury on home and private mood: protect home and private mood; a tidy base steadies the rest. Also, write it down, then send the short clear version.',
    },
    5: {
      lifeArea: 'Mercury in the 5th house lights creativity, romance, play, kids/mentees, and speculative bets. Thinking, talk, and skill traffic show up especially around creativity and play — how you learn, argue, and message.',
      advice: 'With Mercury emphasising the 5th, lean into play, drafts, or warm attention to someone younger. Channel wit in service of understanding into creativity and play.',
    },
    6: {
      lifeArea: 'House 6 becomes a stage for Mercury: attention gathers on work routines, health habits, rivals, and daily problem-solving. Expect thinking, talk, and skill traffic to colour how you serve.',
      advice: 'Mercury on routines and problem-solving: keep routines small and doable; solve one practical problem. Also, write it down, then send the short clear version.',
    },
    7: {
      lifeArea: 'Mercury in the 7th house lights one-to-one relationships, contracts, and mirroring with others. Thinking, talk, and skill traffic show up especially around partnerships and contracts — how you learn, argue, and message.',
      advice: 'With Mercury emphasising the 7th, prefer fair one-to-one talks over guessing. Channel wit in service of understanding into partnerships and contracts.',
    },
    8: {
      lifeArea: 'House 8 becomes a stage for Mercury: attention gathers on shared resources, intimacy, research, and big life resets. Expect thinking, talk, and skill traffic to colour how you transform.',
      advice: 'Mercury on intimacy and shared resets: go gently with shared money, intimacy, and resets. Also, write it down, then send the short clear version.',
    },
    9: {
      lifeArea: 'Mercury in the 9th house lights beliefs, teachers, long journeys, and the bigger why. Thinking, talk, and skill traffic show up especially around belief and bigger why — how you learn, argue, and message.',
      advice: 'With Mercury emphasising the 9th, make room for a teacher, walk, or belief worth revisiting. Channel wit in service of understanding into belief and bigger why.',
    },
    10: {
      lifeArea: 'House 10 becomes a stage for Mercury: attention gathers on career, public reputation, and what you are known for. Expect thinking, talk, and skill traffic to colour how you achieve.',
      advice: 'Mercury on career and reputation: show up for visible work; finish something public. Also, write it down, then send the short clear version.',
    },
    11: {
      lifeArea: 'Mercury in the 11th house lights friends, networks, gains, and future-facing goals. Thinking, talk, and skill traffic show up especially around friends and future goals — how you learn, argue, and message.',
      advice: 'With Mercury emphasising the 11th, reach a friend or network goal; ask without over-explaining. Channel wit in service of understanding into friends and future goals.',
    },
    12: {
      lifeArea: 'House 12 becomes a stage for Mercury: attention gathers on rest, solitude, endings, travel abroad, and quiet recharge. Expect thinking, talk, and skill traffic to colour how you withdraw.',
      advice: 'Mercury on rest and quiet endings: schedule real rest; endings and recharge count as work. Also, write it down, then send the short clear version.',
    },
  },
  Jupiter: {
    1: {
      lifeArea: 'Jupiter in the 1th house lights how you show up, body-energy, and first impressions. Growth, meaning, and generous stretch show up especially around self and first impressions — where grace and teachers show up.',
      advice: 'With Jupiter emphasising the 1th, check body-energy before overcommitting. Channel faith that stays curious into self and first impressions.',
    },
    2: {
      lifeArea: 'House 2 becomes a stage for Jupiter: attention gathers on money habits, speech, and what you treat as valuable. Expect growth, meaning, and generous stretch to colour how you resource.',
      advice: 'Jupiter on speech and resources: go easy on impulse spends; speak a beat slower. Also, widen the frame with learning or generosity; avoid lecturing.',
    },
    3: {
      lifeArea: 'Jupiter in the 3th house lights courage, siblings/peers, short trips, and everyday hustle. Growth, meaning, and generous stretch show up especially around courage and daily hustle — where grace and teachers show up.',
      advice: 'With Jupiter emphasising the 3th, take one short bold step — a message, trip, or skill rep. Channel faith that stays curious into courage and daily hustle.',
    },
    4: {
      lifeArea: 'House 4 becomes a stage for Jupiter: attention gathers on home, family base, private mood, and feeling settled. Expect growth, meaning, and generous stretch to colour how you nest.',
      advice: 'Jupiter on home and private mood: protect home and private mood; a tidy base steadies the rest. Also, widen the frame with learning or generosity; avoid lecturing.',
    },
    5: {
      lifeArea: 'Jupiter in the 5th house lights creativity, romance, play, kids/mentees, and speculative bets. Growth, meaning, and generous stretch show up especially around creativity and play — where grace and teachers show up.',
      advice: 'With Jupiter emphasising the 5th, lean into play, drafts, or warm attention to someone younger. Channel faith that stays curious into creativity and play.',
    },
    6: {
      lifeArea: 'House 6 becomes a stage for Jupiter: attention gathers on work routines, health habits, rivals, and daily problem-solving. Expect growth, meaning, and generous stretch to colour how you serve.',
      advice: 'Jupiter on routines and problem-solving: keep routines small and doable; solve one practical problem. Also, widen the frame with learning or generosity; avoid lecturing.',
    },
    7: {
      lifeArea: 'Jupiter in the 7th house lights one-to-one relationships, contracts, and mirroring with others. Growth, meaning, and generous stretch show up especially around partnerships and contracts — where grace and teachers show up.',
      advice: 'With Jupiter emphasising the 7th, prefer fair one-to-one talks over guessing. Channel faith that stays curious into partnerships and contracts.',
    },
    8: {
      lifeArea: 'House 8 becomes a stage for Jupiter: attention gathers on shared resources, intimacy, research, and big life resets. Expect growth, meaning, and generous stretch to colour how you transform.',
      advice: 'Jupiter on intimacy and shared resets: go gently with shared money, intimacy, and resets. Also, widen the frame with learning or generosity; avoid lecturing.',
    },
    9: {
      lifeArea: 'Jupiter in the 9th house lights beliefs, teachers, long journeys, and the bigger why. Growth, meaning, and generous stretch show up especially around belief and bigger why — where grace and teachers show up.',
      advice: 'With Jupiter emphasising the 9th, make room for a teacher, walk, or belief worth revisiting. Channel faith that stays curious into belief and bigger why.',
    },
    10: {
      lifeArea: 'House 10 becomes a stage for Jupiter: attention gathers on career, public reputation, and what you are known for. Expect growth, meaning, and generous stretch to colour how you achieve.',
      advice: 'Jupiter on career and reputation: show up for visible work; finish something public. Also, widen the frame with learning or generosity; avoid lecturing.',
    },
    11: {
      lifeArea: 'Jupiter in the 11th house lights friends, networks, gains, and future-facing goals. Growth, meaning, and generous stretch show up especially around friends and future goals — where grace and teachers show up.',
      advice: 'With Jupiter emphasising the 11th, reach a friend or network goal; ask without over-explaining. Channel faith that stays curious into friends and future goals.',
    },
    12: {
      lifeArea: 'House 12 becomes a stage for Jupiter: attention gathers on rest, solitude, endings, travel abroad, and quiet recharge. Expect growth, meaning, and generous stretch to colour how you withdraw.',
      advice: 'Jupiter on rest and quiet endings: schedule real rest; endings and recharge count as work. Also, widen the frame with learning or generosity; avoid lecturing.',
    },
  },
  Venus: {
    1: {
      lifeArea: 'Venus in the 1th house lights how you show up, body-energy, and first impressions. Bond, taste, pleasure, and harmony show up especially around self and first impressions — how you bond and what you find beautiful.',
      advice: 'With Venus emphasising the 1th, check body-energy before overcommitting. Channel harmony practiced, not assumed into self and first impressions.',
    },
    2: {
      lifeArea: 'House 2 becomes a stage for Venus: attention gathers on money habits, speech, and what you treat as valuable. Expect bond, taste, pleasure, and harmony to colour how you resource.',
      advice: 'Venus on speech and resources: go easy on impulse spends; speak a beat slower. Also, choose beauty and kindness on purpose.',
    },
    3: {
      lifeArea: 'Venus in the 3th house lights courage, siblings/peers, short trips, and everyday hustle. Bond, taste, pleasure, and harmony show up especially around courage and daily hustle — how you bond and what you find beautiful.',
      advice: 'With Venus emphasising the 3th, take one short bold step — a message, trip, or skill rep. Channel harmony practiced, not assumed into courage and daily hustle.',
    },
    4: {
      lifeArea: 'House 4 becomes a stage for Venus: attention gathers on home, family base, private mood, and feeling settled. Expect bond, taste, pleasure, and harmony to colour how you nest.',
      advice: 'Venus on home and private mood: protect home and private mood; a tidy base steadies the rest. Also, choose beauty and kindness on purpose.',
    },
    5: {
      lifeArea: 'Venus in the 5th house lights creativity, romance, play, kids/mentees, and speculative bets. Bond, taste, pleasure, and harmony show up especially around creativity and play — how you bond and what you find beautiful.',
      advice: 'With Venus emphasising the 5th, lean into play, drafts, or warm attention to someone younger. Channel harmony practiced, not assumed into creativity and play.',
    },
    6: {
      lifeArea: 'House 6 becomes a stage for Venus: attention gathers on work routines, health habits, rivals, and daily problem-solving. Expect bond, taste, pleasure, and harmony to colour how you serve.',
      advice: 'Venus on routines and problem-solving: keep routines small and doable; solve one practical problem. Also, choose beauty and kindness on purpose.',
    },
    7: {
      lifeArea: 'Venus in the 7th house lights one-to-one relationships, contracts, and mirroring with others. Bond, taste, pleasure, and harmony show up especially around partnerships and contracts — how you bond and what you find beautiful.',
      advice: 'With Venus emphasising the 7th, prefer fair one-to-one talks over guessing. Channel harmony practiced, not assumed into partnerships and contracts.',
    },
    8: {
      lifeArea: 'House 8 becomes a stage for Venus: attention gathers on shared resources, intimacy, research, and big life resets. Expect bond, taste, pleasure, and harmony to colour how you transform.',
      advice: 'Venus on intimacy and shared resets: go gently with shared money, intimacy, and resets. Also, choose beauty and kindness on purpose.',
    },
    9: {
      lifeArea: 'Venus in the 9th house lights beliefs, teachers, long journeys, and the bigger why. Bond, taste, pleasure, and harmony show up especially around belief and bigger why — how you bond and what you find beautiful.',
      advice: 'With Venus emphasising the 9th, make room for a teacher, walk, or belief worth revisiting. Channel harmony practiced, not assumed into belief and bigger why.',
    },
    10: {
      lifeArea: 'House 10 becomes a stage for Venus: attention gathers on career, public reputation, and what you are known for. Expect bond, taste, pleasure, and harmony to colour how you achieve.',
      advice: 'Venus on career and reputation: show up for visible work; finish something public. Also, choose beauty and kindness on purpose.',
    },
    11: {
      lifeArea: 'Venus in the 11th house lights friends, networks, gains, and future-facing goals. Bond, taste, pleasure, and harmony show up especially around friends and future goals — how you bond and what you find beautiful.',
      advice: 'With Venus emphasising the 11th, reach a friend or network goal; ask without over-explaining. Channel harmony practiced, not assumed into friends and future goals.',
    },
    12: {
      lifeArea: 'House 12 becomes a stage for Venus: attention gathers on rest, solitude, endings, travel abroad, and quiet recharge. Expect bond, taste, pleasure, and harmony to colour how you withdraw.',
      advice: 'Venus on rest and quiet endings: schedule real rest; endings and recharge count as work. Also, choose beauty and kindness on purpose.',
    },
  },
  Saturn: {
    1: {
      lifeArea: 'Saturn in the 1th house lights how you show up, body-energy, and first impressions. Duration, structure, and sober accountability show up especially around self and first impressions — where time is the teacher.',
      advice: 'With Saturn emphasising the 1th, check body-energy before overcommitting. Channel discipline that leaves room to breathe into self and first impressions.',
    },
    2: {
      lifeArea: 'House 2 becomes a stage for Saturn: attention gathers on money habits, speech, and what you treat as valuable. Expect duration, structure, and sober accountability to colour how you resource.',
      advice: 'Saturn on speech and resources: go easy on impulse spends; speak a beat slower. Also, one sober step beats a grand promise.',
    },
    3: {
      lifeArea: 'Saturn in the 3th house lights courage, siblings/peers, short trips, and everyday hustle. Duration, structure, and sober accountability show up especially around courage and daily hustle — where time is the teacher.',
      advice: 'With Saturn emphasising the 3th, take one short bold step — a message, trip, or skill rep. Channel discipline that leaves room to breathe into courage and daily hustle.',
    },
    4: {
      lifeArea: 'House 4 becomes a stage for Saturn: attention gathers on home, family base, private mood, and feeling settled. Expect duration, structure, and sober accountability to colour how you nest.',
      advice: 'Saturn on home and private mood: protect home and private mood; a tidy base steadies the rest. Also, one sober step beats a grand promise.',
    },
    5: {
      lifeArea: 'Saturn in the 5th house lights creativity, romance, play, kids/mentees, and speculative bets. Duration, structure, and sober accountability show up especially around creativity and play — where time is the teacher.',
      advice: 'With Saturn emphasising the 5th, lean into play, drafts, or warm attention to someone younger. Channel discipline that leaves room to breathe into creativity and play.',
    },
    6: {
      lifeArea: 'House 6 becomes a stage for Saturn: attention gathers on work routines, health habits, rivals, and daily problem-solving. Expect duration, structure, and sober accountability to colour how you serve.',
      advice: 'Saturn on routines and problem-solving: keep routines small and doable; solve one practical problem. Also, one sober step beats a grand promise.',
    },
    7: {
      lifeArea: 'Saturn in the 7th house lights one-to-one relationships, contracts, and mirroring with others. Duration, structure, and sober accountability show up especially around partnerships and contracts — where time is the teacher.',
      advice: 'With Saturn emphasising the 7th, prefer fair one-to-one talks over guessing. Channel discipline that leaves room to breathe into partnerships and contracts.',
    },
    8: {
      lifeArea: 'House 8 becomes a stage for Saturn: attention gathers on shared resources, intimacy, research, and big life resets. Expect duration, structure, and sober accountability to colour how you transform.',
      advice: 'Saturn on intimacy and shared resets: go gently with shared money, intimacy, and resets. Also, one sober step beats a grand promise.',
    },
    9: {
      lifeArea: 'Saturn in the 9th house lights beliefs, teachers, long journeys, and the bigger why. Duration, structure, and sober accountability show up especially around belief and bigger why — where time is the teacher.',
      advice: 'With Saturn emphasising the 9th, make room for a teacher, walk, or belief worth revisiting. Channel discipline that leaves room to breathe into belief and bigger why.',
    },
    10: {
      lifeArea: 'House 10 becomes a stage for Saturn: attention gathers on career, public reputation, and what you are known for. Expect duration, structure, and sober accountability to colour how you achieve.',
      advice: 'Saturn on career and reputation: show up for visible work; finish something public. Also, one sober step beats a grand promise.',
    },
    11: {
      lifeArea: 'Saturn in the 11th house lights friends, networks, gains, and future-facing goals. Duration, structure, and sober accountability show up especially around friends and future goals — where time is the teacher.',
      advice: 'With Saturn emphasising the 11th, reach a friend or network goal; ask without over-explaining. Channel discipline that leaves room to breathe into friends and future goals.',
    },
    12: {
      lifeArea: 'House 12 becomes a stage for Saturn: attention gathers on rest, solitude, endings, travel abroad, and quiet recharge. Expect duration, structure, and sober accountability to colour how you withdraw.',
      advice: 'Saturn on rest and quiet endings: schedule real rest; endings and recharge count as work. Also, one sober step beats a grand promise.',
    },
  },
  Rahu: {
    1: {
      lifeArea: 'Rahu in the 1th house lights how you show up, body-energy, and first impressions. Appetite for the unfamiliar and unconventional show up especially around self and first impressions — where hunger for the new concentrates.',
      advice: 'With Rahu emphasising the 1th, check body-energy before overcommitting. Channel novel aim with feet still on ground into self and first impressions.',
    },
    2: {
      lifeArea: 'House 2 becomes a stage for Rahu: attention gathers on money habits, speech, and what you treat as valuable. Expect appetite for the unfamiliar and unconventional to colour how you resource.',
      advice: 'Rahu on speech and resources: go easy on impulse spends; speak a beat slower. Also, curiosity yes — obsession needs a timer and a reality check.',
    },
    3: {
      lifeArea: 'Rahu in the 3th house lights courage, siblings/peers, short trips, and everyday hustle. Appetite for the unfamiliar and unconventional show up especially around courage and daily hustle — where hunger for the new concentrates.',
      advice: 'With Rahu emphasising the 3th, take one short bold step — a message, trip, or skill rep. Channel novel aim with feet still on ground into courage and daily hustle.',
    },
    4: {
      lifeArea: 'House 4 becomes a stage for Rahu: attention gathers on home, family base, private mood, and feeling settled. Expect appetite for the unfamiliar and unconventional to colour how you nest.',
      advice: 'Rahu on home and private mood: protect home and private mood; a tidy base steadies the rest. Also, curiosity yes — obsession needs a timer and a reality check.',
    },
    5: {
      lifeArea: 'Rahu in the 5th house lights creativity, romance, play, kids/mentees, and speculative bets. Appetite for the unfamiliar and unconventional show up especially around creativity and play — where hunger for the new concentrates.',
      advice: 'With Rahu emphasising the 5th, lean into play, drafts, or warm attention to someone younger. Channel novel aim with feet still on ground into creativity and play.',
    },
    6: {
      lifeArea: 'House 6 becomes a stage for Rahu: attention gathers on work routines, health habits, rivals, and daily problem-solving. Expect appetite for the unfamiliar and unconventional to colour how you serve.',
      advice: 'Rahu on routines and problem-solving: keep routines small and doable; solve one practical problem. Also, curiosity yes — obsession needs a timer and a reality check.',
    },
    7: {
      lifeArea: 'Rahu in the 7th house lights one-to-one relationships, contracts, and mirroring with others. Appetite for the unfamiliar and unconventional show up especially around partnerships and contracts — where hunger for the new concentrates.',
      advice: 'With Rahu emphasising the 7th, prefer fair one-to-one talks over guessing. Channel novel aim with feet still on ground into partnerships and contracts.',
    },
    8: {
      lifeArea: 'House 8 becomes a stage for Rahu: attention gathers on shared resources, intimacy, research, and big life resets. Expect appetite for the unfamiliar and unconventional to colour how you transform.',
      advice: 'Rahu on intimacy and shared resets: go gently with shared money, intimacy, and resets. Also, curiosity yes — obsession needs a timer and a reality check.',
    },
    9: {
      lifeArea: 'Rahu in the 9th house lights beliefs, teachers, long journeys, and the bigger why. Appetite for the unfamiliar and unconventional show up especially around belief and bigger why — where hunger for the new concentrates.',
      advice: 'With Rahu emphasising the 9th, make room for a teacher, walk, or belief worth revisiting. Channel novel aim with feet still on ground into belief and bigger why.',
    },
    10: {
      lifeArea: 'House 10 becomes a stage for Rahu: attention gathers on career, public reputation, and what you are known for. Expect appetite for the unfamiliar and unconventional to colour how you achieve.',
      advice: 'Rahu on career and reputation: show up for visible work; finish something public. Also, curiosity yes — obsession needs a timer and a reality check.',
    },
    11: {
      lifeArea: 'Rahu in the 11th house lights friends, networks, gains, and future-facing goals. Appetite for the unfamiliar and unconventional show up especially around friends and future goals — where hunger for the new concentrates.',
      advice: 'With Rahu emphasising the 11th, reach a friend or network goal; ask without over-explaining. Channel novel aim with feet still on ground into friends and future goals.',
    },
    12: {
      lifeArea: 'House 12 becomes a stage for Rahu: attention gathers on rest, solitude, endings, travel abroad, and quiet recharge. Expect appetite for the unfamiliar and unconventional to colour how you withdraw.',
      advice: 'Rahu on rest and quiet endings: schedule real rest; endings and recharge count as work. Also, curiosity yes — obsession needs a timer and a reality check.',
    },
  },
  Ketu: {
    1: {
      lifeArea: 'Ketu in the 1th house lights how you show up, body-energy, and first impressions. Release, distill, and sideways knowing show up especially around self and first impressions — what you already know sideways and may over-release.',
      advice: 'With Ketu emphasising the 1th, check body-energy before overcommitting. Channel insight without vanishing from the room into self and first impressions.',
    },
    2: {
      lifeArea: 'House 2 becomes a stage for Ketu: attention gathers on money habits, speech, and what you treat as valuable. Expect release, distill, and sideways knowing to colour how you resource.',
      advice: 'Ketu on speech and resources: go easy on impulse spends; speak a beat slower. Also, release one extra obligation and keep the distilled lesson.',
    },
    3: {
      lifeArea: 'Ketu in the 3th house lights courage, siblings/peers, short trips, and everyday hustle. Release, distill, and sideways knowing show up especially around courage and daily hustle — what you already know sideways and may over-release.',
      advice: 'With Ketu emphasising the 3th, take one short bold step — a message, trip, or skill rep. Channel insight without vanishing from the room into courage and daily hustle.',
    },
    4: {
      lifeArea: 'House 4 becomes a stage for Ketu: attention gathers on home, family base, private mood, and feeling settled. Expect release, distill, and sideways knowing to colour how you nest.',
      advice: 'Ketu on home and private mood: protect home and private mood; a tidy base steadies the rest. Also, release one extra obligation and keep the distilled lesson.',
    },
    5: {
      lifeArea: 'Ketu in the 5th house lights creativity, romance, play, kids/mentees, and speculative bets. Release, distill, and sideways knowing show up especially around creativity and play — what you already know sideways and may over-release.',
      advice: 'With Ketu emphasising the 5th, lean into play, drafts, or warm attention to someone younger. Channel insight without vanishing from the room into creativity and play.',
    },
    6: {
      lifeArea: 'House 6 becomes a stage for Ketu: attention gathers on work routines, health habits, rivals, and daily problem-solving. Expect release, distill, and sideways knowing to colour how you serve.',
      advice: 'Ketu on routines and problem-solving: keep routines small and doable; solve one practical problem. Also, release one extra obligation and keep the distilled lesson.',
    },
    7: {
      lifeArea: 'Ketu in the 7th house lights one-to-one relationships, contracts, and mirroring with others. Release, distill, and sideways knowing show up especially around partnerships and contracts — what you already know sideways and may over-release.',
      advice: 'With Ketu emphasising the 7th, prefer fair one-to-one talks over guessing. Channel insight without vanishing from the room into partnerships and contracts.',
    },
    8: {
      lifeArea: 'House 8 becomes a stage for Ketu: attention gathers on shared resources, intimacy, research, and big life resets. Expect release, distill, and sideways knowing to colour how you transform.',
      advice: 'Ketu on intimacy and shared resets: go gently with shared money, intimacy, and resets. Also, release one extra obligation and keep the distilled lesson.',
    },
    9: {
      lifeArea: 'Ketu in the 9th house lights beliefs, teachers, long journeys, and the bigger why. Release, distill, and sideways knowing show up especially around belief and bigger why — what you already know sideways and may over-release.',
      advice: 'With Ketu emphasising the 9th, make room for a teacher, walk, or belief worth revisiting. Channel insight without vanishing from the room into belief and bigger why.',
    },
    10: {
      lifeArea: 'House 10 becomes a stage for Ketu: attention gathers on career, public reputation, and what you are known for. Expect release, distill, and sideways knowing to colour how you achieve.',
      advice: 'Ketu on career and reputation: show up for visible work; finish something public. Also, release one extra obligation and keep the distilled lesson.',
    },
    11: {
      lifeArea: 'Ketu in the 11th house lights friends, networks, gains, and future-facing goals. Release, distill, and sideways knowing show up especially around friends and future goals — what you already know sideways and may over-release.',
      advice: 'With Ketu emphasising the 11th, reach a friend or network goal; ask without over-explaining. Channel insight without vanishing from the room into friends and future goals.',
    },
    12: {
      lifeArea: 'House 12 becomes a stage for Ketu: attention gathers on rest, solitude, endings, travel abroad, and quiet recharge. Expect release, distill, and sideways knowing to colour how you withdraw.',
      advice: 'Ketu on rest and quiet endings: schedule real rest; endings and recharge count as work. Also, release one extra obligation and keep the distilled lesson.',
    },
  },
};

export function grahaBhavaRule(graha: GrahaId, house: number): GrahaBhavaRule | null {
  return GRAHA_BHAVA[graha]?.[house] ?? null;
}
