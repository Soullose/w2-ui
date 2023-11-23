const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: ['vuetify'],
    outputDir: 'dist',
    devServer: {
        port: 8888,
        hot: true,
        compress: true
    }
});
