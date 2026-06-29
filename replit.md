# Habinix LLC Corporate Website

A professional corporate website for Habinix LLC, a Wyoming-registered Managed Service Provider and IT consulting firm (NAICS Code 541). Includes the Muftiyaan app portfolio page with all App Store-required legal sub-pages.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/habinix run dev` — run the frontend (assigned port)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Wouter (routing) + Tailwind CSS + Framer Motion
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`@workspace/api-zod` generated schemas), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/habinix/src/` — React frontend (pages, components, layouts)
- `artifacts/api-server/src/routes/` — Express API routes (contact, subscribe, payments, health)
- `lib/api-spec/openapi.yaml` — OpenAPI contract (source of truth)
- `lib/db/src/schema/` — Drizzle DB schema (contact_submissions, subscribers)
- `.env.example` — required environment variable reference

## Architecture decisions

- Presentation-first corporate site; backend is minimal (contact form + email subscription + payment gateway status).
- Payment gateway placeholder: `STRIPE_SECRET_KEY` + `PAYPAL_CLIENT_ID` env vars gate the live gateway; if either is absent the `/support-our-mission` page shows a styled placeholder with email subscription.
- All Zod validation in API routes uses `@workspace/api-zod` generated schemas — never raw `zod/v4` imports, which aren't directly available in `api-server`.
- Muftiyaan sub-routes (`/muftian/*`) use a separate layout/header from the main corporate site.

## Product

- `/` — Corporate home with hero, three service pillars, and Muftiyaan ventures grid
- `/about` — Executive profile, Wyoming registration, NAICS 541 positioning
- `/contact` — Contact form wired to `/api/contact` backend
- `/support-our-mission` — Project sponsorship hub with payment gateway or email waitlist
- `/muftian` — Dedicated Muftiyaan app landing page (Google Play / App Store compliant)
- `/muftian/privacy-policy` — App Store-required privacy policy
- `/muftian/terms` — Terms of use
- `/muftian/support` — App support contact
- `/muftian/data-deletion` — Data deletion instructions

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- After any OpenAPI spec change, always run `pnpm --filter @workspace/api-spec run codegen` before touching the frontend or backend routes.
- Do NOT import `zod/v4` directly in `api-server` — use `@workspace/api-zod` generated schemas instead.
- The payment gateway status (`/api/payments/status`) is determined at runtime by checking `STRIPE_SECRET_KEY` and `PAYPAL_CLIENT_ID` env vars.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
