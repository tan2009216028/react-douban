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
                    getJsonpRequest(myInterface.getBroadcastList + '?max_id=' + maxId, (res) => {
                        if (maxId === '') {
                            this.broadcastData.items = res.body.items;
                        } else {
                            this.broadcastData.items = this.broadcastData.items.concat(res.body.items);
                        }
                        changeDataLocalStorage.setLocalStorageData('broadcastData_' + maxId, res.body);
                        resolve(res.body);
                    });
                }
            });
        });
    }
}