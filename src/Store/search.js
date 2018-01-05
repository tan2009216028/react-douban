/*
 * @file search.js
 * @author: Toshiba
 * @describe: 搜索部分
 * @date: 2017/12/31 22:37
 */
import { action, observable, useStrict } from 'mobx';
import getJsonpRequest from '../Utils/request';
import myInterface, { changeDataLocalStorage } from './interface';
// 启动严格模式
useStrict(true);

export default class Search {
    @observable searchData;
    constructor() {
        this.searchData = {
            showType: false,
            queryMovieData: {},
            queryBookData: {},
            queryMusicData: {}
        };
    }
    @action changeShowType(type) {
        this.searchData.showType = type;
        if (type) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }
    @action changeSearchState(type, data) {
        switch (type) {
            case 'movie':
                this.state.queryMovieData = {
                    pageType: '/movie/movieDescribe',
                    data: data.subjects
                };
                break;
            case 'book':
                this.state.queryBookData = {
                    pageType: '/book/bookDescribe',
                    data: data.books
                };
                break;
            case 'music':
                this.state.queryMusicData = {
                    pageType: '/movie/movieDescribe',
                    data: data.musics
                };
                break;
        }
    }
    /**
     * 查询电影,图书，音乐，默认返回5条数据
     */
    @action
    getSearchList(queryStr) {
        let getSearchMovieList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getSearchMovieList', (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeSearchState('movie', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getSearchMovieList + '?q=' + queryStr + '&count=5', (res) => {
                        this.changeSearchState('movie', res.body);
                        changeDataLocalStorage.setLocalStorageData('getSearchMovieList', res.body);
                        resolve(res.body);
                    });
                }
            });
        });
        let getSearchBookList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getSearchBookList', (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeSearchState('book', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getSearchBookList + '?q=' + queryStr + '&count=5', (res) => {
                        this.changeSearchState('book', res.body);
                        changeDataLocalStorage.setLocalStorageData('getSearchBookList', res.body);
                        resolve(res.body);
                    });
                }
            });
        });
        let getSearchMusicList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getSearchMusicList', (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeSearchState('music', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getSearchMusicList + '?q=' + queryStr + '&count=5', (res) => {
                        this.changeSearchState('music', res.body);
                        changeDataLocalStorage.setLocalStorageData('getSearchMusicList', res.body);
                        resolve(res.body);
                    });
                }
            });
        });
        Promise.all([getSearchMovieList, getSearchBookList, getSearchMusicList]).then((result) => {
            this.changeShowType('showType', true);
        });
    }
}