/**
 * detail.js
 * @auth: Toshiba
 * @create: 2017/12/10 18:12
 */
import React from 'react';
import Banner from '../Components/banner';
import ActivityContent from '../Components/activityContent';
export default class Detail extends React.Component {
    render() {
        const { location } = this.props;
        return (
            <div className="db-detail-content" >
                <Banner title="每天看点好内容" />
                <ActivityContent location={location} />
            </div>
        );
    }
}

