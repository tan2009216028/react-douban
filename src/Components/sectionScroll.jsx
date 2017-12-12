/**
 * sectionScroll.js
 * @auth: Toshiba
 * @create: 2017/12/11 22:27
 */
import React from 'react';
import styled from 'styled-components';
import Loading from '../Components/loading';
const SectionStyle = styled.section.attrs({
    className: 'db-movie-item'
})`
        padding-top: 1rem;
        header{
            padding: 0 1.6rem;
            height: 2.4rem;
            line-height: 2.4rem;
            h2{
                display: inline-block;
                min-width: 4em;
                font-size: 1.68rem;
                font-weight: normal;
                color: #111;
            }
            a{
                float: right;
                font-size: 1.44rem;
                color: #42bd56;
            }
        }
        .db-movie-list{
            ul{
                padding: 0.8rem 0;
                overflow-x: auto;
                white-space: nowrap;
            }
            li{
                display: inline-block;
                width: 10rem;
                margin-left: 1rem;
                vertical-align: middle;
                text-align: center;
                img{
                    display: block;
                    width: 10rem;
                    height: 15rem;
                }
            }
            li:first-child{
                margin-left: 1.5rem;
            }
            li:last-child{
                margin-right: 1.5rem;
            }
            .db-movie-title{
                margin-top: 1rem;
                line-height: 1.6rem;
                font-size: 1.6rem;
                color: #111;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .db-find-area:empty{
                display: block;
                height: 0.1rem;
                border: 0;
                margin: 0;
            }
            .db-find-area{
                display: inline-block;
                width: auto;
                margin: 0 0 0.8rem 1.6rem;
                font-size: 1.6rem;
                border: solid 0.1rem;
                border-radius: 0.4rem;
                vertical-align: middle;
                a{
                    display: block;
                    height: 50px;
                    line-height: 50px;
                    padding: 0 1.55rem;
                    letter-spacing: .1em;
                    text-align: center;
                }
            }
        }
        .db-no-content{
            line-height: 5rem;
            font-size: 1.44rem;
            color: #42bd56;
            text-align: center;
        }
`;

export default class SectionScroll extends React.Component {
    state = {
        showType:false
    };
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <SectionStyle>
                <header>
                    <h2>{this.props.title}</h2>
                    {
                        this.props.type != 'sectionTags' && <a href={this.props.type.toMoreUrl || ''}>更多</a>
                    }
                </header>
                {!this.state.showType && <Loading />}
            </SectionStyle>
        )
    }
}
