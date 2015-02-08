/**
 * @file 示例@construct、@lends
 */

function createClass(name, ctor, proto) {
    function newClass() {
        ctor.apply(this, arguments);
    }

    newClass.prototype = Object.create(proto);

    return newClass;
}

createClass('Class9',
    /** 
     * @lends Class9.prototype
     */
    {
        /**
         * @constructs
         * @param {string} a - 参数a
         */
        init: function (a) {
            /**
             * @member {string}
             */
            this.a = a;
        },
        /**
         * @method
         * @returns {boolean} 返回值
         */
        b: function () {
            return true;
        }
    }
);