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

    let orderBytype = function() {

        for (let x = 0; x < itemArray.length; x++) {
            if (itemArray[x].type === 'project') {

                let projectitem = itemArray.splice(x,1);
                itemArray.unshift(projectitem);

            }
        } 
    }


    let addItem = function(item) {

        itemArray.push(item);
        orderBytype();

    }

    let removeItem = function(item) {
        if (item.title) {
            //Initial version of the function that depends on simple linear search

            for (let x = 0; x < itemArray.length; x++) {

                if (itemArray[x].title === item.title) {

                    itemArray.splice(x,1);
                    orderBytype();
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


let masterArray = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.project)('Master List')





let doHomework = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)('Do Homework', 'Do my Homework tommorrow', 'Due on Monday', 'due at 8 AM');
masterArray.addItem(doHomework);

let writeEssay = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)('Write Essay', 'Write Essay for Spanish class', 'Due on Tuesday', 'Due at 12 PM');
masterArray.addItem(writeEssay);

let work = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.project)('Work Assignments');
masterArray.addItem(work);

let startDrawinng = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)('Start Drawing', 'Start Drawing for Art Class', 'Due on Wednesday', 'Due at 4 PM');
masterArray.addItem(startDrawinng);

let schoolstuff = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.project)('school');
masterArray.addItem(schoolstuff);

schoolstuff.addItem(doHomework);

let doScribeRecords = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)('Do scribe recordings', 'Do them before the Dr. gets here', 'Due on Tuesday', 'Due at 9 AM');
work.addItem(doScribeRecords);

let applications = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.project)('Work Application Steps for Different Jobs');
work.addItem(applications);




console.log(schoolstuff);













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0Isc0JBQXNCO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0JBQXNCOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7O0FBRzJCOzs7Ozs7OztVQ3pEM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFL0Msa0JBQWtCLHFEQUFPOzs7Ozs7QUFNekIsaUJBQWlCLHNEQUFRO0FBQ3pCOztBQUVBLGlCQUFpQixzREFBUTtBQUN6Qjs7QUFFQSxXQUFXLHFEQUFPO0FBQ2xCOztBQUVBLG9CQUFvQixzREFBUTtBQUM1Qjs7QUFFQSxrQkFBa0IscURBQU87QUFDekI7O0FBRUE7O0FBRUEsc0JBQXNCLHNEQUFRO0FBQzlCOztBQUVBLG1CQUFtQixxREFBTztBQUMxQjs7Ozs7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xpc3RpdGVtLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgbGlzdEl0ZW0gPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUpIHtcbiAgICBsZXQgdHlwZSA9IFwibGlzdC1pdGVtXCJcbiAgICByZXR1cm4ge3R5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZX1cblxufVxuXG5sZXQgcHJvamVjdCA9IGZ1bmN0aW9uKHRpdGxlKSB7XG5cbiAgICBsZXQgdHlwZSA9IFwicHJvamVjdFwiXG4gICAgbGV0IGl0ZW1BcnJheSA9IFtdO1xuXG4gICAgbGV0IG9yZGVyQnl0eXBlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtQXJyYXkubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGlmIChpdGVtQXJyYXlbeF0udHlwZSA9PT0gJ3Byb2plY3QnKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdGl0ZW0gPSBpdGVtQXJyYXkuc3BsaWNlKHgsMSk7XG4gICAgICAgICAgICAgICAgaXRlbUFycmF5LnVuc2hpZnQocHJvamVjdGl0ZW0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG5cbiAgICBsZXQgYWRkSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblxuICAgICAgICBpdGVtQXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgb3JkZXJCeXR5cGUoKTtcblxuICAgIH1cblxuICAgIGxldCByZW1vdmVJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS50aXRsZSkge1xuICAgICAgICAgICAgLy9Jbml0aWFsIHZlcnNpb24gb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZGVwZW5kcyBvbiBzaW1wbGUgbGluZWFyIHNlYXJjaFxuXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZW1BcnJheS5sZW5ndGg7IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1BcnJheVt4XS50aXRsZSA9PT0gaXRlbS50aXRsZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1BcnJheS5zcGxpY2UoeCwxKTtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeXR5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vTGF0ZXIgdmVyc2lvbiB0aGF0IFNIT1VMRCB1c2UgYmluYXJ5IHNlYXJjaCBvbmNlIHRoZSBkYXRlIGZvcm1hdCBpcyBpbnRlZ3JhdGVkXG4gICAgICAgICAgICAvL2NvcnJlY3RseVxuICAgICAgICB9XG4gICAgfVxuICBcblxuICAgIHJldHVybiB7dHlwZSwgdGl0bGUsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIGl0ZW1BcnJheX07XG59XG5cblxuZXhwb3J0IHtsaXN0SXRlbSwgcHJvamVjdH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtsaXN0SXRlbSwgcHJvamVjdH0gZnJvbSAnLi9saXN0aXRlbS5qcydcblxubGV0IG1hc3RlckFycmF5ID0gcHJvamVjdCgnTWFzdGVyIExpc3QnKVxuXG5cblxuXG5cbmxldCBkb0hvbWV3b3JrID0gbGlzdEl0ZW0oJ0RvIEhvbWV3b3JrJywgJ0RvIG15IEhvbWV3b3JrIHRvbW1vcnJvdycsICdEdWUgb24gTW9uZGF5JywgJ2R1ZSBhdCA4IEFNJyk7XG5tYXN0ZXJBcnJheS5hZGRJdGVtKGRvSG9tZXdvcmspO1xuXG5sZXQgd3JpdGVFc3NheSA9IGxpc3RJdGVtKCdXcml0ZSBFc3NheScsICdXcml0ZSBFc3NheSBmb3IgU3BhbmlzaCBjbGFzcycsICdEdWUgb24gVHVlc2RheScsICdEdWUgYXQgMTIgUE0nKTtcbm1hc3RlckFycmF5LmFkZEl0ZW0od3JpdGVFc3NheSk7XG5cbmxldCB3b3JrID0gcHJvamVjdCgnV29yayBBc3NpZ25tZW50cycpO1xubWFzdGVyQXJyYXkuYWRkSXRlbSh3b3JrKTtcblxubGV0IHN0YXJ0RHJhd2lubmcgPSBsaXN0SXRlbSgnU3RhcnQgRHJhd2luZycsICdTdGFydCBEcmF3aW5nIGZvciBBcnQgQ2xhc3MnLCAnRHVlIG9uIFdlZG5lc2RheScsICdEdWUgYXQgNCBQTScpO1xubWFzdGVyQXJyYXkuYWRkSXRlbShzdGFydERyYXdpbm5nKTtcblxubGV0IHNjaG9vbHN0dWZmID0gcHJvamVjdCgnc2Nob29sJyk7XG5tYXN0ZXJBcnJheS5hZGRJdGVtKHNjaG9vbHN0dWZmKTtcblxuc2Nob29sc3R1ZmYuYWRkSXRlbShkb0hvbWV3b3JrKTtcblxubGV0IGRvU2NyaWJlUmVjb3JkcyA9IGxpc3RJdGVtKCdEbyBzY3JpYmUgcmVjb3JkaW5ncycsICdEbyB0aGVtIGJlZm9yZSB0aGUgRHIuIGdldHMgaGVyZScsICdEdWUgb24gVHVlc2RheScsICdEdWUgYXQgOSBBTScpO1xud29yay5hZGRJdGVtKGRvU2NyaWJlUmVjb3Jkcyk7XG5cbmxldCBhcHBsaWNhdGlvbnMgPSBwcm9qZWN0KCdXb3JrIEFwcGxpY2F0aW9uIFN0ZXBzIGZvciBEaWZmZXJlbnQgSm9icycpO1xud29yay5hZGRJdGVtKGFwcGxpY2F0aW9ucyk7XG5cblxuXG5cbmNvbnNvbGUubG9nKHNjaG9vbHN0dWZmKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==