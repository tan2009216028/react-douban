/**
 * movie.js
 * @auth: Toshiba
 * @create: 2017/12/11 21:53
 */
import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import DownLoadApp from '../Components/downLoadApp';
import MovieScroll from '../Components/sectionScroll';
import UUID from '../Utils/util';
const MovieStyle = styled.div.attrs({
    className: 'db-movie-content'
})`
        padding-top: .1rem;
        .db-movie-classify{
            h2{
                padding: 0 .16rem;
                height: .26rem;
                line-height: .26rem;
                font-size: .168rem;
                font-weight: normal;
            }
            ul{
                margin: .16rem 0 0 .16rem;
            }
            li{
                float: left;
                width: 50%;
                padding-right: .18rem;
                height: .42rem;
                line-height: .42rem;
                font-size: .16rem;
                border-top:  0.01rem solid #eee;
                border-right: 0.01rem solid #eee;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                a{
                    color: #42bd56;
                }
                span{
                    float: right;
                    display: inline-block;
                    width: 0.08rem;
                    height: 0.08rem;
                    margin-top: .15rem;
                    border-right: 0.01rem solid #ccc;
                    border-bottom: 0.01rem solid #ccc;
                    font-weight: bold;
                    color: #ccc;
                    transform: rotate(-45deg);
                }
            }
            li:nth-child(2n){
                padding-left: .18rem;
            }
        }
`;

@inject(['movieStore']) // inject 注入需要的store
@observer // 将 React 组件转化成响应式组件
export default class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            baseUrl: 'https://m.douban.com/',
            classifiedViewList: [
                {
                    title: '经典',
                    href: 'movie/classic'
                },
                {
                    title: '冷门佳片',
                    href: 'movie/underrated'
                },
                {
                    title: '豆瓣高分',
                    href: 'movie/doubantop'
                },
                {
                    title: '动作',
                    href: 'movie/action'
                },
                {
                    title: '喜剧',
                    href: 'movie/comedy'
                },
                {
                    title: '爱情',
                    href: 'movie/love'
                },
                {
                    title: '悬疑',
                    href: 'movie/mystery'
                },
                {
                    title: '恐怖',
                    href: 'movie/horror'
                },
                {
                    title: '科幻',
                    href: 'movie/scifi'
                },
                {
                    title: '治愈',
                    href: 'movie/sweet'
                },
                {
                    title: '文艺',
                    href: 'movie/artfilm'
                },
                {
                    title: '成长',
                    href: 'movie/youth'
                },
                {
                    title: '动画',
                    href: 'movie/animation'
                },
                {
                    title: '华语',
                    href: 'movie/chinese'
                },
                {
                    title: '欧美',
                    href: 'movie/western'
                },
                {
                    title: '韩国',
                    href: 'movie/korean'
                },
                {
                    title: '日本',
                    href: 'movie/japanese'
                }
            ]
        };
        this.store = this.props.movieStore;
    }
    componentDidMount() {
        this.store.getMovieList();
    }
    render() {
        return (
            <MovieStyle>
                <MovieScroll
                    title="影院热映"
                    type="movie"
                    sectionList={this.store.state.hotMovies}
                    toMoreUrl={`${this.state.baseUrl}movie/nowintheater?loc_id=118318`} >
                </MovieScroll>
                <MovieScroll
                    title="免费在线观影"
                    type="movie"
                    sectionList={this.store.state.topMovies}
                    toMoreUrl={`${this.state.baseUrl}movie/watchonline`} >
                </MovieScroll>
                <MovieScroll
                    title="新片速递"
                    type="movie"
                    sectionList={this.store.state.newMovies}
                    toMoreUrl={`${this.state.baseUrl}movie/latest`} >
                </MovieScroll>
                <MovieScroll
                    title="发现好电影"
                    type="sectionTags"
                    sectionList={this.store.state.movieTags}>
                </MovieScroll>
                <div className="db-movie-classify">
                    <h2>分类浏览</h2>
                    <ul className="clearFix">
                        {
                            this.state.classifiedViewList.length && this.state.classifiedViewList.map((item, index) => {
                                return (
                                    <li key={UUID.uuid810} >
                                        <a href={this.state.baseUrl + item.href} >
                                            {item.title}<span></span>
                                        </a>
                                    </li>
                                );
                            })
                        }
                        <li></li>
                    </ul>
                </div>
                <DownLoadApp />
            </MovieStyle>
        );
    }
}
