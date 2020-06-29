(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.commonality = factory());
}(this, (function () { 'use strict';

    var version = '0.0.1';
    var index = (function () {
        return "The current version is " + version;
    });

    return index;

})));
