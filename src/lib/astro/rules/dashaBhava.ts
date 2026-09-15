import type { GrahaId } from '../constants';

export interface DashaBhavaRule {
  tone: string;
  advice: string;
}

export const DASHA_BHAVA: Record<GrahaId, Record<number, DashaBhavaRule>> = {
  Sun: {
    1: {
      tone: 'This Sun chapter puts the spotlight on how you show up and your body-energy. You want to be seen and lead through that area of life.',
      advice: 'Check your energy before you overcommit. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
    2: {
      tone: 'This Sun chapter puts the spotlight on money talk and what you treat as valuable. You want to be seen and lead through that area of life.',
      advice: 'Slow the impulse spend; speak a beat slower. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
    3: {
      tone: 'This Sun chapter puts the spotlight on courage, short trips, and everyday hustle. You want to be seen and lead through that area of life.',
      advice: 'Send the message or take the short bold step. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
    4: {
      tone: 'This Sun chapter puts the spotlight on home, family base, and private mood. You want to be seen and lead through that area of life.',
      advice: 'Tidy the base; protect private mood. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
    5: {
      tone: 'This Sun chapter puts the spotlight on creativity, romance, play, and mentees. You want to be seen and lead through that area of life.',
      advice: 'Make something fun or warm toward someone younger. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
    6: {
      tone: 'This Sun chapter puts the spotlight on routines, health habits, and daily problems. You want to be seen and lead through that area of life.',
      advice: 'Keep routines tiny; solve one practical problem. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
    7: {
      tone: 'This Sun chapter puts the spotlight on one-to-one bonds and fair contracts. You want to be seen and lead through that area of life.',
      advice: 'Have the honest one-to-one talk instead of guessing. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
    8: {
      tone: 'This Sun chapter puts the spotlight on shared money, intimacy, and big resets. You want to be seen and lead through that area of life.',
      advice: 'Go gently with shared resources and vulnerability. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
    9: {
      tone: 'This Sun chapter puts the spotlight on beliefs, teachers, and the bigger why. You want to be seen and lead through that area of life.',
      advice: 'Make room for a walk, a teacher, or a belief check. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
    10: {
      tone: 'This Sun chapter puts the spotlight on career and what you’re known for. You want to be seen and lead through that area of life.',
      advice: 'Finish something visible at work. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
    11: {
      tone: 'This Sun chapter puts the spotlight on friends, networks, and future goals. You want to be seen and lead through that area of life.',
      advice: 'Reach a friend or ask for a network favour cleanly. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
    12: {
      tone: 'This Sun chapter puts the spotlight on rest, solitude, and quiet endings. You want to be seen and lead through that area of life.',
      advice: 'Schedule real rest — endings count as work. In this chapter: own one clear act of presence, then share the spotlight. Prefer show up warmly without needing a standing ovation.',
    },
  },
  Moon: {
    1: {
      tone: 'This Moon chapter puts the spotlight on how you show up and your body-energy. Your moods and needs set the weather through that area of life.',
      advice: 'Check your energy before you overcommit. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
    2: {
      tone: 'This Moon chapter puts the spotlight on money talk and what you treat as valuable. Your moods and needs set the weather through that area of life.',
      advice: 'Slow the impulse spend; speak a beat slower. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
    3: {
      tone: 'This Moon chapter puts the spotlight on courage, short trips, and everyday hustle. Your moods and needs set the weather through that area of life.',
      advice: 'Send the message or take the short bold step. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
    4: {
      tone: 'This Moon chapter puts the spotlight on home, family base, and private mood. Your moods and needs set the weather through that area of life.',
      advice: 'Tidy the base; protect private mood. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
    5: {
      tone: 'This Moon chapter puts the spotlight on creativity, romance, play, and mentees. Your moods and needs set the weather through that area of life.',
      advice: 'Make something fun or warm toward someone younger. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
    6: {
      tone: 'This Moon chapter puts the spotlight on routines, health habits, and daily problems. Your moods and needs set the weather through that area of life.',
      advice: 'Keep routines tiny; solve one practical problem. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
    7: {
      tone: 'This Moon chapter puts the spotlight on one-to-one bonds and fair contracts. Your moods and needs set the weather through that area of life.',
      advice: 'Have the honest one-to-one talk instead of guessing. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
    8: {
      tone: 'This Moon chapter puts the spotlight on shared money, intimacy, and big resets. Your moods and needs set the weather through that area of life.',
      advice: 'Go gently with shared resources and vulnerability. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
    9: {
      tone: 'This Moon chapter puts the spotlight on beliefs, teachers, and the bigger why. Your moods and needs set the weather through that area of life.',
      advice: 'Make room for a walk, a teacher, or a belief check. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
    10: {
      tone: 'This Moon chapter puts the spotlight on career and what you’re known for. Your moods and needs set the weather through that area of life.',
      advice: 'Finish something visible at work. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
    11: {
      tone: 'This Moon chapter puts the spotlight on friends, networks, and future goals. Your moods and needs set the weather through that area of life.',
      advice: 'Reach a friend or ask for a network favour cleanly. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
    12: {
      tone: 'This Moon chapter puts the spotlight on rest, solitude, and quiet endings. Your moods and needs set the weather through that area of life.',
      advice: 'Schedule real rest — endings count as work. In this chapter: eat, drink water, and find a soft landing before hard talks. Prefer ask for care instead of toughing it out alone.',
    },
  },
  Mars: {
    1: {
      tone: 'This Mars chapter puts the spotlight on how you show up and your body-energy. You push hard for what you want through that area of life.',
      advice: 'Check your energy before you overcommit. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
    2: {
      tone: 'This Mars chapter puts the spotlight on money talk and what you treat as valuable. You push hard for what you want through that area of life.',
      advice: 'Slow the impulse spend; speak a beat slower. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
    3: {
      tone: 'This Mars chapter puts the spotlight on courage, short trips, and everyday hustle. You push hard for what you want through that area of life.',
      advice: 'Send the message or take the short bold step. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
    4: {
      tone: 'This Mars chapter puts the spotlight on home, family base, and private mood. You push hard for what you want through that area of life.',
      advice: 'Tidy the base; protect private mood. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
    5: {
      tone: 'This Mars chapter puts the spotlight on creativity, romance, play, and mentees. You push hard for what you want through that area of life.',
      advice: 'Make something fun or warm toward someone younger. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
    6: {
      tone: 'This Mars chapter puts the spotlight on routines, health habits, and daily problems. You push hard for what you want through that area of life.',
      advice: 'Keep routines tiny; solve one practical problem. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
    7: {
      tone: 'This Mars chapter puts the spotlight on one-to-one bonds and fair contracts. You push hard for what you want through that area of life.',
      advice: 'Have the honest one-to-one talk instead of guessing. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
    8: {
      tone: 'This Mars chapter puts the spotlight on shared money, intimacy, and big resets. You push hard for what you want through that area of life.',
      advice: 'Go gently with shared resources and vulnerability. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
    9: {
      tone: 'This Mars chapter puts the spotlight on beliefs, teachers, and the bigger why. You push hard for what you want through that area of life.',
      advice: 'Make room for a walk, a teacher, or a belief check. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
    10: {
      tone: 'This Mars chapter puts the spotlight on career and what you’re known for. You push hard for what you want through that area of life.',
      advice: 'Finish something visible at work. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
    11: {
      tone: 'This Mars chapter puts the spotlight on friends, networks, and future goals. You push hard for what you want through that area of life.',
      advice: 'Reach a friend or ask for a network favour cleanly. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
    12: {
      tone: 'This Mars chapter puts the spotlight on rest, solitude, and quiet endings. You push hard for what you want through that area of life.',
      advice: 'Schedule real rest — endings count as work. In this chapter: put the heat into one clean effort, not a public fight. Prefer be brave without turning it into theatre.',
    },
  },
  Mercury: {
    1: {
      tone: 'This Mercury chapter puts the spotlight on how you show up and your body-energy. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Check your energy before you overcommit. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
    2: {
      tone: 'This Mercury chapter puts the spotlight on money talk and what you treat as valuable. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Slow the impulse spend; speak a beat slower. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
    3: {
      tone: 'This Mercury chapter puts the spotlight on courage, short trips, and everyday hustle. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Send the message or take the short bold step. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
    4: {
      tone: 'This Mercury chapter puts the spotlight on home, family base, and private mood. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Tidy the base; protect private mood. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
    5: {
      tone: 'This Mercury chapter puts the spotlight on creativity, romance, play, and mentees. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Make something fun or warm toward someone younger. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
    6: {
      tone: 'This Mercury chapter puts the spotlight on routines, health habits, and daily problems. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Keep routines tiny; solve one practical problem. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
    7: {
      tone: 'This Mercury chapter puts the spotlight on one-to-one bonds and fair contracts. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Have the honest one-to-one talk instead of guessing. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
    8: {
      tone: 'This Mercury chapter puts the spotlight on shared money, intimacy, and big resets. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Go gently with shared resources and vulnerability. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
    9: {
      tone: 'This Mercury chapter puts the spotlight on beliefs, teachers, and the bigger why. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Make room for a walk, a teacher, or a belief check. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
    10: {
      tone: 'This Mercury chapter puts the spotlight on career and what you’re known for. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Finish something visible at work. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
    11: {
      tone: 'This Mercury chapter puts the spotlight on friends, networks, and future goals. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Reach a friend or ask for a network favour cleanly. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
    12: {
      tone: 'This Mercury chapter puts the spotlight on rest, solitude, and quiet endings. Your mind wants to talk, learn, and sort details through that area of life.',
      advice: 'Schedule real rest — endings count as work. In this chapter: write it down, then send the short clear version. Prefer use wit to understand, not to win.',
    },
  },
  Jupiter: {
    1: {
      tone: 'This Jupiter chapter puts the spotlight on how you show up and your body-energy. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Check your energy before you overcommit. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
    2: {
      tone: 'This Jupiter chapter puts the spotlight on money talk and what you treat as valuable. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Slow the impulse spend; speak a beat slower. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
    3: {
      tone: 'This Jupiter chapter puts the spotlight on courage, short trips, and everyday hustle. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Send the message or take the short bold step. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
    4: {
      tone: 'This Jupiter chapter puts the spotlight on home, family base, and private mood. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Tidy the base; protect private mood. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
    5: {
      tone: 'This Jupiter chapter puts the spotlight on creativity, romance, play, and mentees. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Make something fun or warm toward someone younger. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
    6: {
      tone: 'This Jupiter chapter puts the spotlight on routines, health habits, and daily problems. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Keep routines tiny; solve one practical problem. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
    7: {
      tone: 'This Jupiter chapter puts the spotlight on one-to-one bonds and fair contracts. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Have the honest one-to-one talk instead of guessing. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
    8: {
      tone: 'This Jupiter chapter puts the spotlight on shared money, intimacy, and big resets. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Go gently with shared resources and vulnerability. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
    9: {
      tone: 'This Jupiter chapter puts the spotlight on beliefs, teachers, and the bigger why. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Make room for a walk, a teacher, or a belief check. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
    10: {
      tone: 'This Jupiter chapter puts the spotlight on career and what you’re known for. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Finish something visible at work. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
    11: {
      tone: 'This Jupiter chapter puts the spotlight on friends, networks, and future goals. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Reach a friend or ask for a network favour cleanly. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
    12: {
      tone: 'This Jupiter chapter puts the spotlight on rest, solitude, and quiet endings. You look for meaning, growth, and a wider frame through that area of life.',
      advice: 'Schedule real rest — endings count as work. In this chapter: learn something or help someone — skip the lecture. Prefer keep faith curious, not preachy.',
    },
  },
  Venus: {
    1: {
      tone: 'This Venus chapter puts the spotlight on how you show up and your body-energy. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Check your energy before you overcommit. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
    2: {
      tone: 'This Venus chapter puts the spotlight on money talk and what you treat as valuable. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Slow the impulse spend; speak a beat slower. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
    3: {
      tone: 'This Venus chapter puts the spotlight on courage, short trips, and everyday hustle. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Send the message or take the short bold step. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
    4: {
      tone: 'This Venus chapter puts the spotlight on home, family base, and private mood. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Tidy the base; protect private mood. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
    5: {
      tone: 'This Venus chapter puts the spotlight on creativity, romance, play, and mentees. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Make something fun or warm toward someone younger. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
    6: {
      tone: 'This Venus chapter puts the spotlight on routines, health habits, and daily problems. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Keep routines tiny; solve one practical problem. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
    7: {
      tone: 'This Venus chapter puts the spotlight on one-to-one bonds and fair contracts. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Have the honest one-to-one talk instead of guessing. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
    8: {
      tone: 'This Venus chapter puts the spotlight on shared money, intimacy, and big resets. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Go gently with shared resources and vulnerability. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
    9: {
      tone: 'This Venus chapter puts the spotlight on beliefs, teachers, and the bigger why. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Make room for a walk, a teacher, or a belief check. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
    10: {
      tone: 'This Venus chapter puts the spotlight on career and what you’re known for. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Finish something visible at work. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
    11: {
      tone: 'This Venus chapter puts the spotlight on friends, networks, and future goals. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Reach a friend or ask for a network favour cleanly. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
    12: {
      tone: 'This Venus chapter puts the spotlight on rest, solitude, and quiet endings. You care about comfort, beauty, and how you bond through that area of life.',
      advice: 'Schedule real rest — endings count as work. In this chapter: choose kindness and one beautiful detail on purpose. Prefer practise harmony — don’t just assume it.',
    },
  },
  Saturn: {
    1: {
      tone: 'This Saturn chapter puts the spotlight on how you show up and your body-energy. You build patiently and finish what others abandon through that area of life.',
      advice: 'Check your energy before you overcommit. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
    2: {
      tone: 'This Saturn chapter puts the spotlight on money talk and what you treat as valuable. You build patiently and finish what others abandon through that area of life.',
      advice: 'Slow the impulse spend; speak a beat slower. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
    3: {
      tone: 'This Saturn chapter puts the spotlight on courage, short trips, and everyday hustle. You build patiently and finish what others abandon through that area of life.',
      advice: 'Send the message or take the short bold step. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
    4: {
      tone: 'This Saturn chapter puts the spotlight on home, family base, and private mood. You build patiently and finish what others abandon through that area of life.',
      advice: 'Tidy the base; protect private mood. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
    5: {
      tone: 'This Saturn chapter puts the spotlight on creativity, romance, play, and mentees. You build patiently and finish what others abandon through that area of life.',
      advice: 'Make something fun or warm toward someone younger. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
    6: {
      tone: 'This Saturn chapter puts the spotlight on routines, health habits, and daily problems. You build patiently and finish what others abandon through that area of life.',
      advice: 'Keep routines tiny; solve one practical problem. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
    7: {
      tone: 'This Saturn chapter puts the spotlight on one-to-one bonds and fair contracts. You build patiently and finish what others abandon through that area of life.',
      advice: 'Have the honest one-to-one talk instead of guessing. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
    8: {
      tone: 'This Saturn chapter puts the spotlight on shared money, intimacy, and big resets. You build patiently and finish what others abandon through that area of life.',
      advice: 'Go gently with shared resources and vulnerability. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
    9: {
      tone: 'This Saturn chapter puts the spotlight on beliefs, teachers, and the bigger why. You build patiently and finish what others abandon through that area of life.',
      advice: 'Make room for a walk, a teacher, or a belief check. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
    10: {
      tone: 'This Saturn chapter puts the spotlight on career and what you’re known for. You build patiently and finish what others abandon through that area of life.',
      advice: 'Finish something visible at work. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
    11: {
      tone: 'This Saturn chapter puts the spotlight on friends, networks, and future goals. You build patiently and finish what others abandon through that area of life.',
      advice: 'Reach a friend or ask for a network favour cleanly. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
    12: {
      tone: 'This Saturn chapter puts the spotlight on rest, solitude, and quiet endings. You build patiently and finish what others abandon through that area of life.',
      advice: 'Schedule real rest — endings count as work. In this chapter: take one sober step instead of a grand promise. Prefer stay disciplined but leave room to breathe.',
    },
  },
  Rahu: {
    1: {
      tone: 'This Rahu chapter puts the spotlight on how you show up and your body-energy. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Check your energy before you overcommit. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
    2: {
      tone: 'This Rahu chapter puts the spotlight on money talk and what you treat as valuable. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Slow the impulse spend; speak a beat slower. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
    3: {
      tone: 'This Rahu chapter puts the spotlight on courage, short trips, and everyday hustle. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Send the message or take the short bold step. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
    4: {
      tone: 'This Rahu chapter puts the spotlight on home, family base, and private mood. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Tidy the base; protect private mood. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
    5: {
      tone: 'This Rahu chapter puts the spotlight on creativity, romance, play, and mentees. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Make something fun or warm toward someone younger. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
    6: {
      tone: 'This Rahu chapter puts the spotlight on routines, health habits, and daily problems. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Keep routines tiny; solve one practical problem. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
    7: {
      tone: 'This Rahu chapter puts the spotlight on one-to-one bonds and fair contracts. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Have the honest one-to-one talk instead of guessing. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
    8: {
      tone: 'This Rahu chapter puts the spotlight on shared money, intimacy, and big resets. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Go gently with shared resources and vulnerability. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
    9: {
      tone: 'This Rahu chapter puts the spotlight on beliefs, teachers, and the bigger why. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Make room for a walk, a teacher, or a belief check. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
    10: {
      tone: 'This Rahu chapter puts the spotlight on career and what you’re known for. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Finish something visible at work. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
    11: {
      tone: 'This Rahu chapter puts the spotlight on friends, networks, and future goals. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Reach a friend or ask for a network favour cleanly. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
    12: {
      tone: 'This Rahu chapter puts the spotlight on rest, solitude, and quiet endings. You hunger for the new and unfamiliar through that area of life.',
      advice: 'Schedule real rest — endings count as work. In this chapter: follow curiosity with a timer and a reality check. Prefer aim for novelty with both feet on the ground.',
    },
  },
  Ketu: {
    1: {
      tone: 'This Ketu chapter puts the spotlight on how you show up and your body-energy. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Check your energy before you overcommit. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
    2: {
      tone: 'This Ketu chapter puts the spotlight on money talk and what you treat as valuable. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Slow the impulse spend; speak a beat slower. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
    3: {
      tone: 'This Ketu chapter puts the spotlight on courage, short trips, and everyday hustle. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Send the message or take the short bold step. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
    4: {
      tone: 'This Ketu chapter puts the spotlight on home, family base, and private mood. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Tidy the base; protect private mood. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
    5: {
      tone: 'This Ketu chapter puts the spotlight on creativity, romance, play, and mentees. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Make something fun or warm toward someone younger. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
    6: {
      tone: 'This Ketu chapter puts the spotlight on routines, health habits, and daily problems. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Keep routines tiny; solve one practical problem. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
    7: {
      tone: 'This Ketu chapter puts the spotlight on one-to-one bonds and fair contracts. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Have the honest one-to-one talk instead of guessing. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
    8: {
      tone: 'This Ketu chapter puts the spotlight on shared money, intimacy, and big resets. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Go gently with shared resources and vulnerability. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
    9: {
      tone: 'This Ketu chapter puts the spotlight on beliefs, teachers, and the bigger why. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Make room for a walk, a teacher, or a belief check. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
    10: {
      tone: 'This Ketu chapter puts the spotlight on career and what you’re known for. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Finish something visible at work. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
    11: {
      tone: 'This Ketu chapter puts the spotlight on friends, networks, and future goals. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Reach a friend or ask for a network favour cleanly. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
    12: {
      tone: 'This Ketu chapter puts the spotlight on rest, solitude, and quiet endings. You already know some things sideways and like to simplify through that area of life.',
      advice: 'Schedule real rest — endings count as work. In this chapter: drop one extra obligation and keep the lesson. Prefer share the insight without disappearing from the room.',
    },
  },
};

export const DASHA_RASHI: Record<GrahaId, Record<string, DashaBhavaRule>> = {
  Sun: {
    Mesha: {
      tone: 'Your Sun chapter wears a Aries style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Aries mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
    Vrishabha: {
      tone: 'Your Sun chapter wears a Taurus style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Taurus mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
    Mithuna: {
      tone: 'Your Sun chapter wears a Gemini style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Gemini mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
    Karka: {
      tone: 'Your Sun chapter wears a Cancer style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Cancer mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
    Simha: {
      tone: 'Your Sun chapter wears a Leo style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Leo mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
    Kanya: {
      tone: 'Your Sun chapter wears a Virgo style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Virgo mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
    Tula: {
      tone: 'Your Sun chapter wears a Libra style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Libra mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
    Vrischika: {
      tone: 'Your Sun chapter wears a Scorpio style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Scorpio mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
    Dhanu: {
      tone: 'Your Sun chapter wears a Sagittarius style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Sagittarius mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
    Makara: {
      tone: 'Your Sun chapter wears a Capricorn style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Capricorn mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
    Kumbha: {
      tone: 'Your Sun chapter wears a Aquarius style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Aquarius mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
    Meena: {
      tone: 'Your Sun chapter wears a Pisces style — you want to be seen and lead, with that sign’s tempo.',
      advice: 'Own one clear act of presence, then share the spotlight. Let a Pisces mood colour how you do it; prefer show up warmly without needing a standing ovation.',
    },
  },
  Moon: {
    Mesha: {
      tone: 'Your Moon chapter wears a Aries style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Aries mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
    Vrishabha: {
      tone: 'Your Moon chapter wears a Taurus style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Taurus mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
    Mithuna: {
      tone: 'Your Moon chapter wears a Gemini style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Gemini mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
    Karka: {
      tone: 'Your Moon chapter wears a Cancer style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Cancer mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
    Simha: {
      tone: 'Your Moon chapter wears a Leo style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Leo mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
    Kanya: {
      tone: 'Your Moon chapter wears a Virgo style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Virgo mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
    Tula: {
      tone: 'Your Moon chapter wears a Libra style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Libra mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
    Vrischika: {
      tone: 'Your Moon chapter wears a Scorpio style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Scorpio mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
    Dhanu: {
      tone: 'Your Moon chapter wears a Sagittarius style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Sagittarius mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
    Makara: {
      tone: 'Your Moon chapter wears a Capricorn style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Capricorn mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
    Kumbha: {
      tone: 'Your Moon chapter wears a Aquarius style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Aquarius mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
    Meena: {
      tone: 'Your Moon chapter wears a Pisces style — your moods and needs set the weather, with that sign’s tempo.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Let a Pisces mood colour how you do it; prefer ask for care instead of toughing it out alone.',
    },
  },
  Mars: {
    Mesha: {
      tone: 'Your Mars chapter wears a Aries style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Aries mood colour how you do it; prefer be brave without turning it into theatre.',
    },
    Vrishabha: {
      tone: 'Your Mars chapter wears a Taurus style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Taurus mood colour how you do it; prefer be brave without turning it into theatre.',
    },
    Mithuna: {
      tone: 'Your Mars chapter wears a Gemini style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Gemini mood colour how you do it; prefer be brave without turning it into theatre.',
    },
    Karka: {
      tone: 'Your Mars chapter wears a Cancer style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Cancer mood colour how you do it; prefer be brave without turning it into theatre.',
    },
    Simha: {
      tone: 'Your Mars chapter wears a Leo style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Leo mood colour how you do it; prefer be brave without turning it into theatre.',
    },
    Kanya: {
      tone: 'Your Mars chapter wears a Virgo style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Virgo mood colour how you do it; prefer be brave without turning it into theatre.',
    },
    Tula: {
      tone: 'Your Mars chapter wears a Libra style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Libra mood colour how you do it; prefer be brave without turning it into theatre.',
    },
    Vrischika: {
      tone: 'Your Mars chapter wears a Scorpio style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Scorpio mood colour how you do it; prefer be brave without turning it into theatre.',
    },
    Dhanu: {
      tone: 'Your Mars chapter wears a Sagittarius style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Sagittarius mood colour how you do it; prefer be brave without turning it into theatre.',
    },
    Makara: {
      tone: 'Your Mars chapter wears a Capricorn style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Capricorn mood colour how you do it; prefer be brave without turning it into theatre.',
    },
    Kumbha: {
      tone: 'Your Mars chapter wears a Aquarius style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Aquarius mood colour how you do it; prefer be brave without turning it into theatre.',
    },
    Meena: {
      tone: 'Your Mars chapter wears a Pisces style — you push hard for what you want, with that sign’s tempo.',
      advice: 'Put the heat into one clean effort, not a public fight. Let a Pisces mood colour how you do it; prefer be brave without turning it into theatre.',
    },
  },
  Mercury: {
    Mesha: {
      tone: 'Your Mercury chapter wears a Aries style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Aries mood colour how you do it; prefer use wit to understand, not to win.',
    },
    Vrishabha: {
      tone: 'Your Mercury chapter wears a Taurus style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Taurus mood colour how you do it; prefer use wit to understand, not to win.',
    },
    Mithuna: {
      tone: 'Your Mercury chapter wears a Gemini style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Gemini mood colour how you do it; prefer use wit to understand, not to win.',
    },
    Karka: {
      tone: 'Your Mercury chapter wears a Cancer style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Cancer mood colour how you do it; prefer use wit to understand, not to win.',
    },
    Simha: {
      tone: 'Your Mercury chapter wears a Leo style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Leo mood colour how you do it; prefer use wit to understand, not to win.',
    },
    Kanya: {
      tone: 'Your Mercury chapter wears a Virgo style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Virgo mood colour how you do it; prefer use wit to understand, not to win.',
    },
    Tula: {
      tone: 'Your Mercury chapter wears a Libra style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Libra mood colour how you do it; prefer use wit to understand, not to win.',
    },
    Vrischika: {
      tone: 'Your Mercury chapter wears a Scorpio style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Scorpio mood colour how you do it; prefer use wit to understand, not to win.',
    },
    Dhanu: {
      tone: 'Your Mercury chapter wears a Sagittarius style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Sagittarius mood colour how you do it; prefer use wit to understand, not to win.',
    },
    Makara: {
      tone: 'Your Mercury chapter wears a Capricorn style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Capricorn mood colour how you do it; prefer use wit to understand, not to win.',
    },
    Kumbha: {
      tone: 'Your Mercury chapter wears a Aquarius style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Aquarius mood colour how you do it; prefer use wit to understand, not to win.',
    },
    Meena: {
      tone: 'Your Mercury chapter wears a Pisces style — your mind wants to talk, learn, and sort details, with that sign’s tempo.',
      advice: 'Write it down, then send the short clear version. Let a Pisces mood colour how you do it; prefer use wit to understand, not to win.',
    },
  },
  Jupiter: {
    Mesha: {
      tone: 'Your Jupiter chapter wears a Aries style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Aries mood colour how you do it; prefer keep faith curious, not preachy.',
    },
    Vrishabha: {
      tone: 'Your Jupiter chapter wears a Taurus style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Taurus mood colour how you do it; prefer keep faith curious, not preachy.',
    },
    Mithuna: {
      tone: 'Your Jupiter chapter wears a Gemini style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Gemini mood colour how you do it; prefer keep faith curious, not preachy.',
    },
    Karka: {
      tone: 'Your Jupiter chapter wears a Cancer style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Cancer mood colour how you do it; prefer keep faith curious, not preachy.',
    },
    Simha: {
      tone: 'Your Jupiter chapter wears a Leo style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Leo mood colour how you do it; prefer keep faith curious, not preachy.',
    },
    Kanya: {
      tone: 'Your Jupiter chapter wears a Virgo style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Virgo mood colour how you do it; prefer keep faith curious, not preachy.',
    },
    Tula: {
      tone: 'Your Jupiter chapter wears a Libra style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Libra mood colour how you do it; prefer keep faith curious, not preachy.',
    },
    Vrischika: {
      tone: 'Your Jupiter chapter wears a Scorpio style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Scorpio mood colour how you do it; prefer keep faith curious, not preachy.',
    },
    Dhanu: {
      tone: 'Your Jupiter chapter wears a Sagittarius style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Sagittarius mood colour how you do it; prefer keep faith curious, not preachy.',
    },
    Makara: {
      tone: 'Your Jupiter chapter wears a Capricorn style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Capricorn mood colour how you do it; prefer keep faith curious, not preachy.',
    },
    Kumbha: {
      tone: 'Your Jupiter chapter wears a Aquarius style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Aquarius mood colour how you do it; prefer keep faith curious, not preachy.',
    },
    Meena: {
      tone: 'Your Jupiter chapter wears a Pisces style — you look for meaning, growth, and a wider frame, with that sign’s tempo.',
      advice: 'Learn something or help someone — skip the lecture. Let a Pisces mood colour how you do it; prefer keep faith curious, not preachy.',
    },
  },
  Venus: {
    Mesha: {
      tone: 'Your Venus chapter wears a Aries style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Aries mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
    Vrishabha: {
      tone: 'Your Venus chapter wears a Taurus style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Taurus mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
    Mithuna: {
      tone: 'Your Venus chapter wears a Gemini style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Gemini mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
    Karka: {
      tone: 'Your Venus chapter wears a Cancer style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Cancer mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
    Simha: {
      tone: 'Your Venus chapter wears a Leo style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Leo mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
    Kanya: {
      tone: 'Your Venus chapter wears a Virgo style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Virgo mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
    Tula: {
      tone: 'Your Venus chapter wears a Libra style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Libra mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
    Vrischika: {
      tone: 'Your Venus chapter wears a Scorpio style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Scorpio mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
    Dhanu: {
      tone: 'Your Venus chapter wears a Sagittarius style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Sagittarius mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
    Makara: {
      tone: 'Your Venus chapter wears a Capricorn style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Capricorn mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
    Kumbha: {
      tone: 'Your Venus chapter wears a Aquarius style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Aquarius mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
    Meena: {
      tone: 'Your Venus chapter wears a Pisces style — you care about comfort, beauty, and how you bond, with that sign’s tempo.',
      advice: 'Choose kindness and one beautiful detail on purpose. Let a Pisces mood colour how you do it; prefer practise harmony — don’t just assume it.',
    },
  },
  Saturn: {
    Mesha: {
      tone: 'Your Saturn chapter wears a Aries style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Aries mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
    Vrishabha: {
      tone: 'Your Saturn chapter wears a Taurus style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Taurus mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
    Mithuna: {
      tone: 'Your Saturn chapter wears a Gemini style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Gemini mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
    Karka: {
      tone: 'Your Saturn chapter wears a Cancer style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Cancer mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
    Simha: {
      tone: 'Your Saturn chapter wears a Leo style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Leo mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
    Kanya: {
      tone: 'Your Saturn chapter wears a Virgo style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Virgo mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
    Tula: {
      tone: 'Your Saturn chapter wears a Libra style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Libra mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
    Vrischika: {
      tone: 'Your Saturn chapter wears a Scorpio style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Scorpio mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
    Dhanu: {
      tone: 'Your Saturn chapter wears a Sagittarius style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Sagittarius mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
    Makara: {
      tone: 'Your Saturn chapter wears a Capricorn style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Capricorn mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
    Kumbha: {
      tone: 'Your Saturn chapter wears a Aquarius style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Aquarius mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
    Meena: {
      tone: 'Your Saturn chapter wears a Pisces style — you build patiently and finish what others abandon, with that sign’s tempo.',
      advice: 'Take one sober step instead of a grand promise. Let a Pisces mood colour how you do it; prefer stay disciplined but leave room to breathe.',
    },
  },
  Rahu: {
    Mesha: {
      tone: 'Your Rahu chapter wears a Aries style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Aries mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
    Vrishabha: {
      tone: 'Your Rahu chapter wears a Taurus style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Taurus mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
    Mithuna: {
      tone: 'Your Rahu chapter wears a Gemini style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Gemini mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
    Karka: {
      tone: 'Your Rahu chapter wears a Cancer style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Cancer mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
    Simha: {
      tone: 'Your Rahu chapter wears a Leo style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Leo mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
    Kanya: {
      tone: 'Your Rahu chapter wears a Virgo style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Virgo mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
    Tula: {
      tone: 'Your Rahu chapter wears a Libra style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Libra mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
    Vrischika: {
      tone: 'Your Rahu chapter wears a Scorpio style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Scorpio mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
    Dhanu: {
      tone: 'Your Rahu chapter wears a Sagittarius style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Sagittarius mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
    Makara: {
      tone: 'Your Rahu chapter wears a Capricorn style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Capricorn mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
    Kumbha: {
      tone: 'Your Rahu chapter wears a Aquarius style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Aquarius mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
    Meena: {
      tone: 'Your Rahu chapter wears a Pisces style — you hunger for the new and unfamiliar, with that sign’s tempo.',
      advice: 'Follow curiosity with a timer and a reality check. Let a Pisces mood colour how you do it; prefer aim for novelty with both feet on the ground.',
    },
  },
  Ketu: {
    Mesha: {
      tone: 'Your Ketu chapter wears a Aries style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Aries mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
    Vrishabha: {
      tone: 'Your Ketu chapter wears a Taurus style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Taurus mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
    Mithuna: {
      tone: 'Your Ketu chapter wears a Gemini style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Gemini mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
    Karka: {
      tone: 'Your Ketu chapter wears a Cancer style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Cancer mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
    Simha: {
      tone: 'Your Ketu chapter wears a Leo style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Leo mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
    Kanya: {
      tone: 'Your Ketu chapter wears a Virgo style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Virgo mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
    Tula: {
      tone: 'Your Ketu chapter wears a Libra style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Libra mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
    Vrischika: {
      tone: 'Your Ketu chapter wears a Scorpio style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Scorpio mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
    Dhanu: {
      tone: 'Your Ketu chapter wears a Sagittarius style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Sagittarius mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
    Makara: {
      tone: 'Your Ketu chapter wears a Capricorn style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Capricorn mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
    Kumbha: {
      tone: 'Your Ketu chapter wears a Aquarius style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Aquarius mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
    Meena: {
      tone: 'Your Ketu chapter wears a Pisces style — you already know some things sideways and like to simplify, with that sign’s tempo.',
      advice: 'Drop one extra obligation and keep the lesson. Let a Pisces mood colour how you do it; prefer share the insight without disappearing from the room.',
    },
  },
};

export function dashaBhavaRule(lord: GrahaId | string, house: number): DashaBhavaRule | null {
  return DASHA_BHAVA[lord as GrahaId]?.[house] ?? null;
}
export function dashaRashiRule(lord: GrahaId | string, rashi: string): DashaBhavaRule | null {
  return DASHA_RASHI[lord as GrahaId]?.[rashi] ?? null;
}
export function dashaBhavaCount(): number {
  let n = 0;
  for (const g of Object.keys(DASHA_BHAVA) as GrahaId[]) n += Object.keys(DASHA_BHAVA[g]).length;
  return n;
}
export function dashaRashiCount(): number {
  let n = 0;
  for (const g of Object.keys(DASHA_RASHI) as GrahaId[]) n += Object.keys(DASHA_RASHI[g]).length;
  return n;
}
