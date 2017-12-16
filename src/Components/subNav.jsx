import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubNav = styled.div.attrs({
    className: 'db-sub-nav'
})`
        margin: .1rem .18rem 0;
        padding-top: 0.06rem;
        li {
            padding: 0.03rem;
            width: 50%;
            font-size: .15rem;
            text-align: center;
            box-sizing: border-box;
        }
        li a {
            display: block;
            padding: .12rem 0;
            line-height: .2rem;
            background-color: #f6f6f6;
            color: #494949;
            border-radius: 0.02rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
        }`;
// 无状态组件
const SubNavObj = (props) => {
    return (
        <SubNav>
            <div className="db-no-login" >
                <ul className="ul-li-float clearFix">
                    <li>
                        <Link to={`${props.match.url}/movie`} > 影院热映</Link>
                    </li>
                    <li><a>欧美新碟榜</a></li>
                    <li>
                        <Link to={`${props.match.url}/register`} >
                            注册帐号
                        </Link>
                    </li>
                    <li>
                        <Link to={`${props.match.url}/login`} >
                            登录豆瓣
                        </Link>
                    </li>
                </ul>
            </div>
        </SubNav>
    );
};
export default SubNavObj;
