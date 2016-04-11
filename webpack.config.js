module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: './dist/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }]
    }
};
