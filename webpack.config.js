// node module
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

// 配置文件
module.exports = {
    entry: {
        main: './src/index.js',
        about: './src/about.js',
    }, // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
      }, // 出口文件  name -> chunkname main and about
      module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 sass > css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './dist'
                }
              },
                'css-loader',
                'sass-loader'
            ],
        },
        {
            test: /\.(js)$/,
            exclude: /(node_modules)/,

            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }],
            include: path.resolve(__dirname, 'src'),
        },
    ]

        

    },// 處裡對應模組
    plugins: [
         //清理舊的檔案
        new CleanWebpackPlugin(),
        // css
        new MiniCssExtractPlugin({
            filename: "./[name].css" // output 檔案名稱
        }),
        new HtmlWebpackPlugin({
            chunks : ['main'],  //選擇注入資源 chunk
            inject  : 'body', //預設<body> js </body>  head or body
            template : './src/index.html',
            filename : 'index.html'//目的地
        })
    ],// 對應的插件
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 3000,
        // 指定首頁檔案
        index: 'index.html',
        open: true
    },           // 服務器配置
    mode: 'development'     // "production" | "development" | "none"  開發模式 
}