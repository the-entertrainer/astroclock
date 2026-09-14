'use client';

import { X } from 'lucide-react';
import { PRESETS, type BirthConfig } from '@/lib/astro';

interface ConfigDrawerProps {
  open: boolean;
  draft: BirthConfig;
  onChange: (next: BirthConfig) => void;
  onClose: () => void;
  onSave: () => void;
  onReset: () => void;
}

export function ConfigDrawer({
  open,
  draft,
  onChange,
  onClose,
  onSave,
  onReset,
}: ConfigDrawerProps) {
  const set = <K extends keyof BirthConfig>(key: K, value: BirthConfig[K]) => {
    onChange({ ...draft, [key]: value });
  };

  const applyPreset = (key: string) => {
    if (key === 'manual') {
      set('preset', 'manual');
      return;
    }
    const p = PRESETS[key];
    if (!p) return;
    onChange({ ...draft, preset: key, lat: p.lat, lon: p.lon });
  };

  return (
    <>
      <div
        className={`absolute inset-0 bg-black/50 z-40 transition-opacity ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`config-drawer absolute top-0 right-0 bottom-0 w-[88%] max-w-sm z-50 glass overflow-y-auto ${
          open ? 'open' : ''
        }`}
      >
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gold">
              Identity
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/5"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <label className="block text-xs space-y-1">
            <span className="text-mist/60">Name</span>
            <input
              type="text"
              placeholder="Your name"
              maxLength={40}
              value={draft.name}
              onChange={(e) => set('name', e.target.value)}
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2.5 text-sm outline-none focus:border-gold/50"
            />
          </label>

          <label className="block text-xs space-y-1">
            <span className="text-mist/60">Birth date</span>
            <input
              type="date"
              value={draft.date}
              onChange={(e) => set('date', e.target.value)}
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2.5 text-sm outline-none focus:border-gold/50 font-mono"
            />
          </label>

          <div className="grid grid-cols-3 gap-2">
            <label className="block text-xs space-y-1">
              <span className="text-mist/60">Hour</span>
              <input
                type="number"
                min={0}
                max={23}
                value={draft.h}
                onChange={(e) => set('h', Number(e.target.value))}
                className="w-full rounded-lg bg-black/40 border border-white/10 px-2 py-2.5 text-sm outline-none focus:border-gold/50 font-mono"
              />
            </label>
            <label className="block text-xs space-y-1">
              <span className="text-mist/60">Min</span>
              <input
                type="number"
                min={0}
                max={59}
                value={draft.m}
                onChange={(e) => set('m', Number(e.target.value))}
                className="w-full rounded-lg bg-black/40 border border-white/10 px-2 py-2.5 text-sm outline-none focus:border-gold/50 font-mono"
              />
            </label>
            <label className="block text-xs space-y-1">
              <span className="text-mist/60">Sec</span>
              <input
                type="number"
                min={0}
                max={59}
                value={draft.s}
                onChange={(e) => set('s', Number(e.target.value))}
                className="w-full rounded-lg bg-black/40 border border-white/10 px-2 py-2.5 text-sm outline-none focus:border-gold/50 font-mono"
              />
            </label>
          </div>

          <label className="block text-xs space-y-1">
            <span className="text-mist/60">City preset</span>
            <select
              value={draft.preset}
              onChange={(e) => applyPreset(e.target.value)}
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2.5 text-sm outline-none focus:border-gold/50"
            >
              <option value="delhi">Delhi</option>
              <option value="tokyo">Tokyo</option>
              <option value="london">London</option>
              <option value="newyork">New York</option>
              <option value="sf">San Francisco</option>
              <option value="manual">Manual</option>
            </select>
          </label>

          <div className="grid grid-cols-2 gap-2">
            <label className="block text-xs space-y-1">
              <span className="text-mist/60">Latitude°</span>
              <input
                type="number"
                step="0.0001"
                value={draft.lat}
                onChange={(e) => set('lat', Number(e.target.value))}
                className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2.5 text-sm outline-none focus:border-gold/50 font-mono"
              />
            </label>
            <label className="block text-xs space-y-1">
              <span className="text-mist/60">Longitude°</span>
              <input
                type="number"
                step="0.0001"
                value={draft.lon}
                onChange={(e) => set('lon', Number(e.target.value))}
                className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2.5 text-sm outline-none focus:border-gold/50 font-mono"
              />
            </label>
          </div>

          <p className="text-[10px] text-mist/40 leading-relaxed">
            Demo birth (Delhi 1990-01-01 12:00) until you save. Sidereal Lahiri ·
            Whole-sign houses · Dial: Mesha at top (0°). Birth H:M:S treated as
            UTC for offline determinism.
          </p>

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={onSave}
              className="flex-1 rounded-xl bg-gold/90 text-ink font-semibold text-sm py-3 active:scale-[0.98] transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onReset}
              className="rounded-xl chip px-4 py-3 text-sm text-mist/70"
            >
              Reset
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
