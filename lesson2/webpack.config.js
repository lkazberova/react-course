
var path = require("path");
var webpack = require("webpack");


module.exports = {
    entry: {
        app:  ['webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
            "./src/index.jsx"]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'react-hot', 'babel']
            }
        ]
    }
};