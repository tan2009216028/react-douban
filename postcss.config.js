/*
 * @file postcss.config.js
 * @author: Toshiba 
 * @describe: 
 * @date: 2017/12/2 14:19
 */
module.exports = {
    plugins: {
        'autoprefixer': {
            browsers: [
                '>1%',
                'last 5 versions',
                'not ie < 9', // React doesn't support IE8 anyway
            ]
        }
    }
}