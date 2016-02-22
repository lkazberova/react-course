var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: {
		app : ["./src/index.js"],
		vendors: ['react', 'react-dom']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build/',
		filename: '[name].min.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				warnings: false
			},
			sourceMap:false,
			minimize: true
		}),
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.min.js')
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel']
			}
		]
	}
};