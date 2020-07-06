const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin() //清空目录 避免 hash 文件内容重复  
    ]
}
