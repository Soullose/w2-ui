const { defineConfig } = require('@vue/cli-service');
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = defineConfig({
    transpileDependencies: ['vuetify'],
    outputDir: 'dist',
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                '~': resolve('src/')
            }
        }
    },
    devServer: {
        port: 8888,
        hot: true,
        compress: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:7777',
                changeOrigin: true
            }
        }
    }
});
