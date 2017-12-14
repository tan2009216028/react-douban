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
const MovieStyle = styled.div.attrs({
    className: 'db-movie-content'
})`
        padding-top: 1rem;
        .db-movie-classify{
            h2{
                padding: 0 1.6rem;
                height: 2.6rem;
                line-height: 2.6rem;
                font-weight: normal;
            }
            ul{
                margin: 1.6rem 0 0 1.6rem;
            }
            li{
                float: left;
                width: 50%;
                padding-right: 1.8rem;
                height: 4.2rem;
                line-height: 4.2rem;
                font-size: 1.6rem;
                border-top:  0.1rem solid #eee;
                border-right: 0.1rem solid #eee;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                a{
                    color: #42bd56;
                }
                span{
                    float: right;
                    display: inline-block;
                    width: 0.8rem;
                    height: 0.8rem;
                    margin-top: 1.5rem;
                    border-right: solid 0.1rem #ccc;
                    border-bottom: solid 0.1rem #ccc;
                    font-weight: bold;
                    color: #ccc;
                    transform: rotate(-45deg);
                }
            }
            li:nth-child(2n){
                padding-left: 1.8rem;
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
                {
                    this.store.state.showType && (
                        <MovieScroll
                            title="影院热映"
                            type="movie"
                            sectionList={this.store.state.hotMovies}
                            toMoreUrl={`${this.state.baseUrl}movie/nowintheater?loc_id=118318`} >
                        </MovieScroll>
                    )
                }
                <div className="db-movie-classify">
                    <h2>分类浏览</h2>
                    <ul className="clearFix">
                        {
                            this.state.classifiedViewList.length && this.state.classifiedViewList.map((item, index) => {
                                return (
                                    <li key={index} >
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
