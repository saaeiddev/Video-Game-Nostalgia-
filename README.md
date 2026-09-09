# Game Nostalgia

A responsive nostalgic game archive with a real-time procedural 3D handheld, built with React, TypeScript, Vite, Three.js, React Three Fiber and Drei.

## Run

Node.js 22 is recommended.

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Controls

- Drag the handheld to rotate it; release to settle it.
- Click the screen or its accessible HTML button to explore.
- Scroll on desktop, drag/swipe the carousel, use arrows, or select a card.
- Keyboard left/right browse; Enter activates focused controls; Escape closes dialogs.
- Search by title, year or genre.
- Save memories locally on the device. Sound is off by default.
- Reduced-motion and WebGL-unavailable fallback preserve navigation.

## GitHub Pages

The included `.github/workflows/deploy.yml` builds and publishes `dist/` on pushes to `main`. In repository Settings → Pages, select GitHub Actions as the source. Relative Vite asset paths support both repository subpaths and custom domains. There is no client-side router requiring rewrite rules.

## Content and model

`src/data/games.ts` is the metadata source. Optional `image` values can point to user-owned/licensed artwork, using `import.meta.env.BASE_URL` for public assets. Current canvas artwork consists of original abstract tribute motifs. Game titles belong to their owners; this is an independent fan tribute. No game ROMs, publisher covers or system screenshots are included.

`src/three/Vita.tsx` owns the procedural geometry and interaction. Replace its mesh group with a licensed GLB while preserving its props and rotation group. `VitaScreen.ts` owns the animated canvas texture. Environment reflections are generated locally, with no remote HDR dependency. Room artwork was generated for this project. Fonts are served locally.

## Validation and limitations

TypeScript and Vite production builds passed. Chrome UI QA checked selection, search, keyboard details, Escape, saving, and phone/tablet layouts. The provided browser exposes no WebGL2 context and therefore displayed the intended fallback; real GPU rendering, drag rotation, physical touch hardware, and Safari still need validation. Do not describe these checks as passed. GitHub Actions deployment is configured; the repository Pages source must be GitHub Actions. GPU and Safari verification remain outstanding.
