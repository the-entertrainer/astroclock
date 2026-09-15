'use client';

import { X } from 'lucide-react';
import type { NatalProfile } from '@/lib/astro/profile';

interface ProfileDrawerProps {
  open: boolean;
  profile: NatalProfile | null;
  isDemo: boolean;
  onClose: () => void;
  onOpenConfig: () => void;
}

export function ProfileDrawer({
  open,
  profile,
  isDemo,
  onClose,
  onOpenConfig,
}: ProfileDrawerProps) {
  return (
    <>
      <div
        className={`absolute inset-0 bg-black/55 z-[55] transition-opacity ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`absolute inset-x-0 bottom-0 top-[8%] z-[60] glass rounded-t-2xl overflow-hidden flex flex-col drawer ${
          open ? 'open' : ''
        }`}
        role="dialog"
        aria-label="Natal profile"
      >
        <div className="shrink-0 flex items-start justify-between gap-3 px-4 pt-4 pb-2 border-b border-white/10">
          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.25em] text-gold/80">
              Profile · Character
            </p>
            <h2 className="text-base font-semibold text-mist truncate mt-0.5">
              {profile?.name || (isDemo ? 'Demo chart' : 'Native')}
            </h2>
            {profile && (
              <p className="text-[10px] text-mist/45 font-mono mt-0.5 leading-snug">
                {profile.birthSummary}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/5 shrink-0"
            aria-label="Close profile"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 pb-8">
          {isDemo || !profile ? (
            <div className="chip rounded-xl px-4 py-6 text-center space-y-3">
              <p className="text-sm text-mist/80">
                Save your birth details to unlock a placement-accurate character
                reading.
              </p>
              <p className="text-[10px] text-mist/45 leading-relaxed">
                Readings are rule-based from Lagna, Moon, Sun, and graha houses —
                not LLM fluff.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenConfig();
                }}
                className="rounded-xl bg-gold/90 text-ink font-semibold text-sm px-5 py-2.5"
              >
                Open Identity
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-2 text-[10px]">
                <div className="chip rounded-lg px-2 py-2">
                  <div className="text-mist/45 uppercase tracking-wider text-[8px]">
                    Lagna
                  </div>
                  <div className="text-jade font-medium">
                    {profile.lagna.rashi}
                  </div>
                  <div className="font-mono text-mist/50">
                    {profile.lagna.degree.toFixed(1)}° · {profile.lagna.lord}
                  </div>
                </div>
                <div className="chip rounded-lg px-2 py-2">
                  <div className="text-mist/45 uppercase tracking-wider text-[8px]">
                    Moon
                  </div>
                  <div className="font-medium">{profile.moon.rashi}</div>
                  <div className="text-mist/50 truncate">
                    {profile.moon.nakshatra} p{profile.moon.pada}
                  </div>
                </div>
                <div className="chip rounded-lg px-2 py-2">
                  <div className="text-mist/45 uppercase tracking-wider text-[8px]">
                    Sun
                  </div>
                  <div className="text-gold font-medium">
                    {profile.sun.rashi}
                  </div>
                  <div className="text-mist/50 truncate">
                    {profile.sun.nakshatra}
                  </div>
                </div>
              </div>

              <div className="chip rounded-xl px-3 py-2.5">
                <div className="text-[9px] uppercase tracking-wider text-mist/50 mb-1">
                  Dominant themes
                </div>
                <ul className="space-y-0.5">
                  {profile.dominant.map((d) => (
                    <li key={d} className="text-[11px] text-mist/75">
                      · {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="chip rounded-xl px-3 py-2.5 overflow-x-auto">
                <div className="text-[9px] uppercase tracking-wider text-mist/50 mb-1.5">
                  Graha map
                </div>
                <div className="flex gap-1.5 min-w-max">
                  {profile.grahas.map((g) => (
                    <div
                      key={g.id}
                      className="rounded-lg bg-black/30 border border-white/5 px-2 py-1.5 text-[9px] w-[4.6rem]"
                    >
                      <div className="font-medium text-mist">
                        {g.id.slice(0, 2)}
                        {g.retrograde ? (
                          <span className="text-rose ml-0.5">R</span>
                        ) : null}
                      </div>
                      <div className="text-mist/55 truncate">{g.rashi}</div>
                      <div className="font-mono text-mist/40">
                        H{g.house} · {(g.degree).toFixed(0)}°
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {profile.sections.map((sec) => (
                <article
                  key={sec.id}
                  className="chip rounded-xl px-3 py-2.5 space-y-1.5"
                >
                  <h3 className="text-[11px] font-semibold tracking-wide text-gold">
                    {sec.title}
                  </h3>
                  <p className="text-[11px] text-mist/70 leading-relaxed">
                    {sec.body}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {sec.cites.map((c) => (
                      <span
                        key={c}
                        className="text-[8px] font-mono text-mist/35 border border-white/5 rounded px-1.5 py-0.5"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </article>
              ))}

              <p className="text-[9px] text-mist/30 leading-relaxed px-1">
                Deterministic Vedic-flavoured delineation from whole-sign houses
                + Lahiri sidereal. Approximate ephemeris — for reflection, not
                professional judgment.
              </p>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
