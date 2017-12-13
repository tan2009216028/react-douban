import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import HeaderBar from '../Components/header';
import Home from '../Pages/home';
import Detail from '../Pages/detail';
import Movie from '../Pages/movie';

const ControlCenter = styled.div`
  margin-top: 4.8rem;
  overflow-x: hidden;
`;

const Routes = () => (
    <Router>
        <div className="react-douban">
            <HeaderBar appTitle="react测试" title="我不好" />
            <ControlCenter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/movie" component={Movie} />
                    <Route path="/bookPage" component={Home} />
                    <Route path="/broadcastPage" component={Home} />
                    <Route path="/groupPage" component={Home} />
                    {/* <Route path="/detailPage?activityId=:activityId" component={Detail} 通过match中的params.activityId无法做到浏览器后退和前进 /> */}
                    <Route path="/detailPage" component={Detail} />
                </Switch>
            </ControlCenter>
        </div>
    </Router>
);

export default Routes;