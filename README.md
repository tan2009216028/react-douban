# react-douban

react16 + react-router4 + mobx + es6 +es7


> * 本项目一个基于react的全家桶的豆瓣项目，主要数据接口来源于豆瓣api，感谢豆瓣提供，仅仅用于学习交流，无任何商业用途
> * 本项目从零开始，目的是加深对react全家桶的认识和理解，提高应用水平，欢迎围观，大家一起共同进步
> * 本项目用到的插件和相关关键性的代码将会在日志记录中更新说明，方便查看
> * 本项目单位为rem

## 项目构建步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8090
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 项目运用的功能插件说明

> * mobx——一个功能强大,上手非常容易的状态管理工具
> * superagent——superagent是nodejs里一个非常方便的客户端请求代理模块，当你想处理get,post,put,delete,head请求时,你就应该想起该用它了
> * react-infinite-scroller——一个基于react的无线滚动加载数据插件。
> * 豆瓣小组模拟小组接口 http://rapapi.org/workspace/myWorkspace.action?projectId=24739#245838

## 项目更新记录

> 1.  新增项目目录及基本配置                         2017-12-01
> 2.  完成elint代码检查配置，完成es6、es7 babel转换额皮脂        2017-12-05
> 3.  完成首页数据获取及展示        2017-12-10
> 4.  完成详情页数据获取及展示        2017-12-10
> 5.  获取电影展示数据       2017-12-11
> 6.  pc上chrome最低为12px，此时即使根节点设置font-size：62.5%，这样1rem也不等于10px，而是等于12px,移动端无此问题，因此为解决pc调试和设计稿不一致问题，
      设置font-size:625%,即1rem=100px,后面的计算就依此类推了。   2017-12-16
> 7.  封装request方法，新增util方法集合，新增UUID码生成   2017-12-17
> 8.  新增图片代理服务   2017-12-18
> 9.  新增电影详情展示   2017-12-26
> 10.  新增图书列表展示   2017-12-27
> 11.  新增图书详情介绍   2017-12-28
> 12.  新增广播部分   2017-12-31
> 13.  新增搜索对话框   2017-12-31
> 14.  新增搜索跳转到指定板块后关闭搜索对话框   2018-01-04
> 15.  新增注册和登录页逻辑   2018-01-07
> 16.  新增dist打包目录   2018-01-14
> 17.  新增服务端入口文件，生产环境打包文件   2018-01-15
> 18.  新增重定向路由   2018-01-18
> 19.  新增react懒加载   2018-01-19
