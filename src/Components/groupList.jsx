/**
 * @file groupList.js
 * @author: Toshiba
 * @describe: 小组列表
 * @create: 2017/12/31 16:39
 */
import React from 'react';
import styled from 'styled-components';
import UUID, { contentImgUrlReplace } from '../Utils/util';

const GroupListStyle = styled.div.attrs({
    className: 'db-group-classify'
})`
        margin-left: .18rem;
        padding-top: .14rem;
        .db-group-header{
            h2{
                font-size: .168rem;
                font-weight: normal;
                color: #111;
            }
        }
        .db-group-content {
            li {
                padding: .15rem .18rem .15rem 0;
                border-bottom: 0.01rem solid #F2F2F2;
                overflow: hidden;
                p{
                    margin-top: .1rem;
                    font-size: .15rem;
                    color: #aaa;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .db-group-meta{
                position: relative;
                display: flex;
                align-items: center;
                img {
                    width: .4rem;
                }
                .db-group-info {
                    flex: 1;
                    padding: 0 .1rem;
                    font-size: .18rem;
                    color: #111;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .db-group-member {
                    color: #ccc;
                    font-size: .15rem;
                }
            }
        }
        .db-group-link {
            display: block;
            margin-bottom: .3rem;
            padding: .15rem 0;
            font-size: .16rem;
            line-height: .18rem;
            text-align: center;
            color: #42bd56;
            border-bottom: 0.01rem solid #F2F2F2;
        }
`;
export default (props) => {
    return (
        <GroupListStyle>
            {
                props.dbGroupList.length > 0 && props.dbGroupList.map((item, index) => {
                    return (
                        <div className="db-group-item" key={UUID.uuid1616()}>
                            <div className="db-group-header">
                                <h2>{item.name}</h2>
                            </div>
                            <ul className="db-group-content">
                                {
                                    item.groups.length > 0 && item.groups.map((item1, index2) => {
                                        return (
                                            <li key={UUID.uuid1616()}>
                                                <div className="db-group-meta">
                                                    <img src={contentImgUrlReplace(item1.avatar)} alt={item1.name} />
                                                    <div className="db-group-info" >
                                                        {item1.name}
                                                    </div>
                                                    <span className="db-group-member">{item1.member_count}人</span>
                                                </div>
                                                <p>{item1.desc_abstract}</p>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <a className="db-group-link">更多相关小组</a>
                        </div>
                    );
                })
            }
        </GroupListStyle>
    );
};