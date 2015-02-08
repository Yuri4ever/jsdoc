/**
 * @file 示例@abstract
 */

/**
 * @class
 */
function Class5() {}

/**
 * @abstract
 * @method
 * @desc 子类需要重写这个方法
 */
Class5.prototype.a = function () {};

/**
 * @method
 * @param {string} c - 参数c
 * @returns {boolean} 返回值
 */
Class5.prototype.b = function (c) {
    return true;
};
