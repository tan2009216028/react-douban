import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import HeaderBar from '../Components/header';
import Home from '../Pages/home';
import Detail from '../Pages/detail';
import Movie from '../Pages/movie';
import MovieDetail from '../Pages/movieDetail';
import Book from '../Pages/book';
import BookDetail from '../Pages/bookDetail';
import Broadcast from '../Pages/broadcast';
import Group from '../Pages/group';
import Register from '../Pages/register';
import Login from '../Pages/login';
import { observer, inject } from 'mobx-react';
import Search from '../Pages/search';
import SearchDetail from '../Pages/searchDetail';
const ControlCenter = styled.div`
  margin-top: .48rem;
  overflow-x: hidden;
`;
@inject(['searchStore']) // inject 注入需要的store
@observer // 将 React 组件转化成响应式组件
export default class Routes extends React.Component {
    getCloseSearchDialog() {
        this.props.searchStore.changeShowType(false);
    }
    render() {
        return (
            <Router basename="/">
                <div className="react-douban">
                    <HeaderBar appTitle="react测试" title="我不好" />
                    <ControlCenter>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/movie/movieDescribe" component={MovieDetail} />
                            <Route path="/movie" component={Movie} />
                            <Route path="/book/bookDescribe" component={BookDetail} />
                            <Route path="/book" component={Book} />
                            <Route path="/broadcast" component={Broadcast} />
                            <Route path="/group" component={Group} />
                            <Route path="/search" component={SearchDetail} />
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            <Route path="/detailPage" component={Detail} />
                            <Redirect to="/" />
                        </Switch>
                    </ControlCenter>
                    {
                        this.props.searchStore.searchData.showType && <Search getCloseSearchDialog={this.getCloseSearchDialog.bind(this)} />
                    }
                </div>
            </Router>
        );
    }
}