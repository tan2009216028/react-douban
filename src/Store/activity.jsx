/*
 * @file activity.js
 * @author: Toshiba
 * @describe: 获取活动数据接口
 * @date: 2017/12/9 17:36
 */
import { action, observable, useStrict } from 'mobx';
import request from 'superagent';
import jsonp from 'superagent-jsonp';
import myInterface from './interface';
// 启动严格模式
useStrict(true);

export default class Activity {
    @observable actState;
    constructor() {
        this.actState = {
            list: [], // 更新活动数据
            temp: [],
            step: 0, // 更新活动目前数据条数位置
            total: 0, // 总共数据条数
            recordListNum: 0, // 开始于第几条
            haiMoreData: true, // 是否还有更多数据
            detailItem: {} // 更新活动详情数据
        };
    }
    /**
     * 更新数据
     * step: 5
     * count: 5
     */
    @action getMoreData(payload) {
        this.actState.recordListNum += payload.count;
        this.actState.step += 5;
        this.actState.total = payload.total;
        this.actState.list = this.actState.list.concat(payload.events);
        if (this.actState.recordListNum >= this.actState.total) {
            this.actState.haiMoreData = false;
        }
    }
    /**
     * 获取成都市活动数据，使用jsonp需要定义下timeout
     * step: 5
     * count: 5
     */
    @action getActivityList() {
        request.get(myInterface.getActivityList + '?loc=' + myInterface.cityId + '&start=' + this.actState.step + '&count=' + myInterface.count)
            .use(jsonp({
                timeout: 3000
            }))
            .end((err, res) => {
                if (!err) {
                    console.log('react数据获取完毕');
                    console.log(res.body);
                    setTimeout(() => {
                        this.getMoreData(res.body);
                    }, 1000);
                }
            });
    }
}