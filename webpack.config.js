const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    foundation: path.join(__dirname, 'node_modules/foundation-sites/scss')
};

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "8080";

process.env.BABEL_ENV = process.env.npm_lifecycle_event;

const config = {
    entry: {
        app: PATHS.app
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        stats: 'errors-only',

        port: PORT,
        host: HOST
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
            loaders: ["style", "css?sourceMap", "sass?sourceMap"],
            include: [PATHS.app, PATHS.foundation]
        }]
    },
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
        new webpack.HotModuleReplacementPlugin()
    ]
}


module.exports = config;
