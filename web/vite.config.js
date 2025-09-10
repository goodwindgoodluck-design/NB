import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 通过环境变量切换 base：
  // - GitHub Pages: '/NB/'
  // - Netlify: '/'
  base: process.env.VITE_BASE || '/NB/',
  build: {
    // 将构建产物输出到仓库根目录的 docs/，用于 GitHub Pages（无需 Actions 权限）
    outDir: '../docs',
    emptyOutDir: true,
  },
})
