// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   // 增加插件的使用
//   plugins: [vue()],
//   build: {
//     lib: {
//       entry: './src/index.ts',
//       name: 'MinierpenguiButton',
//       fileName: 'minierpengui-button',
//     },
//     minify: false,
//     rollupOptions: {
//       external: [
//         // 除了 @minierpengui/shared，未来可能还会依赖其他内部模块，不如用正则表达式将 @minierpengui 开头的依赖项一起处理掉
//         /@minierpengui.*/,
//         'vue',
//       ],
//     },
//   },
// });
import { generateVueConfig } from '../build/build.config';

export default generateVueConfig();
