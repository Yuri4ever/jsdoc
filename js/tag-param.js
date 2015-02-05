/**
 * @file 测试@param
 */

/**
 * @func func1
 * @desc 一个带参数的函数
 * @param {string} a - 参数a
 * @param {number} b=1 - 参数b默认值为1
 * @param {string} c=1 - 参数c有三种支持的取值</br>1—表示x</br>2—表示xx</br>3—表示xxx
 * @param {object} d - 参数d为一个对象
 * @param {string} d.e - 参数d的e属性
 * @param {string} d.f - 参数d的f属性
 * @param {object[]} g - 参数g为一个对象数组
 * @param {string} g.h - 参数g数组中一项的h属性
 * @param {string} g.i - 参数g数组中一项的i属性
 * @param {string} [j] - 参数j是一个可选参数 
 */
function func1(a, b, c, d, g, j) {}

/**
 * @func func2
 * @desc 一个带若干参数的函数
 * @param {...string} a - 参数a
 */
function func2(a) {}