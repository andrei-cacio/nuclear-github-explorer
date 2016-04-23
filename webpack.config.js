const webpack = require('webpack');
const ENV = process.env.NODE_ENV;
const isPROD = (ENV === 'production');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.less$/,
            loader: 'style!css!less'
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
        }]
    },
    plugins: isPROD ? [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ minimize: true })]: []
};
