/**
 * @file 测试@enum
 */

/**
 * @enum {number}
 * @desc cgi返回常见retcode
 */
var retcode = {
    /**
     * @desc 未登录
     */
    NOT_LOGIN: 100000,
    /**
     * @desc 参数错误
     */
    PARAM_ERROR: 100001,
    /**
     * @type {string}
     * @desc 未知错误
     */
    UNKOWN_ERROR: 'unkown'
}