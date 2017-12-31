/**
 * @file bookDetail.js
 * @author: tanhongzhao
 * @describe: 图书描述部分
 * @create: 2017-12-27 21:10
 */
import React from 'react';
import styled from 'styled-components';
import Banner from '../Components/banner';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import Rating from '../Components/rating';
import UUID from '../Utils/util';
import BookScroll from '../Components/sectionScroll';
import DownLoadApp from '../Components/downLoadApp';
import Loading from '../Components/loading';


const BookDetailStyle = styled.div.attrs({
    className: 'db-book-detail'
})`
        .db-book-content {
            margin: 0 .18rem;
        }
        .db-book-title {
            margin: .3rem 0 0.05rem;
            font-size: .24rem;
            line-height: .32rem;
            word-break: break-all;
            font-weight: normal;
        }
        .db-book-info {
            display: flex;
            padding-bottom: .15rem;
            border-bottom: 0.01rem solid #E8E8E8;
            .db-info-left {
                padding-right: .1rem;
                flex: 1;
                .db-book-rate{
                  font-size: 0;
                  div{
                    display: inline-block;
                  }
                }
                .db-book-count {
                    margin: .2rem 0 0 .1rem;
                    font-size: .13rem;
                    color: #aaa;
                    vertical-align: bottom;
                }
            }
            .db-info-right {
                width: 1rem;
                img {
                    display: block;
                    width: 100%;
                }
            }
            .db-book-meta {
                margin-top: .15rem;
                padding-right: .24rem;
                line-height: 1.6;
                font-size: .14rem;
                color: #494949;
            }
            .db-open-app {
                display: block;
                margin-top: .1rem;
                font-size: .14rem;
                color: #42bd56;
            }
        }
        .db-book-buy{
            a{
                display: block;
                padding: .1rem 0;
                line-height: .24rem;
                font-size: .15rem;
                color: #42bd56;
                border-bottom: 0.01rem solid #E8E8E8;
                span{
                    float: right;
                    font-size: .14rem;
                    color: #ccc;
                }
            }
        }
        .db-book-idea {
            display: flex;
            margin: .3rem 0;
            a {
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
            a:last-child {
                margin: 0;
            }
        }
        .db-book-introduce {
            h2 {
                margin-bottom: .15rem;
                font-size: .15rem;
                color: #aaa;
            }
            div {
                margin-bottom: .15rem;
                line-height: 1.4;
                font-size: .15rem;
                color: #494949;
                a {
                    display: inline-block;
                    color: #42bd56;
                }
            }
        }
        .db-book-kind {
            h2 {
                margin-bottom: .02rem;
                font-size: .15rem;
                color: #aaa;
            }
            ul{
                margin-bottom: .15rem;
                font-size: 0;
            }
            li {
                display: inline-block;
                margin: .1rem .1rem 0 0;
                font-size: .15rem;
                a {
                    display: block;
                    padding: 0 .12rem;
                    line-height: .28rem;
                    font-size: .15rem;
                    border-radius: .28rem;
                    text-align: center;
                    color: #494949;
                    background: #f5f5f5;
                }
            }
        }
        .db-book-classify {
            h2 {
                padding: 0 .16rem;
                height: .26rem;
                line-height: .26rem;
                font-weight: normal;
            }
            ul {
                margin: .16rem 0 0 .16rem;
            }
            li {
                float: left;
                width: 50%;
                padding-right: .18rem;
                height: .42rem;
                line-height: .42rem;
                font-size: .16rem;
                border-top: 0.01rem solid #eee;
                border-right: 0.01rem solid #eee;
                box-sizing: border-box;
                a {
                    color: #42bd56;
                }
                span {
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
            li:nth-child(2n) {
                padding-left: .18rem;
            }
        }
`;
@inject(['bookDetailStore']) // inject 注入需要的store
@observer // 将 React 组件转化成响应式组件
export default class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTitle: '聊聊你的阅读感受',
            showType: false,
            isExpand: true
        };
        this.store = this.props.bookDetailStore;
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
            <BookDetailStyle>
                <Banner title={this.state.showTitle} />
                {
                    !this.state.showType && <Loading />
                }
                {
                    this.state.showType && (
                        <div className="db-book-content" >
                            <h1 className="db-book-title">{this.bookDetailData.title}</h1>
                            <div className="db-book-info">
                                <div className="db-info-left">
                                    {
                                        this.bookDetailData.rating && (
                                            <div className="db-book-rate">
                                                <Rating rating={this.bookDetailData.rating} defindClass="db-upstep-star" />
                                                <label className="db-book-count">{this.bookDetailData.rating.numRaters}人评价</label>
                                            </div>
                                        )
                                    }
                                    {
                                        this.bookDetailData.author && this.bookMeta && (
                                            <p className="db-book-meta">{this.bookMeta}</p>
                                        )
                                    }
                                </div>
                                <div className="db-info-right" >
                                    {
                                        this.bookDetailData.images && <img src={this.bookDetailData.images.large} alt={this.bookDetailData.title} />
                                    }
                                </div>
                            </div>
                            <div className="db-book-buy" >
                                <a>在豆瓣购买<span>{this.bookDetailData.price || 1.0}起</span></a>
                                <a>其他电商购买<span>京东商城 {this.bookDetailData.ebook_price || this.bookDetailData.price || 1.0}起</span></a>
                            </div>
                            <div className="db-book-idea">
                                <Link to={{
                                    pathname: 'LoginView',
                                }}>想读</Link>
                                <Link to={{
                                    pathname: 'LoginView',
                                }}>在读</Link>
                                <Link to={{
                                    pathname: 'LoginView',
                                }}>读过</Link>
                            </div>

                            {
                                this.bookDetailData.author && this.bookDetailData.author_intro && (
                                    <div className="db-book-introduce">
                                        <h2>{this.bookDetailData.author[0]}的简介</h2>
                                        <div>{this.bookDetailData.author_intro}</div>
                                    </div>
                                )
                            }
                            <div className="db-book-introduce">
                                <h2>{this.bookDetailData.title}的简介</h2>
                                {
                                    (this.bookSummary && this.state.isExpand) ? <div onClick={this.introduceExpand}>{this.bookSummary}……<a>(展开)</a></div> : <div>{this.bookDetailData.summary}</div>
                                }
                            </div>
                            {
                                this.bookDetailData.tags && (
                                    <div className="db-book-kind">
                                        <h2>查看更多豆瓣高分好书</h2>
                                        <ul>
                                            {
                                                this.bookDetailData.tags.map((item, index) => {
                                                    return (
                                                        <li key={UUID.uuid1616()}>
                                                            <a>{item.name}</a>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                <BookScroll
                    title="推荐的豆列"
                    type="sectionTags"
                    sectionList={this.bookTags}>
                </BookScroll>
                <DownLoadApp />
            </BookDetailStyle>
        );
    }
}