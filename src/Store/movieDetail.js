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
            movieTags: [
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
        }; // 获取电影数据
    }
    /**
     * 获取电影详情信息
     * 新增异步触发new Promise((resolve, reject) => {})
     * id: 电影类目id
     */
    @action getMovieItem(moiveId) {
        return new Promise((resolve, reject) => {
            changeDataLocalStorage.getLocalStorageData('getMovieSynopsis_' + moiveId, (thisLocalState, data) => {
                if (thisLocalState) {
                    this.movieDetailData.content = data;
                    this.movieMeta(data);
                    this.movieSummary(data);
                    resolve(data);
                } else {
                    getJsonpRequest(myInterface.getMovieSynopsis + moiveId, (res) => {
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
        if (content.year) {
            this.movieDetailData.movieMeta = content.year + ' / ' +
                content.genres.join(' / ') + ' / ' +
                content.casts.map(item => item.name).join(' / ') + ' / ' +
                content.directors.map(item => item.name).join(' / ') + ' / ' +
                content.countries.join(' / ');
        }

    }
    /**
     * 过滤电影摘要，过多的文字通过点击扩展展开，限定120字符
     */
    @action movieSummary(content) {
        if (content.summary) {
            this.movieDetailData.movieSummary = content.summary.slice(0, 120);
        }
    }
}