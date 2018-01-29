/*
 * @file onlineServer.js
 * @author: Toshiba
 * @describe: 线上服务器配置
 * @date: 2018/1/15 12:10
 */
let express = require('express');
let request = require('request');
let port = process.env.PORT || 3002;
let path = require('path');
let app = express();
//  使用静态资源
app.use('/static', express.static('static'));
app.use('/react', express.static('react'));
//代理请求服务器图片，接口跨域问题
app.use('/imgPro[0-9]', function(req, res) {
    let url = 'https://img'+req.baseUrl.split("/imgPro")[1]+'.doubanio.com' + req.url;
    request(url).pipe(res);
});
// app.get('*', function (request, response){
//     const url = path.resolve(__dirname, '../reactIndex.html');
//     response.sendFile(url);
// })
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log('Listening at http:// localhost:' + port + '\n');
});
