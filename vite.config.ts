import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  const isQA = mode === 'qa'
  
  let basePath = '/'
  if (isProduction) {
    // For Netlify production, use root path
    basePath = '/'
  } else if (isQA) {
    // For QA (also Netlify), use root path
    basePath = '/'
  }
  
  return {
    plugins: [react()],
    base: basePath,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
  }
})