
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Important for external access
    allowedHosts: [
      'wheylike-ozella-uncondoled.ngrok-free.dev',
      'localhost',
      '127.0.0.1'
    ],
    // Explicitly define the port (optional)
    port: 5173
  }
})
