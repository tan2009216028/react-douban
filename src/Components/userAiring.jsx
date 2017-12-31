/**
 * userAiring.js
 * @auth: Toshiba
 * @create: 2017/12/30 22:06
 */
import React from 'react';
import styled from 'styled-components';
import UUID from '../Utils/util';
const AiringStyle = styled.div.attrs({
    className: 'db-status-list'
})`
        ul{
            padding: 0 .18rem;
        }
        li{
            position: relative;
            margin: .2rem 0;
            .db-status-item{
                position: relative;
                display: flex;
                padding-bottom: .2rem;
                &:after{
                      content: '';
                      position: absolute;
                      left: 0.5rem;
                      right: 0;
                      bottom: 0;
                      height: 0.01rem;
                      background: #E8E8E8;
                }
            }
            .db-status-img{
                margin-right: .1rem;
                width: .4rem;
                height: .4rem;
                font-size: 0;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .db-status-info{
                flex: 1;
                .db-status-title{
                    margin-top: 0.05rem;
                    line-height: 1;
                    font-size: .17rem;
                    color: #494949;
                    span{
                        margin-right: 0.05rem;
                        font-weight: bolder;
                    }
                }
                .db-status-create{
                    margin-top: 0.04rem;
                    line-height: 1;
                    font-size: .14rem;
                    color: #aaa;
                }
                .db-status-detail{
                    margin: .1rem 0 .2rem;
                    &.db-status-bg{
                        padding: .15rem;
                        border-radius: 2px;
                        background: #f9f9f9;
                    }
                    .db-article-title{
                        display: -webkit-box;
                        margin-bottom: 0.05rem;
                        font-size: .17rem;
                        font-weight: 500;
                        line-height: 1.4;
                        color: #494949;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .db-article-ellipsis{
                        display: -webkit-box;
                        font-size: .12rem;
                        line-height: .16rem;
                        color: #aaa;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }
                    .db-article-text{
                        font-size: .17rem;
                        line-height: .2rem;
                        color: #494949;
                        span{
                           color: #42bd56;
                        }
                    }
                    .db-img-article{
                        display: flex;
                        p{
                            flex: 1;
                        }
                        img{
                            width: .75rem;
                            height: .5rem;
                        }
                    }
                    > img {
                        margin-top: 0.15rem;
                        max-width: 100%;
                    }
                }
                .db-status-thumbs span{
                    float: left;
                    margin-right: .2rem;
                    font-size: .14rem;
                    label{
                        position: relative;
                        left: 0;
                        top: -0.02rem;
                        margin-left: 0.03rem;
                        color: #ccc;
                    }
                }
                .db-status-thumbs span:before {
                    content: '';
                    display: inline-block;
                    margin-bottom: -0.04rem;
                    width: .2rem;
                    height: .2rem;
                    background-position: center center;
                    background-repeat: no-repeat;
                }
                .db-status-thumbs{
                    .more{
                        float: right;
                        margin-right: 0;
                    }
                    .like:before {
                        background: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
                    }
                    .comment:before {
                        background: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
                    }

                    .retweet:before {
                        background: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
                    }
                    .more:before {
                        background: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
                        background-repeat: no-repeat;
                        background-position: center center;
                        margin-bottom: -0.02rem;
                    }
                }
            }

        }
`;

export default class UserAiring extends React.Component {
    sayHTML(text) {
        let thisText = text.replace(/(#.*#)/g, '<span>$1</span>').replace(/(https.*\w)/g, '<span>$1</span>');
        return {
            __html: thisText
        };
    }
    imgUrlReplace(imgObj) {
        return imgObj.large.url.replace(/https:\/\/img(\d).doubanio.com/g, 'imgPro$1');
    }
    render() {
        return (
            <AiringStyle>
                <ul>
                    {
                        this.props.broadcastData.items.length > 0 && this.props.broadcastData.items.map((item, index) => {
                            return (
                                <li key={UUID.uuid1616()}>
                                    <div className="db-status-item">
                                        <div className="db-status-img" >
                                            <img src="../../static/douban-app-img.png" />
                                        </div>
                                        <div className="db-status-info" >
                                            <p className="db-status-title" ><span>豆瓣</span>{item.status.activity}</p>
                                            <p className="db-status-create" >{item.status.create_time}</p>
                                            <div className={item.status.card ? 'db-status-detail db-status-bg' : 'db-status-detail'} >
                                                {
                                                    item.status.card && (
                                                        <div>
                                                            {
                                                                item.status.card.title &&
                                                                <p className="db-article-title" >{item.status.card.title}</p>
                                                            }
                                                            <div
                                                                className={item.status.card.image ? 'db-article-content db-img-article' : 'db-article-content'}>
                                                                <p className="db-article-ellipsis">{item.status.card.subtitle}</p>
                                                                {
                                                                    item.status.card.image && <img src={this.imgUrlReplace(item.status.card.image)} />
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    item.status.text && <div className="db-article-text" dangerouslySetInnerHTML={this.sayHTML(item.status.text)}></div>
                                                }
                                                {
                                                    item.status.reshared_status && <div className="db-article-text" dangerouslySetInnerHTML={this.sayHTML(item.status.reshared_status.text)}></div>
                                                }
                                                {
                                                    item.status.images.length > 0 && <img src={this.imgUrlReplace(item.status.images[0])} />
                                                }
                                            </div>
                                            <div className="db-status-thumbs">
                                                <span className="btn like"><label>{item.status.like_count}</label></span>
                                                <span className="btn comment"><label>{item.status.comments_count}</label></span>
                                                <span className="btn retweet"><label>{item.status.reshares_count}</label></span>
                                                <span className="btn more"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </AiringStyle>
        );
    }
}
