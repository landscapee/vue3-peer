
const merge = require('webpack-merge');
const argv = require('yargs').argv;
const common = require('./webpack.common.js');
const webpack = require('webpack');

let port = 8089;
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        port: port,
        open: false,
        host:'0.0.0.0',
        progress: true, // 打包过程中的进度条
        noInfo: false, // 隐藏bundle信息
        historyApiFallback: true,
        proxy: { // 代理
            '/qqqqq':{
                target: 'ws://192.168.0.78:8091/ws',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/qqqqq': ''
                }
            }
        },
    },
    plugins: [
        // 热更新插件
        new webpack.HotModuleReplacementPlugin(),
    ]
})
