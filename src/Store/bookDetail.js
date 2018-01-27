/**
 * @file bookDetail.js
 * @author: tanhongzhao
 * @describe: 获取图书详情接口
 * @create: 2017-12-27 21:15
 */
import { action, observable, useStrict } from 'mobx';
import getJsonpRequest from '../Utils/request';
import myInterface, { changeDataLocalStorage } from './interface';
// 启动严格模式
useStrict(true);

export default class BookDetail {
    @observable bookDetailData;
    constructor() {
        this.bookDetailData = {
            content: {},
            bookMeta: 0,
            bookSummary: 0,
            bookTags: [
                {
                    title: '一日一书',
                    href: 'https://m.douban.com/doulist/36861254/',
                    color: '#42BD56'
                },
                {
                    title: '你银幕上的奇迹    我笔尖下的叹息',
                    href: 'https://m.douban.com/doulist/218398/',
                    color: '#42BD56'
                },
                {
                    title: '我的身体里有一个游荡的未来',
                    href: 'https://m.douban.com/doulist/27039041/',
                    color: '#42BD56'
                },
                {
                    title: '读书即生活GREAT BOOK TEAM',
                    href: 'https://m.douban.com/doulist/43680804/',
                    color: '#42BD56'
                },
                {
                    line: true
                },
                {
                    title: '生活中永远保持期待：好书追寻中',
                    href: 'https://m.douban.com/doulist/38991156/',
                    color: '#42BD56'
                },
                {
                    title: '電影研究',
                    href: 'https://m.douban.com/doulist/38999138/',
                    color: '#42BD56'
                },
                {
                    title: '那些不可说的结局',
                    href: 'https://m.douban.com/doulist/39524068/',
                    color: '#42BD56'
                },
                {
                    title: '影事杂陈',
                    href: 'https://m.douban.com/doulist/937625/',
                    color: '#42BD56'
                }
            ]
        };
    }
    /**
     * 获取图书详情信息
     * 新增异步触发new Promise((resolve, reject) => {})
     * id: 图书id
     */
    @action getBookItem(bookId) {
        return new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getBookSynopsis_' + bookId, (thisLocalState, data) => {
                if (thisLocalState) {
                    this.bookDetailData.content = data;
                    this.bookMeta(data);
                    this.bookSummary(data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getBookSynopsis + bookId, (res) => {
                        this.bookDetailData.content = res.body;
                        this.bookMeta(res.body);
                        this.bookSummary(res.body);
                        changeDataLocalStorage.setLocalStorageData('getBookSynopsis_' + bookId, res.body);
                        resolve(res.body);
                    });
                }
            });
        });
    }
    /**
     * 获取图书meta简介
     */
    @action bookMeta(content) {
        if (content.author) {
            this.bookDetailData.bookMeta = content.author.join(' / ') +
                content.translator.join(' / ') + ' / ' +
                content.publisher + ' / ' +
                content.binding + ' / ' + content.pages + ' / ' +
                content.price + '/ ' + content.pubdate;
        }

    }
    /**
     * 过滤图书摘要，过多的文字通过点击扩展展开，限定120字符
     */
    @action bookSummary(content) {
        if (content.summary) {
            this.bookDetailData.bookSummary = content.summary.slice(0, 120);
        }
    }
}