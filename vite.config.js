import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePluginRadar } from 'vite-plugin-radar'
import path from "path"

export default defineConfig(() => {
  return {
    base: '/staging/',
    build: {
      outDir: 'dist',
    },
    plugins: [
      react(),
      VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-C862CJD7DH',
      },
    })],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      postcss: 'postcss.config.js',
    },
    server: {
      port: 3000,
    },
  };
});