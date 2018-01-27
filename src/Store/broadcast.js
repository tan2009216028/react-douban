/**
 * @file broadcast.js
 * @author: tanhongzhao
 * @describe: 广播获取数据
 * @create: 2017-12-28 20:26
 */

import { action, observable, useStrict } from 'mobx';
import getJsonpRequest from '../Utils/request';
import myInterface, { changeDataLocalStorage } from './interface';
// 启动严格模式
useStrict(true);

export default class Broadcast {
    @observable broadcastData;

    constructor() {
        this.broadcastData = {
            items: []
        };
    }

    /**
     * 获取非登录用户广播20条
     * 新增异步触发new Promise((resolve, reject) => {})
     */
    @action getBroadcastList(maxId = '') {
        return new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('broadcastData_' + maxId, (thisLocalState, data) => {
                if (thisLocalState) {
                    if (maxId === '') {
                        this.broadcastData.items = data.items;
                    } else {
                        this.broadcastData.items = this.broadcastData.items.concat(data.items);
                    }
                    resolve(data);
                } else {
                    // 编写异步 Actions (动作) action 包装/装饰器只会对当前运行的函数作出反应，而不会对当前运行函数所调用的函数（不包含在当前函数之内）作出反应！
                    // 这意味着如果 action 中存在 setTimeout、promise 的 then 或 async 语句，并且在回调函数中某些状态改变了，那么这些回调函数也应该包装在 action 中。
                    getJsonpRequest(myInterface.getBroadcastList + '?max_id=' + maxId, action(
                        (res) => {
                            if (maxId === '') {
                                this.broadcastData.items = res.body.items;
                            } else {
                                this.broadcastData.items = this.broadcastData.items.concat(res.body.items);
                            }
                            changeDataLocalStorage.setLocalStorageData('broadcastData_' + maxId, res.body);
                            resolve(res.body);
                        }
                    ));
                }
            });
        });
    }
}