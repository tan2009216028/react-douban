/*
 * @file movieDetail.js
 * @author: Toshiba
 * @describe: 获取电影详情数据
 * @date: 2017/12/24 22:26
 */
import { action, observable, useStrict } from 'mobx';
import getJsonpRequest from '../Utils/request';
import myInterface, { changeDataLocalStorage } from './interface';
// 启动严格模式
useStrict(true);

export default class MovieDetail {
    @observable movieDetailData;
    constructor() {
        this.movieDetailData = {
            content: {},
            movieMeta: 0,
            movieSummary: 0,
        }; // 获取电影数据
    }
    /**
     * 获取电影详情信息
     * 新增异步触发new Promise((resolve, reject) => {})
     * id: 电影类目id
     */
    @action getMovieItem(moiveId) {
        debugger;
        return new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getMovieSynopsis_' + moiveId, (thisLocalState, data) => {
                if (thisLocalState) {
                    this.movieDetailData.content = data;
                    this.movieMeta(data);
                    this.movieSummary(data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getMovieSynopsis + moiveId, (res) => {
                        debugger;
                        this.movieDetailData.content = res.body;
                        this.movieMeta(res.body);
                        this.movieSummary(res.body);
                        changeDataLocalStorage.setLocalStorageData('getMovieSynopsis_' + moiveId, res.body);
                        resolve(res.body);
                    });
                }
            });
        });
    }
    /**
     * 获取电影meta简介
     */
    @action movieMeta(content) {
        return content.movieData.year + ' / ' +
            content.movieData.genres.join(' / ') + ' / ' +
            content.movieData.casts.map(item => item.name).join(' / ') + ' / ' +
            content.movieData.directors.map(item => item.name).join(' / ') + ' / ' +
            content.movieData.countries.join(' / ');
    }
    /**
     * 过滤电影摘要，过多的文字通过点击扩展展开，限定120字符
     */
    @action movieSummary(content) {
        if (content.movieData.summary) {
            return content.movieData.summary.slice(0, 120);
        }
    }
}