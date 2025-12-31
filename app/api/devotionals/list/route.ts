

import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Simple in-memory cache (per serverless instance)
const devotionalCache: Record<string, { data: any; expires: number }> = {};
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (id) {
    // Check cache first
    const now = Date.now();
    if (devotionalCache[id] && devotionalCache[id].expires > now) {
      return NextResponse.json({ items: devotionalCache[id].data, total: devotionalCache[id].data?.length || 0 });
    }
    // Fetch a single devotional by id
    const { data: items, error } = await supabase
      .from('devotionals')
      .select('id, title, image, content, created_at, updated_at')
      .eq('id', id)
      .limit(1);
    if (!error) {
      devotionalCache[id] = { data: items || [], expires: now + CACHE_TTL };
    }
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ items: items || [], total: items?.length || 0 });
  }

  // Paginated list
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data: items, error } = await supabase
    .from('devotionals')
    .select('id, title, image, content, created_at, updated_at')
    .order('created_at', { ascending: false })
    .range(from, to);

  const { count } = await supabase
    .from('devotionals')
    .select('*', { count: 'exact', head: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ items: items || [], total: count || 0 });
}
