/**
 * @file 示例@module
 */

define(function() {
    /**
     * @module tag-module
     */
    var exports = {};

    /**
     * @method
     * @returns {string} 返回值
     */
    exports.a = function() {
        return 'a';
    };

    return exports;
});