// node module
const path = require('path');

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
            test: /\.css$/,
            //順序是由下到上 css > style
            use: [
                'style-loader',
                'css-loader'
            ],
        }]
    },// 處裡對應模組

    //plugins: [],             // 對應的插件
    //devServer: {},           // 服務器配置
    mode: 'development'     // "production" | "development" | "none"  開發模式 
}