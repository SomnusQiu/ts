const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  
    entry: './src/index.jsx',
    output: {
        publicPath: '/',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js','.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
