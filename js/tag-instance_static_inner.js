/**
 * @file 示例@instance、@static、@inner
 */

/**
 * @class
 */
function Class7() {
    /**
     * @member {string}
     * @instance
     */
    this.a = 'a';

    /**
     * @func
     * @inner
     */
    function c() {}
}

/**
 * @member {string}
 * @static
 */
Class7.b = 'b';