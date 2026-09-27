import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the static build works from a domain root or a sub-path
  // (e.g. GitHub Pages at /portfolio-ricardo/).
  base: './',
  plugins: [react(), tailwindcss()],
})
