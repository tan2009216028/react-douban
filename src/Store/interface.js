/*
 * @file interface.js
 * @author:
 * @describe: 定义各种接口，接口来源豆瓣开源api https: // developers.douban.com/wiki/?title=api_v2
 *            默认定义城市为成都，根据https: // api.douban.com/v2/loc/list得到成都的id为118318
 * 返回结果参数说明
 * @start 起始元素
 * @count 返回结果的数量
 *
 * @date: 2017/8/4 22: 55
 */
const domain = 'https://api.douban.com';
const lineDomain = 'https://m.douban.com';
const rapapiDomain = 'http://rapapi.org';
const INTERFACE = {
    cityId: '118318',
    count: 5,
    getActivityList: domain + '/v2/event/list', // 获取活动列表
    getActivityDetail: domain + '/v2/event/', // 获取活动详情
    getShowMovieList: domain + '/v2/movie/in_theaters', // 获取正在上映的电影
    getWillShowMovieList: domain + '/v2/movie/coming_soon', // 获取即将上映的电影
    getTop250MovieList: domain + '/v2/movie/top250', // 获取top250排行榜
    getMovieSynopsis: domain + '/v2/movie/subject/', // 获取电影详情信息
    getSearchMovieList: domain + '/v2/movie/search', // 查询指定内容的电影
    getBookList: domain + '/v2/book/search', // 获取指定类型的图书信息
    getBookSynopsis: domain + '/v2/book/', // 获取图书详情信息
    getSearchBookList: domain + '/v2/book/search', // 查询指定内容的图书
    getSearchMusicList: domain + '/v2/music/search', // 查询指定内容的音乐
    getBroadcastList: lineDomain + '/rexxar/api/v2/status/anonymous_timeline', // 获取非登录用户广播
    getRapapiList: rapapiDomain + '/mockjsdata/24739/group'  // 模拟豆瓣小组接口
};
/*
 * 本地存储
 * @type: 是否支持本地存储
 */
class DataLocalStorage {
    constructor(type) {
        this.localStorage = window.localStorage || null;
        this.isSupport = this.localStorage ? true : false;
        type && (this.isSupport = false);
    }
    setLocalStorageData(key, data) {
        if (this.isSupport) {
            this.localStorage.setItem(key, JSON.stringify(data));
        }
    }
    getLocalStorageData(key, callback) {
        let getData = this.localStorage.getItem(key);
        if (this.localStorage.getItem(key)) {
            callback(true, JSON.parse(getData));
        }
        else {
            callback(false);
        }
    }
}


/*
 * 生成唯一uuid
 * @type: 是否支持本地存储
 * 8 character ID (base=2)
 * getUuid(8, 2)  //  "01001010"
 * 8 character ID (base=10)
 * getUuid(8, 10) // "47473046"
 * 8 character ID (base=16)
 * getUuid(8, 16) // "098F4D35"
 *
 */
window.getUuid = function(len, radix) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [];
    let thisRadix = radix;
    let i;
    thisRadix = thisRadix || chars.length;
    if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * thisRadix];
    } else {
        let r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
};
export default INTERFACE;
export let changeDataLocalStorage = new DataLocalStorage();

