var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: path.resolve(__dirname, './app/app.js'),
    output: {
        path: __dirname,
        filename: "application.js"
    },
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
        },
        plugins: [
          new LiveReloadPlugin()
        ]
};
