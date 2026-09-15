import { NextRequest, NextResponse } from 'next/server';

const USER_AGENT =
  'AstroClock/1.0 (https://github.com/the-entertrainer/astroclock)';

/** Simple in-memory throttle: one upstream call per ~1s process-wide. */
let lastFetchAt = 0;
const MIN_INTERVAL_MS = 1000;

export interface GeocodeHit {
  displayName: string;
  lat: number;
  lon: number;
  type?: string;
}

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get('q') || '').trim();
  if (q.length < 2) {
    return NextResponse.json({ results: [] as GeocodeHit[] });
  }
  if (q.length > 200) {
    return NextResponse.json(
      { error: 'Query too long' },
      { status: 400 },
    );
  }

  const wait = MIN_INTERVAL_MS - (Date.now() - lastFetchAt);
  if (wait > 0) {
    await new Promise((r) => setTimeout(r, wait));
  }
  lastFetchAt = Date.now();

  const url =
    'https://nominatim.openstreetmap.org/search?' +
    new URLSearchParams({
      format: 'json',
      addressdetails: '1',
      limit: '8',
      q,
    }).toString();

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'application/json',
      },
      // Nominatim asks not to cache aggressively; still ok for short TTL
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Geocode upstream error', status: res.status },
        { status: 502 },
      );
    }

    const data = (await res.json()) as Array<{
      display_name?: string;
      lat?: string;
      lon?: string;
      type?: string;
      class?: string;
    }>;

    const results: GeocodeHit[] = (data || [])
      .map((row) => ({
        displayName: row.display_name || '',
        lat: Number(row.lat),
        lon: Number(row.lon),
        type: row.type || row.class,
      }))
      .filter(
        (r) =>
          r.displayName &&
          Number.isFinite(r.lat) &&
          Number.isFinite(r.lon),
      );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json(
      { error: 'Geocode request failed' },
      { status: 502 },
    );
  }
}
