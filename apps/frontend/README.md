# Frontend

Web application for lab-report-ocr.

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- React Router 7
- Axios

## Architecture

```
src/
├── app/                   # Root App component
├── router/                # React Router configuration
├── modules/               # Feature modules
│   ├── dashboard/         # Dashboard — landing page
│   ├── upload/            # Upload — file upload and OCR
│   ├── review/            # Review — OCR result correction
│   ├── export/            # Export — CSV generation and download
│   └── settings/          # Settings — app configuration
└── shared/                # Shared code
    ├── api/               # Axios instance and API helpers
    ├── assets/            # Static assets (images, fonts)
    ├── components/        # Reusable UI components
    ├── hooks/             # Shared React hooks
    ├── layouts/           # Layout components
    ├── lib/               # Third-party library wrappers
    ├── styles/            # Global styles and Tailwind setup
    ├── types/             # TypeScript type definitions
    └── utils/             # Utility functions
```

## Path Aliases

Use `@/` to reference the `src/` directory:

```ts
import DashboardPage from '@/modules/dashboard/pages/DashboardPage'
```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `pnpm dev`        | Start dev server         |
| `pnpm build`      | Type-check and build     |
| `pnpm preview`    | Preview production build |
| `pnpm lint`       | Run ESLint               |
