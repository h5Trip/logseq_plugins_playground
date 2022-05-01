import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import logseqDevPlugin from "vite-plugin-logseq"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),logseqDevPlugin()],
  // Makes HMR available for development
  build: {
    target: "esnext",
    minify: "esbuild",
  },
})
