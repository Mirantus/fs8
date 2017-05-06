const path = require('path');
const webpack = require('webpack');
const context = path.resolve(__dirname, 'src');

const isProduction = process.argv.indexOf('-p') !== -1;
const APP_ENV = isProduction ? require('./.env.production') : require('./.env.dev');

module.exports = {
    context,
    entry: path.resolve(__dirname, './src'),
    output: {
        path: path.resolve(__dirname, './www/build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    plugins: [
                        'transform-react-jsx',
                        [
                            'react-css-modules',
                            {
                                context
                            }
                        ]
                    ]
                },
                include: path.resolve(__dirname, './src')
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                include: path.resolve(__dirname, './src')
            },
            {
                include: path.resolve(__dirname, './src'),
                loaders: [
                    'style-loader',
                    'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ],
                test: /\.css$/
            },
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules']
    },
    plugins: [
        new webpack.DefinePlugin({
            APP_ENV: JSON.stringify(APP_ENV)
        })
    ]
};
