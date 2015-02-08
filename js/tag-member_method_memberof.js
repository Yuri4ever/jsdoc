/**
 * @file 示例@member、@method、@memberof
 */

/**
 * @class
 */
function Class3() {
    /**
     * @member {string}
     */
    this.a = 'a';

    /**
     * @memberof Class3.prototype
     * @type {string}
     */
    this.b = 'b';
}

/**
 * @member {string}
 * @static
 */
Class3.c = 'c';

/**
 * @method
 * @param {string} e - 参数e
 * @returns {boolean} 返回值
 */
Class3.prototype.d = function (e) {
    return true;
};


