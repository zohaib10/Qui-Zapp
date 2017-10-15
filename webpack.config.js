//In this file we will set the configurations for webpack
//why do we have to use module.exports??
module.exports = {
	//this is to set the entry point where webpack will start??
	entry: [
		'./src/index.js'
	],
	//this is for the output of the file
	output: {
		path: __dirname,
		//the location where the compiled js is placed. I was wondering why nothing was put in that js location
		filename: 'app/js/main.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	}

}