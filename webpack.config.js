const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
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
    },
    module:{
        rules:[
            {
            test: /\.css$/,
            use:[
                "style-loader",
                "css-loader",
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ]
    },
}