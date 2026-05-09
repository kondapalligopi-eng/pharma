# Brightwell Pharma

Marketing site for **Brightwell Pharma** — a single-page Vite + React SSG site
deployed as a Render static site.

## Stack

- Vite + React 18 (TypeScript)
- `vite-react-ssg` for static pre-rendering
- Tailwind CSS (brand palette: red / orange-sun / sky)
- `@fontsource/inter` + `@fontsource/bebas-neue`

## Brand colours

Pulled from the product cartons:

| Token       | Use                                  | Hex (600) |
| ----------- | ------------------------------------ | --------- |
| `primary`   | Brightwell red wave                  | `#dc2626` |
| `accent`    | "brightwell" sun-orange wordmark     | `#ea580c` |
| `sky`       | Light-blue carton accent (MV1 packs) | `#0284c7` |

## Local dev

```bash
cd frontend
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Build

```bash
cd frontend
npm run build
```

Output goes to `frontend/dist`. Render uses this directory as the static
publish path (see `render.yaml`).
