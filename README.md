# Ryutaro Ichikawa Portfolio

Astro based portfolio site with a black 3D hero, SEO metadata, public pages, anonymous visit logging, and a private admin dashboard for viewing access logs.

## Stack

- Astro / TypeScript
- Tailwind CSS
- Three.js for the first-view 3D canvas
- Supabase PostgreSQL for analytics storage
- Supabase Auth for admin login
- Cloudflare Pages for deployment

## Local Development

Use Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

## Project Structure

Content, page rendering, shared UI, and browser behavior are separated by responsibility. See [docs/architecture.md](docs/architecture.md) for the file map and extension rules.

## Environment Variables

Copy `.env.example` to `.env` and set values as needed.

```bash
ANALYTICS_SALT=change-this-random-string
PUBLIC_SITE_URL=https://your-domain.example
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_EMAILS=your-email@example.com
PUBLIC_ANALYTICS_ENABLED=true
```

If Supabase server variables are empty, `/api/visit` returns successfully without storing anything.

## Database

Run the schema in `db/schema.sql` on Supabase PostgreSQL before enabling analytics.

Stored visit data is intentionally lightweight:

- daily hashed visitor id
- path
- referrer
- browser language
- screen size
- user agent
- timestamp

Do not store raw IP addresses for this portfolio use case.

## Admin

Public visitors do not log in. The admin area is separate:

- `/admin/login` for Supabase Auth login
- `/admin` for the access log dashboard

Only emails listed in `ADMIN_EMAILS` can read `/api/admin/summary`.

## Deployment

Recommended deployment target is Cloudflare Pages.

1. Import this GitHub repository into Cloudflare Pages.
2. Set the environment variables in Cloudflare project settings.
3. Push to `main`.
4. Cloudflare Pages builds and deploys automatically.

## Legacy Source

The previous Vue/Nuxt implementation is preserved under `legacy/` as reference material only. The active implementation is under `src/`.
# portfolio-site
