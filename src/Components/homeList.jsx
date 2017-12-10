import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HomeListStyle = styled.div`
li{
            padding: 2.5rem 1.8rem 2.5rem 0;
            margin-left: 1.8rem;
            border-bottom: 1px solid #e3e3e3;
        }
        .db-feed-content{
            display: flex;
            word-break: break-all;
        }
        .author{
            padding-top: 1rem;
            font-size: 1.2rem;
            color: #ccc;
            span{
                font-size: 1.2rem;
                color: #ccc;
            }
        }
        .db-feed-content .db-feed-title{
            flex: 1;
        }
        .db-feed-content h3{
            margin-bottom: 0.6rem;
            line-height: 1.41;
            text-align: justify;
            font-size: 1.7rem;
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
            font-size: 1.2rem;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .db-feed-content .db-feed-img{
            margin-left: 2.5rem;
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

class HomeList extends React.Component {
    render() {
        return (
            <HomeListStyle>
                <ul id="homeList">
                    {
                        this.props.getListArr.length > 0 && this.props.getListArr.map((item, index) => {
                            return (
                                <li key={index} >
                                    <Link to={{
                                        pathname: '/detailPage',
                                        search: `?activityId=${item.id}`
                                    }} >
                                        <div className="db-feed-content">
                                            <div className="db-feed-title">
                                                <h3>{item.title}</h3>
                                                <p>{item.content}</p>
                                            </div>
                                            <div className="db-feed-img" ><p style={{ backgroundImage: 'url(' + item.image_hlarge + ')' }} ></p></div>
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
    }
}

export default HomeList;