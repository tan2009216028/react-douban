/**
 * @file message.js
 * @author: tanhongzhao
 * @describe: 动态消息提示
 * @create: 2018-01-11 19:38
 */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import ReactDOM from 'react-dom';
const FadeInDown = keyframes`
  0%, 60%, 75%, 90%, 100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -5rem, 0);
    transform: translate3d(0, -5rem, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, .25rem, 0);
    transform: translate3d(0, .25rem, 0);
  }
  75% {
    -webkit-transform: translate3d(0, -0.1rem, 0);
    transform: translate3d(0, -0.1rem, 0);
  }
  90% {
    -webkit-transform: translate3d(0, 0.05rem, 0);
    transform: translate3d(0, 0.05rem, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
`;
const MessageStyle = styled.div`
  position: fixed;
  top: .5rem;
  left: 50%;
  margin-left: -1.41rem;
  width: 2.5rem;
  padding: 0.06rem 0.16rem;
  line-height: .22rem;
  font-size: 0.14rem;
  color: #fff;
  text-align: center;
  background-color: #47BC5B;
  border-radius: .28rem;
  box-shadow: 0 0 0.2rem #d4d4d4;
   transform: translate3d(0, -5rem, 0);
  animation: ${FadeInDown} 1s ease-in-out  forwards;
  z-index: 10;
`;
export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: props.msg ? true : false,
            msg: props.msg
        };
        this.container = document.createElement('div');
    }
    componentDidMount() {
        if (this.state.isShow) {
            document.body.appendChild(this.container);
            setTimeout(() => {
                this.setState({
                    isShow: false
                });
            }, 2000);
        }
    }
    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.container);
        document.body.removeChild(this.container);
    }
    render() {
        if (this.state.isShow) {
            return ReactDOM.createPortal(
                <MessageStyle>
                    {this.state.msg}
                </MessageStyle>,
                this.container
            );
        }
        else {
            return null;
        }
    }
}