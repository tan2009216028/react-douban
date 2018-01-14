/*
 * @file webpack.config.js
 * @author: cdtanhongzhao
 * @describe: 静态资源生产环境打包
 * @date: 2017-10-23 17:42
 */
let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
let configure = {
    entry: {
        base: ['react', 'react-dom', 'react-router-dom', 'styled-components', 'superagent' ,'superagent-jsonp'],
        appIndex: './src/appIndex.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx','.less','jsonp', '.scss', '.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: [
                        { loader: 'css-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                config: {
                                    path: './postcss.config.js'
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            },
            {
                enforce: 'pre',
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'eslint-loader',
            },
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        // fonts/打包到dist下的fonts文件夹
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.NoEmitOnErrorsPlugin(), // 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
        new FriendlyErrorsPlugin(),
        // new HtmlWebpackPlugin({
        //     favicon:'./static/favicon.ico',
        //     title: '豆瓣reactApp',
        //     filename: 'index.html',
        //     template: './index.html',
        //     inject: 'head'
        // })
    ]
};
module.exports = configure;