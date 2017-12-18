/*
 * @file dev-server.js
 * @author: cdtanhongzhao
 * @describe: 开发环境静态dev配置
 * @date: 2017-10-23 17:25
 */
let express = require('express');
let request = require('request');
let port = process.env.PORT || 3001;
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let webpackConfig = require('./webpack.dev.config');
let app = express();

//  let devClient = 'webpack-hot-middleware/client?noInfo=true&reload=true';
Object.keys(webpackConfig.entry).forEach(function (name, i) {
    //  let extras = ['./build/dev-client'];
    if (name === 'app') {
        let extras = ['react-hot-loader/patch', 'webpack-hot-middleware/client'];
        webpackConfig.entry[name] = extras.concat(webpackConfig.entry[name]);
    }
});
// 调用配置
let compiler = webpack(webpackConfig);
// 这里是重点，使用 webpack-dev-middleware 插件
let devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: '/',
    quiet: true,
    noInfo: false,
    stats: {
        colors: true,
        chunks: false
    }
});

let hotMiddleware = webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
});
//  监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        //  发布事件 reload,这个事件会在dev-client.js中接受到，然后刷新
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});
//  注册中间件
app.use(devMiddleware);
app.use(hotMiddleware);

//  使用静态资源
app.use('/src', express.static('src'));
app.use('/static', express.static('static'));
//代理请求服务器图片，接口跨域问题
app.use('/imgPro[0-9]', function(req, res) {
    let url = 'https://img'+req.baseUrl.split("/imgPro")[1]+'.doubanio.com' + req.url;
    request(url).pipe(res);
});
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log('Listening at http:// localhost:' + port + '\n');
});
