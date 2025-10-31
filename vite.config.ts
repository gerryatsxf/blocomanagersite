import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  const isQA = mode === 'qa'
  
  // Get branch name from environment variable (set by GitHub Actions)
  const branchName = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF_NAME || 'qa-env'
  
  let basePath = '/'
  if (isProduction) {
    basePath = '/blocomanagersite/'
  } else if (isQA) {
    basePath = `/blocomanagersite-qa/${branchName}/`
  }
  
  return {
    plugins: [react()],
    base: basePath,
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