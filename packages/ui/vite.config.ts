import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'MinierpenguiUi',
      fileName: 'minierpengui-ui'
    },
    minify: false,
    rollupOptions: {
      external: [/@minierpengui.*/],
      output: {}
    }
  }
})
