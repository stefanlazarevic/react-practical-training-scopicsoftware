const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSync = require('browser-sync');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
require('dotenv').config();

const mode = process.env.NODE_ENV;

const styleLoader = mode === 'production' ? ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader!sass-loader',
}) : ['style-loader', 'css-loader', 'sass-loader'];

module.exports = {
    entry: {
        app: path.resolve('src/index.js'),
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'redux',
            'react-redux',
            'redux-thunk',
            'react-addons-css-transition-group'
        ],
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react',
                        'es2015'
                    ],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(sass)$/,
                loader: styleLoader,
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].bundle.js',
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: mode !== 'production',
            allChunks: true,
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3001,
            proxy: '0.0.0.0:5000',
            files: [{
                match: [
                    '**/*.html',
                ],
                fn: (event) => {
                    if (event === 'change') {
                        const bs = BrowserSync.get('bs-webpack-plugin');
                        bs.reload();
                    }
                },
            }],
        }, {
            reload: false,
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0',
        port: 5000,
    },
}
