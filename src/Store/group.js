/*
 * @file group.js
 * @author: Toshiba
 * @describe: 小组板块，代理线上接口
 * @date: 2017/12/31 16:12
 */
import { action, observable, useStrict } from 'mobx';
import getJsonpRequest from '../Utils/request';
import myInterface, { changeDataLocalStorage } from './interface';
// 启动严格模式
useStrict(true);

export default class Group {
    @observable classifiedGroups;
    constructor() {
        this.classifiedGroups = {
            groupList: {}
        };
    }
    /**
     * 获取豆瓣小组列表
     */
    @action getGroupList() {
        return new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('classifiedGroups', (thisLocalState, data) => {
                if (thisLocalState) {
                    this.classifiedGroups.groupList = data;
                    resolve(data);
                } else {
                    // 编写异步 Actions (动作) action 包装/装饰器只会对当前运行的函数作出反应，而不会对当前运行函数所调用的函数（不包含在当前函数之内）作出反应！
                    // 这意味着如果 action 中存在 setTimeout、promise 的 then 或 async 语句，并且在回调函数中某些状态改变了，那么这些回调函数也应该包装在 action 中。
                    getJsonpRequest(myInterface.getGroupList, action((res) => {
                        this.classifiedGroups.groupList = res.body;
                        console.log(this.classifiedGroups.groupList);
                        changeDataLocalStorage.setLocalStorageData('classifiedGroups', res.body);
                        resolve(res.body);
                    }));
                }
            });
        });
    }
}