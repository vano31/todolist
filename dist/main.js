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

let listItem = function(title, description, dueYear, dueMonth, dueDay, dueHour, dueMinute) {
    let type = "list-item";


    //Use sethours
    let correctdueDate = new Date(parseFloat(dueYear), parseFloat(dueMonth -1), parseFloat(dueDay), parseFloat(dueHour), parseFloat(dueMinute));
    //let correctdueTime = correctdueDate.setHours(dueTime);

    return {type, title, description, dueYear, dueMonth, dueDay, dueHour, dueMinute, correctdueDate /*correctdueTime*/}

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


//Make a separate tab for projects only, tabs for list only, tab for tab deciding
//via dropdown, and tab for mixing projects and items based on date

let masterArray = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.project)('Master List');
//console.log(masterArray);

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

    let newduemonth = prompt('What month is this item due?');
    let newduedateofthemonth = prompt(`What date is this item due in ${newduemonth}?`);
    let newdueyear = prompt('What year is this item due? ');

    //Once divided, insert those values into a brand new newduedate

  /*  let newduedate = `${duemonth} ${duedateofthemonth} ${dueyear}`; */

    //Also divide newduetime into hour and minute (24 hour time)

    let newduehour = prompt('What hour is this due');
    let newdueminute = prompt(`This item is due on ${newduehour}: `);  


    //Use sethours instead to hold time

    //Once divided, insert those values into a brand new newduetime
  /*  let newduetime = (duehour, dueminute); */


    //In listitem.js, add a parameter to the listitem object and project
    //object that records the date of creation and subsequent update dates and times
    
    let newlistItem = (0,_listitem_js__WEBPACK_IMPORTED_MODULE_0__.listItem)(newtitle, newdescription, newdueyear, newduemonth, newduedateofthemonth, newduehour, newdueminute);
    
    let oldSavedMasterArrayJSON = localStorage.getItem('masterArray');
    let oldSavedMasterArray = JSON.parse(oldSavedMasterArrayJSON, function(key, value) {
        if (key == 'correctdueDate') return new Date(value);
        return value;
    });
    //console.log(oldSavedMasterArray)

    if (oldSavedMasterArrayJSON && masterArray.itemArray.length === oldSavedMasterArray.itemArray.length) {

        masterArray.addItem(newlistItem);

        //console.log(masterArray)

        localStorage.clear();
        let equalMasterArrayJSON = JSON.stringify(masterArray);
        localStorage.setItem('masterArray', equalMasterArrayJSON);

    } else {

        if (oldSavedMasterArrayJSON) {
        
            for (let x = 0; x < (oldSavedMasterArray.itemArray).length; x++) {
                masterArray.addItem(oldSavedMasterArray.itemArray[x]);
            }
    
            masterArray.addItem(newlistItem);

            //console.log(masterArray)
            
            let newSavedMasterArrayJSON = JSON.stringify(masterArray);
            localStorage.setItem('masterArray', newSavedMasterArrayJSON);
    
        }   else {
    
            masterArray.addItem(newlistItem);

            //console.log(masterArray)

            let newJSON = JSON.stringify(masterArray);
            localStorage.setItem('masterArray', newJSON);
    
        }


    }

    console.log(JSON.parse(localStorage.getItem('masterArray'), function (key, value) {
        if (key === 'correctdueDate') return new Date(value);
        return value;
    }));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0Isc0JBQXNCO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0JBQXNCOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7O0FBRzJCOzs7Ozs7OztVQy9EM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFL0M7QUFDQTs7QUFFQSxrQkFBa0IscURBQU87QUFDekI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1RUFBdUUsWUFBWTtBQUNuRjs7QUFFQTs7QUFFQSwwQkFBMEIsVUFBVSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsR0FBRzs7QUFFdEU7O0FBRUE7QUFDQSxxREFBcUQsV0FBVzs7O0FBR2hFOztBQUVBO0FBQ0EsNkNBQTZDOzs7QUFHN0M7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07O0FBRU47QUFDQTtBQUNBLDRCQUE0Qiw0Q0FBNEM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xpc3RpdGVtLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgbGlzdEl0ZW0gPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZVllYXIsIGR1ZU1vbnRoLCBkdWVEYXksIGR1ZUhvdXIsIGR1ZU1pbnV0ZSkge1xuICAgIGxldCB0eXBlID0gXCJsaXN0LWl0ZW1cIjtcblxuXG4gICAgLy9Vc2Ugc2V0aG91cnNcbiAgICBsZXQgY29ycmVjdGR1ZURhdGUgPSBuZXcgRGF0ZShwYXJzZUZsb2F0KGR1ZVllYXIpLCBwYXJzZUZsb2F0KGR1ZU1vbnRoIC0xKSwgcGFyc2VGbG9hdChkdWVEYXkpLCBwYXJzZUZsb2F0KGR1ZUhvdXIpLCBwYXJzZUZsb2F0KGR1ZU1pbnV0ZSkpO1xuICAgIC8vbGV0IGNvcnJlY3RkdWVUaW1lID0gY29ycmVjdGR1ZURhdGUuc2V0SG91cnMoZHVlVGltZSk7XG5cbiAgICByZXR1cm4ge3R5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlWWVhciwgZHVlTW9udGgsIGR1ZURheSwgZHVlSG91ciwgZHVlTWludXRlLCBjb3JyZWN0ZHVlRGF0ZSAvKmNvcnJlY3RkdWVUaW1lKi99XG5cbn1cblxubGV0IHByb2plY3QgPSBmdW5jdGlvbih0aXRsZSkge1xuXG4gICAgbGV0IHR5cGUgPSBcInByb2plY3RcIlxuICAgIGxldCBpdGVtQXJyYXkgPSBbXTtcblxuICAgIGxldCBvcmRlckJ5dHlwZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbUFycmF5Lmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbUFycmF5W3hdLnR5cGUgPT09ICdwcm9qZWN0Jykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RpdGVtID0gaXRlbUFycmF5LnNwbGljZSh4LDEpO1xuICAgICAgICAgICAgICAgIGl0ZW1BcnJheS51bnNoaWZ0KHByb2plY3RpdGVtKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuXG4gICAgbGV0IGFkZEl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG5cbiAgICAgICAgaXRlbUFycmF5LnB1c2goaXRlbSk7XG4gICAgICAgIG9yZGVyQnl0eXBlKCk7XG5cbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0udGl0bGUpIHtcbiAgICAgICAgICAgIC8vSW5pdGlhbCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGRlcGVuZHMgb24gc2ltcGxlIGxpbmVhciBzZWFyY2hcblxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtQXJyYXkubGVuZ3RoOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtQXJyYXlbeF0udGl0bGUgPT09IGl0ZW0udGl0bGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpdGVtQXJyYXkuc3BsaWNlKHgsMSk7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyQnl0eXBlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0xhdGVyIHZlcnNpb24gdGhhdCBTSE9VTEQgdXNlIGJpbmFyeSBzZWFyY2ggb25jZSB0aGUgZGF0ZSBmb3JtYXQgaXMgaW50ZWdyYXRlZFxuICAgICAgICAgICAgLy9jb3JyZWN0bHlcbiAgICAgICAgfVxuICAgIH1cbiAgXG5cbiAgICByZXR1cm4ge3R5cGUsIHRpdGxlLCBhZGRJdGVtLCByZW1vdmVJdGVtLCBpdGVtQXJyYXl9O1xufVxuXG5cbmV4cG9ydCB7bGlzdEl0ZW0sIHByb2plY3R9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bGlzdEl0ZW0sIHByb2plY3R9IGZyb20gJy4vbGlzdGl0ZW0uanMnXG5cbi8vTWFrZSBhIHNlcGFyYXRlIHRhYiBmb3IgcHJvamVjdHMgb25seSwgdGFicyBmb3IgbGlzdCBvbmx5LCB0YWIgZm9yIHRhYiBkZWNpZGluZ1xuLy92aWEgZHJvcGRvd24sIGFuZCB0YWIgZm9yIG1peGluZyBwcm9qZWN0cyBhbmQgaXRlbXMgYmFzZWQgb24gZGF0ZVxuXG5sZXQgbWFzdGVyQXJyYXkgPSBwcm9qZWN0KCdNYXN0ZXIgTGlzdCcpO1xuLy9jb25zb2xlLmxvZyhtYXN0ZXJBcnJheSk7XG5cbi8vSnVzdCBsb2FkIG1hc3RlciBhcnJheSBpbiB0aGUgYmVnaW5uaW5nIG9mIGVhY2ggcGFnZSBsb2FkP1xuXG5sZXQgbmV3aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xubmV3aXRlbS50ZXh0Q29udGVudCA9ICdDbGljayB0byBDcmVhdGUgbmV3IEl0ZW0nO1xubmV3aXRlbS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvL2xldCBuZXd0eXBlID0gcHJvbXB0KCdXaGF0IHR5cGUgb2Ygb2JqZWN0IGlzIHRoaXM/Jyk7XG4gICAgbGV0IG5ld3RpdGxlID0gIHByb21wdCgnV2hhdCBpcyB0aGUgdGl0bGU/Jyk7XG4gICAgbGV0IG5ld2Rlc2NyaXB0aW9uID0gcHJvbXB0KCdXaGF0IGlzIHRoZSBkZXNjcmlwdGlvbj8nKTtcbiAgICAvL2xldCBuZXdkdWVkYXRlID0gcHJvbXB0KCdXaGF0IGlzIHRoZSBkdWUgZGF0ZT8nKTtcbiAgICAvL2xldCBuZXdkdWV0aW1lID0gcHJvbXB0KCdXaGF0IGlzIHRoZSBkdWUgdGltZT8nKTtcblxuICAgIC8vSnVzdCBkaXZpZGUgdGhlIG5ld2R1ZWRhdGUgdmFyaWFibGUgaW50byBtb250aCwgZGF0ZSwgYW5kIHllYXIgcHJvbXB0cy5cblxuICAgIGxldCBuZXdkdWVtb250aCA9IHByb21wdCgnV2hhdCBtb250aCBpcyB0aGlzIGl0ZW0gZHVlPycpO1xuICAgIGxldCBuZXdkdWVkYXRlb2Z0aGVtb250aCA9IHByb21wdChgV2hhdCBkYXRlIGlzIHRoaXMgaXRlbSBkdWUgaW4gJHtuZXdkdWVtb250aH0/YCk7XG4gICAgbGV0IG5ld2R1ZXllYXIgPSBwcm9tcHQoJ1doYXQgeWVhciBpcyB0aGlzIGl0ZW0gZHVlPyAnKTtcblxuICAgIC8vT25jZSBkaXZpZGVkLCBpbnNlcnQgdGhvc2UgdmFsdWVzIGludG8gYSBicmFuZCBuZXcgbmV3ZHVlZGF0ZVxuXG4gIC8qICBsZXQgbmV3ZHVlZGF0ZSA9IGAke2R1ZW1vbnRofSAke2R1ZWRhdGVvZnRoZW1vbnRofSAke2R1ZXllYXJ9YDsgKi9cblxuICAgIC8vQWxzbyBkaXZpZGUgbmV3ZHVldGltZSBpbnRvIGhvdXIgYW5kIG1pbnV0ZSAoMjQgaG91ciB0aW1lKVxuXG4gICAgbGV0IG5ld2R1ZWhvdXIgPSBwcm9tcHQoJ1doYXQgaG91ciBpcyB0aGlzIGR1ZScpO1xuICAgIGxldCBuZXdkdWVtaW51dGUgPSBwcm9tcHQoYFRoaXMgaXRlbSBpcyBkdWUgb24gJHtuZXdkdWVob3VyfTogYCk7ICBcblxuXG4gICAgLy9Vc2Ugc2V0aG91cnMgaW5zdGVhZCB0byBob2xkIHRpbWVcblxuICAgIC8vT25jZSBkaXZpZGVkLCBpbnNlcnQgdGhvc2UgdmFsdWVzIGludG8gYSBicmFuZCBuZXcgbmV3ZHVldGltZVxuICAvKiAgbGV0IG5ld2R1ZXRpbWUgPSAoZHVlaG91ciwgZHVlbWludXRlKTsgKi9cblxuXG4gICAgLy9JbiBsaXN0aXRlbS5qcywgYWRkIGEgcGFyYW1ldGVyIHRvIHRoZSBsaXN0aXRlbSBvYmplY3QgYW5kIHByb2plY3RcbiAgICAvL29iamVjdCB0aGF0IHJlY29yZHMgdGhlIGRhdGUgb2YgY3JlYXRpb24gYW5kIHN1YnNlcXVlbnQgdXBkYXRlIGRhdGVzIGFuZCB0aW1lc1xuICAgIFxuICAgIGxldCBuZXdsaXN0SXRlbSA9IGxpc3RJdGVtKG5ld3RpdGxlLCBuZXdkZXNjcmlwdGlvbiwgbmV3ZHVleWVhciwgbmV3ZHVlbW9udGgsIG5ld2R1ZWRhdGVvZnRoZW1vbnRoLCBuZXdkdWVob3VyLCBuZXdkdWVtaW51dGUpO1xuICAgIFxuICAgIGxldCBvbGRTYXZlZE1hc3RlckFycmF5SlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXN0ZXJBcnJheScpO1xuICAgIGxldCBvbGRTYXZlZE1hc3RlckFycmF5ID0gSlNPTi5wYXJzZShvbGRTYXZlZE1hc3RlckFycmF5SlNPTiwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoa2V5ID09ICdjb3JyZWN0ZHVlRGF0ZScpIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbiAgICAvL2NvbnNvbGUubG9nKG9sZFNhdmVkTWFzdGVyQXJyYXkpXG5cbiAgICBpZiAob2xkU2F2ZWRNYXN0ZXJBcnJheUpTT04gJiYgbWFzdGVyQXJyYXkuaXRlbUFycmF5Lmxlbmd0aCA9PT0gb2xkU2F2ZWRNYXN0ZXJBcnJheS5pdGVtQXJyYXkubGVuZ3RoKSB7XG5cbiAgICAgICAgbWFzdGVyQXJyYXkuYWRkSXRlbShuZXdsaXN0SXRlbSk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhtYXN0ZXJBcnJheSlcblxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgbGV0IGVxdWFsTWFzdGVyQXJyYXlKU09OID0gSlNPTi5zdHJpbmdpZnkobWFzdGVyQXJyYXkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWFzdGVyQXJyYXknLCBlcXVhbE1hc3RlckFycmF5SlNPTik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmIChvbGRTYXZlZE1hc3RlckFycmF5SlNPTikge1xuICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgKG9sZFNhdmVkTWFzdGVyQXJyYXkuaXRlbUFycmF5KS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgIG1hc3RlckFycmF5LmFkZEl0ZW0ob2xkU2F2ZWRNYXN0ZXJBcnJheS5pdGVtQXJyYXlbeF0pO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgbWFzdGVyQXJyYXkuYWRkSXRlbShuZXdsaXN0SXRlbSk7XG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWFzdGVyQXJyYXkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBuZXdTYXZlZE1hc3RlckFycmF5SlNPTiA9IEpTT04uc3RyaW5naWZ5KG1hc3RlckFycmF5KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYXN0ZXJBcnJheScsIG5ld1NhdmVkTWFzdGVyQXJyYXlKU09OKTtcbiAgICBcbiAgICAgICAgfSAgIGVsc2Uge1xuICAgIFxuICAgICAgICAgICAgbWFzdGVyQXJyYXkuYWRkSXRlbShuZXdsaXN0SXRlbSk7XG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWFzdGVyQXJyYXkpXG5cbiAgICAgICAgICAgIGxldCBuZXdKU09OID0gSlNPTi5zdHJpbmdpZnkobWFzdGVyQXJyYXkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21hc3RlckFycmF5JywgbmV3SlNPTik7XG4gICAgXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFzdGVyQXJyYXknKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2NvcnJlY3RkdWVEYXRlJykgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pKTtcblxuXG59XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld2l0ZW0pO1xuXG5cbmxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgTG9jYWwgU3RvcmFnZSc7XG5kZWxldGVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFzdGVyQXJyYXknKSkpO1xuXG59XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cblxubGV0IGRpc3BsYXlTdG9yYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5kaXNwbGF5U3RvcmFnZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEaXNwbGF5IEN1cnJlY3QgU3RvcmFnZSc7XG5kaXNwbGF5U3RvcmFnZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXN0ZXJBcnJheScpKSk7XG5cbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlzcGxheVN0b3JhZ2VCdXR0b24pO1xuXG5cblxuLypcblxuXG5sZXQgZG9Ib21ld29yayA9IGxpc3RJdGVtKCdEbyBIb21ld29yaycsICdEbyBteSBIb21ld29yayB0b21tb3Jyb3cnLCAnRHVlIG9uIE1vbmRheScsICdkdWUgYXQgOCBBTScpO1xubWFzdGVyQXJyYXkuYWRkSXRlbShkb0hvbWV3b3JrKTtcblxubGV0IHdyaXRlRXNzYXkgPSBsaXN0SXRlbSgnV3JpdGUgRXNzYXknLCAnV3JpdGUgRXNzYXkgZm9yIFNwYW5pc2ggY2xhc3MnLCAnRHVlIG9uIFR1ZXNkYXknLCAnRHVlIGF0IDEyIFBNJyk7XG5tYXN0ZXJBcnJheS5hZGRJdGVtKHdyaXRlRXNzYXkpO1xuXG5sZXQgd29yayA9IHByb2plY3QoJ1dvcmsgQXNzaWdubWVudHMnKTtcbm1hc3RlckFycmF5LmFkZEl0ZW0od29yayk7XG5cbmxldCBzdGFydERyYXdpbm5nID0gbGlzdEl0ZW0oJ1N0YXJ0IERyYXdpbmcnLCAnU3RhcnQgRHJhd2luZyBmb3IgQXJ0IENsYXNzJywgJ0R1ZSBvbiBXZWRuZXNkYXknLCAnRHVlIGF0IDQgUE0nKTtcbm1hc3RlckFycmF5LmFkZEl0ZW0oc3RhcnREcmF3aW5uZyk7XG5cbmxldCBzY2hvb2xzdHVmZiA9IHByb2plY3QoJ3NjaG9vbCcpO1xubWFzdGVyQXJyYXkuYWRkSXRlbShzY2hvb2xzdHVmZik7XG5cbnNjaG9vbHN0dWZmLmFkZEl0ZW0oZG9Ib21ld29yayk7XG5cbmxldCBkb1NjcmliZVJlY29yZHMgPSBsaXN0SXRlbSgnRG8gc2NyaWJlIHJlY29yZGluZ3MnLCAnRG8gdGhlbSBiZWZvcmUgdGhlIERyLiBnZXRzIGhlcmUnLCAnRHVlIG9uIFR1ZXNkYXknLCAnRHVlIGF0IDkgQU0nKTtcbndvcmsuYWRkSXRlbShkb1NjcmliZVJlY29yZHMpO1xuXG5sZXQgYXBwbGljYXRpb25zID0gcHJvamVjdCgnV29yayBBcHBsaWNhdGlvbiBTdGVwcyBmb3IgRGlmZmVyZW50IEpvYnMnKTtcbndvcmsuYWRkSXRlbShhcHBsaWNhdGlvbnMpO1xuXG5cbmNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcblxuKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==