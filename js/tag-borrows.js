/**
 * @file 测试@borrows
 */

/**
 * @namespace NS2
 * @desc 一个命名空间
 */
window.NS2 = {
    /**
     * @method NS2.a
     * @borrows func1 as NS2.a
     */
    a: func1
}