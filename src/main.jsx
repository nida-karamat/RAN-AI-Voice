// Ensure `global` exists in the browser for some Node-targeted libraries
// (some third-party libs look for `global` instead of `globalThis`).
if (typeof globalThis.global === 'undefined') {
  globalThis.global = globalThis;
}

// Minimal `process` shim so libraries that reference `process` won't crash in the browser.
// We keep this minimal to avoid bundler/import issues; if a library needs full process
// or Buffer functionality, we should add proper polyfills via Vite config and packages.
if (typeof globalThis.process === 'undefined') {
  globalThis.process = { env: {} };
}
// Some libs check `process.browser` to detect a browser environment
if (typeof globalThis.process.browser === 'undefined') {
  globalThis.process.browser = true;
}
// Ensure NODE_ENV reflects Vite mode where available
try {
  if (!globalThis.process.env.NODE_ENV) globalThis.process.env.NODE_ENV = import.meta.env.MODE || 'development';
} catch (e) {
  // import.meta may not be available in some contexts; ignore if so
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
