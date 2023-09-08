// import { defineConfig } from 'vite';

// export default defineConfig({
//   build: {
//     lib: {
//       entry: './src/index.ts',
//       name: 'MinierpenguiUi',
//       fileName: 'minierpengui-ui',
//     },
//     minify: false,
//     rollupOptions: {
//       external: [/@minierpengui.*/],
//       output: {},
//     },
//   },
// });

import { defineConfig } from 'vite';
import { generateVueConfig } from '../build/build.config';

export default defineConfig(({ mode }) => generateVueConfig({ mode }));
