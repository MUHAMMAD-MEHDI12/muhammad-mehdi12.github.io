import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For a user site (muhammad-mehdi12.github.io) the base is '/'.
// If you deploy to a project repo instead (e.g. /portfolio/), set base: '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
