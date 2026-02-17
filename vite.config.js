import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePluginRadar } from 'vite-plugin-radar'
import path from "path"

export default defineConfig(() => {
  return {
    base: process.env.VITE_BASE_URL || '/',
    build: {
      outDir: 'build',
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
      proxy: {
        '/pepy-api': {
          target: process.env.VITE_PEPY_TECH_BASE_URL || 'https://api.pepy.tech',
          changeOrigin: true,
          rewrite: (incomingPath) => incomingPath.replace(/^\/pepy-api/, ''),
        },
      },
    },
  };
});