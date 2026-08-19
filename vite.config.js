import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePluginRadar } from 'vite-plugin-radar'
import path from "path"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const pepyApiTarget = env.VITE_PEPY_TECH_BASE_URL || process.env.VITE_PEPY_TECH_BASE_URL || 'https://api.pepy.tech';
  const pepyApiToken = env.VITE_PEPY_TECH_TOKEN || env.PEPY_TECH_TOKEN || process.env.VITE_PEPY_TECH_TOKEN || process.env.PEPY_TECH_TOKEN;
  const pepyProxyHeaders = pepyApiToken ? { 'X-API-Key': pepyApiToken } : {};

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
          target: pepyApiTarget,
          changeOrigin: true,
          headers: pepyProxyHeaders,
          rewrite: (incomingPath) => incomingPath.replace(/^\/pepy-api/, ''),
        },
      },
    },
    preview: {
      proxy: {
        '/pepy-api': {
          target: pepyApiTarget,
          changeOrigin: true,
          headers: pepyProxyHeaders,
          rewrite: (incomingPath) => incomingPath.replace(/^\/pepy-api/, ''),
        },
      },
    },
  };
});