import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
    historyApiFallback: true, 
    proxy: {
      '/api': 'http://localhost:5000', // Proxy /api requests to backend server
    },// Ensures fallback to index.html
  },
})
