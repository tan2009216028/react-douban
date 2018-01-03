/**
 * @file search.js
 * @author: Toshiba
 * @describe: 搜索板块
 * @create: 2017/12/31 21:58
 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const SearchStyle = styled.div.attrs({
    className: 'db-search-panel'
})`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 100;
        .db-header-bar {
            display: flex;
            padding: 0 .18rem;
            height: .48rem;
            align-items: center;
            background: #fff;
            border-bottom: 0.01rem solid #f3f3f3;
        }
        .db-close-talion {
            color: #42bd56;
            font-size: .16rem;
        }
        .db-search-layout {
            flex: 1;
            width: 100%;
            padding-left: .1rem;
            font-size: 0;
        }
        input[type=search] {
            width: 100%;
            height: .32rem;
            font-size: .14rem;
            border: 0;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;
            background-size: .173rem;
            border-radius: 0.03rem;
            box-sizing: border-box;
        }

        input[type=search]:focus {
            background: #f3f3f3;
        }
        .db-plate-list {
            display: flex;
            justify-content: space-around;
            padding-top: .25rem;
            li {
                width: 33.33%;
            }

            div {
                position: relative;
                float: left;
                left: 50%;
                top: 0;
            }

            a {
                position: relative;
                left: -50%;
                top: 0;
                display: block;
                margin-bottom: .25rem;
                text-align: center;
            }
            strong {
                display: block;
                font-weight: 400;
                font-size: .24rem;
                line-height: .28rem;
            }

            span {
                display: block;
                color: #999;
                height: .17rem;
                font-size: .12rem;
                letter-spacing: 0.01rem;
            }
        }
        .db-search-login {
            ul {
                border-bottom: 0.01rem solid #f3f3f3;
            }
            li {
                width: 50%;
                padding: .13rem 0;
                border-top: 0.01rem solid #f3f3f3;
            }
            li:nth-child(odd){
                a{
                    border-right: 0.01rem solid #e5e5e5;
                }
            }
            a {
                display: block;
                font-size: .15rem;
                color: #42bd56;
                text-align: center;
                box-sizing: border-box;
            }
        }
`;

export default class Search extends React.Component {
    // 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentWillUpdate() {
        this.closeSearchDialog();
    }
    closeSearchDialog() {
        this.props.getCloseSearchDialog();
    }
    render() {
        return (
            <SearchStyle>
                <div className="db-header-bar">
                    <span className="db-close-talion" onClick={this.closeSearchDialog.bind(this)}>关闭</span>
                    <form className="db-search-layout">
                        <input type="search" name="query" />
                    </form>
                </div>
                <ul className="db-plate-list">
                    <li>
                        <div>
                            <Link to="/movie" >
                                <strong style={{ color: 'rgb(35, 132, 232)' }}>电影</strong>
                                <span>影院热映</span>
                            </Link>
                            <a href="#">
                                <strong style={{ color: 'rgb(230, 70, 126)' }}>同城</strong>
                                <span>周末活动</span>
                            </a>
                            <a href="#">
                                <strong style={{ color: 'rgb(159, 120, 96)' }}>阅读</strong>
                                <span>电子书</span>
                            </a>
                            <Link to="/broadcast" >
                                <strong style={{ color: 'rgb(225, 100, 77)' }}>广播</strong>
                                <span>友邻动态</span>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#">
                                <strong style={{ color: 'rgb(122, 106, 219)' }}>电视</strong>
                                <span>正在热播</span>
                            </a>
                            <a href="#">
                                <strong style={{ color: 'rgb(42, 184, 204)' }}>小组</strong>
                                <span>志趣相投</span>
                            </a>
                            <a href="#">
                                <strong style={{ color: 'rgb(87, 116, 197)' }}>游戏</strong>
                                <span>虚拟世界</span>
                            </a>
                            <a href="#">
                                <strong style={{ color: 'rgb(64, 207, 169)' }}>FM</strong>
                                <span>红心歌单</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="/book" >
                                <strong style={{ color: 'rgb(159, 120, 96)' }}>图书</strong>
                                <span>畅销排行</span>
                            </Link>
                            <a href="#">
                                <strong style={{ color: 'rgb(244, 143, 46)' }}>音乐</strong>
                                <span>新碟榜</span>
                            </a>
                            <a href="#">
                                <strong style={{ color: 'rgb(89, 108, 221)' }}>应用</strong>
                                <span>玩手机</span>
                            </a>
                            <a href="#">
                                <strong style={{ color: 'rgb(66, 189, 86)' }}>市集</strong>
                                <span>购买原创</span>
                            </a>
                        </div>
                    </li>
                </ul>
                <div className="db-search-login" >
                    <ul className="ul-li-float clearFix" >
                        <li>
                            <Link to="/register" >
                                注册帐号
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" >
                                登录豆瓣
                            </Link>
                        </li>
                        <li><a >使用桌面版</a></li>
                        <li><a >使用豆瓣App</a></li>
                    </ul>
                </div>
            </SearchStyle>
        );
    }
}
