/**
 * @file book.js
 * @author: tanhongzhao
 * @describe: 图书部分
 * @create: 2017-12-27 19:31
 */
import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import DownLoadApp from '../Components/downLoadApp';
import BookScroll from '../Components/sectionScroll';
import UUID from '../Utils/util';
const BookStyle = styled.div.attrs({
    className: 'db-book-content'
})`
        .db-book-sell{
            display: flex;
            margin: .15rem .18rem 0.08rem .16rem;
            img{
                margin-right: .15rem;
                width: 1rem;
                height: 1.32rem;
            }
            .db-book-info{
                flex: 1;
                .db-book-title{
                    display: flex;
                    margin: .1rem 0;
                }
                .db-book-name{
                    flex: 1;
                    margin-right: .04rem;
                    line-height: .22rem;
                    font-size: .2rem;
                    color: #494949;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-wrap: normal;
                }
                .db-book-price{
                    display: inline-block;
                    line-height: 22px;
                    color: #E76648;
                    font-size: .16rem;
                }
                .db-book-describe{
                    display: -webkit-box;
                    line-height: 1.5;
                    font-size: .13rem;
                    font-weight: 300;
                    color: #9B9B9B;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                }
            }
        }
        .db-book-classify{
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
            li:last-child,li:nth-last-child(2) {
                border-bottom: 0.01rem solid  #eee;
            }
        }
`;
@inject(['bookStore']) // inject 注入需要的store
@observer // 将 React 组件转化成响应式组件
export default class BookPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: '世界电影地图 三部曲',
            bookImgUrl: '../static/book-default.jpg',
            bookPrice: '299',
            bookDes: '这是一部全新的世界电影史，一场关于光影时空的世界地图，也是一部关于电影文化的旅行指南。',
            baseUrl: 'https://m.douban.com/',
            classifiedViewList: [
                {
                    title: '小说',
                    href: 'book/novel'
                },
                {
                    title: '爱情',
                    href: 'book/love'
                },
                {
                    title: '历史',
                    href: 'book/history'
                },
                {
                    title: '外国文学',
                    href: 'book/foreign'
                },
                {
                    title: '青春',
                    href: 'book/youth'
                },
                {
                    title: '励志',
                    href: 'book/motivation'
                },
                {
                    title: '随笔',
                    href: 'book/essay'
                },
                {
                    title: '传记',
                    href: 'book/bio'
                },
                {
                    title: '推理',
                    href: 'book/detective'
                },
                {
                    title: '旅行',
                    href: 'book/travel'
                },
                {
                    title: '奇幻',
                    href: 'book/fantasy'
                },
                {
                    title: '经管',
                    href: 'book/business'
                }
            ]
        };
        this.store = this.props.bookStore;
    }
    componentDidMount() {
        this.store.getBookList();
    }
    render() {
        return (
            <BookStyle>
                <BookScroll
                    title="最受关注图书｜虚构类"
                    type="book"
                    sectionList={this.store.state.novel}
                    toMoreUrl={`${this.state.baseUrl}book/hotfiction`} >
                </BookScroll>
                <BookScroll
                    title="最受关注图书｜非虚构类"
                    type="book"
                    sectionList={this.store.state.reality}
                    toMoreUrl={`${this.state.baseUrl}book/hotnonfiction`} >
                </BookScroll>
                <BookScroll
                    title="豆瓣书店"
                    type="book"
                    sectionList={this.store.state.travel}
                    toMoreUrl="https://market.douban.com/book/" >
                    {
                        this.store.state.travel.length > 0 && (
                            <div className="db-book-sell" >
                                <img className="corver" src={this.state.bookImgUrl} alt="bookName" />
                                <div className="db-book-info" >
                                    <div className="db-book-title" >
                                        <p className="db-book-name" >{this.state.bookName}</p>
                                        <span className="db-book-price" >¥ {this.state.bookPrice}</span>
                                    </div>
                                    <p className="db-book-describe" >{this.state.bookDes}</p>
                                </div>
                            </div>
                        )
                    }

                </BookScroll>
                <BookScroll
                    title="发现好书"
                    type="sectionTags"
                    sectionList={this.store.state.bookTags}>
                </BookScroll>
                <div className="db-book-classify">
                    <h2>分类浏览</h2>
                    <ul className="clearFix">
                        {
                            this.state.classifiedViewList.length && this.state.classifiedViewList.map((item, index) => {
                                return (
                                    <li key={UUID.uuid810()} >
                                        <a href={this.state.baseUrl + item.href} >
                                            {item.title}<span></span>
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <DownLoadApp />
            </BookStyle>
        );
    }
}