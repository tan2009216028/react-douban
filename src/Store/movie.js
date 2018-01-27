/*
 * @file movie.js
 * @author: Toshiba
 * @describe: 电影接口数据
 * @date: 2017/12/11 22:45
 */
import { action, observable, useStrict } from 'mobx';
import getJsonpRequest from '../Utils/request';
import myInterface, { changeDataLocalStorage } from './interface';
// 启动严格模式
useStrict(true);

export default class Movie {
    @observable state;
    constructor() {
        this.state = {
            showType: false, // 是否开始加载
            hotMovies: [], // 热门上映电影
            topMovies: [], // 免费排行榜映电影
            newMovies: [], // 新电影电影
            movieTags: [ // 发现好电影
                {
                    title: '同时入选IMDB250和豆瓣电影250的电影',
                    href: 'https://m.douban.com/doulist/968362/',
                    color: '#FFAC2D'
                },
                {
                    title: '带你进入不正常的世界',
                    href: 'https://m.douban.com/doulist/16002',
                    color: '#FF4055'
                },
                {
                    title: '用电【影】来祭奠逝去的岁月',
                    href: 'https://m.douban.com/doulist/190343',
                    color: '#4F9DED'
                },
                {
                    title: '女孩们的故事【电影】',
                    href: 'https://m.douban.com/doulist/1125971',
                    color: '#FFC46C'
                },
                {
                    line: true
                },
                {
                    title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
                    href: 'https://m.douban.com/doulist/4253902',
                    color: '#2384E8'
                },
                {
                    title: '美国生活面面观',
                    href: 'https://m.douban.com/doulist/121326',
                    color: '#3BA94D'
                },
                {
                    title: '2015终极期待',
                    href: 'https://m.douban.com/doulist/37479562',
                    color: '#42BD56'
                },
                {
                    title: '经典韩国电影——收集100部',
                    href: 'https://m.douban.com/doulist/458087',
                    color: '#CC3344'
                }
            ]
        };
    }
    @action
    changeMovieState(type, payload) {
        this.state[type] = payload;
    }
    /**
     * 获取成都市正在上映的电影、即将上映的电影，及top250榜单
     * count: 10
     */
    @action
    getMovieList() {
        let getShowMovieList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getShowMovieList', (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeMovieState('hotMovies', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getShowMovieList + '?count=10&city=成都', (res) => {
                        this.changeMovieState('hotMovies', res.body.subjects);
                        changeDataLocalStorage.setLocalStorageData('getShowMovieList', res.body.subjects);
                        resolve(res.body);
                    });
                }
            });
        });
        let getWillShowMovieList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getWillShowMovieList', (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeMovieState('newMovies', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getWillShowMovieList + '?count=10&city=成都', (res) => {
                        this.changeMovieState('newMovies', res.body.subjects);
                        changeDataLocalStorage.setLocalStorageData('getWillShowMovieList', res.body.subjects);
                        resolve(res.body);
                    });
                }
            });
        });
        let getTop250MovieList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getTop250MovieList', (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeMovieState('topMovies', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getTop250MovieList + '?count=10', (res) => {
                        this.changeMovieState('topMovies', res.body.subjects);
                        changeDataLocalStorage.setLocalStorageData('getTop250MovieList', res.body.subjects);
                        resolve(res.body);
                    });
                }
            });
        });
        Promise.all([getShowMovieList, getWillShowMovieList, getTop250MovieList]).then((result) => {
            this.changeMovieState('showType', true);
        });

    }

}