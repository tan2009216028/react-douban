/*
 * @file appIndex.js
 * @author: Toshiba
 * @describe: 生产环境入口
 * @date: 2018/1/14 16:45
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'mobx-react';
import normalize from 'normalize.css';
import commonStyle from './commonStyle.css';
import stores from './Store/index';
injectGlobal`${normalize}${commonStyle}`;
import Routes from './Router/index';

ReactDOM.render(
    <Provider {...stores} >
        <Routes />
    </Provider>,
    document.getElementById('app')
);
