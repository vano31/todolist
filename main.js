/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/listitem.js":
/*!*************************!*\
  !*** ./src/listitem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listItem": () => (/* binding */ listItem),
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });

let listItem = function(title, description, dueDate, dueTime) {
    let type = "list-item"
    return {type, title, description, dueDate, dueTime}

}

let project = function(title) {

    let type = "project"
    let itemArray = [];
    let addItem = function(item) {

        itemArray.push(item);

    }

    let removeItem = function(item) {
        if (item.title) {
            //Initial version of the function that depends on simple linear search

            for (let x = 0; x < itemArray.length; x++) {

                if (itemArray[x].title === item.title) {

                    itemArray.splice(x,1);
                    break;

                }

            }
            //Later version that SHOULD use binary search once the date format is integrated
            //correctly
        }
    }
    return {type, title, addItem, removeItem, itemArray};
}






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listitem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listitem.js */ "./src/listitem.js");


let masterArray = []

console.log('Izuku Dripdoria');

let doHomework = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)('Do Homework', 'Do my Homework tommorrow', 'Due on Monday', 'due at 8 AM');
masterArray.push(doHomework);

let writeEssay = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)('Write Essay', 'Write Essay for Spanish class', 'Due on Tuesday', 'Due at 12 PM');
masterArray.push(writeEssay);

let startDrawinng = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)('Start Drawing', 'Start Drawing for Art Class', 'Due on Wednesday', 'Due at 4 PM');
masterArray.push(startDrawinng);

console.log(doHomework, writeEssay, startDrawinng);

let schoolstuff = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.project)('school');
masterArray.push(schoolstuff);

schoolstuff.addItem(doHomework);

console.log(schoolstuff);













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0JBQXNCOztBQUVsRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7OztBQUcyQjs7Ozs7Ozs7VUN2QzNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DOztBQUVBOztBQUVBLGlCQUFpQixzREFBUTtBQUN6Qjs7QUFFQSxpQkFBaUIsc0RBQVE7QUFDekI7O0FBRUEsb0JBQW9CLHNEQUFRO0FBQzVCOztBQUVBOztBQUVBLGtCQUFrQixxREFBTztBQUN6Qjs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xpc3RpdGVtLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgbGlzdEl0ZW0gPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUpIHtcbiAgICBsZXQgdHlwZSA9IFwibGlzdC1pdGVtXCJcbiAgICByZXR1cm4ge3R5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZX1cblxufVxuXG5sZXQgcHJvamVjdCA9IGZ1bmN0aW9uKHRpdGxlKSB7XG5cbiAgICBsZXQgdHlwZSA9IFwicHJvamVjdFwiXG4gICAgbGV0IGl0ZW1BcnJheSA9IFtdO1xuICAgIGxldCBhZGRJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuXG4gICAgICAgIGl0ZW1BcnJheS5wdXNoKGl0ZW0pO1xuXG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZUl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLnRpdGxlKSB7XG4gICAgICAgICAgICAvL0luaXRpYWwgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb24gdGhhdCBkZXBlbmRzIG9uIHNpbXBsZSBsaW5lYXIgc2VhcmNoXG5cbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbUFycmF5Lmxlbmd0aDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbUFycmF5W3hdLnRpdGxlID09PSBpdGVtLnRpdGxlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbUFycmF5LnNwbGljZSh4LDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9MYXRlciB2ZXJzaW9uIHRoYXQgU0hPVUxEIHVzZSBiaW5hcnkgc2VhcmNoIG9uY2UgdGhlIGRhdGUgZm9ybWF0IGlzIGludGVncmF0ZWRcbiAgICAgICAgICAgIC8vY29ycmVjdGx5XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt0eXBlLCB0aXRsZSwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgaXRlbUFycmF5fTtcbn1cblxuXG5leHBvcnQge2xpc3RJdGVtLCBwcm9qZWN0fTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2xpc3RJdGVtLCBwcm9qZWN0fSBmcm9tICcuL2xpc3RpdGVtLmpzJ1xuXG5sZXQgbWFzdGVyQXJyYXkgPSBbXVxuXG5jb25zb2xlLmxvZygnSXp1a3UgRHJpcGRvcmlhJyk7XG5cbmxldCBkb0hvbWV3b3JrID0gbGlzdEl0ZW0oJ0RvIEhvbWV3b3JrJywgJ0RvIG15IEhvbWV3b3JrIHRvbW1vcnJvdycsICdEdWUgb24gTW9uZGF5JywgJ2R1ZSBhdCA4IEFNJyk7XG5tYXN0ZXJBcnJheS5wdXNoKGRvSG9tZXdvcmspO1xuXG5sZXQgd3JpdGVFc3NheSA9IGxpc3RJdGVtKCdXcml0ZSBFc3NheScsICdXcml0ZSBFc3NheSBmb3IgU3BhbmlzaCBjbGFzcycsICdEdWUgb24gVHVlc2RheScsICdEdWUgYXQgMTIgUE0nKTtcbm1hc3RlckFycmF5LnB1c2god3JpdGVFc3NheSk7XG5cbmxldCBzdGFydERyYXdpbm5nID0gbGlzdEl0ZW0oJ1N0YXJ0IERyYXdpbmcnLCAnU3RhcnQgRHJhd2luZyBmb3IgQXJ0IENsYXNzJywgJ0R1ZSBvbiBXZWRuZXNkYXknLCAnRHVlIGF0IDQgUE0nKTtcbm1hc3RlckFycmF5LnB1c2goc3RhcnREcmF3aW5uZyk7XG5cbmNvbnNvbGUubG9nKGRvSG9tZXdvcmssIHdyaXRlRXNzYXksIHN0YXJ0RHJhd2lubmcpO1xuXG5sZXQgc2Nob29sc3R1ZmYgPSBwcm9qZWN0KCdzY2hvb2wnKTtcbm1hc3RlckFycmF5LnB1c2goc2Nob29sc3R1ZmYpO1xuXG5zY2hvb2xzdHVmZi5hZGRJdGVtKGRvSG9tZXdvcmspO1xuXG5jb25zb2xlLmxvZyhzY2hvb2xzdHVmZik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=