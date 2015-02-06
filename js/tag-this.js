/**
 * @file 示例@this
 */

/**
 * @func
 * @this Class3
 * @param {string} a - 参数a
 */
function func9(a) {
    this.a = a;
}

func9.call(new Class3(), 'a');