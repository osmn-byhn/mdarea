import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    external: ['react', 'react-dom'],
    injectStyle: false, // We'll export CSS separately
    minify: true,
    sourcemap: true,
    onSuccess: async () => {
        // Copy style.css to dist if needed or just let it be handled by other means
        // tsup usually handles .css imports if configured, but let's keep it simple
    },
});
