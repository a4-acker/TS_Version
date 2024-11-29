import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

const repositoryName = 'TS_Version';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: `/${repositoryName}/`, 
    server: {
        port: 54658,
    }
})
