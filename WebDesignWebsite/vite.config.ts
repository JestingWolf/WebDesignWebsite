// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  server: {
    fs: {
      strict: false
    },
    allowedHosts: true // Allow ALL hosts (for development)
  }
})