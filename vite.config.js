import path, { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/sneakers/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/pages/_sections'),
      '@assets': path.resolve(__dirname, '/assets'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      }
    },
  }
}) 
