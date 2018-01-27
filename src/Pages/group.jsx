/**
 * @file group.js
 * @author: Toshiba
 * @describe: 小组功能
 * @create: 2017/12/31 16:19
 */
import React from 'react';
import { observer, inject } from 'mobx-react';
import DownLoadApp from '../Components/downLoadApp';
import Loading from '../Components/loading';
import GroupList from '../Components/groupList';

@inject(['groupStore']) // inject 注入需要的store
@observer // 将 React 组件转化成响应式组件
export default class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showType: false
        };
        this.store = this.props.groupStore;
    }
    componentDidMount() {
        this.store.getGroupList().then(res => {
            this.setState({
                showType: true
            });
        });
    }
    render() {
        let groupListData = this.store.classifiedGroups['groupList']['rec_groups'] ? this.store.classifiedGroups['groupList'].rec_groups[0].classified_groups : [];
        return (
            <div>
                {
                    !this.state.showType && <Loading />
                }
                {
                    this.state.showType && <GroupList dbGroupList={groupListData} />
                }
                <DownLoadApp />
            </div>
        );
    }
}
