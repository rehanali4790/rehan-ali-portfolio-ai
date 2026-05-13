# Rehan Ali — portfolio (Next.js)

Personal portfolio site built with Next.js, Tailwind CSS, and Prisma.

## Local development

1. Copy environment file: `cp .env.example .env` (or copy manually on Windows).
2. Install dependencies: `npm install` or `bun install`.
3. Apply the database schema: `npm run db:push` or `bun run db:push`.
4. Start the dev server: `npx next dev -p 3000` (or `npm run dev` on Unix-like shells with `tee` available).

## Deploy on Vercel

1. Import this GitHub repository in [Vercel](https://vercel.com).
2. Add **Environment variables** → `DATABASE_URL` (same value as in `.env.example` works for build-time Prisma; for production data that persists, use a hosted database such as [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) or [Prisma Postgres](https://www.prisma.io/docs) and point `DATABASE_URL` there).
3. Deploy with the default Next.js preset (build: `next build`, output: Next).

Do **not** commit `.env` or `prisma/dev.db`; they stay local. This repo includes `public/`, `src/`, `prisma/schema.prisma`, and `upload/` assets needed for the site.
