/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [react(), eslint(), svgr()],
  server: {
    open: true,
    port: 3000,
  }
})
