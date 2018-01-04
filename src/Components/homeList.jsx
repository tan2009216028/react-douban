import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { contentImgUrlReplace } from '../Utils/util';
const HomeListStyle = styled.div`
        li{
            padding: .25rem .18rem .25rem 0;
            margin-left: .18rem;
            border-bottom: 0.01rem solid #e3e3e3;
        }
        .db-feed-content{
            display: flex;
            word-break: break-all;
        }
        .author{
            padding-top: .1rem;
            font-size: .12rem;
            color: #ccc;
            span{
                font-size: .12rem;
                color: #ccc;
            }
        }
        .db-feed-content .db-feed-title{
            flex: 1;
        }
        .db-feed-content h3{
            margin-bottom: 0.06rem;
            line-height: 1.41;
            text-align: justify;
            font-size: .17rem;
            font-weight: 500;
            color: #494949;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .db-feed-content p{
            line-height: 1.5;
            text-align: justify;
            color: #aaa;
            font-size: .12rem;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .db-feed-content .db-feed-img{
            margin-left: .25rem;
            width: 25.6%;
        }
        .db-feed-img p{
            padding-top: 100%;
            background-color: transparent;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }
`;

const HomeList = ({ getListArr }) => (
    <HomeListStyle>
        <ul id="homeList">
            {
                getListArr.length > 0 && getListArr.map((item, index) => {
                    return (
                        <li key={index} >
                            <Link to={{
                                pathname: '/detailPage',
                                search: `?activityId=${item.id}`,
                                query: {
                                    activityId: `${item.id}`
                                }
                            }} >
                                <div className="db-feed-content">
                                    <div className="db-feed-title">
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                    <div className="db-feed-img" ><p style={{ backgroundImage: 'url(' + contentImgUrlReplace(item.image_hlarge) + ')' }} ></p></div>
                                </div>
                                <div className="author">by&nbsp;<span className="name">{item.owner.name}</span><span className="db-feed-label right">主题 {item.category_name}</span></div>
                            </Link >
                        </li>
                    );
                })
            }
        </ul>
    </HomeListStyle>
);
export default HomeList;