const path = require('path');
const rimraf = require('rimraf');

// 删除 dist 目录
rimraf.sync('dist');

// webpack 配置
module.exports = {
    entry: './src/index',
    mode: process.env.NODE_ENV,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};