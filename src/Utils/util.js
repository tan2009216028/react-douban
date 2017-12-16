/*
 * @file uuid.js
 * @author:Toshiba
 * @describe: 获取唯一UUID
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
const getUuid = function(len, radix) {
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

export default {
    uuid82: getUuid(8, 2),
    uuid810: getUuid(8, 10),
    uuid816: getUuid(8, 16),
    definedUuid: (a, b) => {
        return getUuid(a, b);
    }
};