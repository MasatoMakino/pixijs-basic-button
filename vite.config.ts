import { defineConfig } from "vite";

export default defineConfig({
  root: "./docs/demo",
  server: {
    port: 3000,
    host: true, // Expose to all network interfaces for container access
    open: false,
  },
});
