import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
injectGlobal`
    .slide-fade-enter-active {
        transition: all 3s ease;
    }
    .slide-fade-leave-active {
        transition: all 5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to{
        transform: translateX(10px);
        opacity: 0;
    }
    /*
     * 移动端CSS Reset 公用样式
     */
    html {
        /*
         * 关闭自动调整网页字体大小(移动端表现为横屏和竖屏后字体变化)
         * 预设值是 auto，设成100% 或 none(不推荐，原因有bug)就可以关闭。
         */
        font-size: 62.5%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }

    body {
        /*
         * iOS 4.0+ 使用英文字体 Helvetica Neue，之前的iOS版本降级使用 Helvetica。
         * 中文字体设置为华文黑体STHeiTi。
         * 需补充说明，华文黑体并不存在iOS的字体库中， 但系统会自动将华文黑体STHeiTi兼容命中系统默认中文字体黑体-简或黑体-繁：
         * 原生Android下中文字体与英文字体都选择默认的无衬线字体。
         */
        font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
    }

    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input,
    textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer,
    header, hgroup, menu, nav, section {
        margin: 0;
        padding: 0;
        /*
         * 设定元素在移动设备（如Adnroid、iOS）上被触发点击事件时，响应的背景框的颜色
         */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent; /* 某些安卓*/
        /*
         * 定义元素无轮廓,除去焦点状态高亮边框样式
         */
        outline: none;
        font-weight: normal;
        -webkit-overflow-scrolling : touch;
    }

    /*
     * 禁止触摸并按住触摸的目标时，显示系统默认菜单
     */
    .ban-show-menu {
        -webkit-touch-callout: none;
    }

    /*
    * 用户不能选择元素中的任何内容
    */
    .user-ban-select {
        user-select: none;
    }

    .user-can-select {
        user-select: auto;
    }

    /*
     * 去除input number边框三角形样式
     */
    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    /*
     * -webkit-appearance该属性主要用来消除浏览器默认样式
     */
    input, button, select, textarea, a {
        -webkit-appearance: none;
    }
    a, a:active {
        outline: none;
        text-decoration: none;
    }
    textarea {
        resize: none;
    }
    input, button, textarea, a {
        border: none;
    }
    .clearFix {
        zoom: 1;
        display: block;
        _height: 1px;
    }
    .clearFix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .clearFlow {
        overflow: hidden;
        *zoom: 1;
    }
    /*
     *  ul 列表默认样式
    **/
    ul li{
        list-style-type: none;
    }
    .ul-li-float li{
        float: left;
    }
    /*
     *  边框盒
    **/
    .border-box{
        box-sizing: border-box;
    }
    /*
     *  内容盒
    **/
    .content_box{
        box-sizing: content-box;
    }
    /*
     *  弹性盒模型
    **/
    .flexible-box{
        display: flex;
    }
    .flexible_box_important{
        display: flex!important;
    }
    .flexible-box-h{
        display: flex;
        flex-direction: column;
    }
    .flexible-box_h-important{
        display: flex!important;
        flex-direction: column!important;
    }
    /*
     *  弹性盒模型-自适应
    **/
    .adaptive-box-flex{
        flex: 1;
    }
    .left{
        float:left;
    }
    .right{
        float:right;
    }
    #app{
        max-width: 41.2rem;
        margin: 0 auto;
    }
`;

// import App from './App';
import Header from './Components/header';
ReactDOM.render(
    <AppContainer>
        <Header appTitle="react测试" />
    </AppContainer>,
    document.getElementById('app')
);
if (module.hot) {
    module.hot.accept();
}