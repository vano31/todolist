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


let masterArray = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.project)('Master List');

//Just load master array in the beginning of each page load?

let newitem = document.createElement('button');
newitem.textContent = 'Click to Create new Item';
newitem.onclick = function() {

    let newtype = prompt('What type of object is this?');
    let newtitle =  prompt('What is the title?');
    let newdescription = prompt('What is the description?');
    let newduedate = prompt('What is the due date?');
    let newduetime = prompt('What is the due time?');

    let newlistItem = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)(newtype, newtitle, newdescription, newduedate, newduetime);


    //need to append to local storage so that data doesnt get removed once button is
    //pressed after refresh

    //Add a clear local storage button

    let oldSavedMasterArrayJSON = localStorage.getItem('masterArray');

    if (oldSavedMasterArrayJSON) {

        

        let oldSavedMasterArray = JSON.parse(oldSavedMasterArrayJSON);
        for (let x = 0; x < (oldSavedMasterArray.itemArray).length; x++) {
            masterArray.addItem(oldSavedMasterArray.itemArray[x]);
        }

        masterArray.addItem(newlistItem);
        
        let newSavedMasterArrayJSON = JSON.stringify(masterArray);
        localStorage.setItem('masterArray', newSavedMasterArrayJSON);

    }   else {

        masterArray.addItem(newlistItem);
        let newJSON = JSON.stringify(masterArray);
        localStorage.setItem('masterArray', newJSON);

    }


    console.log(JSON.parse(localStorage.getItem('masterArray')));



}
document.body.appendChild(newitem);


let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete Local Storage';
deleteButton.onclick = function() {

    localStorage.clear();
    console.log(JSON.parse(localStorage.getItem('masterArray')));

}
document.body.appendChild(deleteButton);


let displayStorageButton = document.createElement('button');
displayStorageButton.textContent = 'Display Currect Storage';
displayStorageButton.onclick = function() {

    console.log(JSON.parse(localStorage.getItem('masterArray')));

}
document.body.appendChild(displayStorageButton);



/*


let doHomework = listItem('Do Homework', 'Do my Homework tommorrow', 'Due on Monday', 'due at 8 AM');
masterArray.addItem(doHomework);

let writeEssay = listItem('Write Essay', 'Write Essay for Spanish class', 'Due on Tuesday', 'Due at 12 PM');
masterArray.addItem(writeEssay);

let work = project('Work Assignments');
masterArray.addItem(work);

let startDrawinng = listItem('Start Drawing', 'Start Drawing for Art Class', 'Due on Wednesday', 'Due at 4 PM');
masterArray.addItem(startDrawinng);

let schoolstuff = project('school');
masterArray.addItem(schoolstuff);

schoolstuff.addItem(doHomework);

let doScribeRecords = listItem('Do scribe recordings', 'Do them before the Dr. gets here', 'Due on Tuesday', 'Due at 9 AM');
work.addItem(doScribeRecords);

let applications = project('Work Application Steps for Different Jobs');
work.addItem(applications);


console.log(masterArray);

*/













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0Isc0JBQXNCO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0JBQXNCOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7O0FBRzJCOzs7Ozs7OztVQ3pEM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFL0Msa0JBQWtCLHFEQUFPOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isc0RBQVE7OztBQUc5QjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVE7O0FBRVI7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdGl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBsaXN0SXRlbSA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZSkge1xuICAgIGxldCB0eXBlID0gXCJsaXN0LWl0ZW1cIlxuICAgIHJldHVybiB7dHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkdWVUaW1lfVxuXG59XG5cbmxldCBwcm9qZWN0ID0gZnVuY3Rpb24odGl0bGUpIHtcblxuICAgIGxldCB0eXBlID0gXCJwcm9qZWN0XCJcbiAgICBsZXQgaXRlbUFycmF5ID0gW107XG5cbiAgICBsZXQgb3JkZXJCeXR5cGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZW1BcnJheS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgaWYgKGl0ZW1BcnJheVt4XS50eXBlID09PSAncHJvamVjdCcpIHtcblxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0aXRlbSA9IGl0ZW1BcnJheS5zcGxpY2UoeCwxKTtcbiAgICAgICAgICAgICAgICBpdGVtQXJyYXkudW5zaGlmdChwcm9qZWN0aXRlbSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cblxuICAgIGxldCBhZGRJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuXG4gICAgICAgIGl0ZW1BcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICBvcmRlckJ5dHlwZSgpO1xuXG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZUl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLnRpdGxlKSB7XG4gICAgICAgICAgICAvL0luaXRpYWwgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb24gdGhhdCBkZXBlbmRzIG9uIHNpbXBsZSBsaW5lYXIgc2VhcmNoXG5cbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbUFycmF5Lmxlbmd0aDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbUFycmF5W3hdLnRpdGxlID09PSBpdGVtLnRpdGxlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbUFycmF5LnNwbGljZSh4LDEpO1xuICAgICAgICAgICAgICAgICAgICBvcmRlckJ5dHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9MYXRlciB2ZXJzaW9uIHRoYXQgU0hPVUxEIHVzZSBiaW5hcnkgc2VhcmNoIG9uY2UgdGhlIGRhdGUgZm9ybWF0IGlzIGludGVncmF0ZWRcbiAgICAgICAgICAgIC8vY29ycmVjdGx5XG4gICAgICAgIH1cbiAgICB9XG4gIFxuXG4gICAgcmV0dXJuIHt0eXBlLCB0aXRsZSwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgaXRlbUFycmF5fTtcbn1cblxuXG5leHBvcnQge2xpc3RJdGVtLCBwcm9qZWN0fTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2xpc3RJdGVtLCBwcm9qZWN0fSBmcm9tICcuL2xpc3RpdGVtLmpzJ1xuXG5sZXQgbWFzdGVyQXJyYXkgPSBwcm9qZWN0KCdNYXN0ZXIgTGlzdCcpO1xuXG4vL0p1c3QgbG9hZCBtYXN0ZXIgYXJyYXkgaW4gdGhlIGJlZ2lubmluZyBvZiBlYWNoIHBhZ2UgbG9hZD9cblxubGV0IG5ld2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm5ld2l0ZW0udGV4dENvbnRlbnQgPSAnQ2xpY2sgdG8gQ3JlYXRlIG5ldyBJdGVtJztcbm5ld2l0ZW0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IG5ld3R5cGUgPSBwcm9tcHQoJ1doYXQgdHlwZSBvZiBvYmplY3QgaXMgdGhpcz8nKTtcbiAgICBsZXQgbmV3dGl0bGUgPSAgcHJvbXB0KCdXaGF0IGlzIHRoZSB0aXRsZT8nKTtcbiAgICBsZXQgbmV3ZGVzY3JpcHRpb24gPSBwcm9tcHQoJ1doYXQgaXMgdGhlIGRlc2NyaXB0aW9uPycpO1xuICAgIGxldCBuZXdkdWVkYXRlID0gcHJvbXB0KCdXaGF0IGlzIHRoZSBkdWUgZGF0ZT8nKTtcbiAgICBsZXQgbmV3ZHVldGltZSA9IHByb21wdCgnV2hhdCBpcyB0aGUgZHVlIHRpbWU/Jyk7XG5cbiAgICBsZXQgbmV3bGlzdEl0ZW0gPSBsaXN0SXRlbShuZXd0eXBlLCBuZXd0aXRsZSwgbmV3ZGVzY3JpcHRpb24sIG5ld2R1ZWRhdGUsIG5ld2R1ZXRpbWUpO1xuXG5cbiAgICAvL25lZWQgdG8gYXBwZW5kIHRvIGxvY2FsIHN0b3JhZ2Ugc28gdGhhdCBkYXRhIGRvZXNudCBnZXQgcmVtb3ZlZCBvbmNlIGJ1dHRvbiBpc1xuICAgIC8vcHJlc3NlZCBhZnRlciByZWZyZXNoXG5cbiAgICAvL0FkZCBhIGNsZWFyIGxvY2FsIHN0b3JhZ2UgYnV0dG9uXG5cbiAgICBsZXQgb2xkU2F2ZWRNYXN0ZXJBcnJheUpTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFzdGVyQXJyYXknKTtcblxuICAgIGlmIChvbGRTYXZlZE1hc3RlckFycmF5SlNPTikge1xuXG4gICAgICAgIFxuXG4gICAgICAgIGxldCBvbGRTYXZlZE1hc3RlckFycmF5ID0gSlNPTi5wYXJzZShvbGRTYXZlZE1hc3RlckFycmF5SlNPTik7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgKG9sZFNhdmVkTWFzdGVyQXJyYXkuaXRlbUFycmF5KS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgbWFzdGVyQXJyYXkuYWRkSXRlbShvbGRTYXZlZE1hc3RlckFycmF5Lml0ZW1BcnJheVt4XSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXN0ZXJBcnJheS5hZGRJdGVtKG5ld2xpc3RJdGVtKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdTYXZlZE1hc3RlckFycmF5SlNPTiA9IEpTT04uc3RyaW5naWZ5KG1hc3RlckFycmF5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21hc3RlckFycmF5JywgbmV3U2F2ZWRNYXN0ZXJBcnJheUpTT04pO1xuXG4gICAgfSAgIGVsc2Uge1xuXG4gICAgICAgIG1hc3RlckFycmF5LmFkZEl0ZW0obmV3bGlzdEl0ZW0pO1xuICAgICAgICBsZXQgbmV3SlNPTiA9IEpTT04uc3RyaW5naWZ5KG1hc3RlckFycmF5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21hc3RlckFycmF5JywgbmV3SlNPTik7XG5cbiAgICB9XG5cblxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21hc3RlckFycmF5JykpKTtcblxuXG5cbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3aXRlbSk7XG5cblxubGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBMb2NhbCBTdG9yYWdlJztcbmRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXN0ZXJBcnJheScpKSk7XG5cbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuXG5sZXQgZGlzcGxheVN0b3JhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmRpc3BsYXlTdG9yYWdlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Rpc3BsYXkgQ3VycmVjdCBTdG9yYWdlJztcbmRpc3BsYXlTdG9yYWdlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21hc3RlckFycmF5JykpKTtcblxufVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXNwbGF5U3RvcmFnZUJ1dHRvbik7XG5cblxuXG4vKlxuXG5cbmxldCBkb0hvbWV3b3JrID0gbGlzdEl0ZW0oJ0RvIEhvbWV3b3JrJywgJ0RvIG15IEhvbWV3b3JrIHRvbW1vcnJvdycsICdEdWUgb24gTW9uZGF5JywgJ2R1ZSBhdCA4IEFNJyk7XG5tYXN0ZXJBcnJheS5hZGRJdGVtKGRvSG9tZXdvcmspO1xuXG5sZXQgd3JpdGVFc3NheSA9IGxpc3RJdGVtKCdXcml0ZSBFc3NheScsICdXcml0ZSBFc3NheSBmb3IgU3BhbmlzaCBjbGFzcycsICdEdWUgb24gVHVlc2RheScsICdEdWUgYXQgMTIgUE0nKTtcbm1hc3RlckFycmF5LmFkZEl0ZW0od3JpdGVFc3NheSk7XG5cbmxldCB3b3JrID0gcHJvamVjdCgnV29yayBBc3NpZ25tZW50cycpO1xubWFzdGVyQXJyYXkuYWRkSXRlbSh3b3JrKTtcblxubGV0IHN0YXJ0RHJhd2lubmcgPSBsaXN0SXRlbSgnU3RhcnQgRHJhd2luZycsICdTdGFydCBEcmF3aW5nIGZvciBBcnQgQ2xhc3MnLCAnRHVlIG9uIFdlZG5lc2RheScsICdEdWUgYXQgNCBQTScpO1xubWFzdGVyQXJyYXkuYWRkSXRlbShzdGFydERyYXdpbm5nKTtcblxubGV0IHNjaG9vbHN0dWZmID0gcHJvamVjdCgnc2Nob29sJyk7XG5tYXN0ZXJBcnJheS5hZGRJdGVtKHNjaG9vbHN0dWZmKTtcblxuc2Nob29sc3R1ZmYuYWRkSXRlbShkb0hvbWV3b3JrKTtcblxubGV0IGRvU2NyaWJlUmVjb3JkcyA9IGxpc3RJdGVtKCdEbyBzY3JpYmUgcmVjb3JkaW5ncycsICdEbyB0aGVtIGJlZm9yZSB0aGUgRHIuIGdldHMgaGVyZScsICdEdWUgb24gVHVlc2RheScsICdEdWUgYXQgOSBBTScpO1xud29yay5hZGRJdGVtKGRvU2NyaWJlUmVjb3Jkcyk7XG5cbmxldCBhcHBsaWNhdGlvbnMgPSBwcm9qZWN0KCdXb3JrIEFwcGxpY2F0aW9uIFN0ZXBzIGZvciBEaWZmZXJlbnQgSm9icycpO1xud29yay5hZGRJdGVtKGFwcGxpY2F0aW9ucyk7XG5cblxuY29uc29sZS5sb2cobWFzdGVyQXJyYXkpO1xuXG4qL1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9