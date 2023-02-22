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
    let type = "list-item";
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

    //let newtype = prompt('What type of object is this?');
    let newtitle =  prompt('What is the title?');
    let newdescription = prompt('What is the description?');
    //let newduedate = prompt('What is the due date?');
    //let newduetime = prompt('What is the due time?');

    //Just divide the newduedate variable into month, date, and year prompts.

    let duemonth = prompt('What month is this item due?');
    let duedateofthemonth = prompt(`What date is this item due in ${duemonth}?`);
    let dueyear = prompt('What year is this item due? ');

    //Once divided, insert those values into a brand new newduedate

    let newduedate = `${duemonth}/${duedateofthemonth}/${dueyear}`;

    //Also divide newduetime into hour and minute (24 hour time)

    let duehour = prompt('What hour is this due (Use 24-hour military time)');
    let dueminute = prompt(`This item is due on ${duehour}: `);


    //Once divided, insert those values into a brand new newduetime
    let newduetime = `${duehour}:${dueminute}`;


    //In listitem.js, add a parameter to the listitem object and project
    //object that records the date of creation and subsequent update dates and times
    
    let newlistItem = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)(newtitle, newdescription, newduedate, newduetime);
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0Isc0JBQXNCO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0JBQXNCOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7O0FBRzJCOzs7Ozs7OztVQ3pEM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFL0Msa0JBQWtCLHFEQUFPOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9FQUFvRSxTQUFTO0FBQzdFOztBQUVBOztBQUVBLHdCQUF3QixTQUFTLEdBQUcsa0JBQWtCLEdBQUcsUUFBUTs7QUFFakU7O0FBRUE7QUFDQSxrREFBa0QsUUFBUTs7O0FBRzFEO0FBQ0Esd0JBQXdCLFFBQVEsR0FBRyxVQUFVOzs7QUFHN0M7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFRO0FBQzlCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOzs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9saXN0aXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxubGV0IGxpc3RJdGVtID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkdWVUaW1lKSB7XG4gICAgbGV0IHR5cGUgPSBcImxpc3QtaXRlbVwiO1xuICAgIHJldHVybiB7dHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkdWVUaW1lfVxuXG59XG5cbmxldCBwcm9qZWN0ID0gZnVuY3Rpb24odGl0bGUpIHtcblxuICAgIGxldCB0eXBlID0gXCJwcm9qZWN0XCJcbiAgICBsZXQgaXRlbUFycmF5ID0gW107XG5cbiAgICBsZXQgb3JkZXJCeXR5cGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZW1BcnJheS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgaWYgKGl0ZW1BcnJheVt4XS50eXBlID09PSAncHJvamVjdCcpIHtcblxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0aXRlbSA9IGl0ZW1BcnJheS5zcGxpY2UoeCwxKTtcbiAgICAgICAgICAgICAgICBpdGVtQXJyYXkudW5zaGlmdChwcm9qZWN0aXRlbSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cblxuICAgIGxldCBhZGRJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuXG4gICAgICAgIGl0ZW1BcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICBvcmRlckJ5dHlwZSgpO1xuXG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZUl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLnRpdGxlKSB7XG4gICAgICAgICAgICAvL0luaXRpYWwgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb24gdGhhdCBkZXBlbmRzIG9uIHNpbXBsZSBsaW5lYXIgc2VhcmNoXG5cbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbUFycmF5Lmxlbmd0aDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbUFycmF5W3hdLnRpdGxlID09PSBpdGVtLnRpdGxlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbUFycmF5LnNwbGljZSh4LDEpO1xuICAgICAgICAgICAgICAgICAgICBvcmRlckJ5dHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9MYXRlciB2ZXJzaW9uIHRoYXQgU0hPVUxEIHVzZSBiaW5hcnkgc2VhcmNoIG9uY2UgdGhlIGRhdGUgZm9ybWF0IGlzIGludGVncmF0ZWRcbiAgICAgICAgICAgIC8vY29ycmVjdGx5XG4gICAgICAgIH1cbiAgICB9XG4gIFxuXG4gICAgcmV0dXJuIHt0eXBlLCB0aXRsZSwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgaXRlbUFycmF5fTtcbn1cblxuXG5leHBvcnQge2xpc3RJdGVtLCBwcm9qZWN0fTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2xpc3RJdGVtLCBwcm9qZWN0fSBmcm9tICcuL2xpc3RpdGVtLmpzJ1xuXG5sZXQgbWFzdGVyQXJyYXkgPSBwcm9qZWN0KCdNYXN0ZXIgTGlzdCcpO1xuXG4vL0p1c3QgbG9hZCBtYXN0ZXIgYXJyYXkgaW4gdGhlIGJlZ2lubmluZyBvZiBlYWNoIHBhZ2UgbG9hZD9cblxubGV0IG5ld2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm5ld2l0ZW0udGV4dENvbnRlbnQgPSAnQ2xpY2sgdG8gQ3JlYXRlIG5ldyBJdGVtJztcbm5ld2l0ZW0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy9sZXQgbmV3dHlwZSA9IHByb21wdCgnV2hhdCB0eXBlIG9mIG9iamVjdCBpcyB0aGlzPycpO1xuICAgIGxldCBuZXd0aXRsZSA9ICBwcm9tcHQoJ1doYXQgaXMgdGhlIHRpdGxlPycpO1xuICAgIGxldCBuZXdkZXNjcmlwdGlvbiA9IHByb21wdCgnV2hhdCBpcyB0aGUgZGVzY3JpcHRpb24/Jyk7XG4gICAgLy9sZXQgbmV3ZHVlZGF0ZSA9IHByb21wdCgnV2hhdCBpcyB0aGUgZHVlIGRhdGU/Jyk7XG4gICAgLy9sZXQgbmV3ZHVldGltZSA9IHByb21wdCgnV2hhdCBpcyB0aGUgZHVlIHRpbWU/Jyk7XG5cbiAgICAvL0p1c3QgZGl2aWRlIHRoZSBuZXdkdWVkYXRlIHZhcmlhYmxlIGludG8gbW9udGgsIGRhdGUsIGFuZCB5ZWFyIHByb21wdHMuXG5cbiAgICBsZXQgZHVlbW9udGggPSBwcm9tcHQoJ1doYXQgbW9udGggaXMgdGhpcyBpdGVtIGR1ZT8nKTtcbiAgICBsZXQgZHVlZGF0ZW9mdGhlbW9udGggPSBwcm9tcHQoYFdoYXQgZGF0ZSBpcyB0aGlzIGl0ZW0gZHVlIGluICR7ZHVlbW9udGh9P2ApO1xuICAgIGxldCBkdWV5ZWFyID0gcHJvbXB0KCdXaGF0IHllYXIgaXMgdGhpcyBpdGVtIGR1ZT8gJyk7XG5cbiAgICAvL09uY2UgZGl2aWRlZCwgaW5zZXJ0IHRob3NlIHZhbHVlcyBpbnRvIGEgYnJhbmQgbmV3IG5ld2R1ZWRhdGVcblxuICAgIGxldCBuZXdkdWVkYXRlID0gYCR7ZHVlbW9udGh9LyR7ZHVlZGF0ZW9mdGhlbW9udGh9LyR7ZHVleWVhcn1gO1xuXG4gICAgLy9BbHNvIGRpdmlkZSBuZXdkdWV0aW1lIGludG8gaG91ciBhbmQgbWludXRlICgyNCBob3VyIHRpbWUpXG5cbiAgICBsZXQgZHVlaG91ciA9IHByb21wdCgnV2hhdCBob3VyIGlzIHRoaXMgZHVlIChVc2UgMjQtaG91ciBtaWxpdGFyeSB0aW1lKScpO1xuICAgIGxldCBkdWVtaW51dGUgPSBwcm9tcHQoYFRoaXMgaXRlbSBpcyBkdWUgb24gJHtkdWVob3VyfTogYCk7XG5cblxuICAgIC8vT25jZSBkaXZpZGVkLCBpbnNlcnQgdGhvc2UgdmFsdWVzIGludG8gYSBicmFuZCBuZXcgbmV3ZHVldGltZVxuICAgIGxldCBuZXdkdWV0aW1lID0gYCR7ZHVlaG91cn06JHtkdWVtaW51dGV9YDtcblxuXG4gICAgLy9JbiBsaXN0aXRlbS5qcywgYWRkIGEgcGFyYW1ldGVyIHRvIHRoZSBsaXN0aXRlbSBvYmplY3QgYW5kIHByb2plY3RcbiAgICAvL29iamVjdCB0aGF0IHJlY29yZHMgdGhlIGRhdGUgb2YgY3JlYXRpb24gYW5kIHN1YnNlcXVlbnQgdXBkYXRlIGRhdGVzIGFuZCB0aW1lc1xuICAgIFxuICAgIGxldCBuZXdsaXN0SXRlbSA9IGxpc3RJdGVtKG5ld3RpdGxlLCBuZXdkZXNjcmlwdGlvbiwgbmV3ZHVlZGF0ZSwgbmV3ZHVldGltZSk7XG4gICAgXG4gICAgbGV0IG9sZFNhdmVkTWFzdGVyQXJyYXlKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21hc3RlckFycmF5Jyk7XG5cbiAgICBpZiAob2xkU2F2ZWRNYXN0ZXJBcnJheUpTT04pIHtcblxuICAgICAgICBcblxuICAgICAgICBsZXQgb2xkU2F2ZWRNYXN0ZXJBcnJheSA9IEpTT04ucGFyc2Uob2xkU2F2ZWRNYXN0ZXJBcnJheUpTT04pO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IChvbGRTYXZlZE1hc3RlckFycmF5Lml0ZW1BcnJheSkubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIG1hc3RlckFycmF5LmFkZEl0ZW0ob2xkU2F2ZWRNYXN0ZXJBcnJheS5pdGVtQXJyYXlbeF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFzdGVyQXJyYXkuYWRkSXRlbShuZXdsaXN0SXRlbSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3U2F2ZWRNYXN0ZXJBcnJheUpTT04gPSBKU09OLnN0cmluZ2lmeShtYXN0ZXJBcnJheSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYXN0ZXJBcnJheScsIG5ld1NhdmVkTWFzdGVyQXJyYXlKU09OKTtcblxuICAgIH0gICBlbHNlIHtcblxuICAgICAgICBtYXN0ZXJBcnJheS5hZGRJdGVtKG5ld2xpc3RJdGVtKTtcbiAgICAgICAgbGV0IG5ld0pTT04gPSBKU09OLnN0cmluZ2lmeShtYXN0ZXJBcnJheSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYXN0ZXJBcnJheScsIG5ld0pTT04pO1xuXG4gICAgfVxuXG5cbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXN0ZXJBcnJheScpKSk7XG5cblxuXG59XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld2l0ZW0pO1xuXG5cbmxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgTG9jYWwgU3RvcmFnZSc7XG5kZWxldGVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFzdGVyQXJyYXknKSkpO1xuXG59XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cblxubGV0IGRpc3BsYXlTdG9yYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5kaXNwbGF5U3RvcmFnZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEaXNwbGF5IEN1cnJlY3QgU3RvcmFnZSc7XG5kaXNwbGF5U3RvcmFnZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXN0ZXJBcnJheScpKSk7XG5cbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlzcGxheVN0b3JhZ2VCdXR0b24pO1xuXG5cblxuLypcblxuXG5sZXQgZG9Ib21ld29yayA9IGxpc3RJdGVtKCdEbyBIb21ld29yaycsICdEbyBteSBIb21ld29yayB0b21tb3Jyb3cnLCAnRHVlIG9uIE1vbmRheScsICdkdWUgYXQgOCBBTScpO1xubWFzdGVyQXJyYXkuYWRkSXRlbShkb0hvbWV3b3JrKTtcblxubGV0IHdyaXRlRXNzYXkgPSBsaXN0SXRlbSgnV3JpdGUgRXNzYXknLCAnV3JpdGUgRXNzYXkgZm9yIFNwYW5pc2ggY2xhc3MnLCAnRHVlIG9uIFR1ZXNkYXknLCAnRHVlIGF0IDEyIFBNJyk7XG5tYXN0ZXJBcnJheS5hZGRJdGVtKHdyaXRlRXNzYXkpO1xuXG5sZXQgd29yayA9IHByb2plY3QoJ1dvcmsgQXNzaWdubWVudHMnKTtcbm1hc3RlckFycmF5LmFkZEl0ZW0od29yayk7XG5cbmxldCBzdGFydERyYXdpbm5nID0gbGlzdEl0ZW0oJ1N0YXJ0IERyYXdpbmcnLCAnU3RhcnQgRHJhd2luZyBmb3IgQXJ0IENsYXNzJywgJ0R1ZSBvbiBXZWRuZXNkYXknLCAnRHVlIGF0IDQgUE0nKTtcbm1hc3RlckFycmF5LmFkZEl0ZW0oc3RhcnREcmF3aW5uZyk7XG5cbmxldCBzY2hvb2xzdHVmZiA9IHByb2plY3QoJ3NjaG9vbCcpO1xubWFzdGVyQXJyYXkuYWRkSXRlbShzY2hvb2xzdHVmZik7XG5cbnNjaG9vbHN0dWZmLmFkZEl0ZW0oZG9Ib21ld29yayk7XG5cbmxldCBkb1NjcmliZVJlY29yZHMgPSBsaXN0SXRlbSgnRG8gc2NyaWJlIHJlY29yZGluZ3MnLCAnRG8gdGhlbSBiZWZvcmUgdGhlIERyLiBnZXRzIGhlcmUnLCAnRHVlIG9uIFR1ZXNkYXknLCAnRHVlIGF0IDkgQU0nKTtcbndvcmsuYWRkSXRlbShkb1NjcmliZVJlY29yZHMpO1xuXG5sZXQgYXBwbGljYXRpb25zID0gcHJvamVjdCgnV29yayBBcHBsaWNhdGlvbiBTdGVwcyBmb3IgRGlmZmVyZW50IEpvYnMnKTtcbndvcmsuYWRkSXRlbShhcHBsaWNhdGlvbnMpO1xuXG5cbmNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcblxuKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==