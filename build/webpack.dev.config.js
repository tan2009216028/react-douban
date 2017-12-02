/*
 * @file webpack.config.js
 * @author: cdtanhongzhao
 * @describe: 静态资源初始化配置
 * @date: 2017-10-23 17:42
 */
let webpack = require('webpack');
let path = require('path');
let glob = require('glob');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
let configure = {
    entry: {
        app:"./src/index.js",
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx','.less','jsonp', '.scss', '.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
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
            },
            {
                test: /\.less$/,
                use: [

                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: '../postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'less-loader', options: { sourceMap: true }
                    }
                ]
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
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
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
        new webpack.NoEmitOnErrorsPlugin(),//跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'React App',
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}
module.exports = configure;