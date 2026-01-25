-- Fix backward scheduled dates in devotionals table
-- Run this in Supabase SQL Editor

-- 1. First, let's see the current dates to identify which ones are wrong
SELECT 
  id, 
  title, 
  scheduled_date,
  created_at,
  updated_at
FROM devotionals
ORDER BY scheduled_date DESC
LIMIT 10;

-- ===== EASIEST METHOD: Update by title =====
-- Replace 'EXACT_TITLE_HERE' with the exact title from the SELECT query above

-- For the devotional that should be January 1:
UPDATE devotionals
SET scheduled_date = '2026-01-01T00:00:00Z'
WHERE title = 'EXACT_TITLE_HERE';

-- For the devotional that should be January 2:
UPDATE devotionals
SET scheduled_date = '2026-01-02T00:00:00Z'
WHERE title = 'EXACT_TITLE_HERE';

-- ===== ALTERNATIVE: Update by ID (if titles have special characters) =====
-- Make sure to copy the ENTIRE UUID carefully (should be in format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)

-- UPDATE devotionals
-- SET scheduled_date = '2026-01-01T00:00:00Z'
-- WHERE id = '12345678-1234-1234-1234-123456789abc'::uuid;

-- UPDATE devotionals
-- SET scheduled_date = '2026-01-02T00:00:00Z'
-- WHERE id = '12345678-1234-1234-1234-123456789abc'::uuid;

-- 4. Verify the updates
SELECT 
  id, 
  title, 
  scheduled_date,
  created_at,
  updated_at
FROM devotionals
ORDER BY scheduled_date DESC
LIMIT 10;

-- QUICK FIX: If you know the titles, you can update by title instead:
-- UPDATE devotionals
-- SET scheduled_date = '2026-01-01T00:00:00Z'
-- WHERE title = 'The Power of Meditation';

-- UPDATE devotionals
-- SET scheduled_date = '2026-01-02T00:00:00Z'
-- WHERE title = 'YOUR_SECOND_DEVOTIONAL_TITLE_HERE';
