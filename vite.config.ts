import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

const config = defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
    },
  },
  base: '/',
  build: { target: 'es2020' },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `import { jsx } from '@emotion/react'`,
  },
  define: {
    global: 'globalThis',
    'process.env': {},
  },
  server: {
    port: 3009,
    host: '0.0.0.0',
  },
});

export default config;
