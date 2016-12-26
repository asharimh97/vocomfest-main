var webpack = require('webpack') ;
var rucksack = require('rucksack-css') ;

module.exports = {
	entry : './assets/js/test.js',
	output : {
		path : './public',
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				exclude : 'node_modules',
				loader : 'babel-loader'
			}
		]
	},
	postcss : [
		rucksack({
			autoprefixer : true
		})
	],
	plugins : [
		new webpack.optimize.UglifyJsPlugin({
			compress : {
				warnings : false
			}
		})
	]
}
