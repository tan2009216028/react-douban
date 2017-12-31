/*
 * @file search.js
 * @author: Toshiba
 * @describe: 搜索部分
 * @date: 2017/12/31 22:37
 */
import { action, observable, useStrict } from 'mobx';
// import getJsonpRequest from '../Utils/request';
// import myInterface, { changeDataLocalStorage } from './interface';
// 启动严格模式
useStrict(true);

export default class Search {
    @observable searchData;
    constructor() {
        this.searchData = {
            showType: false
        };
    }
    @action changeShowType(type) {
        this.searchData.showType = type;
    }
}