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

    return {title, description, dueDate, dueTime}

}


let project = function(title) {

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

    return {title, addItem, removeItem, itemArray};

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


console.log('Izuku Dripdoria');

let doHomework = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)('Do Homework', 'Do my Homework tommorrow', 'Due on Monday', 'due at 8 AM');

let writeEssay = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)('Write Essay', 'Write Essay for Spanish class', 'Due on Tuesday', 'Due at 12 PM');

let startDrawinng = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)('Start Drawing', 'Start Drawing for Art Class', 'Due on Wednesday', 'Due at 4 PM');

console.log(doHomework, writeEssay, startDrawinng);

let schoolstuff = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.project)('school');

schoolstuff.addItem(doHomework);

console.log(schoolstuff);

///////////////////////////////////////////////////

let goku = 'son goku';

window.goku = goku;

window.schoolstuff = schoolstuff;

window. writeEssay = writeEssay;

window.startDrawinng = startDrawinng;

window.doHomework = doHomework;

///////////////////////////////////////////////////////







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsWUFBWTs7QUFFWjs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBLDRCQUE0QixzQkFBc0I7O0FBRWxEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVk7O0FBRVo7OztBQUcyQjs7Ozs7Ozs7VUMvQzNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DOztBQUVBLGlCQUFpQixzREFBUTs7QUFFekIsaUJBQWlCLHNEQUFROztBQUV6QixvQkFBb0Isc0RBQVE7O0FBRTVCOztBQUVBLGtCQUFrQixxREFBTzs7QUFFekI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9saXN0aXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxubGV0IGxpc3RJdGVtID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkdWVUaW1lKSB7XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZX1cblxufVxuXG5cbmxldCBwcm9qZWN0ID0gZnVuY3Rpb24odGl0bGUpIHtcblxuICAgIGxldCBpdGVtQXJyYXkgPSBbXTtcblxuICAgIGxldCBhZGRJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuXG4gICAgICAgIGl0ZW1BcnJheS5wdXNoKGl0ZW0pO1xuXG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZUl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG5cbiAgICAgICAgaWYgKGl0ZW0udGl0bGUpIHtcblxuXG4gICAgICAgICAgICAvL0luaXRpYWwgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb24gdGhhdCBkZXBlbmRzIG9uIHNpbXBsZSBsaW5lYXIgc2VhcmNoXG5cbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbUFycmF5Lmxlbmd0aDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbUFycmF5W3hdLnRpdGxlID09PSBpdGVtLnRpdGxlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbUFycmF5LnNwbGljZSh4LDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0xhdGVyIHZlcnNpb24gdGhhdCBTSE9VTEQgdXNlIGJpbmFyeSBzZWFyY2ggb25jZSB0aGUgZGF0ZSBmb3JtYXQgaXMgaW50ZWdyYXRlZFxuICAgICAgICAgICAgLy9jb3JyZWN0bHlcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt0aXRsZSwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgaXRlbUFycmF5fTtcblxufVxuXG5cbmV4cG9ydCB7bGlzdEl0ZW0sIHByb2plY3R9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bGlzdEl0ZW0sIHByb2plY3R9IGZyb20gJy4vbGlzdGl0ZW0uanMnXG5cbmNvbnNvbGUubG9nKCdJenVrdSBEcmlwZG9yaWEnKTtcblxubGV0IGRvSG9tZXdvcmsgPSBsaXN0SXRlbSgnRG8gSG9tZXdvcmsnLCAnRG8gbXkgSG9tZXdvcmsgdG9tbW9ycm93JywgJ0R1ZSBvbiBNb25kYXknLCAnZHVlIGF0IDggQU0nKTtcblxubGV0IHdyaXRlRXNzYXkgPSBsaXN0SXRlbSgnV3JpdGUgRXNzYXknLCAnV3JpdGUgRXNzYXkgZm9yIFNwYW5pc2ggY2xhc3MnLCAnRHVlIG9uIFR1ZXNkYXknLCAnRHVlIGF0IDEyIFBNJyk7XG5cbmxldCBzdGFydERyYXdpbm5nID0gbGlzdEl0ZW0oJ1N0YXJ0IERyYXdpbmcnLCAnU3RhcnQgRHJhd2luZyBmb3IgQXJ0IENsYXNzJywgJ0R1ZSBvbiBXZWRuZXNkYXknLCAnRHVlIGF0IDQgUE0nKTtcblxuY29uc29sZS5sb2coZG9Ib21ld29yaywgd3JpdGVFc3NheSwgc3RhcnREcmF3aW5uZyk7XG5cbmxldCBzY2hvb2xzdHVmZiA9IHByb2plY3QoJ3NjaG9vbCcpO1xuXG5zY2hvb2xzdHVmZi5hZGRJdGVtKGRvSG9tZXdvcmspO1xuXG5jb25zb2xlLmxvZyhzY2hvb2xzdHVmZik7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5sZXQgZ29rdSA9ICdzb24gZ29rdSc7XG5cbndpbmRvdy5nb2t1ID0gZ29rdTtcblxud2luZG93LnNjaG9vbHN0dWZmID0gc2Nob29sc3R1ZmY7XG5cbndpbmRvdy4gd3JpdGVFc3NheSA9IHdyaXRlRXNzYXk7XG5cbndpbmRvdy5zdGFydERyYXdpbm5nID0gc3RhcnREcmF3aW5uZztcblxud2luZG93LmRvSG9tZXdvcmsgPSBkb0hvbWV3b3JrO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=