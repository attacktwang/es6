/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// function test(){
//     for(let i = 1;i<3;i++){
//         console.log(i)
//     }
//     console.log(i);
// }

// test();


// function last(){
//     const PI = 3.1415926;
//     const k = {
//         a:1
//     };

//     PI = 4;

//     console.log(PI,k);
// }
// last();

function second() {
    var PI = 3.1415926;
    var k = {
        a: 1
    };

    k.b = 2;

    console.log(PI, k);
}
second();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
    var a = void 0,
        b = void 0,
        rest = void 0;
    a = 11;
    b = 22;

    console.log(a, b);
}

{
    var _a = void 0,
        _b = void 0,
        _rest = void 0;
    _a = 1;
    _b = 2;
    _rest = [3, 4, 5, 6];

    console.log(_a, _b, _rest);
}

{
    var _a2 = void 0,
        _b2 = void 0;
    var _a$b = { a: 1, b: 2 };
    _a2 = _a$b.a;
    _b2 = _a$b.b;

    console.log(_a2, _b2);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 正则扩展
{
    var regex = new RegExp('xyz', 'i');
    var regex2 = new RegExp(/xyz/i);

    console.log(regex.test('xyz123'), regex2.test('xyz123'));
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
    var a1 = Symbol();
    var a2 = Symbol();
    console.log(a1 === a2);
    var a3 = Symbol.for('a3');
    var a4 = Symbol.for('a3');
    console.log(a3 === a3);
}

{
    var _obj;

    var _a = Symbol.for('abc');
    var obj = (_obj = {}, _defineProperty(_obj, _a, '123'), _defineProperty(_obj, 'abc', 345), _defineProperty(_obj, 'c', 456), _obj);
    console.log('obj', obj);

    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log(obj[item]);
    });

    Reflect.ownKeys(obj);
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownkeys', item, obj[item]);
    });
}

/***/ })
/******/ ]);