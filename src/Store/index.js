/*
 * @file index.js
 * @author: Toshiba
 * @describe: 导出所有store
 * @date: 2017/12/9 17:36
 */
import ActivityStore from  './activity';
import MovieStore from  './movie';
import MovieDetailStore from  './movieDetail';

export default {
    activityStore: new ActivityStore(),
    movieStore: new MovieStore(),
    MovieDetailStore: new MovieDetailStore()
};