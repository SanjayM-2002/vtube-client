import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/uploadService': {
        target: 'http://13.201.17.253:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/uploadService/, ''),
      },
      '/watchService': {
        target: 'http://13.201.17.253:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/watchService/, ''),
      },
      '/transcodeService': {
        target: 'http://13.201.17.253:5002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/transcodeService/, ''),
      },
    },
  },
});
