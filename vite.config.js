import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    historyApiFallback: true,
  },
  base: '/ICDPN/', // replace 'my-vite-app' with your repository name
});

// vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/ICDPN/', // replace 'my-vite-app' with your repository name
// });

