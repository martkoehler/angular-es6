var webpack = require('webpack');
module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],

    files: [
      './test/*.spec.js'
    ],

    preprocessors: {
      './test/*.spec.js': ['webpack']
    },

    webpack: {
  		module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015']
              }
            }
        ]
  		}
	  },
  });
};
