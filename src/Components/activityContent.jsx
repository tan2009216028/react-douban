/**
 * activityContent.js
 * @auth: Toshiba
 * @create: 2017/12/10 20:46
 */
import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import DownLoadApp from '../Components/downLoadApp';
import Loading from '../Components/loading';
const ActivityStyle = styled.div.attrs({
    className: 'db-activity-layout'
})`
    .db-activity-city{
        display: flex;
        padding: .1rem;
        height: .5rem;
        overflow: hidden;
        background: #f6f5f2;
        align-items: center;
        a{
            font-family: "Microsoft YaHei UI";
            font-weight: bolder;
            font-size: .24rem;
            color: #E85206;
        }
        span{
            display: inline-block;
            margin-left: .1rem;
            margin-top: 0.02rem;
            padding: 0.05rem 0.6rem;
            font-size: .14rem;
            color: #333;
            border-radius: .4px;
            background-color: #dedede;
        }
    }
    .db-activity-content{
        padding: .1rem;
        margin-top: .1rem;
        .db-activity-title{
            margin: .1rem 0 .2rem;
            color: #494949;
            text-align: center;
            text-align-last: left;
        }
        .db-activity-img{
            margin-bottom: .2rem;
            text-align: center;
            img{
                width: 100%;
                max-width: 2.2rem;
                height: auto;
            }
        }
        .db-activity-detail{
            margin-bottom: 0.05rem;
            .db-detail-title{
                line-height: 1.5;
                font-size: .12rem;
                color: #666666;
            }
            .db-detail-adaptive{
                padding-left: 0.02rem;
                line-height: 1.5;
                font-size: .12rem;
                color: #111;
            }
        }
        .db-activity-interest{
            padding: 0.05rem 0;
            font-size: .12rem;
            color: #666666;
            span{
                font-size: .12rem;
                font-weight: bolder;
            }
        }
        .db-activity-stage{
            margin: .1rem 0 .2rem;
            h3{
                margin-bottom: 0.08rem;
                font-size: .12rem;
                font-weight: normal;
                color: #072;
            }
            .db-stage-content{
                width: 100%;
                line-height: 1.5;
                word-wrap: break-word;
                overflow: hidden;
                font-size: .12rem;
                color: #111;
            }
        }
    }
`;

class ActivityContent extends React.Component {
    constructor(props) {
        super(props);
        this.activityDetail = this.props.activityDetail;
        this.activityThisContent = this.props.activityThisContent;
    }
    rawTimeHTML() {
        return {
            __html: `${this.activityDetail.begin_time}</br>${this.activityDetail.end_time}`
        };
    }
    render() {
        return (
            <div className="db-activity-content">
                <h1 className="db-activity-title">{this.activityDetail.title}</h1>
                <div className="db-activity-img">
                    <img src={this.activityDetail.image_hlarge} />
                </div>
                <div className="flexible-box db-activity-detail">
                    <span className="db-detail-title">时间:&nbsp;&nbsp;</span>
                    <div className="adaptive-box-flex db-detail-adaptive" dangerouslySetInnerHTML={this.rawTimeHTML()}></div>
                </div>
                <div className="flexible-box db-activity-detail">
                    <span className="db-detail-title">地点:&nbsp;&nbsp;</span>
                    <div className="adaptive-box-flex db-detail-adaptive">
                        {this.activityDetail.address}
                    </div>
                </div>
                <div className="flexible-box db-activity-detail">
                    <span className="db-detail-title">费用:&nbsp;&nbsp;</span>
                    <div className="adaptive-box-flex db-detail-adaptive">
                        {this.activityDetail.fee_str}
                    </div>
                </div>
                <div className="flexible-box db-activity-detail">
                    <span className="db-detail-title">类型:&nbsp;&nbsp;</span>
                    <div className="adaptive-box-flex db-detail-adaptive">
                        {this.activityDetail.category_name}
                    </div>
                </div>
                <div className="flexible-box db-activity-detail" v-if="activityDetail.owner">
                    <span className="db-detail-title">主办方:&nbsp;&nbsp;</span>
                    <div className="adaptive-box-flex db-detail-adaptive">
                        {this.activityDetail.owner.name}
                    </div>
                </div>
                <div className="flexible-box db-activity-detail">
                    <span className="db-detail-title">起始时间:&nbsp;&nbsp;</span>
                    <div className="adaptive-box-flex db-detail-adaptive">
                        {this.activityDetail.time_str}
                    </div>
                </div>
                <div className="db-activity-detail db-activity-interest">
                    <span className="num">{this.activityDetail.wisher_count}</span>人感兴趣 &nbsp;
                    <span className="num">{this.activityDetail.participant_count}</span>人要参加 &nbsp;
                </div>
                <div className="db-activity-stage">
                    <h3>活动须知</h3>
                    <div className="db-stage-content">报名后请一定与主办方联系，以免遗漏。</div>
                </div>
                <div className="db-activity-stage">
                    <h3>活动详情</h3>
                    <div className="db-stage-content" dangerouslySetInnerHTML={{
                        __html: this.activityThisContent
                    }}></div>
                </div>
            </div>
        );
    }
}
@inject(['activityStore']) // inject 注入需要的store
@observer // 将 React 组件转化成响应式组件
export default class ActivityContentLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityWide: 'https://www.douban.com/location/chengdu/',
            showType: false
        };
        this.store = this.props.activityStore;
        this.activityDetail = this.store.actState.detailItem;
        this.activityThisContent = {};

    }
    componentDidMount() {
        let activityId;
        if (this.props.location.query) {
            activityId = this.props.location.query.activityId;
        } else {
            activityId = this.props.location.search.split('?')[1].split('=')[1];
        }
        this.store.getActivityDetail(activityId).then(res => {
            this.activityDetail = this.store.actState.detailItem;
            this.activityThisContent = this.activityDetail.content;
            this.setState({
                showType: true
            });
        });
    }
    render() {
        return (
            <ActivityStyle>
                <div className="db-activity-city"><a href={this.state.cityWide} >豆瓣同城</a>{this.activityDetail && <span>{this.activityDetail['loc_name']}</span>}</div>
                {this.state.showType && <ActivityContent activityDetail={this.activityDetail} activityThisContent={this.activityThisContent} />}
                {!this.state.showType && <Loading />}
                <DownLoadApp />
            </ActivityStyle>
        );
    }
}
