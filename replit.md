# Threshold AI

A landing page for **Threshold AI** — an autonomous AI security testing product. Dark "Terminal Noir" aesthetic: near-black background, off-white text, electric chartreuse (#e8ff52) accent.

## Stack

- **Frontend:** React 19 + TypeScript + Vite 7
- **Styling:** Tailwind CSS v4 + Radix UI + shadcn/ui components
- **Routing:** Wouter
- **Animation:** Framer Motion
- **Package manager:** pnpm

## Running the app

```bash
pnpm dev        # Start dev server on port 5000
pnpm build      # Build for production
pnpm start      # Run production build
```

The dev server runs on port 5000. It is configured as the **Start application** workflow.

## Project structure

```
client/       React frontend (Vite root)
  src/
    pages/    Route-level components (Home, NotFound)
    components/
    contexts/
    hooks/
    lib/
server/       Express server (production static file serving only)
shared/       Shared constants between client and server
```

## Environment variables (optional)

| Variable | Purpose |
|---|---|
| `VITE_ANALYTICS_ENDPOINT` | Umami analytics endpoint |
| `VITE_ANALYTICS_WEBSITE_ID` | Umami website ID |

These are optional — the app runs fine without them.

## User preferences

- Keep the existing project structure and stack.
