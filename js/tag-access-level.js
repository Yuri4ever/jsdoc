/**
 * @file 测试@public、@private、@protected
 */

/**
 * @class Class4
 */
function Class4() {
    /**
     * @member {string} Class4#a
     * @public
     */
    this.a = 'a';

    /**
     * @member {string} Class4#b
     * @private
     */
    this.b = 'b';

    /**
     * @member {string} Class4#c
     * @protected
     */
    this.c = 'c';
}
