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
                presets: ['es2015', 'react'],
                plugins: ['add-module-exports']
            }
        },
        {
            test: /\.less$/,
            loader: 'style!css!less'
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
        }]
    }
};
