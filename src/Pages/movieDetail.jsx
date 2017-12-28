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
import MovieScroll from '../Components/sectionScroll';
import DownLoadApp from '../Components/downLoadApp';
import Loading from '../Components/loading';
const FileStyle = styled.div.attrs({
    className: 'db-movie-detail'
})`
        .db-movie-content{
            margin: 0 .18rem;
        }
        .db-movie-title{
            margin: .3rem 0 0.05rem;
            font-size: .24rem;
            line-height: .32rem;
            word-break: break-all;
            font-weight: normal;
        }
        .db-movie-info{
            display: flex;
            .db-info-left{
                padding-right: .1rem;
                flex: 1;
                .db-movie-count{
                    margin: .2rem 0 0 .1rem;
                    font-size: .14rem;
                    color: #aaa;
                }
                .db-movie-rate {
                  font-size: 0;
                  div{
                    display: inline-block;
                  }
                }
            }
            .db-info-right{
                width: 1rem;
                img{
                    display: block;
                    width: 100%;
                }
            }
            .db-movie-meta{
                margin-top: .15rem;
                padding-right: .24rem;
                line-height: 1.6;
                font-size: .14rem;
                color: #494949;
            }
            .db-open-app{
                display: block;
                margin-top: .1rem;
                font-size: .14rem;
                color: #42bd56;
            }
        }
        .db-movie-idea{
            display: flex;
            margin: .3rem 0;
            a{
                display: block;
                flex: 1;
                height: .3rem;
                margin-right: .1rem;
                line-height: .3rem;
                font-size: .15rem;
                text-align: center;
                color: #ffb712;
                border: 0.01rem solid #ffb712;
                border-radius: 0.03rem;
            }
            a:last-child{
                margin: 0;
            }
        }
        .db-movie-introduce{
            h2{
                margin-bottom: .15rem;
                font-size: .15rem;
                color: #aaa;
            }
            div{
                margin-bottom: .15rem;
                line-height: 1.4;
                font-size: .15rem;
                color: #494949;
                a{
                    display: inline-block;
                    color: #42bd56;
                }
            }
        }
        .db-movie-person{
            h2{
                margin-bottom: .2rem;
                font-size: .15rem;
                color: #aaa;
            }
            ul{
                overflow-x: auto;
                white-space: nowrap;
            }
            li{
                display: inline-block;
                width: .75rem;
                margin-right: 0.05rem;
                img{
                    display: block;
                    width: 100%;
                    height: 1.08rem;
                }
                p{
                    padding: 0.04rem 0;
                    height: .32rem;
                    line-height: .16rem;
                    font-size: .14rem;
                    color: #494949;
                    text-align: center;
                    overflow: hidden;
                    white-space: normal;
                }
            }
        }
        .db-movie-classify{
            h2{
                padding: 0 .16rem;
                height: .26rem;
                line-height: .26rem;
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
@inject(['movieDetailStore']) // inject 注入需要的store
@observer // 将 React 组件转化成响应式组件
class FileDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTitle: '聊聊你的观影感受',
            showType: false,
            isExpand: true
        };
        this.store = this.props.movieDetailStore;
        this.movieDetailData = this.store.movieDetailData.content;
        this.movieMeta = this.store.movieDetailData.movieMeta;
        this.movieSummary = this.store.movieDetailData.movieSummary;
        this.movieTags = this.store.movieDetailData.movieTags;
        this.introduceExpand = this.introduceExpand.bind(this);
    }
    componentDidMount() {
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
    introduceExpand() {
        this.setState({
            isExpand: false
        });
    }
    render() {
        return (
            <FileStyle>
                <Banner title={this.state.showTitle} />
                {
                    !this.state.showType && <Loading />
                }
                {
                    this.state.showType && (
                        <div className="db-movie-content" >
                            <h1 className="db-movie-title">{this.movieDetailData.title}</h1>
                            <div className="db-movie-info">
                                <div className="db-info-left">
                                    {
                                        this.movieDetailData.rating && (
                                            <div className="db-movie-rate">
                                                <Rating rating={this.movieDetailData.rating} defindClass="db-upstep-star" />
                                                <label className="db-movie-count">{this.movieDetailData.ratings_count}人评价</label>
                                            </div>
                                        )
                                    }
                                    {
                                        this.movieDetailData.genres && this.movieMeta && (
                                            <div>
                                                <p className="db-movie-meta">{this.movieMeta}</p>
                                                <a className="db-open-app">用App查看影人资料</a>
                                            </div>

                                        )
                                    }
                                </div>
                                <div className="db-info-right">
                                    {
                                        this.movieDetailData.images && <img src={this.movieDetailData.images.large} alt={this.movieDetailData.title} />
                                    }
                                </div>
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
                                    (this.movieSummary && this.state.isExpand) ? <div onClick={this.introduceExpand}>${this.movieSummary}……<a>(展开)</a></div> : <div>{this.movieDetailData.summary}</div>
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
                                                                <img src={'/' + item.avatars.large.replace(/https:\/\/img(\d).doubanio.com/g, 'imgPro$1')} alt={item.name} />
                                                                <p>{item.name}</p>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                <MovieScroll
                    title="推荐的豆列"
                    type="sectionTags"
                    sectionList={this.movieTags}>
                </MovieScroll>
                <DownLoadApp />
            </FileStyle>
        );
    }
}
export default FileDetail;
