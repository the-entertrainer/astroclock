'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  DEMO_BIRTH,
  GRAHAS,
  type BirthConfig,
  type GrahaId,
  type LonMap,
  clamp,
  computePlanets,
  computeTithi,
  harmonicScore,
  julianDay,
  lonMapFromPlanets,
  nakshatraInfo,
  norm360,
  rashiName,
  shortestArc,
  vimshottari,
  wholeSignHouse,
} from '@/lib/astro';
import { birthDateObj, clearConfig, loadConfig, saveConfig } from '@/lib/storage';
import { formatMsClock, scrubHint } from '@/lib/format';
import { TopBar } from './TopBar';
import { ClockCanvas, type FrameCache } from './ClockCanvas';
import { HUD } from './HUD';
import { ConfigDrawer } from './ConfigDrawer';
import { PlanetDrawer, type PlanetDetail } from './PlanetDrawer';

const LERP_MS = 700;

export function AstroClockApp() {
  const [birth, setBirth] = useState<BirthConfig>({ ...DEMO_BIRTH });
  const [draft, setDraft] = useState<BirthConfig>({ ...DEMO_BIRTH });
  const [hydrated, setHydrated] = useState(false);
  const [live, setLive] = useState(true);
  const [scrubHours, setScrubHours] = useState(0);
  const [simTime, setSimTime] = useState(() => Date.now());
  const [selected, setSelected] = useState<GrahaId | null>(null);
  const [configOpen, setConfigOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [natalLons, setNatalLons] = useState<LonMap | null>(null);
  const [natalLerp, setNatalLerp] = useState(1);
  const [hrsDisplay, setHrsDisplay] = useState(0);
  const [utc, setUtc] = useState('--:--:--.---');
  const [local, setLocal] = useState('--:--:--.---');
  const [maha, setMaha] = useState('—');
  const [antar, setAntar] = useState('—');
  const [tithi, setTithi] = useState('—');
  const [lagna, setLagna] = useState('—');
  const [speeds, setSpeeds] = useState<FrameCache['speeds'] | null>(null);
  const [detail, setDetail] = useState<PlanetDetail | null>(null);

  const natalLerpFrom = useRef<LonMap | null>(null);
  const natalLerpTo = useRef<LonMap | null>(null);
  const natalLerpStart = useRef(0);
  const lastHud = useRef(0);
  const cacheRef = useRef<FrameCache | null>(null);

  const recomputeNatal = useCallback((b: BirthConfig, animate: boolean) => {
    const bd = birthDateObj(b);
    const jd = julianDay(bd);
    const pl = computePlanets(jd);
    const next = lonMapFromPlanets(pl);

    if (animate && natalLons) {
      natalLerpFrom.current = { ...natalLons };
      natalLerpTo.current = next;
      natalLerpStart.current = performance.now();
      setNatalLerp(0);
    } else {
      setNatalLons(next);
      setNatalLerp(1);
      natalLerpFrom.current = null;
      natalLerpTo.current = null;
    }
  }, [natalLons]);

  useEffect(() => {
    const cfg = loadConfig();
    setBirth(cfg);
    setDraft(cfg);
    setHydrated(true);
    const bd = birthDateObj(cfg);
    const jd = julianDay(bd);
    setNatalLons(lonMapFromPlanets(computePlanets(jd)));
    setNatalLerp(1);
  }, []);

  useEffect(() => {
    const onVis = () => setVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Live clock tick for simTime
  useEffect(() => {
    if (!live || !visible) return;
    let id = 0;
    const tick = () => {
      setSimTime(Date.now() + scrubHours * 3600 * 1000);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [live, scrubHours, visible]);

  // Natal lerp animation
  useEffect(() => {
    if (natalLerp >= 1 || !natalLerpFrom.current || !natalLerpTo.current) return;
    let id = 0;
    const tick = () => {
      const elapsed = performance.now() - natalLerpStart.current;
      const t = Math.min(1, elapsed / LERP_MS);
      if (t >= 1 && natalLerpTo.current) {
        setNatalLons(natalLerpTo.current);
        setNatalLerp(1);
        natalLerpFrom.current = null;
        natalLerpTo.current = null;
        return;
      }
      const s = t * t * (3 - 2 * t);
      const from = natalLerpFrom.current!;
      const to = natalLerpTo.current!;
      const out = {} as LonMap;
      for (const g of GRAHAS) {
        const a = from[g.id];
        const b = to[g.id];
        const d = shortestArc(b, a);
        out[g.id] = norm360(a + d * s);
      }
      setNatalLons(out);
      setNatalLerp(t);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [natalLerp]);

  const currentNatal = natalLons;

  const openDetailFor = useCallback(
    (id: GrahaId, cache: FrameCache) => {
      const g = GRAHAS.find((x) => x.id === id)!;
      const lon = cache.planets[id].sidereal;
      const nak = nakshatraInfo(lon);
      const house = wholeSignHouse(lon, cache.asc.sidereal);
      const sp = cache.speeds[id];
      setDetail({
        graha: g,
        lon,
        rashi: `${rashiName(lon)} ${(lon % 30).toFixed(2)}°`,
        nak: nak.name,
        pada: nak.pada,
        house,
        speed: sp,
      });
      setDetailOpen(true);
    },
    [],
  );

  const handleSelect = useCallback(
    (id: GrahaId) => {
      if (selected === id) {
        setSelected(null);
        setDetailOpen(false);
      } else {
        setSelected(id);
        if (cacheRef.current) openDetailFor(id, cacheRef.current);
      }
    },
    [selected, openDetailFor],
  );

  const onFrame = useCallback(
    (cache: FrameCache) => {
      cacheRef.current = cache;
      const now = performance.now();
      if (now - lastHud.current < 50) return;
      lastHud.current = now;

      setUtc(formatMsClock(cache.date, true));
      setLocal(formatMsClock(cache.date, false));

      const th = computeTithi(
        cache.planets.Moon.sidereal,
        cache.planets.Sun.sidereal,
      );
      setTithi(`${th.num}. ${th.label}`);

      const lagDeg = cache.asc.sidereal % 30;
      setLagna(`${rashiName(cache.asc.sidereal)} ${lagDeg.toFixed(1)}°`);

      try {
        const dasha = vimshottari(birthDateObj(birth), cache.date);
        setMaha(dasha.maha + (birth.isDemo ? ' ·demo' : ''));
        setAntar(dasha.antar);
      } catch {
        setMaha('—');
        setAntar('—');
      }

      setSpeeds(cache.speeds);

      const hrs = harmonicScore(cache.planets);
      setHrsDisplay((prev) => {
        const next = prev + (hrs - prev) * 0.12;
        return Math.round(next * 10) / 10;
      });

      if (selected && detailOpen) {
        openDetailFor(selected, cache);
      }
    },
    [birth, selected, detailOpen, openDetailFor],
  );

  const showSim =
    !live || Math.abs(scrubHours) > 0.01;

  const simLabel = useMemo(() => {
    return new Date(simTime).toISOString().replace('T', ' ').slice(0, 19) + 'Z';
  }, [simTime]);

  const handleScrub = (hours: number) => {
    setScrubHours(hours);
    const isLive = Math.abs(hours) < 0.01;
    setLive(isLive);
    if (!isLive) {
      setSimTime(Date.now() + hours * 3600 * 1000);
    }
  };

  const handleToggleLive = () => {
    if (!live || Math.abs(scrubHours) > 0.01) {
      setLive(true);
      setScrubHours(0);
      setSimTime(Date.now());
    } else {
      setLive(false);
    }
  };

  const openConfig = () => {
    setDraft({ ...birth });
    setConfigOpen(true);
  };

  const handleSave = () => {
    const next: BirthConfig = {
      name: draft.name.trim() || 'Native',
      date: draft.date || '1990-01-01',
      h: clamp(+draft.h, 0, 23),
      m: clamp(+draft.m, 0, 59),
      s: clamp(+draft.s, 0, 59),
      preset: draft.preset,
      lat: +draft.lat,
      lon: +draft.lon,
      isDemo: false,
    };
    setBirth(next);
    saveConfig(next);
    recomputeNatal(next, true);
    setConfigOpen(false);
  };

  const handleReset = () => {
    const demo = { ...DEMO_BIRTH };
    setBirth(demo);
    setDraft(demo);
    clearConfig();
    recomputeNatal(demo, true);
  };

  if (!hydrated) {
    return (
      <div className="max-w-md mx-auto h-dvh bg-ink text-mist flex items-center justify-center">
        <div className="text-gold/70 text-xs tracking-[0.3em] uppercase">
          AstroClock
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto h-dvh bg-ink text-mist overflow-hidden flex flex-col relative">
      <TopBar utc={utc} local={local} onOpenConfig={openConfig} />

      <main className="flex-1 relative min-h-0">
        <ClockCanvas
          simTime={simTime}
          lat={+birth.lat}
          lon={+birth.lon}
          natalLons={currentNatal}
          natalLerp={natalLerp}
          selected={selected}
          visible={visible}
          onFrame={onFrame}
          onSelect={handleSelect}
          onNatalLerpTick={() => {}}
        />
        {showSim && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 glass rounded-full px-3 py-1 text-[10px] font-mono text-gold/90 fade-in">
            SIM <span>{simLabel}</span>
          </div>
        )}
      </main>

      <HUD
        maha={maha}
        antar={antar}
        tithi={tithi}
        lagna={lagna}
        speeds={speeds}
        selected={selected}
        hrs={Math.round(hrsDisplay)}
        live={live}
        scrubHours={scrubHours}
        scrubLabel={scrubHint(scrubHours)}
        onSelect={handleSelect}
        onToggleLive={handleToggleLive}
        onScrub={handleScrub}
      />

      <PlanetDrawer
        open={detailOpen}
        detail={detail}
        onClose={() => {
          setDetailOpen(false);
          setSelected(null);
        }}
      />

      <ConfigDrawer
        open={configOpen}
        draft={draft}
        onChange={setDraft}
        onClose={() => setConfigOpen(false)}
        onSave={handleSave}
        onReset={handleReset}
      />
    </div>
  );
}
