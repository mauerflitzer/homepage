# Tobias Friedrich Homepage

A modern Vite + React portfolio homepage for Tobias Friedrich. The site is fully static and designed for Cloudflare Pages.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The production build is written to `dist`.

## Cloudflare Pages

Use these settings when creating the Cloudflare Pages project:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: use the current Cloudflare default, or set a recent LTS version if your account requires one

## Profile Assets

Vite is configured with `publicDir: 'profile'`, so files in `profile/` are copied to the static build root. The homepage links to `/Profile.pdf`, which is the readable LinkedIn profile export currently available in the workspace.

If you add a final CV PDF or profile image later, place it in `profile/` and update the related links or avatar markup in `src/App.jsx`.
