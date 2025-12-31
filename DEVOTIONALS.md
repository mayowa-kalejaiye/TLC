# Devotionals — Setup & Usage

This document explains environment variables and how to use the admin/editor, uploads, and subscriber endpoint for the Devotionals feature.

Required environment variables
- `DEVOTIONAL_ADMIN_PASS` — password for the admin UI at `/admin/devotionals`.
- `EMAILOCTOPUS_API_KEY` — (optional) API key to forward homepage subscriptions to EmailOctopus. If not present subscribers will be stored locally under `data/subscribers`.
- `EMAILOCTOPUS_LIST_ID` — (optional) EmailOctopus list id used with the API key.
- `CLOUDINARY_CLOUD_NAME` — (optional) Cloudinary cloud name used for image uploads.
- `CLOUDINARY_UPLOAD_PRESET` — (optional) unsigned upload preset for Cloudinary.

How it works (quick)
- Admin UI: visit `/admin/devotionals`. Sign in with `DEVOTIONAL_ADMIN_PASS`. The admin UI lets you paste MDX/markdown content and optionally upload or paste an image URL.
- Save: creating a devotional saves an MDX file to `data/devotionals/<slug>.mdx` with frontmatter (title, slug, date, image).
- Public pages: saved devotionals are available at `/devotionals/<slug>` and rendered from the MDX file.
- Image uploads: the admin UI uploads images to Cloudinary when `CLOUDINARY_*` vars are set; otherwise paste an external image URL.
- Subscribe form: the homepage subscribe form should POST to `/api/emailoctopus/subscribe` with JSON body `{ "email": "user@example.com" }`. If `EMAILOCTOPUS_API_KEY` and `EMAILOCTOPUS_LIST_ID` are set the server will attempt to forward to EmailOctopus; otherwise it writes the subscriber locally to `data/subscribers/` for manual import.

Files of interest
- Admin UI: [app/admin/devotionals/page.tsx](app/admin/devotionals/page.tsx)
- Admin login/logout routes: [app/api/admin/login/route.ts](app/api/admin/login/route.ts), [app/api/admin/logout/route.ts](app/api/admin/logout/route.ts)
- Create devotional: [app/api/devotionals/create/route.ts](app/api/devotionals/create/route.ts)
- List devotionals: [app/api/devotionals/list/route.ts](app/api/devotionals/list/route.ts)
- Image upload: [app/api/devotionals/upload/route.ts](app/api/devotionals/upload/route.ts)
- Public devotional page: [app/devotionals/[slug]/page.tsx](app/devotionals/[slug]/page.tsx)
- Subscribe endpoint: [app/api/emailoctopus/subscribe/route.ts](app/api/emailoctopus/subscribe/route.ts)

Testing locally
1. Add the environment variables locally (e.g., in `.env.local`).
2. Start the dev server: `npm run dev` (or your usual Next.js dev command).
3. Visit `/admin/devotionals`, sign in, create a devotional and save.
4. Visit `/devotionals/<slug>` to verify rendering.
5. To test subscriptions: `curl -X POST http://localhost:3000/api/emailoctopus/subscribe -H "Content-Type: application/json" -d '{"email":"you@example.com"}'`

Security & notes
- This is an MVP password-protected admin (cookie-based). For production consider NextAuth or role-based auth.
- MDX files are written to the repository workspace. Back them up or move to a DB if you need versioning/search.
- The Cloudinary route expects an unsigned preset; if you prefer signed uploads replace the upload flow with signed server-side upload.

If you want, I can convert the editor to a WYSIWYG (TipTap) and add publish/draft states and scheduling next.
