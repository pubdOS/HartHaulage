import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The build time, so a time-boxed kit piece (src/kit/until.js) renders the
  // same on the server and in the browser before it checks the visitor's clock.
  define: { __BUILT_AT__: JSON.stringify(Date.now()) },
})
