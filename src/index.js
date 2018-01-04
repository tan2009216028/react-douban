import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import { Provider } from 'mobx-react';
import normalize from 'normalize.css';
import commonStyle from './commonStyle.css';
import stores from './Store/index';
injectGlobal`${normalize}${commonStyle}`;
import Routes from './Router/index';
ReactDOM.render(
    <AppContainer>
        <Provider {...stores}>
            <Routes />
        </Provider>
    </AppContainer>,
    document.getElementById('app')
);
if (module.hot) {
    module.hot.accept();
}