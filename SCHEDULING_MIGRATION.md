# Devotionals Scheduling Feature - Database Migration

## Overview
Added scheduling functionality to allow admins to create devotionals and schedule them for future publication.

## Database Schema Changes

You need to add a `scheduled_date` column to your `devotionals` table in Supabase.

### SQL Migration

Run this SQL in your Supabase SQL Editor:

```sql
-- Add scheduled_date column to devotionals table
ALTER TABLE devotionals 
ADD COLUMN IF NOT EXISTS scheduled_date TIMESTAMPTZ DEFAULT NOW();

-- Set existing devotionals' scheduled_date to their created_at date
UPDATE devotionals 
SET scheduled_date = created_at 
WHERE scheduled_date IS NULL;

-- Make scheduled_date NOT NULL after backfilling
ALTER TABLE devotionals 
ALTER COLUMN scheduled_date SET NOT NULL;

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_devotionals_scheduled_date 
ON devotionals(scheduled_date DESC);
```

## Features Added

### Admin Panel
- **Date/Time Picker**: Admins can now set a specific publication date and time when creating or editing devotionals
- **Status Indicators**: The devotionals list shows:
  - "Published" badge (green) for devotionals with scheduled_date in the past
  - "Scheduled" badge (yellow) for devotionals with scheduled_date in the future
- **Scheduled Date Display**: Shows the exact scheduled publication date/time for each devotional

### API Changes
- **Create API** (`/api/devotionals/create`): Now accepts `scheduled_date` parameter (defaults to current time if not provided)
- **Update API** (`/api/devotionals/update`): Can update the `scheduled_date` of existing devotionals
- **List API** (`/api/devotionals/list`): 
  - Public queries: Only returns devotionals where `scheduled_date <= NOW()`
  - Admin queries: Pass `?includeScheduled=true` to see all devotionals including future-scheduled ones
  - Orders by `scheduled_date` instead of `created_at`

### Public Display
- The public devotionals page now displays the scheduled date instead of the created date
- Only shows devotionals that are scheduled for the current time or earlier

## Usage

1. **Creating a Scheduled Devotional**:
   - Go to the admin devotionals page
   - Create your devotional content
   - Set the "Schedule Publication" date/time picker to your desired publication date
   - Click "Publish" - the devotional will be saved but won't appear publicly until the scheduled date

2. **Publishing Immediately**:
   - Leave the "Schedule Publication" field empty, or set it to the current date/time
   - Click "Publish" - the devotional will be visible immediately

3. **Editing Scheduled Devotionals**:
   - Click "Edit" on any devotional in the list
   - Modify the scheduled date as needed
   - Click "Publish" to save changes

## Notes
- All dates are stored in UTC in the database
- The UI displays dates in the user's local timezone
- Devotionals are ordered by scheduled_date in descending order (newest first)
