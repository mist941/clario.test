import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/',
  define: {
    global: 'window',
  },
  build: {
    outDir: path.resolve(__dirname, 'build'),
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [react()],
});
