import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  const isQA = mode === 'qa'
  
  let basePath = '/'
  if (isProduction) {
    basePath = '/blocomanagersite/'
  } else if (isQA) {
    // Netlify uses root path - no subdirectories needed
    basePath = '/'
  }
  
  return {
    plugins: [react()],
    base: basePath,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      // Ensure proper asset handling
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  }
})