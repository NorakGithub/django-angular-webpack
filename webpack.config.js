var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('bundle.css');
var failPlugin = require('webpack-fail-plugin');
var webpack = require('webpack');
var path = require('path');
var sass = require('node-sass');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: [
        './frontend/index.ts',
        './frontend/index.scss'
    ],
    output: {
        filename: 'bundle.js',
        path: './static_files/dist'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: extractCSS.extract('style-loader', 'css-loader?sourceMap')
            },
            {
                test: /\.scss$/,
                loader: extractCSS.extract('style-loader', 'css!resolve-url!sass?sourceMap')
            },
            {
                test: /\.tsx?$/, // .ts, .tsx
                loaders: ['ng-annotate', 'awesome-typescript-loader'],
            },
            {
                test: /\.jsx?$/,
                loaders: ['ng-annotate'],
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.png$/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url'
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.ts', '.scss', '.css', '.json']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules', '.']
    },
    plugins: [
        failPlugin,
        extractCSS,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': "jquery",
            moment: 'moment'
        }),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + '(:percent)' + ' (:elapsed seconds)',
        })
    ],
    sassLoader: {
        includePaths: [
            "static_files/dist",
            path.resolve(__dirname, "./../node_modules/compass-mixins/lib")
        ]
    }
};
