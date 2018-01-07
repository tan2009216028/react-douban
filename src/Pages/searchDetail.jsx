/**
 * @file search.js
 * @author: Toshiba
 * @describe: 搜索结果
 * @create: 2018/1/3 22:24
 */
import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import SearchList from '../Components/searchList';
import Loading from '../Components/loading';
const SearchStyle = styled.div.attrs({
    className: 'search-view'
})`
        .search {
            padding: 0.07rem .2rem;
            border-bottom: 0.01rem solid #F2F2F2;
            overflow: hidden;
            form{
              font-size: 0;
            }
            input {
                width: 85%;
                height: .3rem;
                padding: 0.05rem 0.08rem;
                box-sizing: border-box;
                font-size: .14rem;
                color: #111;
                background: #f5f5f5;
                border-radius: 0.03rem;
                border: 0;
                outline: 0;
            }

            a {
                display: inline-block;
                float: right;
                width: 10%;
                height: .3rem;
                padding-left: 5%;
                line-height: .3rem;
                font-size: .14rem;
                color: #333;
                text-decoration: none;
            }
        }

        .list-link {
            display: block;
            margin-bottom: .15rem;
            padding: .15rem 0 .15rem .5rem;
            font-size: .16rem;
            line-height: .18rem;
            color: #42bd56;
        }
`;
@inject(['searchStore']) // inject 注入需要的store
@observer // 将 React 组件转化成响应式组件
export default class SearchDetail extends React.Component {
    constructor(props) {
        super(props);
        this.fileSearch = this.fileSearch.bind(this);
        this.handelChange = this.handelChange.bind(this);
        this.store = this.props.searchStore;
        let fileSearchName = '';
        if (this.props.location) {
            if (this.props.location.query) {
                fileSearchName = this.props.location.query.name;
            } else {
                fileSearchName = this.props.location.search.split('?')[1].split('=')[1];
            }
        }
        this.state = {
            searchWord: fileSearchName
        };
    }
    componentDidMount() {
        this.store.getSearchList(this.state.searchWord);
    }
    // 当props发生变化时执行
    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.setState({
                searchWord: nextProps.location.query.name
            });
            this.store.getSearchList(nextProps.location.query.name);
        }
    }
    fileSearch(event) {
        this.store.resetData().then(res => {
            this.store.getSearchList(this.state.searchWord);
        });
    }
    handelChange(event) {
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
                {
                    !this.store.searchData.loadData && <Loading />
                }
                {
                    this.store.searchData.loadData && (
                        <div className="search-res">
                            <SearchList title="影视" items={this.store.searchData.queryMovieData}>
                                <a className="list-link" href={this.store.searchData.queryMovieData.movieUrl + this.state.searchWord} >查看更多影视结果</a>
                            </SearchList>
                            <SearchList title="图书" items={this.store.searchData.queryBookData}>
                                <a className="list-link" href={this.store.searchData.queryBookData.bookUrl + this.state.searchWord} >查看更多影视结果</a>
                            </SearchList>
                            <SearchList title="音乐" items={this.store.searchData.queryMusicData}>
                                <a className="list-link" href={this.store.searchData.queryBookData.musicUrl + this.state.searchWord} >查看更多影视结果</a>
                            </SearchList>
                        </div>
                    )
                }
            </SearchStyle>
        );
    }
}
