/**
 * sectionScroll.js
 * @auth: Toshiba
 * @create: 2017/12/11 22:27
 */
import React from 'react';
import styled from 'styled-components';
import Loading from '../Components/loading';
import Rating from '../Components/rating';
import { Link } from 'react-router-dom';
import UUID from '../Utils/util';
const SectionStyle = styled.section.attrs({
    className: 'db-movie-item'
})`
        padding-top: .1rem;
        header{
            display: flex;
            padding: 0 .16rem;
            height: .24rem;
            line-height: .24rem;
            h2{
                flex: 1;
                min-width: .4em;
                font-size: .168rem;
                font-weight: normal;
                color: #111;
            }
            a{
                display: block;
                font-size: .144rem;
                color: #42bd56;
            }
        }
        .db-movie-list{
            ul{
                padding: 0.08rem 0;
                max-height: 2.16rem;
                overflow-y: hidden;
                overflow-x: auto;
                white-space: nowrap;
                &.db-find-movie{
                line-height: 0.52rem;
                }
            }
            li{
                display: inline-block;
                width: 1rem;
                margin-left: .1rem;
                vertical-align: middle;
                text-align: center;
                img{
                    display: block;
                    width: 1rem;
                    height: 1.5rem;
                }
            }
            li:first-child{
                margin-left: .15rem;
            }
            li:last-child{
                padding-right: .15rem;
            }
            .db-movie-title{
                margin-top: .1rem;
                line-height: .16rem;
                font-size: .16rem;
                color: #111;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .db-find-area:empty{
                display: block;
                margin: 0;
                height: 0.01rem;
                line-height: 0.01rem;
                border: 0;
            }
            .db-find-area{
                display: inline-block;
                width: auto;
                margin: 0 0 0.08rem .16rem;
                font-size: .16rem;
                border: solid 0.01rem;
                border-radius: 0.04rem;
                vertical-align: middle;
                a{
                    display: block;
                    height: 0.5rem;
                    line-height: 0.5rem;
                    padding: 0 .155rem;
                    letter-spacing: .01em;
                    text-align: center;
                }
            }
        }
        .db-no-content{
            line-height: .5rem;
            font-size: .144rem;
            color: #42bd56;
            text-align: center;
        }
`;

export default class SectionScroll extends React.Component {
    render() {
        const {
            title,
            type,
            toMoreUrl,
            sectionList
        } = this.props;
        let pathName = 'movieDescribe';
        switch (type) {
            case 'movie':
                pathName = 'movieDescribe';
                break;
            case 'book':
                pathName = 'bookDescribe';
                break;
            default:
                pathName = 'movieDescribe';
        }
        return (
            <SectionStyle>
                <header>
                    <h2>{title}</h2>
                    {
                        type !== 'sectionTags' && <a href={toMoreUrl || ''}>更多</a>
                    }
                </header>
                {!sectionList.length && <Loading />}
                <div className="db-movie-list">
                    <ul className={type === 'sectionTags' ? 'db-find-movie' : ''}>
                        {
                            type === 'sectionTags' && sectionList.map((item, index) => {
                                return (
                                    <li key={UUID.uuid1616()} className="db-find-area" style={
                                        {
                                            borderColor: item.color
                                        }
                                    }>
                                        {
                                            !item.line && <a href={item.href} style={
                                                {
                                                    color: item.color
                                                }
                                            } >{item.title}</a>
                                        }

                                    </li>
                                );
                            })
                        }
                        {
                            type !== 'sectionTags' && sectionList.length > 0 && sectionList.map((item, index) => {
                                return (
                                    <li key={UUID.uuid1616()}>
                                        <Link to={{
                                            pathname: `/${type}/${pathName}`,
                                            search: `?file=${item.id}`,
                                            query: {
                                                file: `${item.id}`
                                            }
                                        }}>
                                            <img src={item.images.large} alt={item.title} />
                                            <p className="db-movie-title">{item.title}</p>
                                            {
                                                item.rating && <Rating rating={item.rating} />
                                            }
                                        </Link>
                                    </li>

                                );
                            })
                        }
                    </ul>
                </div>
            </SectionStyle>
        );
    }
}
