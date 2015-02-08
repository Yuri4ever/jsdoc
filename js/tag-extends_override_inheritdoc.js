/**
 * @file 示例@extends、@override、@inheritdoc
 */

/**
 * @class
 * @extends Class5
 * @classdesc Class6是继承Class5的
 */
function Class6() {}

Class6.prototype = Object.create(Class5.prototype);

/**
 * @override
 * @desc 子类重写父类的abstract方法
 * @returns {boolean} 返回值
 */
Class6.prototype.a = function () {
    return true;
};

/**
 * @inheritdoc
 */
Class6.prototype.b = function (c) {
    return false;
};

/**
 * @method
 */
Class6.prototype.d = function () {
    return false;
};