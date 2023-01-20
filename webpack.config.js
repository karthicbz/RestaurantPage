const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/scripts/index.js',
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    output:{
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
}