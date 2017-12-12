import React from 'react';
import SubNav from '../Components/subNav';
import { observer, inject } from 'mobx-react';
import HomeList from '../Components/homeList';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
const HomeControllerStyle = styled.div`
position: relative;
`;
@inject(['activityStore']) // inject 注入需要的store
@observer // 将 React 组件转化成响应式组件
export default class HomeController extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.activityStore;  // 通过props来导入访问已注入的store
    }
    getLoadMore() {
        this.store.getActivityList();
    }
    render() {
        const { match } = this.props;
        return (
            <HomeControllerStyle>
                <SubNav match={match} />
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.getLoadMore.bind(this)}
                    hasMore={this.store.actState.haiMoreData}
                    initialLoad={true}
                    loader={
                        <div className="douban-loading">
                            <img src="../../static/loading_green.gif" alt="loading" />
                        </div>
                    } >
                    <HomeList getListArr={this.store.actState.list} />
                </InfiniteScroll>
            </HomeControllerStyle>
        );
    }
}
