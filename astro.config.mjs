// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
    site: 'https://drluisenrique.com',
    base: '/',
    
    // Las integraciones van aquí, cerradas correctamente con un corchete
    integrations: [
        mdx(), 
        sitemap(), 
        react(), 
        markdoc()
    ],
// Cambiamos a array vacío para eliminar el error
    fonts: [],
});