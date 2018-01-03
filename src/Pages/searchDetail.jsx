/**
 * @file search.js
 * @author: Toshiba
 * @describe: 搜索结果
 * @create: 2018/1/3 22:24
 */
import React from 'react';
import styled from 'styled-components';

const SearchStyle = styled.div.attrs({
    className: 'search-view'
})`
        .search {
            padding: 0.7rem 2rem;
            border-bottom: 0.1rem solid #F2F2F2;
            overflow: hidden;

            input {
                width: 85%;
                height: 3rem;
                padding: 0.5rem 0.8rem;
                box-sizing: border-box;
                font-size: 1.4rem;
                color: #111;
                background: #f5f5f5;
                border-radius: 0.3rem;
                border: 0;
                outline: 0;
            }

            a {
                display: inline-block;
                float: right;
                width: 10%;
                height: 3rem;
                padding-left: 5%;
                line-height: 3rem;
                font-size: 1.4rem;
                color: #333;
                text-decoration: none;
            }
        }

        .list-link {
            display: block;
            margin-bottom: 1.5rem;
            padding: 1.5rem 0 1.5rem 5rem;
            font-size: 1.6rem;
            line-height: 1.8rem;
            color: #42bd56;
        }
`;

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchWord: ''
        };
        this.fileSearch = this.fileSearch.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }
    fileSearch(event) {
        debugger;
    }
    handelChange(event) {
        console.log(event.target);
        debugger;
        this.setState({
            searchWord: event.target.value
        });
    }
    render() {
        return (
            <SearchStyle>
                <div className="search">
                    <form id="search_form">
                        <input type="text" onChange={this.handelChange} value={this.state.searchWord} placeholder="搜索 书 / 影 / 音 / 标签" />
                        <a onClick={this.fileSearch}>搜索</a>
                    </form>
                </div>
            </SearchStyle>
        );
    }
}