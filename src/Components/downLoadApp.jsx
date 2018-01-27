/**
 * downLoadApp.js
 * @auth: Toshiba
 * @create: 2017/12/10 22:27
 */
import React from 'react';
import styled from 'styled-components';
const DownLoadStyle = styled.div.attrs({
    className: 'db-download-app'
})`
        padding-bottom:.2rem;
        margin: .5rem 0 .3rem 0;
        text-align: center;
        font-size: .15rem;
        .db-download-info{
            display: inline-block;
            margin: 0 auto .15rem;
            font-size: .14rem;
            color: #111;
            text-align: left;
            overflow: hidden;
            div{
                overflow: hidden;
            }
            strong{
                line-height: .28rem;
                font-size: .24rem;
                font-weight: normal;
            }
            .db-down-img{
                float: left;
                display: inline-block;
                width: .48rem;
                height: .48rem;
                margin-right: .12rem;
                background: url("../../static/douban-app-img.png") no-repeat;
                background-size: .48rem .48rem;
            }
        }
        a{
            display: block;
            color: #42bd56;
        }
`;
const URL = 'https://www.douban.com/doubanapp/card/log?category=diary&cid=631833427&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_diary%26direct_dl%3D1';
const DownLoadApp = () => (
    <DownLoadStyle class="db-download-app" >
        <div className="db-download-info">
            <span className="db-down-img" ></span>
            <div className="info-content" >
                <strong>豆瓣</strong>
                <p>我们的精神角落</p>
            </div>
        </div>
        <a href={URL}>去 App Store 免费下载 iOS 客户端</a>
    </DownLoadStyle>
);
export default DownLoadApp;
