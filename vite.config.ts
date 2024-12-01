import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Simulates a browser-like environment for tests
    setupFiles: "./src/setupTests.ts", // Configure the testing setup file
    coverage: {
      all: true, // Include all files in the source directory in coverage
      include: ["src/**/*.{ts,tsx}"], // Include all TypeScript and TSX files
      exclude: [
        "src/main.tsx", // Entry point file
        "src/vite-env.d.ts", // Vite-specific environment types
        "src/setupTests.ts", // Test setup file
        "src/**/*.stories.{ts,tsx}", // Storybook files, if any
        "src/**/*.mock.{ts,tsx}", // Mock files for tests
        "**/*.d.ts", // TypeScript declaration files
        "node_modules/**", // Dependencies
        "dist/**", // Build output
      ],
    },
  },
});
