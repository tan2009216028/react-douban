/**
 * @file message.js
 * @author: tanhongzhao
 * @describe: 动态消息提示
 * @create: 2018-01-11 19:38
 */
import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
const MessageStyle = styled.div`
  position: fixed;
  //top: -30%;
  top: .5rem;
  left: 50%;
  margin-left: -.75rem;
  width: 1.5rem;
  height: .36rem;
  line-height: .36rem;
  font-size: 0.14rem;
  color: #fff;
  text-align: center;
  background-color: #47BC5B;
  border-radius: .18rem;
  box-shadow: 0 0 0.2rem #d4d4d4;
  z-index: 10;
`;
export default class Message extends React.Component {
    static show(msg) {
        // 弹出成功！
        if (!document.getElementById('db-message-layout')) {
            let createEle = document.createElement('div');
            createEle.id = 'test';
            ReactDOM.render(<Message {...msg} />, createEle);
            document.querySelector('body').appendChild(createEle);
        }
    }
    render() {
        let { msg } = this.props;
        return (
            <MessageStyle>
                {msg}
            </MessageStyle>
        );
    }
}