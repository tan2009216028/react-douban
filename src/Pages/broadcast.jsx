/**
 * @file broadcast.js
 * @author: tanhongzhao
 * @describe: 广播部分
 * @create: 2017-12-28 20:19
 */
import React from 'react';
import styled from 'styled-components';
import Banner from '../Components/banner';
import { observer, inject } from 'mobx-react';
import DownLoadApp from '../Components/downLoadApp';
import UserAiring from '../Components/userAiring';
import Loading from '../Components/loading';

const BroadcastStyle = styled.div.attrs({
    className: 'db-airing-content'
})`
        .db-airing-user{
            position: relative;
            display: flex;
            padding: .1rem .18rem  0.09rem;
            height: .4rem;
            font-size: 0;
            overflow: hidden;
            border-bottom: 0.01rem solid #E8E8E8;
            .db-airing-head{
                flex: 1;
                img{
                    display: inline-block;
                    width: .4rem;
                    height: .4rem;
                    border-radius: 50%;
                    vertical-align: middle;
                }
                span{
                    display: inline-block;
                    padding-left: .1rem;
                    line-height: .4rem;
                    font-size: .15rem;
                    color: #aaa;
                    vertical-align: middle;
                }
            }
            .db-airing-publish{
                display: inline-block;
                span{
                    display: inline-block;
                    margin-left: 0.08rem;
                    width: .4rem;
                    height: .4rem;
                }
                .db-airing-talk{
                    background: url(".././../static/pen.svg") center center no-repeat;
                    background-size: .24rem .24rem;
                }
                .db-airing-camera{
                    background: url(".././../static/camera.svg") center center no-repeat;
                    background-size: .24rem .24rem;
                }
            }
        }
        .db-list-link{
            display: block;
            padding: .15rem 0;
            font-size: .16rem;
            line-height: .18rem;
            text-align: center;
            cursor: pointer;
            color: #42bd56;
        }
`;
@inject(['broadcastStore']) // inject 注入需要的store
@observer // 将 React 组件转化成响应式组件
export default class BroadcastPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTitle: '打开App，回复广播',
            showType: false,
            broadcastData: []
        };
        this.store = this.props.broadcastStore;
    }
    componentDidMount() {
        this.getMoreBroadcast();
    }
    getMoreBroadcast(type, event) {
        let maxId = this.store.broadcastData['items'].length ? this.store.broadcastData.items[this.store.broadcastData.items.length - 1].status.id : '';
        if (type) {
            this.setState({
                showType: false
            }, () => {
                this.store.getBroadcastList(maxId).then(res => {
                    this.setState({
                        showType: true,
                        broadcastData: this.store.broadcastData
                    });
                });
            });
        } else {
            this.store.getBroadcastList(maxId).then(res => {
                this.setState({
                    showType: true,
                    broadcastData: this.store.broadcastData
                });
            });
        }
    }
    render() {
        return (
            <BroadcastStyle>
                <Banner title={this.state.showTitle} />
                <div className="db-airing-user" >
                    <div className="db-airing-head">
                        <img src="../../static/user.jpg" alt="" />
                        <span>登录发广播</span>
                    </div>
                    <div className="db-airing-publish" >
                        <span className="db-airing-talk" ></span>
                        <span className="db-airing-camera" ></span>
                    </div>
                </div>
                <UserAiring broadcastData={this.store.broadcastData} />
                {
                    !this.state.showType && <Loading />
                }
                <a className="db-list-link" onClick={this.getMoreBroadcast.bind(this, 'click')}>显示更多广播</a>
                <DownLoadApp />
            </BroadcastStyle>
        );
    }
}