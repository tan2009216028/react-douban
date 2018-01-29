/**
 * rating.js
 * @auth: tanhongzhao
 * @create: 2017-12-14 20:20
 */
import React from 'react';
import styled from 'styled-components';
import UUID from '../Utils/util';
const RatingStyle = styled.div.attrs({
    // className: props => (props.defindClass ? 'db-movie-rating ' + props.defindClass : 'db-movie-rating')
    //  Arrow function used ambiguously with a conditional expression  no-confusing-arrow
    //  箭头函数的箭头和比较操作符 (>, <, <=, and >=)很相似，该规则要求在和比较操作符容易发生混淆时禁止使用箭头函数语法
    className: function(props) {
        return props.defindClass ? 'db-movie-rating ' + props.defindClass : 'db-movie-rating';
    }
})`
    margin-top: 0.05rem;
    line-height: .094rem;
    span{
        display: inline-block;
        width: .1rem;
        height: .1rem;
        font-size: .14rem;
        color: #aaa;
        vertical-align: middle;
    }
    .db-full-star{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==);
        background-size: .1rem .1rem;
    }
    .db-half-star {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAyhJREFUSA29l89rE0EUx99siqZgm0YFC00KVXuwUSMUpGitBaFgi0VEhIqHWkHw4B+gCIognrz1ZrwKVVSqtYIn9SDVHkQFQSOEmkYqaNOkQjRt8vxuyK6TzUx+LLQDm3nzfsxn982b2Q2Ry8bP/JOJROLT3Nyc380UhpsgnvLvJhLDzLzDMIwzbuZwBSZDnLNgQvyXLV0tfd1gvkcbiNh+SoDDSHd3LTDZp24wbfINkxBb5Uk8Ho+dAVlfSa4fLAwV5HQ8Hm+sBHLa6gLzdGOAmAackyDdPlwnnfpK47rAxBtHkWZdjCoTWrZukrIAxv4B9GyZoajAE/ch3Tt1dqe+ZjBNtfQDvN05gTQGW4xJ44qi4Kf+ETxLEF4+9D7KF3trzNRSsBE1O9Oc2PMhCxi2l91WIf3EwZKGPo0+VeytsalLw+d7Aw6Du3aYKThzIEqs1QYNcGgFrNV0RF/wl3tLBoZfF6zr+7Ng0ELyCDFPrBcXqX4P1n4DdfqHBpMjgN9YazigT1KpVG9bW1u8sKJYCRaDyStE+VHcQHYtbgDQW5FI5HgoFPptzl9WOjzdchjqR6iMqu9ZRVWX3TOAK7guBIPBO7LRWcMkBpdeEq/2IAlfZUc3MoCLuAacUHOuMrCpFEPLXygDONOMOXbZvgHaA+gLVbwSbDqKE8u/8NTvVEG16ABNAxrV+WrBhQBBfbrAanocFKH5+fktOj8tmB82mUFdusAa9CKfzx/S+WnB5PUgqHjm6aKr6PEhqM2YHsz6oCo824x0Y2uqmx5sVFlfJrNwnquntbXhaDTabI8kQQnmSWrCCbZP8pNEXkG136Qfi3sDgcAxVO8pGBckB1n0eL3eXllhyUowNWw+iOX1WE52z/QG7+tucTR5uXDGwwD4/Ww2uwvibVz4UCltunVWgw0uLQqmZWTgIr1dPCCGkh9Lpybq6OhYwsF/PpfL9SMDn2U7xsp1VoOZpG3Aj4kyXXiJjItreN4Krb29/VUmkwljG10H0HrZdMdiMa8zzPxiULUZJG0bce6SGEo9UDnodJ2dnX9hu4p/FxP40B+HzLOzs6iL0vYPbfQF9yQ167cAAAAASUVORK5CYII=);
        background-size: .1rem .1rem;
    }
    .db-gray-star {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=);
        background-size: .1rem .1rem;
    }
    .db-movie-average {
        padding: 0.02rem 0.02rem 0 0.08rem;
        width: auto;
        height: auto;
        font-size: 0.072rem;
    }
    .db-movie-zero{
        width: auto;
        height: auto;
        line-height: .14rem;
    }
    &.db-upstep-star{
        margin: 0;
        vertical-align: top;
        span:not(:last-child){
            width: .13rem;
            height: .13rem;
            font-size: .14rem;
        }
        .db-full-star{
            background-size: .13rem .13rem;
        }
        .db-half-star {
            background-size: .13rem .13rem;
        }
        .db-gray-star {
            background-size: .13rem .13rem;
        }
        .db-movie-average{
        font-size: .14rem;
        }
    }
`;
const Rating = (props) => {
    let rating = props.rating;
    let average = rating.average || 0; // 获取电影评分
    let fullStar = parseInt(average / 2, 10) || 0;// 计算满颗星星有多少
    let halfStar = average % 2 === 0 ? 0 : 1; // 计算半颗星星有多少
    let grayStar = 5 - fullStar - halfStar; // 计算灰色星星有多少
    let fullStarList = [];
    let halfStarList = [];
    let grayStarList = [];
    for (let i = 0; i < fullStar; i++) {
        fullStarList.push(<span key={UUID.uuid810()} className="db-full-star"></span>);
    }
    for (let i = 0; i < halfStar; i++) {
        halfStarList.push(<span key={UUID.uuid810()} className="db-half-star"></span>);
    }
    for (let i = 0; i < grayStar; i++) {
        grayStarList.push(<span key={UUID.uuid810()} className="db-gray-star"></span>);
    }
    return (
        <RatingStyle defindClass={props.defindClass ? props.defindClass : ''} >
            {
                !average && (<span className="db-movie-zero">暂无评分</span>)
            }
            {average > 0 && fullStarList.length > 0 && fullStarList}
            {average > 0 && halfStarList.length > 0 && halfStarList}
            {average > 0 && grayStarList.length > 0 && grayStarList}
            {
                average > 0 && <span className="db-movie-average">{average}</span>
            }
        </RatingStyle>
    );
};
export default Rating;