/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-8-b-i-15.js
 * @description Array.prototype.lastIndexOf - element to be retrieved is inherited accessor property on an Array
 */


function testcase() {
        try {
            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return 10;
                },
                configurable: true
            });

            Object.defineProperty(Array.prototype, "1", {
                get: function () {
                    return 20;
                },
                configurable: true
            });

            Object.defineProperty(Array.prototype, "2", {
                get: function () {
                    return 30;
                },
                configurable: true
            });

            return 0 === [, , , ].lastIndexOf(10) &&
                1 === [, , , ].lastIndexOf(20) &&
                2 === [, , , ].lastIndexOf(30);
        } finally {
            delete Array.prototype[0];
            delete Array.prototype[1];
            delete Array.prototype[2];
        }
    }
runTestCase(testcase);
