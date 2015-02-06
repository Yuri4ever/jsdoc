/**
 * @file 示例@interface、@implements
 */

/**
 * @interface
 */
var interface1 = {
    /**
     * @method
     * @param {string} b - 参数b
     * @returns {string} 返回值
     */
    a: function (b) {
        return 'a';
    }
}

/**
 * @class
 * @implements {interface1}
 */
function Class8() {}

Class8.prototype.a = function (b) {
    return true;
}