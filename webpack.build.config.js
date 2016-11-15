const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    foundation: path.join(__dirname, 'node_modules/foundation-sites/scss')
};

const pkg = require('./package.json');

process.env.BABEL_ENV = process.env.npm_lifecycle_event;

const config = {
    entry: {
        app: PATHS.app,
        vendor: Object.keys(pkg.dependencies).filter(function(v) {
            return true;
        })
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.jsx?$/,
            loaders: ['babel?cacheDirectory'],
            include: PATHS.app
        }, {
            test: /\.scss$/,
            include: [PATHS.app, PATHS.foundation],
            loader: ExtractTextPlugin.extract("style", ["css?sourceMap", "postcss", "sass?sourceMap&outputStyle=expanded"])
        }]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: 'node_modules/html-webpack-template/index.ejs',
            title: 'SFDC_OPP_KANBAN app',
            appMountId: 'app',
            inject: false,
            scripts: [
                // 'https://code.jquery.com/jquery-2.2.0.min.js',
                // 'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.4/foundation.min.js'
            ],
            links: [
                'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'
            ],
        }),
        new CleanPlugin([PATHS.build]),
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}

module.exports = config;
