# Studio Tuka

Vite + React + TypeScript + Tailwind CSS project with fully fluid responsive design system.

## Features

- **Fluid Typography**: All typography uses `clamp()` for smooth scaling across viewport sizes
- **Fluid Spacing**: Container padding, section padding, and spacing use `clamp()` for fluid scaling
- **Responsive Grid**: 4 columns (mobile) → 8 columns (tablet) → 12 columns (desktop)
- **Layout Primitives**: Reusable Container, Section, and Grid components
- **SEO Optimized**: React Helmet Async with per-page meta tags, sitemap, robots.txt

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- React Router
- react-helmet-async

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/     # Reusable components (Container, Section, Grid, Header, Footer, etc.)
  pages/         # Page components (Home, Services, Contact, etc.)
  lib/           # Utilities (spacing, seo)
  styles/        # Global styles and Tailwind configuration
```

## Fluid Responsive System

All typography, spacing, and container padding use `clamp()` for fluid scaling:

- **Container**: `px-[clamp(24px,6vw,120px)]`
- **Section**: `py-[clamp(72px,10vw,160px)]` (with tight/loose variants)
- **Typography**: All headings and body text use fluid clamp() values
- **Spacing**: Vertical rhythm uses clamp-based spacing utilities

Breakpoints (md, lg) are only used for layout changes (grid columns, stack vs side-by-side), not for sizing.
