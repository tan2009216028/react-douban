/**
 * banner.js
 * @auth: Toshiba
 * @create: 2017/12/10 18:14
 */
import React from 'react';
import styled from 'styled-components';
const BannerStyle = styled.div`
        position: relative;
        height: 7rem;
        background: url("../../static/banner-bg.jpg") no-repeat;
        background-size: cover;
        .db-banner-content{
            position: absolute;
            left: 1.8rem;
            top: 0;
            bottom: 0;
            right: 1rem;
            display: flex;
            align-items: center;
            .db-banner-title{
                flex: 1;
                line-height: 2.2rem;
                font-size: 1.4rem;
                color: #2CA532;
            }
            a{
                display: inline-block;
                width: auto;
                padding: 0 1.4rem;
                font-size: 1.3rem;
                font-weight: bold;
                line-height: 2;
                border: 0.1rem solid #42bd56;
                border-radius: 0.3rem;
            }
            .download{
                color: #fff;
                background: #42bd56;
            }
            .open{
                margin-left: 0.8rem;
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
