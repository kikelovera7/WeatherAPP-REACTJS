const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production';

module.exports={
    entry:[
        '@babel/polyfill',
        `./src/App/index.js`
    ],
    output:{
        path: __dirname + `/build`,
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: '/\.css$/',
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:  'bundle.css'
        })
    ]
};