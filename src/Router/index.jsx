import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import HeaderBar from '../Components/header';
import Home from '../Pages/home';
import Detail from '../Pages/detail';

const ControlCenter = styled.div`
  margin-top: 4.8rem;
  overflow-x: hidden;
`;

const Routes = () => (
    <Router>
        <div className="react-douban">
            <HeaderBar appTitle="react测试" title="你好" />
            <ControlCenter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/moviePage" component={Home} />
                    <Route path="/bookPage" component={Home} />
                    <Route path="/broadcastPage" component={Home} />
                    <Route path="/groupPage" component={Home} />
                    <Route path="/detailPage" component={Detail} />
                </Switch>
            </ControlCenter>
        </div>
    </Router>
);

export default Routes;