import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Todo-react-app/", // ⚠️ This must be your GitHub repo name!
  plugins: [react()],
});



