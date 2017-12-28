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
        this.broadcastData = {};
    }
    /**
     * 获取非登录用户广播20条
     * 新增异步触发new Promise((resolve, reject) => {})
     */
    @action getBroadcastList() {
        return new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('broadcastData', (thisLocalState, data) => {
                if (thisLocalState) {
                    this.broadcastData = data;
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getBroadcastList, (res) => {
                        this.broadcastData = res.body;
                        changeDataLocalStorage.setLocalStorageData('broadcastData', res.body);
                        resolve(res.body);
                    });
                }
            });
        });
    }
}