import { defineConfig } from 'vite'
import MyHtmlPlugin from './plugins/HtmlPlugin'
import { resolve } from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@src': resolve(__dirname, 'src'),
            '@assets': resolve(__dirname, 'src', 'assets'),
            '@style': resolve(__dirname, 'src', 'style'),
            '@ts': resolve(__dirname, 'src', 'ts'),
        }
    }
})