import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
const FooterBar = styled.div`
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 0.12rem;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
        color: #494949;
        border-top: 0.01rem solid #f3f3f3;
        background: #fff;
        z-index: 10;
`;
@observer // 将 React 组件转化成响应式组件
export default class Header extends React.Component {
    render() {
        return (
            <FooterBar>
                <span>蜀ICP备18002224号-1</span>
            </FooterBar>
        );
    }
}

