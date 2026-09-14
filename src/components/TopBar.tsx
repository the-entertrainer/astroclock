'use client';

import { Settings2 } from 'lucide-react';

interface TopBarProps {
  utc: string;
  local: string;
  onOpenConfig: () => void;
}

export function TopBar({ utc, local, onOpenConfig }: TopBarProps) {
  return (
    <header className="shrink-0 px-4 pt-3 pb-2 flex items-start justify-between gap-2 border-b border-white/10">
      <div className="min-w-0">
        <h1 className="text-[11px] font-semibold tracking-[0.35em] text-gold uppercase">
          AstroClock
        </h1>
        <div className="mt-1 font-mono text-[10px] leading-tight text-mist/80 space-y-0.5">
          <div>
            UTC <span className="text-mist">{utc}</span>
          </div>
          <div>
            LOC <span className="text-mist">{local}</span>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onOpenConfig}
        className="glass rounded-xl p-2.5 active:scale-95 transition"
        aria-label="Config"
      >
        <Settings2 className="w-5 h-5 text-gold" />
      </button>
    </header>
  );
}
