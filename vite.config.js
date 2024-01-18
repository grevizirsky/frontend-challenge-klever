import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      'v1/cryptocurrency/listings/latest': 'http://localhost:5173'
    }
  },
  plugins: [react()],
})
