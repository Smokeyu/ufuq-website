import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.glb'], // Ensure GLB files are included as assets
  publicDir: 'public', // Explicitly set the public directory
  server: {
    watch: {
      usePolling: true, // Ensure file changes are detected
    },
  },
});