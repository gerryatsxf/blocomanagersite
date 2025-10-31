import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production' || mode === 'qa'
  
  return {
    plugins: [react()],
    base: isProduction ? '/blocomanagersite/' : '/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      // Ensure proper asset handling for GitHub Pages
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  }
})