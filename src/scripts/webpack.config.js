const webpack = require('webpack'); // webpack

module.exports = {
    mode: "production",
    // mode: "development",
    entry: {
        main: './src/scripts/main/index.js',
        vendor: './src/scripts/vendor/index.js',
    },
    devtool: false,
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    output: {
        filename: './js/[name].min.js',
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: 'maps/[name].min.js.map',
        })
    ]
}
