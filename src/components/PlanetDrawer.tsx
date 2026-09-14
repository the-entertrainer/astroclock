'use client';

import { X } from 'lucide-react';
import type { GrahaDef } from '@/lib/astro';

export interface PlanetDetail {
  graha: GrahaDef;
  lon: number;
  rashi: string;
  nak: string;
  pada: number;
  house: number;
  speed: number;
}

interface PlanetDrawerProps {
  open: boolean;
  detail: PlanetDetail | null;
  onClose: () => void;
}

export function PlanetDrawer({ open, detail, onClose }: PlanetDrawerProps) {
  return (
    <>
      <div
        className={`absolute inset-0 bg-black/50 z-40 transition-opacity ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <div
        className={`drawer absolute bottom-0 left-0 right-0 z-50 glass rounded-t-2xl p-4 max-h-[55vh] overflow-y-auto ${
          open ? 'open' : ''
        }`}
      >
        <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-3" />
        <div className="flex items-center justify-between mb-3">
          <h2
            className="text-lg font-semibold"
            style={{ color: detail?.graha.color ?? '#D4AF37' }}
          >
            {detail ? `${detail.graha.symbol} ${detail.graha.id}` : '—'}
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
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <div className="text-[9px] uppercase text-mist/50">Sidereal°</div>
            <div className="font-mono">{detail ? detail.lon.toFixed(3) + '°' : '—'}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase text-mist/50">Rashi</div>
            <div>{detail?.rashi ?? '—'}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase text-mist/50">Nakshatra</div>
            <div>{detail?.nak ?? '—'}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase text-mist/50">Pada</div>
            <div>{detail?.pada ?? '—'}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase text-mist/50">House</div>
            <div>{detail?.house ?? '—'}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase text-mist/50">Speed °/day</div>
            <div className="font-mono">{detail ? detail.speed.toFixed(4) : '—'}</div>
          </div>
          <div className="col-span-2">
            <div className="text-[9px] uppercase text-mist/50">Motion</div>
            <div
              style={{
                color:
                  detail && detail.speed < -0.01 ? '#E57373' : '#81C784',
              }}
            >
              {detail
                ? detail.speed < -0.01
                  ? 'Retrograde'
                  : 'Direct'
                : '—'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
