# Purusothaman S — Portfolio (React + Lightswind UI)

A real React project built with Vite, TypeScript and Tailwind, using hand-picked
components copied from the **Lightswind UI** library you found on GitHub
(`Lightswind-UI-Library-Master.zip`).

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build a deployable static site:

```bash
npm run build
```

Output lands in `dist/` — you can drag that folder into Netlify/Vercel, or run
`npm run preview` to check it locally first.

## What came from Lightswind UI

Copied straight from the zip's `src/components/ui/`, unmodified except where noted:

- `toggle-theme.tsx` — the dark/light switch in the nav
- `aurora-text-effect.tsx` — the animated gradient behind your name
- `looping-words.tsx` — the rotating role words in the hero
- `beam-grid-background.tsx` — the animated grid/beam hero background
- `stack-list.tsx` — the expandable Education/Experience lists
- `terminal-card.tsx` — the "About" code-snippet terminal window
- `stardust-button.tsx` — copied in, not currently used, but available if you want a particle-effect CTA button later

## Two things I changed, and why

1. **`terminal-card.tsx`**: the original imports `next/dynamic`, which only
   exists in Next.js projects. Since this is a plain Vite app, I swapped it
   for a direct import of `react-syntax-highlighter` — same visual result,
   no Next.js dependency.

2. **`src/components/lib/utils.ts`**: the library's own version of this file
   has `import "lightswind";` at the top. That pulls in the npm package's
   main entry point, which runs a small analytics beacon on page load —
   it sends your site's hostname to `pro.lightswind.com` once a week,
   and the URL is deliberately obfuscated (shifted by one character) in
   their source rather than written in plain text. It's not malicious —
   just an undisclosed telemetry call I didn't think you'd want quietly
   shipping in your personal site — so I rewrote `utils.ts` from scratch
   with just the one helper function (`cn`) it's actually used for, and
   never installed the `lightswind` npm package at all.

3. I also patched a real bug in `toggle-theme.tsx`: the original calls
   `document.startViewTransition(...)` unconditionally, which throws in
   any browser that doesn't support the View Transitions API (Firefox,
   older Safari). Added a plain fallback so the toggle still works there.

## A note on verification

I don't have network access in this environment, so I couldn't run
`npm install` / `npm run build` myself to confirm it compiles clean. I did
check every import and prop against the actual Lightswind source files by
hand. If `npm run dev` throws anything on your machine, send me the error
and I'll fix it.

## Content

All your info (projects, skills, education, contact) lives in one place:
`src/data.ts` — edit that file to update anything without touching the
component code.
