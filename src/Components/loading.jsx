/**
 * loading.js
 * @auth: Toshiba
 * @create: 2017/12/10 16:46
 */
import React from 'react';

export default class Loading extends React.Component {
    render() {
        return (
            <div className="douban-loading">
                <img src="../../static/loading_green.gif" alt="loading" />
            </div>
        );
    }
}
