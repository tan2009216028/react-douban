/**
 * banner.js
 * @auth: Toshiba
 * @create: 2017/12/10 18:14
 */
import React from 'react';
import styled from 'styled-components';
const BannerStyle = styled.div`
        position: relative;
        height: .7rem;
        background: url("../../static/banner-bg.jpg") no-repeat;
        background-size: cover;
        .db-banner-content{
            position: absolute;
            left: .18rem;
            top: 0;
            bottom: 0;
            right: .1rem;
            display: flex;
            align-items: center;
            .db-banner-title{
                flex: 1;
                line-height: .22rem;
                font-size: .14rem;
                color: #2CA532;
            }
            .db-banner-button{
              font-size: 0;
            }
            a{
                display: inline-block;
                width: auto;
                padding: 0 .14rem;
                font-size: .13rem;
                font-weight: bold;
                line-height: 2;
                border: 0.01rem solid #42bd56;
                border-radius: 0.03rem;
            }
            .download{
                color: #fff;
                background: #42bd56;
            }
            .open{
                margin-left: 0.08rem;
                color: #42bd56;
            }
        }
`;

const Banner = (props) => (
    <BannerStyle className="db-banner">
        <div className="db-banner-content">
            <div className="db-banner-title">
                <span>{props['title'] || '打开App, 浏览更多'}</span>
            </div>
            <div className="db-banner-button">
                <a className="download">极速下载</a>
                <a className="open">打开</a>
            </div>
        </div>
    </BannerStyle>
);

export default Banner;
