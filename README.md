
# Ben Swann — Personal Website

A responsive personal brand and editorial website showcasing
Ben Swann's professional history, media work, career timeline
and associated ventures.

## Technology Stack

- React
- TypeScript
- Vite
- GSAP
- Tailwind CSS
- Lucide React
- Fontsource
- Netlify

## Development Requirements

- Node.js 22.12 or newer
- npm

## Installation

```bash
npm ci
```

## Local Development

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Production Build

```bash
npm run build
```

The compiled production website is generated in the dist directory.

## Production Preview

```bash
npm run preview
```

## Code Quality

```bash
npm run lint
```

## Dependency Security

```bash
npm audit
npm audit --omit=dev
```

Dependency updates should be followed by a production build,
lint validation and responsive visual testing.

## Project Structure

```text
src/
├── components/
│   ├── layout/
│   └── sections/
├── config/
├── data/
├── pages/
├── styles/
├── App.tsx
└── main.tsx

public/
└── media/
    ├── companies/
    ├── gallery/
    ├── press/
    ├── timeline/
    └── video/
```

## Architecture

- src/App.tsx: Homepage composition, shared state, navigation
  and animation lifecycle.
- src/components/sections/: Individual homepage sections.
- src/components/layout/: Shared layout components.
- src/pages/TimelinePage.tsx: Dedicated career timeline page.
- src/data/: Timeline entries, company information, press logos
  and gallery assets.
- src/config/: Shared website configuration.
- src/styles/index.css: Global styling, design tokens,
  responsive rules and animations.
- src/main.tsx: Application initialization and route selection.
- public/media/: Website images, logos and videos.

## Content Management

Website content is maintained within the source code.

Structured content is located in src/data/.

Section-specific text and markup are maintained within the
corresponding React components.

Media assets are located in public/media/.

The current implementation is a frontend website without
a separate CMS, database or administrative dashboard.

## Routes

| Route | Description |
| --- | --- |
| / | Main personal website |
| /timeline | Complete career timeline |

## Deployment

The website is hosted on Netlify.

Deployment settings are maintained in netlify.toml.

Build command:

npm run build

Publish directory:

dist

## Design Documentation

Refer to design.md for the visual direction, color palette,
typography, layout standards and motion system.

## Maintenance

Changes should be validated locally before production deployment.

Recommended verification:

1. Install dependencies using npm ci.
2. Run lint validation.
3. Run the production build.
4. Review the production preview.
5. Verify desktop and mobile layouts.
6. Review dependency security.
7. Deploy the verified changes.
