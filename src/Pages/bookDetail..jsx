/**
 * @file bookDetail.js
 * @author: tanhongzhao
 * @describe: 图书描述部分
 * @create: 2017-12-27 21:10
 */
import React from 'react';
import styled from 'styled-components';
import UUID from "../Utils/util";

const BookDetailStyle = styled.div.attrs({
    className: 'db-book-detail'
})`
        .db-book-content {
            margin: 0 1.8rem;
        }
        .db-book-title {
            margin: 3rem 0 0.5rem;
            font-size: 2.4rem;
            line-height: 3.2rem;
            word-break: break-all;
            font-weight: normal;
        }
        .db-book-info {
            display: flex;
            padding-bottom: 1.5rem;
            border-bottom: 0.1rem solid #E8E8E8;
            .db-info-left {
                padding-right: 1rem;
                flex: 1;
                .db-book-count {
                    font-size: 1.3rem;
                    color: #aaa;
                    vertical-align: bottom;
                }
            }
            .db-info-right {
                width: 10rem;
                img {
                    display: block;
                    width: 100%;
                }
            }
            .db-book-meta {
                margin-top: 1.5rem;
                padding-right: 2.4rem;
                line-height: 1.6;
                font-size: 1.4rem;
                color: #494949;
            }
            .db-open-app {
                display: block;
                margin-top: 1rem;
                font-size: 1.4rem;
                color: #42bd56;
            }
        }
        .db-book-buy{
            a{
                display: block;
                padding: 1rem 0;
                line-height: 2.4rem;
                font-size: 1.5rem;
                color: #42bd56;
                border-bottom: 0.1rem solid #E8E8E8;
                span{
                    float: right;
                    font-size: 1.4rem;
                    color: #ccc;
                }
            }
        }
        .db-book-idea {
            display: flex;
            margin: 3rem 0;
            a {
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
            a:last-child {
                margin: 0;
            }
        }
        .db-book-introduce {
            h2 {
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
                color: #aaa;
            }
            div {
                margin-bottom: 1.5rem;
                line-height: 1.4;
                font-size: 1.5rem;
                color: #494949;
                a {
                    display: inline-block;
                    color: #42bd56;
                }
            }
        }
        .db-book-kind {
            h2 {
                margin-bottom: 2rem;
                font-size: 1.5rem;
                color: #aaa;
            }
            ul{
                margin-bottom: 1.5rem;
            }
            li {
                display: inline-block;
                margin: 1rem 1rem 0 0;
                font-size: 1.5rem;
                a {
                    display: block;
                    padding: 0 1.2rem;
                    line-height: 2.8rem;
                    font-size: 1.5rem;
                    border-radius: 2.8rem;
                    text-align: center;
                    color: #494949;
                    background: #f5f5f5;
                }
            }
        }
        .db-book-classify {
            h2 {
                padding: 0 1.6rem;
                height: 2.6rem;
                line-height: 2.6rem;
                font-weight: normal;
            }
            ul {
                margin: 1.6rem 0 0 1.6rem;
            }
            li {
                float: left;
                width: 50%;
                padding-right: 1.8rem;
                height: 4.2rem;
                line-height: 4.2rem;
                font-size: 1.6rem;
                border-top: 0.1rem solid #eee;
                border-right: 0.1rem solid #eee;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                a {
                    color: #42bd56;
                }
                span {
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
            li:nth-child(2n) {
                padding-left: 1.8rem;
            }
        }
`;

export default class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTitle: '聊聊你的阅读感受',
            showType: false,
            isExpand: true
        };
        this.store = this.props.BookDetailStore;
        this.bookDetailData = this.store.bookDetailData.content;
        this.bookMeta = this.store.bookDetailData.bookMeta;
        this.bookSummary = this.store.bookDetailData.bookSummary;
        this.bookTags = this.store.bookDetailData.bookTags;
        this.introduceExpand = this.introduceExpand.bind(this);
    }
    componentDidMount() {
        let bookId;
        if (this.props.location.query) {
            bookId = this.props.location.query.file;
        } else {
            bookId = this.props.location.search.split('?')[1].split('=')[1];
        }
        this.store.getBookItem(bookId).then(res => {
            this.bookDetailData = this.store.bookDetailData.content;
            this.bookMeta = this.store.bookDetailData.bookMeta;
            this.bookSummary = this.store.bookDetailData.bookSummary;
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