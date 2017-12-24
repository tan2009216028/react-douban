/**
 * film.js
 * @auth: Toshiba
 * @create: 2017/12/24 22:08
 */
import React from 'react';
import styled from 'styled-components';
import Banner from '../Components/banner';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import Rating from '../Components/rating';
import UUID from '../Utils/util';
const FileStyle = styled.div.attrs({
    className: 'db-movie-detail'
})`
        .db-movie-content{
            margin: 0 1.8rem;
        }
        .db-movie-title{
            margin: 3rem 0 0.5rem;
            font-size: 2.4rem;
            line-height: 3.2rem;
            word-break: break-all;
            font-weight: normal;
        }
        .db-movie-info{
            display: flex;
            .db-info-left{
                padding-right: 1rem;
                flex: 1;
                .db-movie-count{
                    font-size: 1.3rem;
                    color: #aaa;
                    vertical-align: bottom;
                }
            }
            .db-info-right{
                width: 10rem;
                img{
                    display: block;
                    width: 100%;
                }
            }
            .db-movie-meta{
                margin-top: 1.5rem;
                padding-right: 2.4rem;
                line-height: 1.6;
                font-size: 1.4rem;
                color: #494949;
            }
            .db-open-app{
                display: block;
                margin-top: 1rem;
                font-size: 1.4rem;
                color: #42bd56;
            }
        }
        .db-movie-idea{
            display: flex;
            margin: 3rem 0;
            a{
                display: block;
                flex: 1;
                height: 3rem;
                margin-right: 1rem;
                line-height: 3rem;
                font-size: 1.5rem;
                text-align: center;
                color: #ffb712;
                border: 0.1rem solid #ffb712;
                border-radius: 0.3rem;
            }
            a:last-child{
                margin: 0;
            }
        }
        .db-movie-introduce{
            h2{
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
                color: #aaa;
            }
            div{
                margin-bottom: 1.5rem;
                line-height: 1.4;
                font-size: 1.5rem;
                color: #494949;
                a{
                    display: inline-block;
                    color: #42bd56;
                }
            }
        }
        .db-movie-person{
            h2{
                margin-bottom: 2rem;
                font-size: 1.5rem;
                color: #aaa;
            }
            ul{
                overflow-x: auto;
                white-space: nowrap;
            }
            li{
                display: inline-block;
                width: 7.5rem;
                margin-right: 0.5rem;
                img{
                    display: block;
                    width: 100%;
                    height: 10.8rem;
                }
                p{
                    padding: 0.4rem 0;
                    height: 3.2rem;
                    line-height: 1.6rem;
                    font-size: 1.4rem;
                    color: #494949;
                    text-align: center;
                    overflow: hidden;
                    white-space: normal;
                }
            }
        }
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
@inject(['MovieDetailStore']) // inject 注入需要的store
@observer // 将 React 组件转化成响应式组件
class FileDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTitle: '聊聊你的观影感受',
            showType: false,
            isExpand: true
        };
        this.store = this.props.MovieDetailStore;
        this.movieDetailData = this.store.movieDetailData.content;
        this.movieMeta = this.store.movieDetailData.movieMeta;
        this.movieSummary = this.store.movieDetailData.movieSummary;
    }
    componentDidMount() {
        debugger;
        let movieId;
        if (this.props.location.query) {
            movieId = this.props.location.query.file;
        } else {
            movieId = this.props.location.search.split('?')[1].split('=')[1];
        }
        this.store.getMovieItem(movieId).then(res => {
            this.movieDetailData = this.store.movieDetailData.content;
            this.movieMeta = this.store.movieDetailData.movieMeta;
            this.movieSummary = this.store.movieDetailData.movieSummary;
            this.setState({
                showType: true
            });
        });
    }
    render() {
        return (
            <FileStyle>
                <Banner title={this.state.showType} />
                {
                    this.state.showType && (
                        <div className="db-movie-content" >
                            <h1 className="db-movie-title">{this.movieDetailData.title}</h1>
                            <div className="db-movie-info">
                                <div className="db-info-left">
                                    {
                                        this.movieDetailData.rating && <Rating rating={this.movieDetailData.rating} /> && <label className="db-movie-count">{this.movieDetailData.ratings_count}人评价</label>
                                    }
                                    {
                                        this.movieDetailData.genres && this.movieMeta && (
                                            <p className="db-movie-meta">{this.movieMeta}</p>
                                            // <a className="db-open-app">用App查看影人资料</a>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="db-info-right">
                                {
                                    this.movieDetailData.images && <img src={this.movieDetailData.images.large} alt={this.movieDetailData.title} />
                                }
                            </div>
                            <div className="db-movie-idea">
                                <Link to={{
                                    pathname: 'LoginView',
                                }}>想看</Link>
                                <Link to={{
                                    pathname: 'LoginView',
                                }}>看过</Link>
                            </div>
                            <div className="db-movie-introduce">
                                <h2>{this.movieDetailData.title}的简介</h2>
                                {
                                    this.movieSummary && (this.isExpand ? <div>`${this.movieSummary}……`</div> : <div>{this.movieDetailData.summary}</div>)
                                }
                                {
                                    this.isExpand && <a>(展开)</a>
                                }
                            </div>
                            {
                                this.movieDetailData.casts && (
                                    <div className="db-movie-person">
                                        <h2>{this.movieDetailData.title}的主演</h2>
                                        <div className="db-person-list">
                                            <ul>
                                                {
                                                    this.movieDetailData.casts.map((item, index) => {
                                                        return (
                                                            <li key={UUID.uuid1616()}>
                                                                <img src={item.avatars.large} alt={item.name} />
                                                                <p>{item.name}</p>
                                                            </li>
                                                        );
                                                    })
                                                })
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </FileStyle>
        );
    }
}
export default FileDetail;
