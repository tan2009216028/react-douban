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
            loadData: false,
            queryMovieData: {},
            queryBookData: {},
            queryMusicData: {}
        };
    }

    @action
    changeShowType(type) {
        this.searchData.showType = type;
        if (type) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }
    @action resetData() {
        return new Promise((resolve, reject) => {
            this.searchData = Object.assign(this.searchData, {
                loadData: false,
                queryMovieData: {},
                queryBookData: {},
                queryMusicData: {}
            });
            resolve(this.searchData);
        });
    }
    @action
    changeSearchState(type, data) {
        switch (type) {
            case 'movie':
                this.searchData.queryMovieData = {
                    pageType: '/movie/movieDescribe',
                    movieUrl: 'https://m.douban.com/search?type=movie&query=',
                    data: data['subjects'] || []
                };
                break;
            case 'book':
                this.searchData.queryBookData = {
                    pageType: '/book/bookDescribe',
                    bookUrl: 'https://m.douban.com/search?type=book&query=',
                    data: data['books'] || []
                };
                break;
            case 'music':
                this.searchData.queryMusicData = {
                    pageType: '',
                    musicUrl: 'https://m.douban.com/search?type=music&query=',
                    data: data['musics'] || []
                };
                break;
        }
    }

    /**
     * 查询电影,图书，音乐，默认返回5条数据
     * @param queryStr
     */
    @action
    getSearchList(queryStr) {
        let getSearchMovieList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getSearchMovieList' + queryStr, (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeSearchState('movie', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getSearchMovieList + '?q=' + queryStr + '&count=5', (res) => {
                        this.changeSearchState('movie', res.body);
                        changeDataLocalStorage.setLocalStorageData('getSearchMovieList' + queryStr, res.body);
                        resolve(res.body);
                    });
                }
            });
        });
        let getSearchBookList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getSearchBookList' + queryStr, (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeSearchState('book', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getSearchBookList + '?q=' + queryStr + '&count=5', (res) => {
                        this.changeSearchState('book', res.body);
                        changeDataLocalStorage.setLocalStorageData('getSearchBookList' + queryStr, res.body);
                        resolve(res.body);
                    });
                }
            });
        });
        let getSearchMusicList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getSearchMusicList' + queryStr, (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeSearchState('music', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getSearchMusicList + '?q=' + queryStr + '&count=5', (res) => {
                        this.changeSearchState('music', res.body);
                        changeDataLocalStorage.setLocalStorageData('getSearchMusicList' + queryStr, res.body);
                        resolve(res.body);
                    });
                }
            });
        });
        Promise.all([getSearchMovieList, getSearchBookList, getSearchMusicList]).then(action(
            result => {
                this.searchData.loadData = true;
            }
        ));
    }
}