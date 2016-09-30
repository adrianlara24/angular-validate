var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/index.js',
	output:{
		path: './public',
		filename: 'boundle.js'
	},
	resolve: {
		alias: {
			reduxModule: path.resolve(__dirname, './src/redux'),
			actions: path.resolve(__dirname, './src/redux/actions'),
			reducers: path.resolve(__dirname, './src/redux/reducers'),
			constants: path.resolve(__dirname, './src/constants'),
			components: path.resolve(__dirname, './src/components'),
			services: path.resolve(__dirname, './src/services')
		},
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'stage-2']} },
			{ test: /\.less/, loader: 'style!css!less'},
			{ test: /\.(woff|woff2|eot|ttf|svg)/, loader: 'url'},
			{ test: /\.html$/, exclude: /node_modules/, loader: 'raw'}
		]
	},

	plugins: [
		new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'})
	],

	devtool: 'inline-source-map'
}
