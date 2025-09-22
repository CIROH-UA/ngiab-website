import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePluginRadar } from 'vite-plugin-radar'
import path from "path"
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  return {
    base: process.env.VITE_BASE_URL || '/',
    build: {
      outDir: 'build',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          devcon25survey: resolve(__dirname, 'devcon25survey.html'),
          feedback: resolve(__dirname, 'feedback.html'),
        },
      },
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