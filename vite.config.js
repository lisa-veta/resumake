import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
        extensions: ['.js', '.jsx'],
    },
    plugins: [react()],
});
