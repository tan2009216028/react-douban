/**
 * @file register.js
 * @author: Toshiba
 * @describe: 注册页面
 * @create: 2018/1/7 16:47
 */
import React from 'react';
import styled from 'styled-components';
const RegisterStyle = styled.div.attrs({
    className: 'db-register'
})`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 110;
    .title{
        margin: 10% 0 9%;
        font-size: .4rem;
        font-weight: 300;
        color: #42bd56;
        text-align: center;
    }
    form{
        padding: .2rem .15rem;
        font-size: 0;
        overflow: hidden;
    }
    .form-alias{
        border-top-left-radius: 0.03rem;
        border-top-right-radius: 0.03rem;
        border: 0.01rem solid #ccc;
    }
    .form-pwd{
        position: relative;
        border-left: 0.01rem solid #ccc;
        border-right: 0.01rem solid #ccc;
        .show-pwd{
            position: absolute;
            right: 0.02rem;
            top: 0;
            display: block;
            height: 100%;
            width: .32rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABHBJREFUWAntmEloFEEUhpOZzJBoFCeT/WCMnvRg3IgSPLjhyRWiKAp6EImQRHMQRFFBXFExLrij6CGIcYsePehBg0tAhKi4I5hJQlzDKDFhEr/XpIbOTPd0d4wbdEHxqt7733t/v66uqpmkJLe5FXAr4FbArcDfrEDyryTv6enxNjc3FyFLkpOTS4g1knEQGWSejvxC/9jbn6Cr93q99dnZ2S/R9av1i3Bra2tRd3f3KvoysgacZob4W/pZv99/NhgMvnfi74gw1ZxGBXfTJztJYoaFdARbXUpKyga7VbdFmIqOikQieyG60Cz5r+gh3oX/kbS0tG2BQECWkWmzJNzU1LSUgKcgO9g0ygAZyPOOUKX5+fkNZiE9ZgYI+lgCh7DX/AmywoM8BfQ7oVBotRkvwwrjlALZS8j5Zo4m+kdU6TJ+jR6PR15tNmNZ76XIAhMfQzVxNlPp7bHGOMIE9vKENQAXx4ITzENsV2W5ubk3jDDElLe1BrkHe6oRxkjHQ6/Py8vbp7fFEYbsMQKX6UGJxlTimc/nm5mVldWcCCc2SBcT+yZ9qBVW2SG9EtLn1LwPYQKWsrfWKqOVhGw7lZ2Qk5PzWmF7Sc2GVCH2Rux12N8oe0tLy1x2nOtqbiWJ8Y2CTKQgzwUbJUxlh5PkMbphVkGUnWCbWGc7ZY6vBzLVyHJ6NC6Y75jXgTul/Nh5ZOnMUXMb8hH+U4jVqd8lDuLohGwkPT39hEoG2SreToWerNiYD0IcpyBTFZbER9TYphyPf5VgtUqQbDKv6Z5NZw1G0vvy1DKBlNwpviDl/mDYwN8CP0OM4Pzgw0ifIdhY+ZmDpVCrMGR3GGPMtSR7p6ychGMSke3FTQKj5ZNXy7hF+duUgY6OjvX6JWHTzxDWY6iNV9rFxXv2ajTCbB0bTREmBqoUPQjYBZ4xD5tAlboBjEaY6voZ5yqDTfkpNTV1r0aYfe4BAa7ZdFSwSe3t7XL3TcJXbl1blSFWYu9Gt0XpWb/TIe1k/YrrnoyMjK/6JbEWpRynthoJveFwOHrA8NDVvKnDkOvz2pnLtlbGB3dHBca3XI1tStnWqgUb3S9lwpMP2MFBuBF0uVPUcWS/Zaw1dqR5fOR1am4leWA5OCZwcLwQbB/ComC/O0oF1sjYTiOgHM2zCBiywsv2yV4tR/MQK6yy88AreHvno3M1UBJjBeOLam4lST66s7PzIWTmmmHB+ChEJZW97ZCsXH6iZCV+XIVFSVC5XtYiF8jcQZPr5RXwjUj5HuR6WYxchBzuII58yPaulyooCXxUbb8ct0r3h+QPyFbykZ00ymdYYT0Q0ksgfZoH+Ld/IinSfOEXuCIW8dRXlW6gJbG76Ae4K4yjsg2J4ltWWO/Mup5GtXeh0y49elt/xpD8PT/zY8lw2RkLcfkjZTm2QKzdag5R2ZfPyB8pmZmZTVZ4vd1RhfWOMmZde9va2sayXZUwlr+qRiGN/qr6gO0pROWvqrv8afJK/N3mVsCtgFsBtwL/XwV+As2W8ubaOJDiAAAAAElFTkSuQmCC) center center no-repeat;
            background-size: .22rem;
            z-index: 3;
        }
        .pwd-show{
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABRBJREFUWAntWGlsVFUUPue+zpRFW5EE+IULv1oTqthQ0lDoLGBMXEOXKRr0B2lKAig/iEajnRA3gkaMxAWM1VrLtAVk5AdCZ2laJFGbEJPScQEJieISa5cIscu847lvcifD9L2ZN6VESeYm03u2e+7Xc88797wHkB/5COQjkI9APgL/ZQTwWjavpU5tqO9wGcShEogqAfBOAFrIM//gJqZHmB5ieog3OgsoTguBp7vXtv84031nBPi+SH1ZnGCzjvAYA12Q6+aIcAFAtDhRaznu+vTnXNbnBNgb9VXrRK8xyIpcNrGy5c3jhBjUNO1Zu1G3Bfj+cP2yCaA9BPCo1ebXJEec5PTZV4Tzdh11fcRpZD2yAl4XbmjQQT9AQPOt3cySBvGihljT7Qr0W3m0BNzY3+g4Nzb6Bh//NqvF10POgMYRxfaQO7DfzL8pYH/UX9BHsUNE9LDZIisZAp4hAYcFwQCCGImTvog3qCCEGv7Hb7NaZyYXAC+EPJ0vpeumATZKVfRQOxDUpRtb8Qz0EmnUFKnuPGZmI0/r/NjYFk6r3Qx8jpmNmUyA2BnyBF5P1U0D7A3XvasDNKUaZaIZbKzA4fCcWNP2ayY7qXP3blyJk/FuBl6UzVbpUWhPhl0HP07yipCzJ+qrIV3vSpVlohnsmBNgxXFPx3llJ0GJyan1nAZ3cFoMgEMEQ1XtPyX1PXUP8kXzueKzzbzHZQc67v3C3fa9tE1G2Htq01J94p9vORVuyeZE6fnheD7sDrwieT/5RW80tpfL01b2kfTLxBUG/jQf7QG1zhOuP8ZRfkDx2WYGfebWJSWruu7yT3BuJwaNj7+VE1gu+jDf+b5a39czuMOoKClgpY5r9zwG95432rBa2SLSPkXbmXn9PUN/fLdD2hqA10d8FSx8xM5iZcM3VH+4olX2CSAfVCLwK136zL4Fp9ouJV+wuDQKxmWhJDZmome8/Y3FBuApoJdtLEkzoYtKMNwbLOVQcrNjPQipXKaNtJBHy6nym7W1iUb2LKOjOw0HJuqcREKf4pPPPpqh2ZZdJk8JwAXac5mMzHWYvAiKqzfE+DH729wuIUXCfuTklVztWb+TiSWZ7NN1fCJ/QXHxHgNwZE371/wkHk03ysQjUbnnq02y74UurIvz+mYre9bpKMSLSj/8+6CLH1CH4m3NCLtD5ftHkymBhYVPcZRGbC1mI46QRlfGkxdMlatkLz9Ib7MPI4rKT6KsYVPIdfCUkhHhVkXbmY2ytriUS2ZKHZbM7F4ceDtfHgMFwhk8ufaTC9K/HOsivoe4xwgmuOx/GexlcMKKcFXHD9KaA3D1cEfq3+Hj2nK11JpjhzFRiN7u1YFL1lYJjSyfU6B38xncnM1W6QXiEyF3R2uSV4SaF7o2bON/o1Px2WausSX6OH3jlleuxZDNjyfi287lsycnsLL5SQEr3U+LsBQa7aUe68r1MpG5xil8hFtMo70EwkVE+krO+FpO7KXSt93BD5e99lI5vKEaeAVazp5ovQ90+ICj/b94RUqWtVSQqXTY1RHgFrKMc+ezVPms0rKvQHizCOfenel9Tu5pmsNWYORrPr82vcq/VVY2uch58+vzmp8OwtPbsJym9M0sf5xL4Iw+pPAl/aE+d05LpLL1l3T/mficIpzuSLaVw71HlpMOlRx1/lQFy7giTPtUxZXjTz7MQfmpqgC0L0+42s6l+8rz+QjkI5CPQD4CN0YE/gU2k9fnA+u+tgAAAABJRU5ErkJggg==);
        }
    }
    .form-name{
        border-bottom-left-radius: 0.03rem;
        border-bottom-right-radius: 0.03rem;
        border: 0.01rem solid #ccc;
    }
    .form-submit{
        button{
            width: 100%;
            padding: .12rem .26rem;
            margin-top: .1rem;
            font-size: .17rem;
            text-align: center;
            color: #fff;
            background: #42bd56;
            border: 0.01rem solid #17AA52;
            border-radius: 0.03rem;
        }
    }
    input{
        display: inline-block;
        width: 100%;
        height: .44rem;
        padding: 0 0.08rem;
        font-size: .15rem;
        background: #fff;
        box-sizing: border-box;
    }
    .agreement{
        font-size: .14rem;
        color: #aaa;
        text-align: center;
    }
    .open-app{
        display: block;
        margin-top: .4rem;
        text-align: center;
        font-size: .15rem;
        color: #42bd56;
    }
`;

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            registerState: '立即注册',
            passType: 'password',
            userAccount: '',
            userPassword: '',
            name: '',
            isShow: false
        };
        this.userShowPwd = this.userShowPwd.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
    }
    userShowPwd() {
        this.setState({
            isShow: !this.state.isShow,
            passType: this.state.passType === 'password' ? 'text' : 'password'
        });
    }
    handelChange(type, event) {
        switch (type) {
            case 'userAccount':
                this.setState({
                    'userAccount': event.target.value
                });
                break;
            case 'userPassword':
                this.setState({
                    'userPassword': event.target.value
                });
                break;
            case 'name':
                this.setState({
                    'name': event.target.value
                });
                break;
        }
    }
    submitInfo(event) {
        event.preventDefault(); // 阻止表单默认提交
        if (this.state.userAccount !== '' && this.state.userPassword !== '' && this.state.name !== '') {
            // this.props.history.goBack();
            this.props.history.push({
                pathname: '/'
            });
        }
    }
    render() {
        return (
            <RegisterStyle>
                <h1 className="title">欢迎加入豆瓣</h1>
                <form method="post" onSubmit={this.submitInfo}>
                    <div className="form-alias">
                        <input type="text" onChange={this.handelChange.bind(this, 'userAccount')} value={this.state.userAccount} placeholder="邮箱 / 手机号 / 用户名" />
                    </div>
                    <div className="form-pwd">
                        {
                            this.state.passType === 'password' && <input type="password" value={this.state.userPassword} name="userPassword" onChange={this.handelChange.bind(this, 'userPassword')} placeholder="密码" />
                        }
                        {
                            this.state.passType === 'text' && <input type="text" value={this.state.userPassword} name="userPassword" onChange={this.handelChange.bind(this, 'userPassword')} placeholder="密码" />
                        }
                        <span className={this.state.isShow ? 'show-pwd pwd-show' : 'show-pwd'} onClick={this.userShowPwd}></span>
                    </div>
                    <div className="form-name">
                        <input type="text" onChange={this.handelChange.bind(this, 'name')} value={this.state.name} name="name" placeholder="昵称" />
                    </div>
                    <div className="form-submit">
                        <button className="submit" type="submit" >{this.state.registerState}</button>
                    </div>
                </form>
                <div className="footer">
                    <div className="agreement">点击「注册」代表你已阅读并同意用户使用协议</div>
                    <a className="open-app">下载豆瓣App</a>
                </div>
            </RegisterStyle>
        );
    }
}
