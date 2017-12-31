import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
const ControlCenter = styled.div`
  margin-top: .48rem;
  overflow-x: hidden;
`;

const Routes = () => (
    <Router>
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
                    {/* <Route path="/detailPage?activityId=:activityId" component={Detail} 通过match中的params.activityId无法做到浏览器后退和前进 /> */}
                    <Route path="/detailPage" component={Detail} />
                </Switch>
            </ControlCenter>
        </div>
    </Router>
);

export default Routes;