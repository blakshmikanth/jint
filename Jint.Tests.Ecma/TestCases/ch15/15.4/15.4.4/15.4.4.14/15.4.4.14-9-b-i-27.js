/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-b-i-27.js
 * @description Array.prototype.indexOf applied to Arguments object which implements its own property get method (number of arguments is greater than number of parameters)
 */


function testcase() {

        var func = function (a, b) {
            return 0 === Array.prototype.indexOf.call(arguments, arguments[0]) &&
            3 === Array.prototype.indexOf.call(arguments, arguments[3]) &&
            -1 === Array.prototype.indexOf.call(arguments, arguments[4]);
        };

        return func(0, false, 0, true);
    }
runTestCase(testcase);
