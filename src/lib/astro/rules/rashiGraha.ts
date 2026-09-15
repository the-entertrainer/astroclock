import type { GrahaId } from '../constants';

export interface GrahaRashiRule {
  temperament: string;
  advice: string;
}

/** 9 grahas × 12 rashis — temperament + advice */
export const RASHI_GRAHA: Record<GrahaId, Record<string, GrahaRashiRule>> = {
  Sun: {
    Mesha: {
      temperament: 'In Aries, Sun\'s identity heat and vitality move head-on and initiatory. People may notice clean initiative coloured by authentic shine that lifts others.',
      advice: 'Sun in Aries works best when you start before perfect clarity, then course-correct. Keep authentic shine that lifts others in view, and sidestep waiting rooms and fog.',
    },
    Vrishabha: {
      temperament: 'Sun through Taurus dresses where you renew a sense of self in a steady, sensory, and loyalty-minded style. The kinder form — authentic shine that lifts others — still wants room to breathe.',
      advice: 'Useful Taurus move for Sun: build trust and comfort before big pivots. Own one clear act of presence, then share the airtime.',
    },
    Mithuna: {
      temperament: 'When Sun occupies Gemini, expect identity heat and vitality to favour lively intelligence. The default tempo is through exchange and ideas, not a verdict.',
      advice: 'With Sun in Gemini, own one clear act of presence, then share the airtime. Practically: pick one channel to finish. Watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, Sun\'s identity heat and vitality move from feeling and belonging. People may notice loyal care coloured by authentic shine that lifts others.',
      advice: 'Sun in Cancer works best when you secure the base before leading. Keep authentic shine that lifts others in view, and sidestep absorbing every room unchecked.',
    },
    Simha: {
      temperament: 'Sun through Leo dresses where you renew a sense of self in a warm, proud, and creatively centred style. The kinder form — authentic shine that lifts others — still wants room to breathe.',
      advice: 'Useful Leo move for Sun: ask for recognition without apology, then share the spotlight. Own one clear act of presence, then share the airtime.',
    },
    Kanya: {
      temperament: 'When Sun occupies Virgo, expect identity heat and vitality to favour useful precision. The default tempo is through competence and craft, not a verdict.',
      advice: 'With Sun in Virgo, own one clear act of presence, then share the airtime. Practically: soften critique with one kind sentence first. Watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, Sun\'s identity heat and vitality move by weighing and relating. People may notice negotiated grace coloured by authentic shine that lifts others.',
      advice: 'Sun in Libra works best when you name your preference before negotiating. Keep authentic shine that lifts others in view, and sidestep discord that lands in the body.',
    },
    Vrischika: {
      temperament: 'Sun through Scorpio dresses where you renew a sense of self in a intense, private, and all-or-nothing with trust style. The kinder form — authentic shine that lifts others — still wants room to breathe.',
      advice: 'Useful Scorpio move for Sun: choose honesty over half-open doors. Own one clear act of presence, then share the airtime.',
    },
    Dhanu: {
      temperament: 'When Sun occupies Sagittarius, expect identity heat and vitality to favour wide-angle faith. The default tempo is toward quest and belief, not a verdict.',
      advice: 'With Sun in Sagittarius, own one clear act of presence, then share the airtime. Practically: keep a horizon so petty loops do not shrink kindness. Watch dogma that freezes the quest.',
    },
    Makara: {
      temperament: 'In Capricorn, Sun\'s identity heat and vitality move with structure and time. People may notice earned endurance coloured by authentic shine that lifts others.',
      advice: 'Sun in Capricorn works best when you schedule softness so the climb is not a cage. Keep authentic shine that lifts others in view, and sidestep status without rest.',
    },
    Kumbha: {
      temperament: 'Sun through Aquarius dresses where you renew a sense of self in a future-minded, friendship-toned, and systems-odd style. The kinder form — authentic shine that lifts others — still wants room to breathe.',
      advice: 'Useful Aquarius move for Sun: invest in belonging on your terms. Own one clear act of presence, then share the airtime.',
    },
    Meena: {
      temperament: 'When Sun occupies Pisces, expect identity heat and vitality to favour compassionate imagination. The default tempo is through atmosphere and compassion, not a verdict.',
      advice: 'With Sun in Pisces, own one clear act of presence, then share the airtime. Practically: choose company like climate; keep one daily vessel. Watch dissolving without a shore.',
    },
  },
  Moon: {
    Mesha: {
      temperament: 'In Aries, Moon\'s moods, needs, and emotional weather move head-on and initiatory. People may notice clean initiative coloured by care that includes asking for harbour.',
      advice: 'Moon in Aries works best when you start before perfect clarity, then course-correct. Keep care that includes asking for harbour in view, and sidestep waiting rooms and fog.',
    },
    Vrishabha: {
      temperament: 'Moon through Taurus dresses how feelings arrive and settle in a steady, sensory, and loyalty-minded style. The kinder form — care that includes asking for harbour — still wants room to breathe.',
      advice: 'Useful Taurus move for Moon: build trust and comfort before big pivots. Check food, water, and a soft landing before big talks.',
    },
    Mithuna: {
      temperament: 'When Moon occupies Gemini, expect moods, needs, and emotional weather to favour lively intelligence. The default tempo is through exchange and ideas, not a verdict.',
      advice: 'With Moon in Gemini, check food, water, and a soft landing before big talks. Practically: pick one channel to finish. Watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, Moon\'s moods, needs, and emotional weather move from feeling and belonging. People may notice loyal care coloured by care that includes asking for harbour.',
      advice: 'Moon in Cancer works best when you secure the base before leading. Keep care that includes asking for harbour in view, and sidestep absorbing every room unchecked.',
    },
    Simha: {
      temperament: 'Moon through Leo dresses how feelings arrive and settle in a warm, proud, and creatively centred style. The kinder form — care that includes asking for harbour — still wants room to breathe.',
      advice: 'Useful Leo move for Moon: ask for recognition without apology, then share the spotlight. Check food, water, and a soft landing before big talks.',
    },
    Kanya: {
      temperament: 'When Moon occupies Virgo, expect moods, needs, and emotional weather to favour useful precision. The default tempo is through competence and craft, not a verdict.',
      advice: 'With Moon in Virgo, check food, water, and a soft landing before big talks. Practically: soften critique with one kind sentence first. Watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, Moon\'s moods, needs, and emotional weather move by weighing and relating. People may notice negotiated grace coloured by care that includes asking for harbour.',
      advice: 'Moon in Libra works best when you name your preference before negotiating. Keep care that includes asking for harbour in view, and sidestep discord that lands in the body.',
    },
    Vrischika: {
      temperament: 'Moon through Scorpio dresses how feelings arrive and settle in a intense, private, and all-or-nothing with trust style. The kinder form — care that includes asking for harbour — still wants room to breathe.',
      advice: 'Useful Scorpio move for Moon: choose honesty over half-open doors. Check food, water, and a soft landing before big talks.',
    },
    Dhanu: {
      temperament: 'When Moon occupies Sagittarius, expect moods, needs, and emotional weather to favour wide-angle faith. The default tempo is toward quest and belief, not a verdict.',
      advice: 'With Moon in Sagittarius, check food, water, and a soft landing before big talks. Practically: keep a horizon so petty loops do not shrink kindness. Watch dogma that freezes the quest.',
    },
    Makara: {
      temperament: 'In Capricorn, Moon\'s moods, needs, and emotional weather move with structure and time. People may notice earned endurance coloured by care that includes asking for harbour.',
      advice: 'Moon in Capricorn works best when you schedule softness so the climb is not a cage. Keep care that includes asking for harbour in view, and sidestep status without rest.',
    },
    Kumbha: {
      temperament: 'Moon through Aquarius dresses how feelings arrive and settle in a future-minded, friendship-toned, and systems-odd style. The kinder form — care that includes asking for harbour — still wants room to breathe.',
      advice: 'Useful Aquarius move for Moon: invest in belonging on your terms. Check food, water, and a soft landing before big talks.',
    },
    Meena: {
      temperament: 'When Moon occupies Pisces, expect moods, needs, and emotional weather to favour compassionate imagination. The default tempo is through atmosphere and compassion, not a verdict.',
      advice: 'With Moon in Pisces, check food, water, and a soft landing before big talks. Practically: choose company like climate; keep one daily vessel. Watch dissolving without a shore.',
    },
  },
  Mars: {
    Mesha: {
      temperament: 'In Aries, Mars\'s courage, drive, and directed heat move head-on and initiatory. People may notice clean initiative coloured by protective courage without theatre.',
      advice: 'Mars in Aries works best when you start before perfect clarity, then course-correct. Keep protective courage without theatre in view, and sidestep waiting rooms and fog.',
    },
    Vrishabha: {
      temperament: 'Mars through Taurus dresses how you push for what you want in a steady, sensory, and loyalty-minded style. The kinder form — protective courage without theatre — still wants room to breathe.',
      advice: 'Useful Taurus move for Mars: build trust and comfort before big pivots. Aim heat into one clean effort; skip audience fights.',
    },
    Mithuna: {
      temperament: 'When Mars occupies Gemini, expect courage, drive, and directed heat to favour lively intelligence. The default tempo is through exchange and ideas, not a verdict.',
      advice: 'With Mars in Gemini, aim heat into one clean effort; skip audience fights. Practically: pick one channel to finish. Watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, Mars\'s courage, drive, and directed heat move from feeling and belonging. People may notice loyal care coloured by protective courage without theatre.',
      advice: 'Mars in Cancer works best when you secure the base before leading. Keep protective courage without theatre in view, and sidestep absorbing every room unchecked.',
    },
    Simha: {
      temperament: 'Mars through Leo dresses how you push for what you want in a warm, proud, and creatively centred style. The kinder form — protective courage without theatre — still wants room to breathe.',
      advice: 'Useful Leo move for Mars: ask for recognition without apology, then share the spotlight. Aim heat into one clean effort; skip audience fights.',
    },
    Kanya: {
      temperament: 'When Mars occupies Virgo, expect courage, drive, and directed heat to favour useful precision. The default tempo is through competence and craft, not a verdict.',
      advice: 'With Mars in Virgo, aim heat into one clean effort; skip audience fights. Practically: soften critique with one kind sentence first. Watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, Mars\'s courage, drive, and directed heat move by weighing and relating. People may notice negotiated grace coloured by protective courage without theatre.',
      advice: 'Mars in Libra works best when you name your preference before negotiating. Keep protective courage without theatre in view, and sidestep discord that lands in the body.',
    },
    Vrischika: {
      temperament: 'Mars through Scorpio dresses how you push for what you want in a intense, private, and all-or-nothing with trust style. The kinder form — protective courage without theatre — still wants room to breathe.',
      advice: 'Useful Scorpio move for Mars: choose honesty over half-open doors. Aim heat into one clean effort; skip audience fights.',
    },
    Dhanu: {
      temperament: 'When Mars occupies Sagittarius, expect courage, drive, and directed heat to favour wide-angle faith. The default tempo is toward quest and belief, not a verdict.',
      advice: 'With Mars in Sagittarius, aim heat into one clean effort; skip audience fights. Practically: keep a horizon so petty loops do not shrink kindness. Watch dogma that freezes the quest.',
    },
    Makara: {
      temperament: 'In Capricorn, Mars\'s courage, drive, and directed heat move with structure and time. People may notice earned endurance coloured by protective courage without theatre.',
      advice: 'Mars in Capricorn works best when you schedule softness so the climb is not a cage. Keep protective courage without theatre in view, and sidestep status without rest.',
    },
    Kumbha: {
      temperament: 'Mars through Aquarius dresses how you push for what you want in a future-minded, friendship-toned, and systems-odd style. The kinder form — protective courage without theatre — still wants room to breathe.',
      advice: 'Useful Aquarius move for Mars: invest in belonging on your terms. Aim heat into one clean effort; skip audience fights.',
    },
    Meena: {
      temperament: 'When Mars occupies Pisces, expect courage, drive, and directed heat to favour compassionate imagination. The default tempo is through atmosphere and compassion, not a verdict.',
      advice: 'With Mars in Pisces, aim heat into one clean effort; skip audience fights. Practically: choose company like climate; keep one daily vessel. Watch dissolving without a shore.',
    },
  },
  Mercury: {
    Mesha: {
      temperament: 'In Aries, Mercury\'s thinking, talk, and skill traffic move head-on and initiatory. People may notice clean initiative coloured by wit in service of understanding.',
      advice: 'Mercury in Aries works best when you start before perfect clarity, then course-correct. Keep wit in service of understanding in view, and sidestep waiting rooms and fog.',
    },
    Vrishabha: {
      temperament: 'Mercury through Taurus dresses how you learn, argue, and message in a steady, sensory, and loyalty-minded style. The kinder form — wit in service of understanding — still wants room to breathe.',
      advice: 'Useful Taurus move for Mercury: build trust and comfort before big pivots. Write it down, then send the short clear version.',
    },
    Mithuna: {
      temperament: 'When Mercury occupies Gemini, expect thinking, talk, and skill traffic to favour lively intelligence. The default tempo is through exchange and ideas, not a verdict.',
      advice: 'With Mercury in Gemini, write it down, then send the short clear version. Practically: pick one channel to finish. Watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, Mercury\'s thinking, talk, and skill traffic move from feeling and belonging. People may notice loyal care coloured by wit in service of understanding.',
      advice: 'Mercury in Cancer works best when you secure the base before leading. Keep wit in service of understanding in view, and sidestep absorbing every room unchecked.',
    },
    Simha: {
      temperament: 'Mercury through Leo dresses how you learn, argue, and message in a warm, proud, and creatively centred style. The kinder form — wit in service of understanding — still wants room to breathe.',
      advice: 'Useful Leo move for Mercury: ask for recognition without apology, then share the spotlight. Write it down, then send the short clear version.',
    },
    Kanya: {
      temperament: 'When Mercury occupies Virgo, expect thinking, talk, and skill traffic to favour useful precision. The default tempo is through competence and craft, not a verdict.',
      advice: 'With Mercury in Virgo, write it down, then send the short clear version. Practically: soften critique with one kind sentence first. Watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, Mercury\'s thinking, talk, and skill traffic move by weighing and relating. People may notice negotiated grace coloured by wit in service of understanding.',
      advice: 'Mercury in Libra works best when you name your preference before negotiating. Keep wit in service of understanding in view, and sidestep discord that lands in the body.',
    },
    Vrischika: {
      temperament: 'Mercury through Scorpio dresses how you learn, argue, and message in a intense, private, and all-or-nothing with trust style. The kinder form — wit in service of understanding — still wants room to breathe.',
      advice: 'Useful Scorpio move for Mercury: choose honesty over half-open doors. Write it down, then send the short clear version.',
    },
    Dhanu: {
      temperament: 'When Mercury occupies Sagittarius, expect thinking, talk, and skill traffic to favour wide-angle faith. The default tempo is toward quest and belief, not a verdict.',
      advice: 'With Mercury in Sagittarius, write it down, then send the short clear version. Practically: keep a horizon so petty loops do not shrink kindness. Watch dogma that freezes the quest.',
    },
    Makara: {
      temperament: 'In Capricorn, Mercury\'s thinking, talk, and skill traffic move with structure and time. People may notice earned endurance coloured by wit in service of understanding.',
      advice: 'Mercury in Capricorn works best when you schedule softness so the climb is not a cage. Keep wit in service of understanding in view, and sidestep status without rest.',
    },
    Kumbha: {
      temperament: 'Mercury through Aquarius dresses how you learn, argue, and message in a future-minded, friendship-toned, and systems-odd style. The kinder form — wit in service of understanding — still wants room to breathe.',
      advice: 'Useful Aquarius move for Mercury: invest in belonging on your terms. Write it down, then send the short clear version.',
    },
    Meena: {
      temperament: 'When Mercury occupies Pisces, expect thinking, talk, and skill traffic to favour compassionate imagination. The default tempo is through atmosphere and compassion, not a verdict.',
      advice: 'With Mercury in Pisces, write it down, then send the short clear version. Practically: choose company like climate; keep one daily vessel. Watch dissolving without a shore.',
    },
  },
  Jupiter: {
    Mesha: {
      temperament: 'In Aries, Jupiter\'s growth, meaning, and generous stretch move head-on and initiatory. People may notice clean initiative coloured by faith that stays curious.',
      advice: 'Jupiter in Aries works best when you start before perfect clarity, then course-correct. Keep faith that stays curious in view, and sidestep waiting rooms and fog.',
    },
    Vrishabha: {
      temperament: 'Jupiter through Taurus dresses where grace and teachers show up in a steady, sensory, and loyalty-minded style. The kinder form — faith that stays curious — still wants room to breathe.',
      advice: 'Useful Taurus move for Jupiter: build trust and comfort before big pivots. Widen the frame with learning or generosity; avoid lecturing.',
    },
    Mithuna: {
      temperament: 'When Jupiter occupies Gemini, expect growth, meaning, and generous stretch to favour lively intelligence. The default tempo is through exchange and ideas, not a verdict.',
      advice: 'With Jupiter in Gemini, widen the frame with learning or generosity; avoid lecturing. Practically: pick one channel to finish. Watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, Jupiter\'s growth, meaning, and generous stretch move from feeling and belonging. People may notice loyal care coloured by faith that stays curious.',
      advice: 'Jupiter in Cancer works best when you secure the base before leading. Keep faith that stays curious in view, and sidestep absorbing every room unchecked.',
    },
    Simha: {
      temperament: 'Jupiter through Leo dresses where grace and teachers show up in a warm, proud, and creatively centred style. The kinder form — faith that stays curious — still wants room to breathe.',
      advice: 'Useful Leo move for Jupiter: ask for recognition without apology, then share the spotlight. Widen the frame with learning or generosity; avoid lecturing.',
    },
    Kanya: {
      temperament: 'When Jupiter occupies Virgo, expect growth, meaning, and generous stretch to favour useful precision. The default tempo is through competence and craft, not a verdict.',
      advice: 'With Jupiter in Virgo, widen the frame with learning or generosity; avoid lecturing. Practically: soften critique with one kind sentence first. Watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, Jupiter\'s growth, meaning, and generous stretch move by weighing and relating. People may notice negotiated grace coloured by faith that stays curious.',
      advice: 'Jupiter in Libra works best when you name your preference before negotiating. Keep faith that stays curious in view, and sidestep discord that lands in the body.',
    },
    Vrischika: {
      temperament: 'Jupiter through Scorpio dresses where grace and teachers show up in a intense, private, and all-or-nothing with trust style. The kinder form — faith that stays curious — still wants room to breathe.',
      advice: 'Useful Scorpio move for Jupiter: choose honesty over half-open doors. Widen the frame with learning or generosity; avoid lecturing.',
    },
    Dhanu: {
      temperament: 'When Jupiter occupies Sagittarius, expect growth, meaning, and generous stretch to favour wide-angle faith. The default tempo is toward quest and belief, not a verdict.',
      advice: 'With Jupiter in Sagittarius, widen the frame with learning or generosity; avoid lecturing. Practically: keep a horizon so petty loops do not shrink kindness. Watch dogma that freezes the quest.',
    },
    Makara: {
      temperament: 'In Capricorn, Jupiter\'s growth, meaning, and generous stretch move with structure and time. People may notice earned endurance coloured by faith that stays curious.',
      advice: 'Jupiter in Capricorn works best when you schedule softness so the climb is not a cage. Keep faith that stays curious in view, and sidestep status without rest.',
    },
    Kumbha: {
      temperament: 'Jupiter through Aquarius dresses where grace and teachers show up in a future-minded, friendship-toned, and systems-odd style. The kinder form — faith that stays curious — still wants room to breathe.',
      advice: 'Useful Aquarius move for Jupiter: invest in belonging on your terms. Widen the frame with learning or generosity; avoid lecturing.',
    },
    Meena: {
      temperament: 'When Jupiter occupies Pisces, expect growth, meaning, and generous stretch to favour compassionate imagination. The default tempo is through atmosphere and compassion, not a verdict.',
      advice: 'With Jupiter in Pisces, widen the frame with learning or generosity; avoid lecturing. Practically: choose company like climate; keep one daily vessel. Watch dissolving without a shore.',
    },
  },
  Venus: {
    Mesha: {
      temperament: 'In Aries, Venus\'s bond, taste, pleasure, and harmony move head-on and initiatory. People may notice clean initiative coloured by harmony practiced, not assumed.',
      advice: 'Venus in Aries works best when you start before perfect clarity, then course-correct. Keep harmony practiced, not assumed in view, and sidestep waiting rooms and fog.',
    },
    Vrishabha: {
      temperament: 'Venus through Taurus dresses how you bond and what you find beautiful in a steady, sensory, and loyalty-minded style. The kinder form — harmony practiced, not assumed — still wants room to breathe.',
      advice: 'Useful Taurus move for Venus: build trust and comfort before big pivots. Choose beauty and kindness on purpose.',
    },
    Mithuna: {
      temperament: 'When Venus occupies Gemini, expect bond, taste, pleasure, and harmony to favour lively intelligence. The default tempo is through exchange and ideas, not a verdict.',
      advice: 'With Venus in Gemini, choose beauty and kindness on purpose. Practically: pick one channel to finish. Watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, Venus\'s bond, taste, pleasure, and harmony move from feeling and belonging. People may notice loyal care coloured by harmony practiced, not assumed.',
      advice: 'Venus in Cancer works best when you secure the base before leading. Keep harmony practiced, not assumed in view, and sidestep absorbing every room unchecked.',
    },
    Simha: {
      temperament: 'Venus through Leo dresses how you bond and what you find beautiful in a warm, proud, and creatively centred style. The kinder form — harmony practiced, not assumed — still wants room to breathe.',
      advice: 'Useful Leo move for Venus: ask for recognition without apology, then share the spotlight. Choose beauty and kindness on purpose.',
    },
    Kanya: {
      temperament: 'When Venus occupies Virgo, expect bond, taste, pleasure, and harmony to favour useful precision. The default tempo is through competence and craft, not a verdict.',
      advice: 'With Venus in Virgo, choose beauty and kindness on purpose. Practically: soften critique with one kind sentence first. Watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, Venus\'s bond, taste, pleasure, and harmony move by weighing and relating. People may notice negotiated grace coloured by harmony practiced, not assumed.',
      advice: 'Venus in Libra works best when you name your preference before negotiating. Keep harmony practiced, not assumed in view, and sidestep discord that lands in the body.',
    },
    Vrischika: {
      temperament: 'Venus through Scorpio dresses how you bond and what you find beautiful in a intense, private, and all-or-nothing with trust style. The kinder form — harmony practiced, not assumed — still wants room to breathe.',
      advice: 'Useful Scorpio move for Venus: choose honesty over half-open doors. Choose beauty and kindness on purpose.',
    },
    Dhanu: {
      temperament: 'When Venus occupies Sagittarius, expect bond, taste, pleasure, and harmony to favour wide-angle faith. The default tempo is toward quest and belief, not a verdict.',
      advice: 'With Venus in Sagittarius, choose beauty and kindness on purpose. Practically: keep a horizon so petty loops do not shrink kindness. Watch dogma that freezes the quest.',
    },
    Makara: {
      temperament: 'In Capricorn, Venus\'s bond, taste, pleasure, and harmony move with structure and time. People may notice earned endurance coloured by harmony practiced, not assumed.',
      advice: 'Venus in Capricorn works best when you schedule softness so the climb is not a cage. Keep harmony practiced, not assumed in view, and sidestep status without rest.',
    },
    Kumbha: {
      temperament: 'Venus through Aquarius dresses how you bond and what you find beautiful in a future-minded, friendship-toned, and systems-odd style. The kinder form — harmony practiced, not assumed — still wants room to breathe.',
      advice: 'Useful Aquarius move for Venus: invest in belonging on your terms. Choose beauty and kindness on purpose.',
    },
    Meena: {
      temperament: 'When Venus occupies Pisces, expect bond, taste, pleasure, and harmony to favour compassionate imagination. The default tempo is through atmosphere and compassion, not a verdict.',
      advice: 'With Venus in Pisces, choose beauty and kindness on purpose. Practically: choose company like climate; keep one daily vessel. Watch dissolving without a shore.',
    },
  },
  Saturn: {
    Mesha: {
      temperament: 'In Aries, Saturn\'s duration, structure, and sober accountability move head-on and initiatory. People may notice clean initiative coloured by discipline that leaves room to breathe.',
      advice: 'Saturn in Aries works best when you start before perfect clarity, then course-correct. Keep discipline that leaves room to breathe in view, and sidestep waiting rooms and fog.',
    },
    Vrishabha: {
      temperament: 'Saturn through Taurus dresses where time is the teacher in a steady, sensory, and loyalty-minded style. The kinder form — discipline that leaves room to breathe — still wants room to breathe.',
      advice: 'Useful Taurus move for Saturn: build trust and comfort before big pivots. One sober step beats a grand promise.',
    },
    Mithuna: {
      temperament: 'When Saturn occupies Gemini, expect duration, structure, and sober accountability to favour lively intelligence. The default tempo is through exchange and ideas, not a verdict.',
      advice: 'With Saturn in Gemini, one sober step beats a grand promise. Practically: pick one channel to finish. Watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, Saturn\'s duration, structure, and sober accountability move from feeling and belonging. People may notice loyal care coloured by discipline that leaves room to breathe.',
      advice: 'Saturn in Cancer works best when you secure the base before leading. Keep discipline that leaves room to breathe in view, and sidestep absorbing every room unchecked.',
    },
    Simha: {
      temperament: 'Saturn through Leo dresses where time is the teacher in a warm, proud, and creatively centred style. The kinder form — discipline that leaves room to breathe — still wants room to breathe.',
      advice: 'Useful Leo move for Saturn: ask for recognition without apology, then share the spotlight. One sober step beats a grand promise.',
    },
    Kanya: {
      temperament: 'When Saturn occupies Virgo, expect duration, structure, and sober accountability to favour useful precision. The default tempo is through competence and craft, not a verdict.',
      advice: 'With Saturn in Virgo, one sober step beats a grand promise. Practically: soften critique with one kind sentence first. Watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, Saturn\'s duration, structure, and sober accountability move by weighing and relating. People may notice negotiated grace coloured by discipline that leaves room to breathe.',
      advice: 'Saturn in Libra works best when you name your preference before negotiating. Keep discipline that leaves room to breathe in view, and sidestep discord that lands in the body.',
    },
    Vrischika: {
      temperament: 'Saturn through Scorpio dresses where time is the teacher in a intense, private, and all-or-nothing with trust style. The kinder form — discipline that leaves room to breathe — still wants room to breathe.',
      advice: 'Useful Scorpio move for Saturn: choose honesty over half-open doors. One sober step beats a grand promise.',
    },
    Dhanu: {
      temperament: 'When Saturn occupies Sagittarius, expect duration, structure, and sober accountability to favour wide-angle faith. The default tempo is toward quest and belief, not a verdict.',
      advice: 'With Saturn in Sagittarius, one sober step beats a grand promise. Practically: keep a horizon so petty loops do not shrink kindness. Watch dogma that freezes the quest.',
    },
    Makara: {
      temperament: 'In Capricorn, Saturn\'s duration, structure, and sober accountability move with structure and time. People may notice earned endurance coloured by discipline that leaves room to breathe.',
      advice: 'Saturn in Capricorn works best when you schedule softness so the climb is not a cage. Keep discipline that leaves room to breathe in view, and sidestep status without rest.',
    },
    Kumbha: {
      temperament: 'Saturn through Aquarius dresses where time is the teacher in a future-minded, friendship-toned, and systems-odd style. The kinder form — discipline that leaves room to breathe — still wants room to breathe.',
      advice: 'Useful Aquarius move for Saturn: invest in belonging on your terms. One sober step beats a grand promise.',
    },
    Meena: {
      temperament: 'When Saturn occupies Pisces, expect duration, structure, and sober accountability to favour compassionate imagination. The default tempo is through atmosphere and compassion, not a verdict.',
      advice: 'With Saturn in Pisces, one sober step beats a grand promise. Practically: choose company like climate; keep one daily vessel. Watch dissolving without a shore.',
    },
  },
  Rahu: {
    Mesha: {
      temperament: 'In Aries, Rahu\'s appetite for the unfamiliar and unconventional move head-on and initiatory. People may notice clean initiative coloured by novel aim with feet still on ground.',
      advice: 'Rahu in Aries works best when you start before perfect clarity, then course-correct. Keep novel aim with feet still on ground in view, and sidestep waiting rooms and fog.',
    },
    Vrishabha: {
      temperament: 'Rahu through Taurus dresses where hunger for the new concentrates in a steady, sensory, and loyalty-minded style. The kinder form — novel aim with feet still on ground — still wants room to breathe.',
      advice: 'Useful Taurus move for Rahu: build trust and comfort before big pivots. Curiosity yes — obsession needs a timer and a reality check.',
    },
    Mithuna: {
      temperament: 'When Rahu occupies Gemini, expect appetite for the unfamiliar and unconventional to favour lively intelligence. The default tempo is through exchange and ideas, not a verdict.',
      advice: 'With Rahu in Gemini, curiosity yes — obsession needs a timer and a reality check. Practically: pick one channel to finish. Watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, Rahu\'s appetite for the unfamiliar and unconventional move from feeling and belonging. People may notice loyal care coloured by novel aim with feet still on ground.',
      advice: 'Rahu in Cancer works best when you secure the base before leading. Keep novel aim with feet still on ground in view, and sidestep absorbing every room unchecked.',
    },
    Simha: {
      temperament: 'Rahu through Leo dresses where hunger for the new concentrates in a warm, proud, and creatively centred style. The kinder form — novel aim with feet still on ground — still wants room to breathe.',
      advice: 'Useful Leo move for Rahu: ask for recognition without apology, then share the spotlight. Curiosity yes — obsession needs a timer and a reality check.',
    },
    Kanya: {
      temperament: 'When Rahu occupies Virgo, expect appetite for the unfamiliar and unconventional to favour useful precision. The default tempo is through competence and craft, not a verdict.',
      advice: 'With Rahu in Virgo, curiosity yes — obsession needs a timer and a reality check. Practically: soften critique with one kind sentence first. Watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, Rahu\'s appetite for the unfamiliar and unconventional move by weighing and relating. People may notice negotiated grace coloured by novel aim with feet still on ground.',
      advice: 'Rahu in Libra works best when you name your preference before negotiating. Keep novel aim with feet still on ground in view, and sidestep discord that lands in the body.',
    },
    Vrischika: {
      temperament: 'Rahu through Scorpio dresses where hunger for the new concentrates in a intense, private, and all-or-nothing with trust style. The kinder form — novel aim with feet still on ground — still wants room to breathe.',
      advice: 'Useful Scorpio move for Rahu: choose honesty over half-open doors. Curiosity yes — obsession needs a timer and a reality check.',
    },
    Dhanu: {
      temperament: 'When Rahu occupies Sagittarius, expect appetite for the unfamiliar and unconventional to favour wide-angle faith. The default tempo is toward quest and belief, not a verdict.',
      advice: 'With Rahu in Sagittarius, curiosity yes — obsession needs a timer and a reality check. Practically: keep a horizon so petty loops do not shrink kindness. Watch dogma that freezes the quest.',
    },
    Makara: {
      temperament: 'In Capricorn, Rahu\'s appetite for the unfamiliar and unconventional move with structure and time. People may notice earned endurance coloured by novel aim with feet still on ground.',
      advice: 'Rahu in Capricorn works best when you schedule softness so the climb is not a cage. Keep novel aim with feet still on ground in view, and sidestep status without rest.',
    },
    Kumbha: {
      temperament: 'Rahu through Aquarius dresses where hunger for the new concentrates in a future-minded, friendship-toned, and systems-odd style. The kinder form — novel aim with feet still on ground — still wants room to breathe.',
      advice: 'Useful Aquarius move for Rahu: invest in belonging on your terms. Curiosity yes — obsession needs a timer and a reality check.',
    },
    Meena: {
      temperament: 'When Rahu occupies Pisces, expect appetite for the unfamiliar and unconventional to favour compassionate imagination. The default tempo is through atmosphere and compassion, not a verdict.',
      advice: 'With Rahu in Pisces, curiosity yes — obsession needs a timer and a reality check. Practically: choose company like climate; keep one daily vessel. Watch dissolving without a shore.',
    },
  },
  Ketu: {
    Mesha: {
      temperament: 'In Aries, Ketu\'s release, distill, and sideways knowing move head-on and initiatory. People may notice clean initiative coloured by insight without vanishing from the room.',
      advice: 'Ketu in Aries works best when you start before perfect clarity, then course-correct. Keep insight without vanishing from the room in view, and sidestep waiting rooms and fog.',
    },
    Vrishabha: {
      temperament: 'Ketu through Taurus dresses what you already know sideways and may over-release in a steady, sensory, and loyalty-minded style. The kinder form — insight without vanishing from the room — still wants room to breathe.',
      advice: 'Useful Taurus move for Ketu: build trust and comfort before big pivots. Release one extra obligation and keep the distilled lesson.',
    },
    Mithuna: {
      temperament: 'When Ketu occupies Gemini, expect release, distill, and sideways knowing to favour lively intelligence. The default tempo is through exchange and ideas, not a verdict.',
      advice: 'With Ketu in Gemini, release one extra obligation and keep the distilled lesson. Practically: pick one channel to finish. Watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, Ketu\'s release, distill, and sideways knowing move from feeling and belonging. People may notice loyal care coloured by insight without vanishing from the room.',
      advice: 'Ketu in Cancer works best when you secure the base before leading. Keep insight without vanishing from the room in view, and sidestep absorbing every room unchecked.',
    },
    Simha: {
      temperament: 'Ketu through Leo dresses what you already know sideways and may over-release in a warm, proud, and creatively centred style. The kinder form — insight without vanishing from the room — still wants room to breathe.',
      advice: 'Useful Leo move for Ketu: ask for recognition without apology, then share the spotlight. Release one extra obligation and keep the distilled lesson.',
    },
    Kanya: {
      temperament: 'When Ketu occupies Virgo, expect release, distill, and sideways knowing to favour useful precision. The default tempo is through competence and craft, not a verdict.',
      advice: 'With Ketu in Virgo, release one extra obligation and keep the distilled lesson. Practically: soften critique with one kind sentence first. Watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, Ketu\'s release, distill, and sideways knowing move by weighing and relating. People may notice negotiated grace coloured by insight without vanishing from the room.',
      advice: 'Ketu in Libra works best when you name your preference before negotiating. Keep insight without vanishing from the room in view, and sidestep discord that lands in the body.',
    },
    Vrischika: {
      temperament: 'Ketu through Scorpio dresses what you already know sideways and may over-release in a intense, private, and all-or-nothing with trust style. The kinder form — insight without vanishing from the room — still wants room to breathe.',
      advice: 'Useful Scorpio move for Ketu: choose honesty over half-open doors. Release one extra obligation and keep the distilled lesson.',
    },
    Dhanu: {
      temperament: 'When Ketu occupies Sagittarius, expect release, distill, and sideways knowing to favour wide-angle faith. The default tempo is toward quest and belief, not a verdict.',
      advice: 'With Ketu in Sagittarius, release one extra obligation and keep the distilled lesson. Practically: keep a horizon so petty loops do not shrink kindness. Watch dogma that freezes the quest.',
    },
    Makara: {
      temperament: 'In Capricorn, Ketu\'s release, distill, and sideways knowing move with structure and time. People may notice earned endurance coloured by insight without vanishing from the room.',
      advice: 'Ketu in Capricorn works best when you schedule softness so the climb is not a cage. Keep insight without vanishing from the room in view, and sidestep status without rest.',
    },
    Kumbha: {
      temperament: 'Ketu through Aquarius dresses what you already know sideways and may over-release in a future-minded, friendship-toned, and systems-odd style. The kinder form — insight without vanishing from the room — still wants room to breathe.',
      advice: 'Useful Aquarius move for Ketu: invest in belonging on your terms. Release one extra obligation and keep the distilled lesson.',
    },
    Meena: {
      temperament: 'When Ketu occupies Pisces, expect release, distill, and sideways knowing to favour compassionate imagination. The default tempo is through atmosphere and compassion, not a verdict.',
      advice: 'With Ketu in Pisces, release one extra obligation and keep the distilled lesson. Practically: choose company like climate; keep one daily vessel. Watch dissolving without a shore.',
    },
  },
};

export function grahaRashiRule(graha: GrahaId, rashi: string): GrahaRashiRule | null {
  return RASHI_GRAHA[graha]?.[rashi] ?? null;
}
