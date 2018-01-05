/**
 * @file searchList.js
 * @author: tanhongzhao
 * @describe: 搜索结果列表页面
 * @create: 2018-01-05 19:30
 */
import React from 'react';
import styled from 'styled-components';
import Rating from '../Components/rating';
import UUID, { contentImgUrlReplace } from '../Utils/util';

const SearchListStyle = styled.div.attrs({
    className: 'db-search-list'
})`
        padding-top: .14rem;
        margin-left: .18rem;
        .db-item-content {
            position: relative;
            li {
                border-bottom: 0.01rem solid #F2F2F2;
                overflow: hidden;
            }
            a {
                display: block;
                padding: .15rem .18rem .15rem 0;
            }
            .db-item-meta {
                display: flex;
                align-items: center;
                img {
                    width: .4rem;
                }
            }
            .db-item-info {
                flex: 1;
                padding: 0 .1rem;
                font-size: .18rem;
                color: #111;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
`;

export default (props) => {
    const { title, items, children } = props;
    let slotNode = [];
    if (children) {
        if (children.length) {
            children.forEach(function (child) {
                slotNode.push(child);
            });
        }
        else {
            slotNode.push(children);
        }
    }
    return (
        <SearchListStyle>
            <div className="db-item-header">
                <h2>{title}</h2>
            </div>
            <ul className="db-item-content">
                {
                    items.length > 0 && items.map((item,index)=>{
                        return (
                            <li key={UUID.uuid1616()} >
                                <Link to={{
                                    pathname: item.pageType,
                                    search: `?file=${item.id}`,
                                    query: {
                                        file: `${item.id}`
                                    }
                                }} >
                                    <div className="db-item-meta">
                                        <img src={contentImgUrlReplace(item.images.small)} alt={item.title} />
                                        <div className="db-item-info" >
                                            <span>{item.title}</span>
                                            {
                                                item.rating && <Rating rating={item.rating} />
                                            }
                                        </div>
                                    </div>
                                </Link >
                            </li>
                        )
                    })
                }
            </ul>
            {
                children && slotNode
            }
        </SearchListStyle>
    )
}