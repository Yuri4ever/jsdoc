/**
 * @file 测试@alias
 */

(function(NS1) {
    /**
     * @alias NS1.b
     * @type {object}
     * @property {string} c - 属性c
     */
    var b = {
        c: 'c'
    };

    NS1.b = b;
})(NS1);