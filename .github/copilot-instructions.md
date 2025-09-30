# Copilot Instructions for AI Coding Agents

## Project Overview
- This is a Next.js 13+ app using the `/app` directory structure, TypeScript, and modern React features.
- Major content types: lessons (`bai-hoc`), posts (`bai-viet`), topics (`chu-de`), with dynamic routes for detail pages (e.g., `app/bai-hoc/[id]/page.tsx`).
- Core business logic and data fetching are in `lib/` (e.g., `lessonService.ts`, `postService.ts`, `categoryService.ts`).
- UI components are in `app/components/` and are reused across pages.

## Key Patterns & Conventions
- **Routing:** Uses Next.js app directory routing. Dynamic routes use `[id]` folders. Example: `app/bai-hoc/[id]/page.tsx` renders a lesson detail.
- **Data Fetching:** Services in `lib/` handle all data access (Firebase, Gemini, etc). Pages and components import these services for SSR/ISR or client-side fetching.
- **Component Structure:** Components are colocated in `app/components/` and named by function (e.g., `LessonSummary.tsx`).
- **Styling:** Uses global CSS in `app/globals.css` and component-level styles. No CSS-in-JS detected.
- **Assets:** Static files and images are in `public/` (including lesson-specific folders).

## Developer Workflows
- **Start Dev Server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Type Checking:** `tsc --noEmit` (uses `tsconfig.json`)
- **Linting:** `npx eslint .` (config in `eslint.config.mjs`)
- **Build:** `npm run build`
- **Deploy:** Designed for Vercel, but can be self-hosted.

## Integration Points
- **Firebase:** Used for backend data (see `lib/firebase.ts`).
- **Gemini API:** Used for AI features (see `lib/geminiService.ts`).
- **Summary, Category, Topic Services:** All in `lib/`, abstracting external APIs and business logic.

## Project-Specific Notes
- Vietnamese naming conventions are used for routes and files (e.g., `bai-hoc`, `chu-de`).
- All business logic should be placed in `lib/` services, not in page components.
- Avoid direct data fetching in components; use service functions for consistency and testability.
- When adding new content types, follow the existing folder and service structure.

## Examples
- To add a new lesson detail page: create `app/bai-hoc/[id]/page.tsx` and use `lib/lessonService.ts` for data.
- To add a new component: place it in `app/components/` and import as needed.

---
For more, see `README.md` and the `lib/` directory for service patterns.
