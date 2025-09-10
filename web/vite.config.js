import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 项目发布在 https://goodwindgoodluck-design.github.io/NB/
  // 因此需要设置基准路径为仓库名
  base: '/NB/',
  build: {
    // 将构建产物输出到仓库根目录的 docs/，用于 GitHub Pages（无需 Actions 权限）
    outDir: '../docs',
    emptyOutDir: true,
  },
})
