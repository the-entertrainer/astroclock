import type { GrahaId } from '../constants';

export interface GrahaRashiRule {
  temperament: string;
  advice: string;
}

export const RASHI_GRAHA: Record<GrahaId, Record<string, GrahaRashiRule>> = {
  Sun: {
    Mesha: {
      temperament: 'In Aries, you want to be seen and lead in a fast and head-on way.',
      advice: 'Start before perfect clarity. Also own one clear act of presence, then share the spotlight — and watch endless waiting.',
    },
    Vrishabha: {
      temperament: 'In Taurus, you want to be seen and lead in a steady and sensory way.',
      advice: 'Build comfort before big pivots. Also own one clear act of presence, then share the spotlight — and watch fashion-chasing change.',
    },
    Mithuna: {
      temperament: 'In Gemini, you want to be seen and lead in a curious and talkative way.',
      advice: 'Finish one channel. Also own one clear act of presence, then share the spotlight — and watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, you want to be seen and lead in a protective and feeling-led way.',
      advice: 'Secure the base before leading. Also own one clear act of presence, then share the spotlight — and watch absorbing every room.',
    },
    Simha: {
      temperament: 'In Leo, you want to be seen and lead in a warm and creative way.',
      advice: 'Ask for recognition, then share it. Also own one clear act of presence, then share the spotlight — and watch silent resentment.',
    },
    Kanya: {
      temperament: 'In Virgo, you want to be seen and lead in a precise and useful way.',
      advice: 'Soften critique with one kind line. Also own one clear act of presence, then share the spotlight — and watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, you want to be seen and lead in a fair and partnership-minded way.',
      advice: 'Name your preference before negotiating. Also own one clear act of presence, then share the spotlight — and watch swallowing discord.',
    },
    Vrischika: {
      temperament: 'In Scorpio, you want to be seen and lead in a intense and all-or-nothing way.',
      advice: 'Choose honesty over half-open doors. Also own one clear act of presence, then share the spotlight — and watch surface charm without loyalty.',
    },
    Dhanu: {
      temperament: 'In Sagittarius, you want to be seen and lead in a meaning-hungry and horizon-facing way.',
      advice: 'Keep a horizon so petty loops shrink. Also own one clear act of presence, then share the spotlight — and watch frozen dogma.',
    },
    Makara: {
      temperament: 'In Capricorn, you want to be seen and lead in a ambitious and long-game way.',
      advice: 'Schedule softness so the climb isn’t a cage. Also own one clear act of presence, then share the spotlight — and watch status without rest.',
    },
    Kumbha: {
      temperament: 'In Aquarius, you want to be seen and lead in a future-minded and friendship-toned way.',
      advice: 'Invest in belonging on your terms. Also own one clear act of presence, then share the spotlight — and watch detachment that erases intimacy.',
    },
    Meena: {
      temperament: 'In Pisces, you want to be seen and lead in a empathic and imaginal way.',
      advice: 'Choose company like climate; keep one daily vessel. Also own one clear act of presence, then share the spotlight — and watch dissolving without a shore.',
    },
  },
  Moon: {
    Mesha: {
      temperament: 'In Aries, your moods and needs set the weather in a fast and head-on way.',
      advice: 'Start before perfect clarity. Also eat, hydrate, and find a soft landing before hard talks — and watch endless waiting.',
    },
    Vrishabha: {
      temperament: 'In Taurus, your moods and needs set the weather in a steady and sensory way.',
      advice: 'Build comfort before big pivots. Also eat, hydrate, and find a soft landing before hard talks — and watch fashion-chasing change.',
    },
    Mithuna: {
      temperament: 'In Gemini, your moods and needs set the weather in a curious and talkative way.',
      advice: 'Finish one channel. Also eat, hydrate, and find a soft landing before hard talks — and watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, your moods and needs set the weather in a protective and feeling-led way.',
      advice: 'Secure the base before leading. Also eat, hydrate, and find a soft landing before hard talks — and watch absorbing every room.',
    },
    Simha: {
      temperament: 'In Leo, your moods and needs set the weather in a warm and creative way.',
      advice: 'Ask for recognition, then share it. Also eat, hydrate, and find a soft landing before hard talks — and watch silent resentment.',
    },
    Kanya: {
      temperament: 'In Virgo, your moods and needs set the weather in a precise and useful way.',
      advice: 'Soften critique with one kind line. Also eat, hydrate, and find a soft landing before hard talks — and watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, your moods and needs set the weather in a fair and partnership-minded way.',
      advice: 'Name your preference before negotiating. Also eat, hydrate, and find a soft landing before hard talks — and watch swallowing discord.',
    },
    Vrischika: {
      temperament: 'In Scorpio, your moods and needs set the weather in a intense and all-or-nothing way.',
      advice: 'Choose honesty over half-open doors. Also eat, hydrate, and find a soft landing before hard talks — and watch surface charm without loyalty.',
    },
    Dhanu: {
      temperament: 'In Sagittarius, your moods and needs set the weather in a meaning-hungry and horizon-facing way.',
      advice: 'Keep a horizon so petty loops shrink. Also eat, hydrate, and find a soft landing before hard talks — and watch frozen dogma.',
    },
    Makara: {
      temperament: 'In Capricorn, your moods and needs set the weather in a ambitious and long-game way.',
      advice: 'Schedule softness so the climb isn’t a cage. Also eat, hydrate, and find a soft landing before hard talks — and watch status without rest.',
    },
    Kumbha: {
      temperament: 'In Aquarius, your moods and needs set the weather in a future-minded and friendship-toned way.',
      advice: 'Invest in belonging on your terms. Also eat, hydrate, and find a soft landing before hard talks — and watch detachment that erases intimacy.',
    },
    Meena: {
      temperament: 'In Pisces, your moods and needs set the weather in a empathic and imaginal way.',
      advice: 'Choose company like climate; keep one daily vessel. Also eat, hydrate, and find a soft landing before hard talks — and watch dissolving without a shore.',
    },
  },
  Mars: {
    Mesha: {
      temperament: 'In Aries, you push hard for what you want in a fast and head-on way.',
      advice: 'Start before perfect clarity. Also put heat into one clean effort — and watch endless waiting.',
    },
    Vrishabha: {
      temperament: 'In Taurus, you push hard for what you want in a steady and sensory way.',
      advice: 'Build comfort before big pivots. Also put heat into one clean effort — and watch fashion-chasing change.',
    },
    Mithuna: {
      temperament: 'In Gemini, you push hard for what you want in a curious and talkative way.',
      advice: 'Finish one channel. Also put heat into one clean effort — and watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, you push hard for what you want in a protective and feeling-led way.',
      advice: 'Secure the base before leading. Also put heat into one clean effort — and watch absorbing every room.',
    },
    Simha: {
      temperament: 'In Leo, you push hard for what you want in a warm and creative way.',
      advice: 'Ask for recognition, then share it. Also put heat into one clean effort — and watch silent resentment.',
    },
    Kanya: {
      temperament: 'In Virgo, you push hard for what you want in a precise and useful way.',
      advice: 'Soften critique with one kind line. Also put heat into one clean effort — and watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, you push hard for what you want in a fair and partnership-minded way.',
      advice: 'Name your preference before negotiating. Also put heat into one clean effort — and watch swallowing discord.',
    },
    Vrischika: {
      temperament: 'In Scorpio, you push hard for what you want in a intense and all-or-nothing way.',
      advice: 'Choose honesty over half-open doors. Also put heat into one clean effort — and watch surface charm without loyalty.',
    },
    Dhanu: {
      temperament: 'In Sagittarius, you push hard for what you want in a meaning-hungry and horizon-facing way.',
      advice: 'Keep a horizon so petty loops shrink. Also put heat into one clean effort — and watch frozen dogma.',
    },
    Makara: {
      temperament: 'In Capricorn, you push hard for what you want in a ambitious and long-game way.',
      advice: 'Schedule softness so the climb isn’t a cage. Also put heat into one clean effort — and watch status without rest.',
    },
    Kumbha: {
      temperament: 'In Aquarius, you push hard for what you want in a future-minded and friendship-toned way.',
      advice: 'Invest in belonging on your terms. Also put heat into one clean effort — and watch detachment that erases intimacy.',
    },
    Meena: {
      temperament: 'In Pisces, you push hard for what you want in a empathic and imaginal way.',
      advice: 'Choose company like climate; keep one daily vessel. Also put heat into one clean effort — and watch dissolving without a shore.',
    },
  },
  Mercury: {
    Mesha: {
      temperament: 'In Aries, your mind wants to talk and sort details in a fast and head-on way.',
      advice: 'Start before perfect clarity. Also write it down, then send the short clear version — and watch endless waiting.',
    },
    Vrishabha: {
      temperament: 'In Taurus, your mind wants to talk and sort details in a steady and sensory way.',
      advice: 'Build comfort before big pivots. Also write it down, then send the short clear version — and watch fashion-chasing change.',
    },
    Mithuna: {
      temperament: 'In Gemini, your mind wants to talk and sort details in a curious and talkative way.',
      advice: 'Finish one channel. Also write it down, then send the short clear version — and watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, your mind wants to talk and sort details in a protective and feeling-led way.',
      advice: 'Secure the base before leading. Also write it down, then send the short clear version — and watch absorbing every room.',
    },
    Simha: {
      temperament: 'In Leo, your mind wants to talk and sort details in a warm and creative way.',
      advice: 'Ask for recognition, then share it. Also write it down, then send the short clear version — and watch silent resentment.',
    },
    Kanya: {
      temperament: 'In Virgo, your mind wants to talk and sort details in a precise and useful way.',
      advice: 'Soften critique with one kind line. Also write it down, then send the short clear version — and watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, your mind wants to talk and sort details in a fair and partnership-minded way.',
      advice: 'Name your preference before negotiating. Also write it down, then send the short clear version — and watch swallowing discord.',
    },
    Vrischika: {
      temperament: 'In Scorpio, your mind wants to talk and sort details in a intense and all-or-nothing way.',
      advice: 'Choose honesty over half-open doors. Also write it down, then send the short clear version — and watch surface charm without loyalty.',
    },
    Dhanu: {
      temperament: 'In Sagittarius, your mind wants to talk and sort details in a meaning-hungry and horizon-facing way.',
      advice: 'Keep a horizon so petty loops shrink. Also write it down, then send the short clear version — and watch frozen dogma.',
    },
    Makara: {
      temperament: 'In Capricorn, your mind wants to talk and sort details in a ambitious and long-game way.',
      advice: 'Schedule softness so the climb isn’t a cage. Also write it down, then send the short clear version — and watch status without rest.',
    },
    Kumbha: {
      temperament: 'In Aquarius, your mind wants to talk and sort details in a future-minded and friendship-toned way.',
      advice: 'Invest in belonging on your terms. Also write it down, then send the short clear version — and watch detachment that erases intimacy.',
    },
    Meena: {
      temperament: 'In Pisces, your mind wants to talk and sort details in a empathic and imaginal way.',
      advice: 'Choose company like climate; keep one daily vessel. Also write it down, then send the short clear version — and watch dissolving without a shore.',
    },
  },
  Jupiter: {
    Mesha: {
      temperament: 'In Aries, you look for meaning and growth in a fast and head-on way.',
      advice: 'Start before perfect clarity. Also learn something or help someone — and watch endless waiting.',
    },
    Vrishabha: {
      temperament: 'In Taurus, you look for meaning and growth in a steady and sensory way.',
      advice: 'Build comfort before big pivots. Also learn something or help someone — and watch fashion-chasing change.',
    },
    Mithuna: {
      temperament: 'In Gemini, you look for meaning and growth in a curious and talkative way.',
      advice: 'Finish one channel. Also learn something or help someone — and watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, you look for meaning and growth in a protective and feeling-led way.',
      advice: 'Secure the base before leading. Also learn something or help someone — and watch absorbing every room.',
    },
    Simha: {
      temperament: 'In Leo, you look for meaning and growth in a warm and creative way.',
      advice: 'Ask for recognition, then share it. Also learn something or help someone — and watch silent resentment.',
    },
    Kanya: {
      temperament: 'In Virgo, you look for meaning and growth in a precise and useful way.',
      advice: 'Soften critique with one kind line. Also learn something or help someone — and watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, you look for meaning and growth in a fair and partnership-minded way.',
      advice: 'Name your preference before negotiating. Also learn something or help someone — and watch swallowing discord.',
    },
    Vrischika: {
      temperament: 'In Scorpio, you look for meaning and growth in a intense and all-or-nothing way.',
      advice: 'Choose honesty over half-open doors. Also learn something or help someone — and watch surface charm without loyalty.',
    },
    Dhanu: {
      temperament: 'In Sagittarius, you look for meaning and growth in a meaning-hungry and horizon-facing way.',
      advice: 'Keep a horizon so petty loops shrink. Also learn something or help someone — and watch frozen dogma.',
    },
    Makara: {
      temperament: 'In Capricorn, you look for meaning and growth in a ambitious and long-game way.',
      advice: 'Schedule softness so the climb isn’t a cage. Also learn something or help someone — and watch status without rest.',
    },
    Kumbha: {
      temperament: 'In Aquarius, you look for meaning and growth in a future-minded and friendship-toned way.',
      advice: 'Invest in belonging on your terms. Also learn something or help someone — and watch detachment that erases intimacy.',
    },
    Meena: {
      temperament: 'In Pisces, you look for meaning and growth in a empathic and imaginal way.',
      advice: 'Choose company like climate; keep one daily vessel. Also learn something or help someone — and watch dissolving without a shore.',
    },
  },
  Venus: {
    Mesha: {
      temperament: 'In Aries, you care about comfort, beauty, and bonding in a fast and head-on way.',
      advice: 'Start before perfect clarity. Also choose kindness and one beautiful detail — and watch endless waiting.',
    },
    Vrishabha: {
      temperament: 'In Taurus, you care about comfort, beauty, and bonding in a steady and sensory way.',
      advice: 'Build comfort before big pivots. Also choose kindness and one beautiful detail — and watch fashion-chasing change.',
    },
    Mithuna: {
      temperament: 'In Gemini, you care about comfort, beauty, and bonding in a curious and talkative way.',
      advice: 'Finish one channel. Also choose kindness and one beautiful detail — and watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, you care about comfort, beauty, and bonding in a protective and feeling-led way.',
      advice: 'Secure the base before leading. Also choose kindness and one beautiful detail — and watch absorbing every room.',
    },
    Simha: {
      temperament: 'In Leo, you care about comfort, beauty, and bonding in a warm and creative way.',
      advice: 'Ask for recognition, then share it. Also choose kindness and one beautiful detail — and watch silent resentment.',
    },
    Kanya: {
      temperament: 'In Virgo, you care about comfort, beauty, and bonding in a precise and useful way.',
      advice: 'Soften critique with one kind line. Also choose kindness and one beautiful detail — and watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, you care about comfort, beauty, and bonding in a fair and partnership-minded way.',
      advice: 'Name your preference before negotiating. Also choose kindness and one beautiful detail — and watch swallowing discord.',
    },
    Vrischika: {
      temperament: 'In Scorpio, you care about comfort, beauty, and bonding in a intense and all-or-nothing way.',
      advice: 'Choose honesty over half-open doors. Also choose kindness and one beautiful detail — and watch surface charm without loyalty.',
    },
    Dhanu: {
      temperament: 'In Sagittarius, you care about comfort, beauty, and bonding in a meaning-hungry and horizon-facing way.',
      advice: 'Keep a horizon so petty loops shrink. Also choose kindness and one beautiful detail — and watch frozen dogma.',
    },
    Makara: {
      temperament: 'In Capricorn, you care about comfort, beauty, and bonding in a ambitious and long-game way.',
      advice: 'Schedule softness so the climb isn’t a cage. Also choose kindness and one beautiful detail — and watch status without rest.',
    },
    Kumbha: {
      temperament: 'In Aquarius, you care about comfort, beauty, and bonding in a future-minded and friendship-toned way.',
      advice: 'Invest in belonging on your terms. Also choose kindness and one beautiful detail — and watch detachment that erases intimacy.',
    },
    Meena: {
      temperament: 'In Pisces, you care about comfort, beauty, and bonding in a empathic and imaginal way.',
      advice: 'Choose company like climate; keep one daily vessel. Also choose kindness and one beautiful detail — and watch dissolving without a shore.',
    },
  },
  Saturn: {
    Mesha: {
      temperament: 'In Aries, you build patiently in a fast and head-on way.',
      advice: 'Start before perfect clarity. Also take one sober step instead of a grand promise — and watch endless waiting.',
    },
    Vrishabha: {
      temperament: 'In Taurus, you build patiently in a steady and sensory way.',
      advice: 'Build comfort before big pivots. Also take one sober step instead of a grand promise — and watch fashion-chasing change.',
    },
    Mithuna: {
      temperament: 'In Gemini, you build patiently in a curious and talkative way.',
      advice: 'Finish one channel. Also take one sober step instead of a grand promise — and watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, you build patiently in a protective and feeling-led way.',
      advice: 'Secure the base before leading. Also take one sober step instead of a grand promise — and watch absorbing every room.',
    },
    Simha: {
      temperament: 'In Leo, you build patiently in a warm and creative way.',
      advice: 'Ask for recognition, then share it. Also take one sober step instead of a grand promise — and watch silent resentment.',
    },
    Kanya: {
      temperament: 'In Virgo, you build patiently in a precise and useful way.',
      advice: 'Soften critique with one kind line. Also take one sober step instead of a grand promise — and watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, you build patiently in a fair and partnership-minded way.',
      advice: 'Name your preference before negotiating. Also take one sober step instead of a grand promise — and watch swallowing discord.',
    },
    Vrischika: {
      temperament: 'In Scorpio, you build patiently in a intense and all-or-nothing way.',
      advice: 'Choose honesty over half-open doors. Also take one sober step instead of a grand promise — and watch surface charm without loyalty.',
    },
    Dhanu: {
      temperament: 'In Sagittarius, you build patiently in a meaning-hungry and horizon-facing way.',
      advice: 'Keep a horizon so petty loops shrink. Also take one sober step instead of a grand promise — and watch frozen dogma.',
    },
    Makara: {
      temperament: 'In Capricorn, you build patiently in a ambitious and long-game way.',
      advice: 'Schedule softness so the climb isn’t a cage. Also take one sober step instead of a grand promise — and watch status without rest.',
    },
    Kumbha: {
      temperament: 'In Aquarius, you build patiently in a future-minded and friendship-toned way.',
      advice: 'Invest in belonging on your terms. Also take one sober step instead of a grand promise — and watch detachment that erases intimacy.',
    },
    Meena: {
      temperament: 'In Pisces, you build patiently in a empathic and imaginal way.',
      advice: 'Choose company like climate; keep one daily vessel. Also take one sober step instead of a grand promise — and watch dissolving without a shore.',
    },
  },
  Rahu: {
    Mesha: {
      temperament: 'In Aries, you hunger for the new in a fast and head-on way.',
      advice: 'Start before perfect clarity. Also follow curiosity with a timer — and watch endless waiting.',
    },
    Vrishabha: {
      temperament: 'In Taurus, you hunger for the new in a steady and sensory way.',
      advice: 'Build comfort before big pivots. Also follow curiosity with a timer — and watch fashion-chasing change.',
    },
    Mithuna: {
      temperament: 'In Gemini, you hunger for the new in a curious and talkative way.',
      advice: 'Finish one channel. Also follow curiosity with a timer — and watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, you hunger for the new in a protective and feeling-led way.',
      advice: 'Secure the base before leading. Also follow curiosity with a timer — and watch absorbing every room.',
    },
    Simha: {
      temperament: 'In Leo, you hunger for the new in a warm and creative way.',
      advice: 'Ask for recognition, then share it. Also follow curiosity with a timer — and watch silent resentment.',
    },
    Kanya: {
      temperament: 'In Virgo, you hunger for the new in a precise and useful way.',
      advice: 'Soften critique with one kind line. Also follow curiosity with a timer — and watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, you hunger for the new in a fair and partnership-minded way.',
      advice: 'Name your preference before negotiating. Also follow curiosity with a timer — and watch swallowing discord.',
    },
    Vrischika: {
      temperament: 'In Scorpio, you hunger for the new in a intense and all-or-nothing way.',
      advice: 'Choose honesty over half-open doors. Also follow curiosity with a timer — and watch surface charm without loyalty.',
    },
    Dhanu: {
      temperament: 'In Sagittarius, you hunger for the new in a meaning-hungry and horizon-facing way.',
      advice: 'Keep a horizon so petty loops shrink. Also follow curiosity with a timer — and watch frozen dogma.',
    },
    Makara: {
      temperament: 'In Capricorn, you hunger for the new in a ambitious and long-game way.',
      advice: 'Schedule softness so the climb isn’t a cage. Also follow curiosity with a timer — and watch status without rest.',
    },
    Kumbha: {
      temperament: 'In Aquarius, you hunger for the new in a future-minded and friendship-toned way.',
      advice: 'Invest in belonging on your terms. Also follow curiosity with a timer — and watch detachment that erases intimacy.',
    },
    Meena: {
      temperament: 'In Pisces, you hunger for the new in a empathic and imaginal way.',
      advice: 'Choose company like climate; keep one daily vessel. Also follow curiosity with a timer — and watch dissolving without a shore.',
    },
  },
  Ketu: {
    Mesha: {
      temperament: 'In Aries, you simplify and know some things sideways in a fast and head-on way.',
      advice: 'Start before perfect clarity. Also drop one extra obligation and keep the lesson — and watch endless waiting.',
    },
    Vrishabha: {
      temperament: 'In Taurus, you simplify and know some things sideways in a steady and sensory way.',
      advice: 'Build comfort before big pivots. Also drop one extra obligation and keep the lesson — and watch fashion-chasing change.',
    },
    Mithuna: {
      temperament: 'In Gemini, you simplify and know some things sideways in a curious and talkative way.',
      advice: 'Finish one channel. Also drop one extra obligation and keep the lesson — and watch boredom dressed as multitasking.',
    },
    Karka: {
      temperament: 'In Cancer, you simplify and know some things sideways in a protective and feeling-led way.',
      advice: 'Secure the base before leading. Also drop one extra obligation and keep the lesson — and watch absorbing every room.',
    },
    Simha: {
      temperament: 'In Leo, you simplify and know some things sideways in a warm and creative way.',
      advice: 'Ask for recognition, then share it. Also drop one extra obligation and keep the lesson — and watch silent resentment.',
    },
    Kanya: {
      temperament: 'In Virgo, you simplify and know some things sideways in a precise and useful way.',
      advice: 'Soften critique with one kind line. Also drop one extra obligation and keep the lesson — and watch perfection as a cage.',
    },
    Tula: {
      temperament: 'In Libra, you simplify and know some things sideways in a fair and partnership-minded way.',
      advice: 'Name your preference before negotiating. Also drop one extra obligation and keep the lesson — and watch swallowing discord.',
    },
    Vrischika: {
      temperament: 'In Scorpio, you simplify and know some things sideways in a intense and all-or-nothing way.',
      advice: 'Choose honesty over half-open doors. Also drop one extra obligation and keep the lesson — and watch surface charm without loyalty.',
    },
    Dhanu: {
      temperament: 'In Sagittarius, you simplify and know some things sideways in a meaning-hungry and horizon-facing way.',
      advice: 'Keep a horizon so petty loops shrink. Also drop one extra obligation and keep the lesson — and watch frozen dogma.',
    },
    Makara: {
      temperament: 'In Capricorn, you simplify and know some things sideways in a ambitious and long-game way.',
      advice: 'Schedule softness so the climb isn’t a cage. Also drop one extra obligation and keep the lesson — and watch status without rest.',
    },
    Kumbha: {
      temperament: 'In Aquarius, you simplify and know some things sideways in a future-minded and friendship-toned way.',
      advice: 'Invest in belonging on your terms. Also drop one extra obligation and keep the lesson — and watch detachment that erases intimacy.',
    },
    Meena: {
      temperament: 'In Pisces, you simplify and know some things sideways in a empathic and imaginal way.',
      advice: 'Choose company like climate; keep one daily vessel. Also drop one extra obligation and keep the lesson — and watch dissolving without a shore.',
    },
  },
};

export function grahaRashiRule(graha: GrahaId, rashi: string): GrahaRashiRule | null {
  return RASHI_GRAHA[graha]?.[rashi] ?? null;
}
