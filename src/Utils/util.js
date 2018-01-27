/*
 * @file util.js
 * @author:Toshiba
 * @describe: 统一工具类方法
 * @date: 2017/12/16 23:42
 */

/*
 * 生成唯一uuid
 * 8 character ID (base=2)
 * getUuid(8, 2)  //  "01001010"
 * 8 character ID (base=10)
 * getUuid(8, 10) // "47473046"
 * 8 character ID (base=16)
 * getUuid(8, 16) // "098F4D35"
 *
 */
const getUuid = (len, radix) => {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [];
    let thisRadix = radix;
    let i;
    thisRadix = thisRadix || chars.length;
    if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * thisRadix];
    } else {
        let r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
};
/**
 *  图片地址替换
 * @param content
 * @returns {string | void | *}
 */
export const contentImgUrlReplace = (content) => {
    return content.replace(/https:\/\/img(\d).doubanio.com/g, '/imgPro$1');
};
export default {
    uuid82: () => {
        return getUuid(8, 2);
    },
    uuid810: () => {
        return getUuid(8, 10);
    },
    uuid816: () => {
        return getUuid(8, 16);
    },
    uuid1616: () => {
        return getUuid(16, 16);
    },
    definedUuid: (a, b) => {
        return getUuid(a, b);
    }
};
