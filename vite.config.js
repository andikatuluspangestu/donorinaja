import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Menggunakan folder src sebagai root
  build: {
    outDir: '../dist', // Output akan ke folder dist
    emptyOutDir: true, // Kosongkan folder dist setiap build
  },
  server: {
    port: 9000, // Port untuk development server
  },
});
