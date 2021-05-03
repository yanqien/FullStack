import path from 'path'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@img': path.resolve(__dirname, 'src/assets/images'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.104:7001',
        changeOrigin: true,
      },
    },
  },
  plugins: [vue(), vueJsx()],
})
