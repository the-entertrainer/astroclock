import type { GrahaId } from '../constants';

export interface GrahaNakRule {
  temperament: string;
  advice: string;
}

export const GRAHA_NAKSHATRA: Record<GrahaId, Record<string, GrahaNakRule>> = {
  Sun: {
    Ashwini: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You’re in a quick-start mood — begin, then fix as you go.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Start something small and correct it in motion rather than waiting for perfect.',
    },
    Bharani: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You’re holding creative pressure until something real can land.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Carry one deliverable all the way instead of dumping the weight early.',
    },
    Krittika: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You want sharp clarity — fog bothers you today.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Make one clean decision. Aim the edge; don’t scorch people.',
    },
    Rohini: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You’re drawn to grow and attract around one chosen thing.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Pick one garden. Skip scatter.',
    },
    Mrigashira: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You’re scanning options — curiosity is loud.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Seek, then pick a trail before nightfall.',
    },
    Ardra: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Insight may arrive after a storm — tear-down before rebuild.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Clear one honest mess before you rebuild.',
    },
    Punarvasu: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Second chances feel available — renewal is in the air.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Take a return without shame, then aim it freshly.',
    },
    Pushya: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Care and timing matter more than heroics.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Nourish on a schedule — food, rest, people.',
    },
    Ashlesha: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You’re reading undercurrents — intimacy needs ethics.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Keep honesty tight when you sense the hidden.',
    },
    Magha: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Dignity and rightful presence are on your mind.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Stand tall without theatre.',
    },
    'Purva Phalguni': {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Pleasure, play, and creative ease want airtime.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Finish one delight; ease is fuel, not escape.',
    },
    'Uttara Phalguni': {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You want alliances and help that actually stick.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Ally in ways that endure past the vibe.',
    },
    Hasta: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Your hands and practical cleverness want a job.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Fix something tangible.',
    },
    Chitra: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You want beauty designed into form — unfinished messes irritate.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Close one ugly unfinished loop with care.',
    },
    Swati: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You need room to move — freedom keeps you kind.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Protect a little independence so you don’t snap.',
    },
    Vishakha: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Two goals may tug — heat wants a single summit.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Pick which goal gets the energy today.',
    },
    Anuradha: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Loyal orbit around people and causes soothes you.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Regulate through friendship, not isolation.',
    },
    Jyeshtha: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You’re protective of earned skill and quiet rank.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Guard competence; skip loud proving.',
    },
    Mula: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You want roots, not polish — honesty first.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Dig once, cleanly; don’t excavate the whole yard.',
    },
    'Purva Ashadha': {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Bold early push — declare, then prove.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Say it, then take one proving step.',
    },
    'Uttara Ashadha': {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You want wins that last — structure and allies.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Build something durable with help.',
    },
    Shravana: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Listening wants to lead speaking.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Hear fully before you decide or reply.',
    },
    Dhanishta: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Rhythm and teammates unlock you.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Sync, then time your burst.',
    },
    Shatabhisha: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Odd, systems-level fixes appeal to you.',
      advice: 'Own one clear act of presence, then share the spotlight.',
    },
    'Purva Bhadrapada': {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Ideals run hot — aim the fire.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Stand for something without burning the room.',
    },
    'Uttara Bhadrapada': {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. Patient depth — wisdom from the long wait.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Bring one deep insight up slowly.',
    },
    Revati: {
      temperament: 'When Sun sits here, you want to be seen as capable and to lead. You’re shepherding a last stretch gently.',
      advice: 'Own one clear act of presence, then share the spotlight. Also: Finish with care; guide someone across.',
    },
  },
  Moon: {
    Ashwini: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You’re in a quick-start mood — begin, then fix as you go.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Start something small and correct it in motion rather than waiting for perfect.',
    },
    Bharani: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You’re holding creative pressure until something real can land.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Carry one deliverable all the way instead of dumping the weight early.',
    },
    Krittika: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You want sharp clarity — fog bothers you today.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Make one clean decision. Aim the edge; don’t scorch people.',
    },
    Rohini: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You’re drawn to grow and attract around one chosen thing.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Pick one garden. Skip scatter.',
    },
    Mrigashira: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You’re scanning options — curiosity is loud.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Seek, then pick a trail before nightfall.',
    },
    Ardra: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Insight may arrive after a storm — tear-down before rebuild.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Clear one honest mess before you rebuild.',
    },
    Punarvasu: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Second chances feel available — renewal is in the air.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Take a return without shame, then aim it freshly.',
    },
    Pushya: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Care and timing matter more than heroics.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Nourish on a schedule — food, rest, people.',
    },
    Ashlesha: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You’re reading undercurrents — intimacy needs ethics.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Keep honesty tight when you sense the hidden.',
    },
    Magha: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Dignity and rightful presence are on your mind.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Stand tall without theatre.',
    },
    'Purva Phalguni': {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Pleasure, play, and creative ease want airtime.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Finish one delight; ease is fuel, not escape.',
    },
    'Uttara Phalguni': {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You want alliances and help that actually stick.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Ally in ways that endure past the vibe.',
    },
    Hasta: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Your hands and practical cleverness want a job.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Fix something tangible.',
    },
    Chitra: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You want beauty designed into form — unfinished messes irritate.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Close one ugly unfinished loop with care.',
    },
    Swati: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You need room to move — freedom keeps you kind.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Protect a little independence so you don’t snap.',
    },
    Vishakha: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Two goals may tug — heat wants a single summit.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Pick which goal gets the energy today.',
    },
    Anuradha: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Loyal orbit around people and causes soothes you.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Regulate through friendship, not isolation.',
    },
    Jyeshtha: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You’re protective of earned skill and quiet rank.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Guard competence; skip loud proving.',
    },
    Mula: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You want roots, not polish — honesty first.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Dig once, cleanly; don’t excavate the whole yard.',
    },
    'Purva Ashadha': {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Bold early push — declare, then prove.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Say it, then take one proving step.',
    },
    'Uttara Ashadha': {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You want wins that last — structure and allies.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Build something durable with help.',
    },
    Shravana: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Listening wants to lead speaking.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Hear fully before you decide or reply.',
    },
    Dhanishta: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Rhythm and teammates unlock you.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Sync, then time your burst.',
    },
    Shatabhisha: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Odd, systems-level fixes appeal to you.',
      advice: 'Eat, drink water, and find a soft landing before hard talks.',
    },
    'Purva Bhadrapada': {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Ideals run hot — aim the fire.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Stand for something without burning the room.',
    },
    'Uttara Bhadrapada': {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. Patient depth — wisdom from the long wait.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Bring one deep insight up slowly.',
    },
    Revati: {
      temperament: 'When Moon sits here, your mood and need for care shape how the day feels. You’re shepherding a last stretch gently.',
      advice: 'Eat, drink water, and find a soft landing before hard talks. Also: Finish with care; guide someone across.',
    },
  },
  Mars: {
    Ashwini: {
      temperament: 'When Mars sits here, you push hard for what you want. You’re in a quick-start mood — begin, then fix as you go.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Start something small and correct it in motion rather than waiting for perfect.',
    },
    Bharani: {
      temperament: 'When Mars sits here, you push hard for what you want. You’re holding creative pressure until something real can land.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Carry one deliverable all the way instead of dumping the weight early.',
    },
    Krittika: {
      temperament: 'When Mars sits here, you push hard for what you want. You want sharp clarity — fog bothers you today.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Make one clean decision. Aim the edge; don’t scorch people.',
    },
    Rohini: {
      temperament: 'When Mars sits here, you push hard for what you want. You’re drawn to grow and attract around one chosen thing.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Pick one garden. Skip scatter.',
    },
    Mrigashira: {
      temperament: 'When Mars sits here, you push hard for what you want. You’re scanning options — curiosity is loud.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Seek, then pick a trail before nightfall.',
    },
    Ardra: {
      temperament: 'When Mars sits here, you push hard for what you want. Insight may arrive after a storm — tear-down before rebuild.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Clear one honest mess before you rebuild.',
    },
    Punarvasu: {
      temperament: 'When Mars sits here, you push hard for what you want. Second chances feel available — renewal is in the air.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Take a return without shame, then aim it freshly.',
    },
    Pushya: {
      temperament: 'When Mars sits here, you push hard for what you want. Care and timing matter more than heroics.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Nourish on a schedule — food, rest, people.',
    },
    Ashlesha: {
      temperament: 'When Mars sits here, you push hard for what you want. You’re reading undercurrents — intimacy needs ethics.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Keep honesty tight when you sense the hidden.',
    },
    Magha: {
      temperament: 'When Mars sits here, you push hard for what you want. Dignity and rightful presence are on your mind.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Stand tall without theatre.',
    },
    'Purva Phalguni': {
      temperament: 'When Mars sits here, you push hard for what you want. Pleasure, play, and creative ease want airtime.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Finish one delight; ease is fuel, not escape.',
    },
    'Uttara Phalguni': {
      temperament: 'When Mars sits here, you push hard for what you want. You want alliances and help that actually stick.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Ally in ways that endure past the vibe.',
    },
    Hasta: {
      temperament: 'When Mars sits here, you push hard for what you want. Your hands and practical cleverness want a job.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Fix something tangible.',
    },
    Chitra: {
      temperament: 'When Mars sits here, you push hard for what you want. You want beauty designed into form — unfinished messes irritate.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Close one ugly unfinished loop with care.',
    },
    Swati: {
      temperament: 'When Mars sits here, you push hard for what you want. You need room to move — freedom keeps you kind.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Protect a little independence so you don’t snap.',
    },
    Vishakha: {
      temperament: 'When Mars sits here, you push hard for what you want. Two goals may tug — heat wants a single summit.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Pick which goal gets the energy today.',
    },
    Anuradha: {
      temperament: 'When Mars sits here, you push hard for what you want. Loyal orbit around people and causes soothes you.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Regulate through friendship, not isolation.',
    },
    Jyeshtha: {
      temperament: 'When Mars sits here, you push hard for what you want. You’re protective of earned skill and quiet rank.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Guard competence; skip loud proving.',
    },
    Mula: {
      temperament: 'When Mars sits here, you push hard for what you want. You want roots, not polish — honesty first.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Dig once, cleanly; don’t excavate the whole yard.',
    },
    'Purva Ashadha': {
      temperament: 'When Mars sits here, you push hard for what you want. Bold early push — declare, then prove.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Say it, then take one proving step.',
    },
    'Uttara Ashadha': {
      temperament: 'When Mars sits here, you push hard for what you want. You want wins that last — structure and allies.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Build something durable with help.',
    },
    Shravana: {
      temperament: 'When Mars sits here, you push hard for what you want. Listening wants to lead speaking.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Hear fully before you decide or reply.',
    },
    Dhanishta: {
      temperament: 'When Mars sits here, you push hard for what you want. Rhythm and teammates unlock you.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Sync, then time your burst.',
    },
    Shatabhisha: {
      temperament: 'When Mars sits here, you push hard for what you want. Odd, systems-level fixes appeal to you.',
      advice: 'Put the heat into one clean effort, not a public fight.',
    },
    'Purva Bhadrapada': {
      temperament: 'When Mars sits here, you push hard for what you want. Ideals run hot — aim the fire.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Stand for something without burning the room.',
    },
    'Uttara Bhadrapada': {
      temperament: 'When Mars sits here, you push hard for what you want. Patient depth — wisdom from the long wait.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Bring one deep insight up slowly.',
    },
    Revati: {
      temperament: 'When Mars sits here, you push hard for what you want. You’re shepherding a last stretch gently.',
      advice: 'Put the heat into one clean effort, not a public fight. Also: Finish with care; guide someone across.',
    },
  },
  Mercury: {
    Ashwini: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You’re in a quick-start mood — begin, then fix as you go.',
      advice: 'Write it down, then send the short clear version. Also: Start something small and correct it in motion rather than waiting for perfect.',
    },
    Bharani: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You’re holding creative pressure until something real can land.',
      advice: 'Write it down, then send the short clear version. Also: Carry one deliverable all the way instead of dumping the weight early.',
    },
    Krittika: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You want sharp clarity — fog bothers you today.',
      advice: 'Write it down, then send the short clear version. Also: Make one clean decision. Aim the edge; don’t scorch people.',
    },
    Rohini: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You’re drawn to grow and attract around one chosen thing.',
      advice: 'Write it down, then send the short clear version. Also: Pick one garden. Skip scatter.',
    },
    Mrigashira: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You’re scanning options — curiosity is loud.',
      advice: 'Write it down, then send the short clear version. Also: Seek, then pick a trail before nightfall.',
    },
    Ardra: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Insight may arrive after a storm — tear-down before rebuild.',
      advice: 'Write it down, then send the short clear version. Also: Clear one honest mess before you rebuild.',
    },
    Punarvasu: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Second chances feel available — renewal is in the air.',
      advice: 'Write it down, then send the short clear version. Also: Take a return without shame, then aim it freshly.',
    },
    Pushya: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Care and timing matter more than heroics.',
      advice: 'Write it down, then send the short clear version. Also: Nourish on a schedule — food, rest, people.',
    },
    Ashlesha: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You’re reading undercurrents — intimacy needs ethics.',
      advice: 'Write it down, then send the short clear version. Also: Keep honesty tight when you sense the hidden.',
    },
    Magha: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Dignity and rightful presence are on your mind.',
      advice: 'Write it down, then send the short clear version. Also: Stand tall without theatre.',
    },
    'Purva Phalguni': {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Pleasure, play, and creative ease want airtime.',
      advice: 'Write it down, then send the short clear version. Also: Finish one delight; ease is fuel, not escape.',
    },
    'Uttara Phalguni': {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You want alliances and help that actually stick.',
      advice: 'Write it down, then send the short clear version. Also: Ally in ways that endure past the vibe.',
    },
    Hasta: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Your hands and practical cleverness want a job.',
      advice: 'Write it down, then send the short clear version. Also: Fix something tangible.',
    },
    Chitra: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You want beauty designed into form — unfinished messes irritate.',
      advice: 'Write it down, then send the short clear version. Also: Close one ugly unfinished loop with care.',
    },
    Swati: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You need room to move — freedom keeps you kind.',
      advice: 'Write it down, then send the short clear version. Also: Protect a little independence so you don’t snap.',
    },
    Vishakha: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Two goals may tug — heat wants a single summit.',
      advice: 'Write it down, then send the short clear version. Also: Pick which goal gets the energy today.',
    },
    Anuradha: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Loyal orbit around people and causes soothes you.',
      advice: 'Write it down, then send the short clear version. Also: Regulate through friendship, not isolation.',
    },
    Jyeshtha: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You’re protective of earned skill and quiet rank.',
      advice: 'Write it down, then send the short clear version. Also: Guard competence; skip loud proving.',
    },
    Mula: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You want roots, not polish — honesty first.',
      advice: 'Write it down, then send the short clear version. Also: Dig once, cleanly; don’t excavate the whole yard.',
    },
    'Purva Ashadha': {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Bold early push — declare, then prove.',
      advice: 'Write it down, then send the short clear version. Also: Say it, then take one proving step.',
    },
    'Uttara Ashadha': {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You want wins that last — structure and allies.',
      advice: 'Write it down, then send the short clear version. Also: Build something durable with help.',
    },
    Shravana: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Listening wants to lead speaking.',
      advice: 'Write it down, then send the short clear version. Also: Hear fully before you decide or reply.',
    },
    Dhanishta: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Rhythm and teammates unlock you.',
      advice: 'Write it down, then send the short clear version. Also: Sync, then time your burst.',
    },
    Shatabhisha: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Odd, systems-level fixes appeal to you.',
      advice: 'Write it down, then send the short clear version.',
    },
    'Purva Bhadrapada': {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Ideals run hot — aim the fire.',
      advice: 'Write it down, then send the short clear version. Also: Stand for something without burning the room.',
    },
    'Uttara Bhadrapada': {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. Patient depth — wisdom from the long wait.',
      advice: 'Write it down, then send the short clear version. Also: Bring one deep insight up slowly.',
    },
    Revati: {
      temperament: 'When Mercury sits here, your mind wants to talk, learn, and sort details. You’re shepherding a last stretch gently.',
      advice: 'Write it down, then send the short clear version. Also: Finish with care; guide someone across.',
    },
  },
  Jupiter: {
    Ashwini: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You’re in a quick-start mood — begin, then fix as you go.',
      advice: 'Learn something or help someone — skip the lecture. Also: Start something small and correct it in motion rather than waiting for perfect.',
    },
    Bharani: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You’re holding creative pressure until something real can land.',
      advice: 'Learn something or help someone — skip the lecture. Also: Carry one deliverable all the way instead of dumping the weight early.',
    },
    Krittika: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You want sharp clarity — fog bothers you today.',
      advice: 'Learn something or help someone — skip the lecture. Also: Make one clean decision. Aim the edge; don’t scorch people.',
    },
    Rohini: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You’re drawn to grow and attract around one chosen thing.',
      advice: 'Learn something or help someone — skip the lecture. Also: Pick one garden. Skip scatter.',
    },
    Mrigashira: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You’re scanning options — curiosity is loud.',
      advice: 'Learn something or help someone — skip the lecture. Also: Seek, then pick a trail before nightfall.',
    },
    Ardra: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Insight may arrive after a storm — tear-down before rebuild.',
      advice: 'Learn something or help someone — skip the lecture. Also: Clear one honest mess before you rebuild.',
    },
    Punarvasu: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Second chances feel available — renewal is in the air.',
      advice: 'Learn something or help someone — skip the lecture. Also: Take a return without shame, then aim it freshly.',
    },
    Pushya: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Care and timing matter more than heroics.',
      advice: 'Learn something or help someone — skip the lecture. Also: Nourish on a schedule — food, rest, people.',
    },
    Ashlesha: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You’re reading undercurrents — intimacy needs ethics.',
      advice: 'Learn something or help someone — skip the lecture. Also: Keep honesty tight when you sense the hidden.',
    },
    Magha: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Dignity and rightful presence are on your mind.',
      advice: 'Learn something or help someone — skip the lecture. Also: Stand tall without theatre.',
    },
    'Purva Phalguni': {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Pleasure, play, and creative ease want airtime.',
      advice: 'Learn something or help someone — skip the lecture. Also: Finish one delight; ease is fuel, not escape.',
    },
    'Uttara Phalguni': {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You want alliances and help that actually stick.',
      advice: 'Learn something or help someone — skip the lecture. Also: Ally in ways that endure past the vibe.',
    },
    Hasta: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Your hands and practical cleverness want a job.',
      advice: 'Learn something or help someone — skip the lecture. Also: Fix something tangible.',
    },
    Chitra: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You want beauty designed into form — unfinished messes irritate.',
      advice: 'Learn something or help someone — skip the lecture. Also: Close one ugly unfinished loop with care.',
    },
    Swati: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You need room to move — freedom keeps you kind.',
      advice: 'Learn something or help someone — skip the lecture. Also: Protect a little independence so you don’t snap.',
    },
    Vishakha: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Two goals may tug — heat wants a single summit.',
      advice: 'Learn something or help someone — skip the lecture. Also: Pick which goal gets the energy today.',
    },
    Anuradha: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Loyal orbit around people and causes soothes you.',
      advice: 'Learn something or help someone — skip the lecture. Also: Regulate through friendship, not isolation.',
    },
    Jyeshtha: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You’re protective of earned skill and quiet rank.',
      advice: 'Learn something or help someone — skip the lecture. Also: Guard competence; skip loud proving.',
    },
    Mula: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You want roots, not polish — honesty first.',
      advice: 'Learn something or help someone — skip the lecture. Also: Dig once, cleanly; don’t excavate the whole yard.',
    },
    'Purva Ashadha': {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Bold early push — declare, then prove.',
      advice: 'Learn something or help someone — skip the lecture. Also: Say it, then take one proving step.',
    },
    'Uttara Ashadha': {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You want wins that last — structure and allies.',
      advice: 'Learn something or help someone — skip the lecture. Also: Build something durable with help.',
    },
    Shravana: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Listening wants to lead speaking.',
      advice: 'Learn something or help someone — skip the lecture. Also: Hear fully before you decide or reply.',
    },
    Dhanishta: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Rhythm and teammates unlock you.',
      advice: 'Learn something or help someone — skip the lecture. Also: Sync, then time your burst.',
    },
    Shatabhisha: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Odd, systems-level fixes appeal to you.',
      advice: 'Learn something or help someone — skip the lecture.',
    },
    'Purva Bhadrapada': {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Ideals run hot — aim the fire.',
      advice: 'Learn something or help someone — skip the lecture. Also: Stand for something without burning the room.',
    },
    'Uttara Bhadrapada': {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. Patient depth — wisdom from the long wait.',
      advice: 'Learn something or help someone — skip the lecture. Also: Bring one deep insight up slowly.',
    },
    Revati: {
      temperament: 'When Jupiter sits here, you look for meaning, growth, and a wider frame. You’re shepherding a last stretch gently.',
      advice: 'Learn something or help someone — skip the lecture. Also: Finish with care; guide someone across.',
    },
  },
  Venus: {
    Ashwini: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You’re in a quick-start mood — begin, then fix as you go.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Start something small and correct it in motion rather than waiting for perfect.',
    },
    Bharani: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You’re holding creative pressure until something real can land.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Carry one deliverable all the way instead of dumping the weight early.',
    },
    Krittika: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You want sharp clarity — fog bothers you today.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Make one clean decision. Aim the edge; don’t scorch people.',
    },
    Rohini: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You’re drawn to grow and attract around one chosen thing.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Pick one garden. Skip scatter.',
    },
    Mrigashira: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You’re scanning options — curiosity is loud.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Seek, then pick a trail before nightfall.',
    },
    Ardra: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Insight may arrive after a storm — tear-down before rebuild.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Clear one honest mess before you rebuild.',
    },
    Punarvasu: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Second chances feel available — renewal is in the air.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Take a return without shame, then aim it freshly.',
    },
    Pushya: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Care and timing matter more than heroics.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Nourish on a schedule — food, rest, people.',
    },
    Ashlesha: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You’re reading undercurrents — intimacy needs ethics.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Keep honesty tight when you sense the hidden.',
    },
    Magha: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Dignity and rightful presence are on your mind.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Stand tall without theatre.',
    },
    'Purva Phalguni': {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Pleasure, play, and creative ease want airtime.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Finish one delight; ease is fuel, not escape.',
    },
    'Uttara Phalguni': {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You want alliances and help that actually stick.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Ally in ways that endure past the vibe.',
    },
    Hasta: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Your hands and practical cleverness want a job.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Fix something tangible.',
    },
    Chitra: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You want beauty designed into form — unfinished messes irritate.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Close one ugly unfinished loop with care.',
    },
    Swati: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You need room to move — freedom keeps you kind.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Protect a little independence so you don’t snap.',
    },
    Vishakha: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Two goals may tug — heat wants a single summit.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Pick which goal gets the energy today.',
    },
    Anuradha: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Loyal orbit around people and causes soothes you.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Regulate through friendship, not isolation.',
    },
    Jyeshtha: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You’re protective of earned skill and quiet rank.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Guard competence; skip loud proving.',
    },
    Mula: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You want roots, not polish — honesty first.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Dig once, cleanly; don’t excavate the whole yard.',
    },
    'Purva Ashadha': {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Bold early push — declare, then prove.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Say it, then take one proving step.',
    },
    'Uttara Ashadha': {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You want wins that last — structure and allies.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Build something durable with help.',
    },
    Shravana: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Listening wants to lead speaking.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Hear fully before you decide or reply.',
    },
    Dhanishta: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Rhythm and teammates unlock you.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Sync, then time your burst.',
    },
    Shatabhisha: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Odd, systems-level fixes appeal to you.',
      advice: 'Choose kindness and one beautiful detail on purpose.',
    },
    'Purva Bhadrapada': {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Ideals run hot — aim the fire.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Stand for something without burning the room.',
    },
    'Uttara Bhadrapada': {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. Patient depth — wisdom from the long wait.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Bring one deep insight up slowly.',
    },
    Revati: {
      temperament: 'When Venus sits here, you care about comfort, beauty, and how you bond. You’re shepherding a last stretch gently.',
      advice: 'Choose kindness and one beautiful detail on purpose. Also: Finish with care; guide someone across.',
    },
  },
  Saturn: {
    Ashwini: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You’re in a quick-start mood — begin, then fix as you go.',
      advice: 'Take one sober step instead of a grand promise. Also: Start something small and correct it in motion rather than waiting for perfect.',
    },
    Bharani: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You’re holding creative pressure until something real can land.',
      advice: 'Take one sober step instead of a grand promise. Also: Carry one deliverable all the way instead of dumping the weight early.',
    },
    Krittika: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You want sharp clarity — fog bothers you today.',
      advice: 'Take one sober step instead of a grand promise. Also: Make one clean decision. Aim the edge; don’t scorch people.',
    },
    Rohini: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You’re drawn to grow and attract around one chosen thing.',
      advice: 'Take one sober step instead of a grand promise. Also: Pick one garden. Skip scatter.',
    },
    Mrigashira: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You’re scanning options — curiosity is loud.',
      advice: 'Take one sober step instead of a grand promise. Also: Seek, then pick a trail before nightfall.',
    },
    Ardra: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Insight may arrive after a storm — tear-down before rebuild.',
      advice: 'Take one sober step instead of a grand promise. Also: Clear one honest mess before you rebuild.',
    },
    Punarvasu: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Second chances feel available — renewal is in the air.',
      advice: 'Take one sober step instead of a grand promise. Also: Take a return without shame, then aim it freshly.',
    },
    Pushya: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Care and timing matter more than heroics.',
      advice: 'Take one sober step instead of a grand promise. Also: Nourish on a schedule — food, rest, people.',
    },
    Ashlesha: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You’re reading undercurrents — intimacy needs ethics.',
      advice: 'Take one sober step instead of a grand promise. Also: Keep honesty tight when you sense the hidden.',
    },
    Magha: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Dignity and rightful presence are on your mind.',
      advice: 'Take one sober step instead of a grand promise. Also: Stand tall without theatre.',
    },
    'Purva Phalguni': {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Pleasure, play, and creative ease want airtime.',
      advice: 'Take one sober step instead of a grand promise. Also: Finish one delight; ease is fuel, not escape.',
    },
    'Uttara Phalguni': {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You want alliances and help that actually stick.',
      advice: 'Take one sober step instead of a grand promise. Also: Ally in ways that endure past the vibe.',
    },
    Hasta: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Your hands and practical cleverness want a job.',
      advice: 'Take one sober step instead of a grand promise. Also: Fix something tangible.',
    },
    Chitra: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You want beauty designed into form — unfinished messes irritate.',
      advice: 'Take one sober step instead of a grand promise. Also: Close one ugly unfinished loop with care.',
    },
    Swati: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You need room to move — freedom keeps you kind.',
      advice: 'Take one sober step instead of a grand promise. Also: Protect a little independence so you don’t snap.',
    },
    Vishakha: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Two goals may tug — heat wants a single summit.',
      advice: 'Take one sober step instead of a grand promise. Also: Pick which goal gets the energy today.',
    },
    Anuradha: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Loyal orbit around people and causes soothes you.',
      advice: 'Take one sober step instead of a grand promise. Also: Regulate through friendship, not isolation.',
    },
    Jyeshtha: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You’re protective of earned skill and quiet rank.',
      advice: 'Take one sober step instead of a grand promise. Also: Guard competence; skip loud proving.',
    },
    Mula: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You want roots, not polish — honesty first.',
      advice: 'Take one sober step instead of a grand promise. Also: Dig once, cleanly; don’t excavate the whole yard.',
    },
    'Purva Ashadha': {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Bold early push — declare, then prove.',
      advice: 'Take one sober step instead of a grand promise. Also: Say it, then take one proving step.',
    },
    'Uttara Ashadha': {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You want wins that last — structure and allies.',
      advice: 'Take one sober step instead of a grand promise. Also: Build something durable with help.',
    },
    Shravana: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Listening wants to lead speaking.',
      advice: 'Take one sober step instead of a grand promise. Also: Hear fully before you decide or reply.',
    },
    Dhanishta: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Rhythm and teammates unlock you.',
      advice: 'Take one sober step instead of a grand promise. Also: Sync, then time your burst.',
    },
    Shatabhisha: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Odd, systems-level fixes appeal to you.',
      advice: 'Take one sober step instead of a grand promise.',
    },
    'Purva Bhadrapada': {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Ideals run hot — aim the fire.',
      advice: 'Take one sober step instead of a grand promise. Also: Stand for something without burning the room.',
    },
    'Uttara Bhadrapada': {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. Patient depth — wisdom from the long wait.',
      advice: 'Take one sober step instead of a grand promise. Also: Bring one deep insight up slowly.',
    },
    Revati: {
      temperament: 'When Saturn sits here, you build patiently and finish what others abandon. You’re shepherding a last stretch gently.',
      advice: 'Take one sober step instead of a grand promise. Also: Finish with care; guide someone across.',
    },
  },
  Rahu: {
    Ashwini: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You’re in a quick-start mood — begin, then fix as you go.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Start something small and correct it in motion rather than waiting for perfect.',
    },
    Bharani: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You’re holding creative pressure until something real can land.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Carry one deliverable all the way instead of dumping the weight early.',
    },
    Krittika: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You want sharp clarity — fog bothers you today.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Make one clean decision. Aim the edge; don’t scorch people.',
    },
    Rohini: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You’re drawn to grow and attract around one chosen thing.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Pick one garden. Skip scatter.',
    },
    Mrigashira: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You’re scanning options — curiosity is loud.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Seek, then pick a trail before nightfall.',
    },
    Ardra: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Insight may arrive after a storm — tear-down before rebuild.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Clear one honest mess before you rebuild.',
    },
    Punarvasu: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Second chances feel available — renewal is in the air.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Take a return without shame, then aim it freshly.',
    },
    Pushya: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Care and timing matter more than heroics.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Nourish on a schedule — food, rest, people.',
    },
    Ashlesha: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You’re reading undercurrents — intimacy needs ethics.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Keep honesty tight when you sense the hidden.',
    },
    Magha: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Dignity and rightful presence are on your mind.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Stand tall without theatre.',
    },
    'Purva Phalguni': {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Pleasure, play, and creative ease want airtime.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Finish one delight; ease is fuel, not escape.',
    },
    'Uttara Phalguni': {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You want alliances and help that actually stick.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Ally in ways that endure past the vibe.',
    },
    Hasta: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Your hands and practical cleverness want a job.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Fix something tangible.',
    },
    Chitra: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You want beauty designed into form — unfinished messes irritate.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Close one ugly unfinished loop with care.',
    },
    Swati: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You need room to move — freedom keeps you kind.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Protect a little independence so you don’t snap.',
    },
    Vishakha: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Two goals may tug — heat wants a single summit.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Pick which goal gets the energy today.',
    },
    Anuradha: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Loyal orbit around people and causes soothes you.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Regulate through friendship, not isolation.',
    },
    Jyeshtha: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You’re protective of earned skill and quiet rank.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Guard competence; skip loud proving.',
    },
    Mula: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You want roots, not polish — honesty first.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Dig once, cleanly; don’t excavate the whole yard.',
    },
    'Purva Ashadha': {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Bold early push — declare, then prove.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Say it, then take one proving step.',
    },
    'Uttara Ashadha': {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You want wins that last — structure and allies.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Build something durable with help.',
    },
    Shravana: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Listening wants to lead speaking.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Hear fully before you decide or reply.',
    },
    Dhanishta: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Rhythm and teammates unlock you.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Sync, then time your burst.',
    },
    Shatabhisha: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Odd, systems-level fixes appeal to you.',
      advice: 'Follow curiosity with a timer and a reality check.',
    },
    'Purva Bhadrapada': {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Ideals run hot — aim the fire.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Stand for something without burning the room.',
    },
    'Uttara Bhadrapada': {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. Patient depth — wisdom from the long wait.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Bring one deep insight up slowly.',
    },
    Revati: {
      temperament: 'When Rahu sits here, you hunger for the new, unfamiliar, or slightly obsessive. You’re shepherding a last stretch gently.',
      advice: 'Follow curiosity with a timer and a reality check. Also: Finish with care; guide someone across.',
    },
  },
  Ketu: {
    Ashwini: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You’re in a quick-start mood — begin, then fix as you go.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Start something small and correct it in motion rather than waiting for perfect.',
    },
    Bharani: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You’re holding creative pressure until something real can land.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Carry one deliverable all the way instead of dumping the weight early.',
    },
    Krittika: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You want sharp clarity — fog bothers you today.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Make one clean decision. Aim the edge; don’t scorch people.',
    },
    Rohini: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You’re drawn to grow and attract around one chosen thing.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Pick one garden. Skip scatter.',
    },
    Mrigashira: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You’re scanning options — curiosity is loud.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Seek, then pick a trail before nightfall.',
    },
    Ardra: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Insight may arrive after a storm — tear-down before rebuild.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Clear one honest mess before you rebuild.',
    },
    Punarvasu: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Second chances feel available — renewal is in the air.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Take a return without shame, then aim it freshly.',
    },
    Pushya: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Care and timing matter more than heroics.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Nourish on a schedule — food, rest, people.',
    },
    Ashlesha: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You’re reading undercurrents — intimacy needs ethics.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Keep honesty tight when you sense the hidden.',
    },
    Magha: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Dignity and rightful presence are on your mind.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Stand tall without theatre.',
    },
    'Purva Phalguni': {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Pleasure, play, and creative ease want airtime.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Finish one delight; ease is fuel, not escape.',
    },
    'Uttara Phalguni': {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You want alliances and help that actually stick.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Ally in ways that endure past the vibe.',
    },
    Hasta: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Your hands and practical cleverness want a job.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Fix something tangible.',
    },
    Chitra: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You want beauty designed into form — unfinished messes irritate.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Close one ugly unfinished loop with care.',
    },
    Swati: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You need room to move — freedom keeps you kind.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Protect a little independence so you don’t snap.',
    },
    Vishakha: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Two goals may tug — heat wants a single summit.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Pick which goal gets the energy today.',
    },
    Anuradha: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Loyal orbit around people and causes soothes you.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Regulate through friendship, not isolation.',
    },
    Jyeshtha: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You’re protective of earned skill and quiet rank.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Guard competence; skip loud proving.',
    },
    Mula: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You want roots, not polish — honesty first.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Dig once, cleanly; don’t excavate the whole yard.',
    },
    'Purva Ashadha': {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Bold early push — declare, then prove.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Say it, then take one proving step.',
    },
    'Uttara Ashadha': {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You want wins that last — structure and allies.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Build something durable with help.',
    },
    Shravana: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Listening wants to lead speaking.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Hear fully before you decide or reply.',
    },
    Dhanishta: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Rhythm and teammates unlock you.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Sync, then time your burst.',
    },
    Shatabhisha: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Odd, systems-level fixes appeal to you.',
      advice: 'Drop one extra obligation and keep the useful lesson.',
    },
    'Purva Bhadrapada': {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Ideals run hot — aim the fire.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Stand for something without burning the room.',
    },
    'Uttara Bhadrapada': {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. Patient depth — wisdom from the long wait.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Bring one deep insight up slowly.',
    },
    Revati: {
      temperament: 'When Ketu sits here, you prefer to simplify, cut clutter, and trust quiet gut clarity. You’re shepherding a last stretch gently.',
      advice: 'Drop one extra obligation and keep the useful lesson. Also: Finish with care; guide someone across.',
    },
  },
};

export function grahaNakshatraRule(graha: GrahaId, nak: string): GrahaNakRule | null {
  return GRAHA_NAKSHATRA[graha]?.[nak] ?? null;
}
export function grahaNakshatraCount(): number {
  let n = 0;
  for (const g of Object.keys(GRAHA_NAKSHATRA) as GrahaId[]) n += Object.keys(GRAHA_NAKSHATRA[g]).length;
  return n;
}
