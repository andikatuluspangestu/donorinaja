import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        about: './src/pages/about.html',
        blood_stock: './src/pages/blood_stock.html',
        donor_events: './src/pages/donor_events.html',
        donor_history: './src/pages/donor_history.html',
        donor_steps: './src/pages/donor_steps.html',
        event_detail: './src/pages/event_detail.html',
        login: './src/pages/login.html',
        privacy: './src/pages/privacy.html',
        profile: './src/pages/profile.html',
        register: './src/pages/register.html',
      }
    }
  },
  server: {
    port: 9000,
  },
});
