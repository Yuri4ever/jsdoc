/**
 * @file 示例@mixin、@mixes
 */

/**
 * @mixin
 * @property {string} a - 属性a
 * @property {function} b - 属性b
 */
var var16 = {
    a: 'a',
    b: function () {
        return 'b';
    }
}

/**
 * @var {object}
 * @property {string} c - 属性c
 * @mixes var16
 */
var var17 = {
    c: 'c'
}

for (var key in var16) {
    var17[key] = var16[key];
}
