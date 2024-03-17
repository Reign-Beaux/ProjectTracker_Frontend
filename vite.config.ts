import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "components", replacement: path.resolve(__dirname, "src/application/components") },
      { find: "libs", replacement: path.resolve(__dirname, "src/application/libs") },
      { find: "utils", replacement: path.resolve(__dirname, "src/application/utils") },
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
})
