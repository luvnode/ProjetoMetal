import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
process.env.BROWSER = 'chrome'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  }
})
