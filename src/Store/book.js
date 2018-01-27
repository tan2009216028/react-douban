/**
 * @file book.js
 * @author: tanhongzhao
 * @describe: 图书类接口数据
 * @create: 2017-12-27 19:47
 */

import { action, observable, useStrict } from 'mobx';
import getJsonpRequest from '../Utils/request';
import myInterface, { changeDataLocalStorage } from './interface';
// 启动严格模式
useStrict(true);

export default class Book {
    @observable state;
    constructor() {
        this.state = {
            showType: false, // 是否开始加载
            novel: [], // 小说
            reality: [], // 现实
            travel: [], // 旅行
            bookTags: [
                {
                    title: '小波看书',
                    href: 'https://m.douban.com/doulist/10372/',
                    color: '#42BD56'
                },
                {
                    title: '村上春树周边',
                    href: 'https://m.douban.com/doulist/105583/',
                    color: '#FF4055'
                },
                {
                    title: '我凭名字认定了你',
                    href: 'https://m.douban.com/doulist/99294/',
                    color: '#4F9DED'
                },
                {
                    title: '不可饶恕的女人们',
                    href: 'https://m.douban.com/doulist/35573/',
                    color: '#CC3344'
                },
                {
                    line: true
                },
                {
                    title: '爱欲书',
                    href: 'https://m.douban.com/doulist/38088147/',
                    color: '#FFAC2D'
                },
                {
                    title: '他们还写侦探小说',
                    href: 'https://m.douban.com/doulist/645579/',
                    color: '#3BA94D'
                },
                {
                    title: '人生识字始忧患',
                    href: 'https://m.douban.com/doulist/192653/',
                    color: '#CC3344'
                },
                {
                    title: '詩歌書店',
                    href: 'https://m.douban.com/doulist/89925/',
                    color: '#FF4055'
                }
            ]
        };
    }
    @action
    changeBookState(type, payload) {
        this.state[type] = payload;
    }
    @action getBookList() {
        let getNovelBookList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getNovelBookList', (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeBookState('novel', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getBookList + '?count=10&q=虚构类', (res) => {
                        this.changeBookState('novel', res.body.books);
                        changeDataLocalStorage.setLocalStorageData('getNovelBookList', res.body.books);
                        resolve(res.body);
                    });
                }
            });
        });
        let getRealityBookList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getRealityBookList', (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeBookState('reality', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getBookList + '?count=10&q=非虚构类', (res) => {
                        this.changeBookState('reality', res.body.books);
                        changeDataLocalStorage.setLocalStorageData('getRealityBookList', res.body.books);
                        resolve(res.body);
                    });
                }
            });
        });
        let getRravelBookList = new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getRravelBookList', (thisLocalState, data) => {
                if (thisLocalState) {
                    this.changeBookState('travel', data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getBookList + '?count=10&q=旅行', (res) => {
                        this.changeBookState('travel', res.body.books);
                        changeDataLocalStorage.setLocalStorageData('getRravelBookList', res.body.books);
                        resolve(res.body);
                    });
                }
            });
        });
        Promise.all([getNovelBookList, getRealityBookList, getRravelBookList]).then((result) => {
            this.changeBookState('showType', true);
        });
    }
}