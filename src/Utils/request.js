/*
 * @file Request.js
 * @author: Toshiba
 * @describe: 请求接口封装
 * @date: 2017/12/9 17:36
 */

import request from 'superagent';
import jsonp from 'superagent-jsonp';
import UUID from './util';

/**
 * 封装request请求
 * @param response
 * @returns {Error}
 */
const getJsonpRequest = (url, successBack) => {
    return new Promise((resolve, reject) => {
        request
            .get(url)
            .use(jsonp({
                timeout: 3000,
                callbackName: UUID.uuid816
            }))
            .end((err, res) => {
                if (!err) {
                    successBack(res);
                    resolve(res);
                }
            });
    });
};
export default getJsonpRequest;
