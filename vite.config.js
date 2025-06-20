const react = require('@vitejs/plugin-react');
const path = require('path');

/** @type {import('vite').UserConfig} */
module.exports = {
    base: './',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
        extensions: ['.js', '.jsx'],
    },
    plugins: [react()],
};
