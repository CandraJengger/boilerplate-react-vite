# Boilerplate Frontend

A modern, robust React boilerplate built with performance, scalability, and developer experience in mind. This project leverages the latest ecosystem tools like **React 19**, **Vite**, **Tailwind CSS 4**, and **Ant Design**.

## 🚀 Tech Stack

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite`)
- **UI Components**: [Ant Design (antd)](https://ant.design/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Data Fetching**: [SWR](https://swr.vercel.app/) & [Axios](https://axios-http.com/)
- **Linting & Formatting**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/lint-staged/lint-staged)

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: `^24.11.1` (check `package.json` for engine requirements)
- **npm** or **yarn**

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

### Development

Run the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

---

## 🏗️ Folder Structure

This project follows a **Feature-Based** architecture to keep the codebase modular and scalable.

```text
src/
├── auth/               # Feature: Authentication (Login, Register, etc.)
│   ├── pages/          # Feature-specific pages
│   └── index.md        # Feature documentation
├── dashboard/          # Feature: Dashboard
│   └── pages/
├── user-management/    # Feature: User Management
├── shared/             # Global/Shared Resources
│   ├── components/     # Common UI components (Layouts, Buttons, etc.)
│   ├── configs/        # App configurations (Routes, Env, Axios)
│   ├── constants/      # Global constants (API endpoints, Keys)
│   ├── hooks/          # Global custom hooks
│   ├── styles/         # Global styles (Tailwind, index.css)
│   └── utils/          # Utility functions
├── App.tsx             # Root Component
└── main.tsx            # Entry Point
```

### Global vs Feature Structure
- **Global (`shared/`)**: Contains elements used across multiple features. If a component or hook is used in more than one module, it belongs here.
- **Feature Modules**: Each top-level folder in `src/` (except `shared`) represents a domain or feature. This keeps related logic together.

---

## 📦 How to Reproduce this Boilerplate

If you want to recreate this exact setup from scratch, follow these steps:

### 1. Initialize Vite
```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
```

### 2. Install Dependencies
```bash
# Core Dependencies
npm install antd axios swr react-router clsx tailwind-merge js-cookie
npm install -D @types/js-cookie @types/node

# Styling (Tailwind 4)
npm install tailwindcss @tailwindcss/vite

# Quality Tools
npm install -D prettier husky lint-staged
```

### 3. Configure Tailwind CSS 4
Update `vite.config.ts`:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 3000 }
})
```
Add to `src/shared/styles/index.css`:
```css
@import "tailwindcss";
```

### 4. Set up Prettier & Husky
1. Create `.prettierrc` and `.prettierignore`.
2. Initialize Husky: `npx husky init`.
3. Add `pre-commit` hook for `lint-staged`.

---

## 📜 Available Scripts

- `npm run dev`: Start development server on port 3000.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint checks.
- `npm run format`: Format code with Prettier.
- `npm run preview`: Preview production build locally.
