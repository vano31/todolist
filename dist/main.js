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
    let correctdueDate = new Date(dueYear, dueMonth, dueDay, dueHour, dueMinute);
    //let correctdueTime = correctdueDate.setHours(dueTime);

    return {type, title, description, correctdueDate /*correctdueTime*/}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0Isc0JBQXNCO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0JBQXNCOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7O0FBRzJCOzs7Ozs7OztVQy9EM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFL0M7QUFDQTs7QUFFQSxrQkFBa0IscURBQU87O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUVBQXVFLFlBQVk7QUFDbkY7O0FBRUE7O0FBRUEsMEJBQTBCLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEdBQUc7O0FBRXRFOztBQUVBO0FBQ0EscURBQXFELFdBQVc7OztBQUdoRTs7QUFFQTtBQUNBLDZDQUE2Qzs7O0FBRzdDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBUTtBQUM5QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVE7O0FBRVI7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdGl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBsaXN0SXRlbSA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlWWVhciwgZHVlTW9udGgsIGR1ZURheSwgZHVlSG91ciwgZHVlTWludXRlKSB7XG4gICAgbGV0IHR5cGUgPSBcImxpc3QtaXRlbVwiO1xuXG5cbiAgICAvL1VzZSBzZXRob3Vyc1xuICAgIGxldCBjb3JyZWN0ZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZVllYXIsIGR1ZU1vbnRoLCBkdWVEYXksIGR1ZUhvdXIsIGR1ZU1pbnV0ZSk7XG4gICAgLy9sZXQgY29ycmVjdGR1ZVRpbWUgPSBjb3JyZWN0ZHVlRGF0ZS5zZXRIb3VycyhkdWVUaW1lKTtcblxuICAgIHJldHVybiB7dHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjb3JyZWN0ZHVlRGF0ZSAvKmNvcnJlY3RkdWVUaW1lKi99XG5cbn1cblxubGV0IHByb2plY3QgPSBmdW5jdGlvbih0aXRsZSkge1xuXG4gICAgbGV0IHR5cGUgPSBcInByb2plY3RcIlxuICAgIGxldCBpdGVtQXJyYXkgPSBbXTtcblxuICAgIGxldCBvcmRlckJ5dHlwZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbUFycmF5Lmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbUFycmF5W3hdLnR5cGUgPT09ICdwcm9qZWN0Jykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RpdGVtID0gaXRlbUFycmF5LnNwbGljZSh4LDEpO1xuICAgICAgICAgICAgICAgIGl0ZW1BcnJheS51bnNoaWZ0KHByb2plY3RpdGVtKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuXG4gICAgbGV0IGFkZEl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG5cbiAgICAgICAgaXRlbUFycmF5LnB1c2goaXRlbSk7XG4gICAgICAgIG9yZGVyQnl0eXBlKCk7XG5cbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0udGl0bGUpIHtcbiAgICAgICAgICAgIC8vSW5pdGlhbCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGRlcGVuZHMgb24gc2ltcGxlIGxpbmVhciBzZWFyY2hcblxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtQXJyYXkubGVuZ3RoOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtQXJyYXlbeF0udGl0bGUgPT09IGl0ZW0udGl0bGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpdGVtQXJyYXkuc3BsaWNlKHgsMSk7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyQnl0eXBlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0xhdGVyIHZlcnNpb24gdGhhdCBTSE9VTEQgdXNlIGJpbmFyeSBzZWFyY2ggb25jZSB0aGUgZGF0ZSBmb3JtYXQgaXMgaW50ZWdyYXRlZFxuICAgICAgICAgICAgLy9jb3JyZWN0bHlcbiAgICAgICAgfVxuICAgIH1cbiAgXG5cbiAgICByZXR1cm4ge3R5cGUsIHRpdGxlLCBhZGRJdGVtLCByZW1vdmVJdGVtLCBpdGVtQXJyYXl9O1xufVxuXG5cbmV4cG9ydCB7bGlzdEl0ZW0sIHByb2plY3R9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bGlzdEl0ZW0sIHByb2plY3R9IGZyb20gJy4vbGlzdGl0ZW0uanMnXG5cbi8vTWFrZSBhIHNlcGFyYXRlIHRhYiBmb3IgcHJvamVjdHMgb25seSwgdGFicyBmb3IgbGlzdCBvbmx5LCB0YWIgZm9yIHRhYiBkZWNpZGluZ1xuLy92aWEgZHJvcGRvd24sIGFuZCB0YWIgZm9yIG1peGluZyBwcm9qZWN0cyBhbmQgaXRlbXMgYmFzZWQgb24gZGF0ZVxuXG5sZXQgbWFzdGVyQXJyYXkgPSBwcm9qZWN0KCdNYXN0ZXIgTGlzdCcpO1xuXG4vL0p1c3QgbG9hZCBtYXN0ZXIgYXJyYXkgaW4gdGhlIGJlZ2lubmluZyBvZiBlYWNoIHBhZ2UgbG9hZD9cblxubGV0IG5ld2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm5ld2l0ZW0udGV4dENvbnRlbnQgPSAnQ2xpY2sgdG8gQ3JlYXRlIG5ldyBJdGVtJztcbm5ld2l0ZW0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy9sZXQgbmV3dHlwZSA9IHByb21wdCgnV2hhdCB0eXBlIG9mIG9iamVjdCBpcyB0aGlzPycpO1xuICAgIGxldCBuZXd0aXRsZSA9ICBwcm9tcHQoJ1doYXQgaXMgdGhlIHRpdGxlPycpO1xuICAgIGxldCBuZXdkZXNjcmlwdGlvbiA9IHByb21wdCgnV2hhdCBpcyB0aGUgZGVzY3JpcHRpb24/Jyk7XG4gICAgLy9sZXQgbmV3ZHVlZGF0ZSA9IHByb21wdCgnV2hhdCBpcyB0aGUgZHVlIGRhdGU/Jyk7XG4gICAgLy9sZXQgbmV3ZHVldGltZSA9IHByb21wdCgnV2hhdCBpcyB0aGUgZHVlIHRpbWU/Jyk7XG5cbiAgICAvL0p1c3QgZGl2aWRlIHRoZSBuZXdkdWVkYXRlIHZhcmlhYmxlIGludG8gbW9udGgsIGRhdGUsIGFuZCB5ZWFyIHByb21wdHMuXG5cbiAgICBsZXQgbmV3ZHVlbW9udGggPSBwcm9tcHQoJ1doYXQgbW9udGggaXMgdGhpcyBpdGVtIGR1ZT8nKTtcbiAgICBsZXQgbmV3ZHVlZGF0ZW9mdGhlbW9udGggPSBwcm9tcHQoYFdoYXQgZGF0ZSBpcyB0aGlzIGl0ZW0gZHVlIGluICR7bmV3ZHVlbW9udGh9P2ApO1xuICAgIGxldCBuZXdkdWV5ZWFyID0gcHJvbXB0KCdXaGF0IHllYXIgaXMgdGhpcyBpdGVtIGR1ZT8gJyk7XG5cbiAgICAvL09uY2UgZGl2aWRlZCwgaW5zZXJ0IHRob3NlIHZhbHVlcyBpbnRvIGEgYnJhbmQgbmV3IG5ld2R1ZWRhdGVcblxuICAvKiAgbGV0IG5ld2R1ZWRhdGUgPSBgJHtkdWVtb250aH0gJHtkdWVkYXRlb2Z0aGVtb250aH0gJHtkdWV5ZWFyfWA7ICovXG5cbiAgICAvL0Fsc28gZGl2aWRlIG5ld2R1ZXRpbWUgaW50byBob3VyIGFuZCBtaW51dGUgKDI0IGhvdXIgdGltZSlcblxuICAgIGxldCBuZXdkdWVob3VyID0gcHJvbXB0KCdXaGF0IGhvdXIgaXMgdGhpcyBkdWUnKTtcbiAgICBsZXQgbmV3ZHVlbWludXRlID0gcHJvbXB0KGBUaGlzIGl0ZW0gaXMgZHVlIG9uICR7bmV3ZHVlaG91cn06IGApOyAgXG5cblxuICAgIC8vVXNlIHNldGhvdXJzIGluc3RlYWQgdG8gaG9sZCB0aW1lXG5cbiAgICAvL09uY2UgZGl2aWRlZCwgaW5zZXJ0IHRob3NlIHZhbHVlcyBpbnRvIGEgYnJhbmQgbmV3IG5ld2R1ZXRpbWVcbiAgLyogIGxldCBuZXdkdWV0aW1lID0gKGR1ZWhvdXIsIGR1ZW1pbnV0ZSk7ICovXG5cblxuICAgIC8vSW4gbGlzdGl0ZW0uanMsIGFkZCBhIHBhcmFtZXRlciB0byB0aGUgbGlzdGl0ZW0gb2JqZWN0IGFuZCBwcm9qZWN0XG4gICAgLy9vYmplY3QgdGhhdCByZWNvcmRzIHRoZSBkYXRlIG9mIGNyZWF0aW9uIGFuZCBzdWJzZXF1ZW50IHVwZGF0ZSBkYXRlcyBhbmQgdGltZXNcbiAgICBcbiAgICBsZXQgbmV3bGlzdEl0ZW0gPSBsaXN0SXRlbShuZXd0aXRsZSwgbmV3ZGVzY3JpcHRpb24sIG5ld2R1ZXllYXIsIG5ld2R1ZW1vbnRoLCBuZXdkdWVkYXRlb2Z0aGVtb250aCwgbmV3ZHVlaG91ciwgbmV3ZHVlbWludXRlKTtcbiAgICBcbiAgICBsZXQgb2xkU2F2ZWRNYXN0ZXJBcnJheUpTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFzdGVyQXJyYXknKTtcblxuICAgIGlmIChvbGRTYXZlZE1hc3RlckFycmF5SlNPTikge1xuXG4gICAgICAgIFxuXG4gICAgICAgIGxldCBvbGRTYXZlZE1hc3RlckFycmF5ID0gSlNPTi5wYXJzZShvbGRTYXZlZE1hc3RlckFycmF5SlNPTik7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgKG9sZFNhdmVkTWFzdGVyQXJyYXkuaXRlbUFycmF5KS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgbWFzdGVyQXJyYXkuYWRkSXRlbShvbGRTYXZlZE1hc3RlckFycmF5Lml0ZW1BcnJheVt4XSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXN0ZXJBcnJheS5hZGRJdGVtKG5ld2xpc3RJdGVtKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdTYXZlZE1hc3RlckFycmF5SlNPTiA9IEpTT04uc3RyaW5naWZ5KG1hc3RlckFycmF5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21hc3RlckFycmF5JywgbmV3U2F2ZWRNYXN0ZXJBcnJheUpTT04pO1xuXG4gICAgfSAgIGVsc2Uge1xuXG4gICAgICAgIG1hc3RlckFycmF5LmFkZEl0ZW0obmV3bGlzdEl0ZW0pO1xuICAgICAgICBsZXQgbmV3SlNPTiA9IEpTT04uc3RyaW5naWZ5KG1hc3RlckFycmF5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21hc3RlckFycmF5JywgbmV3SlNPTik7XG5cbiAgICB9XG5cblxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21hc3RlckFycmF5JykpKTtcblxuXG5cbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3aXRlbSk7XG5cblxubGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBMb2NhbCBTdG9yYWdlJztcbmRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXN0ZXJBcnJheScpKSk7XG5cbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuXG5sZXQgZGlzcGxheVN0b3JhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmRpc3BsYXlTdG9yYWdlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Rpc3BsYXkgQ3VycmVjdCBTdG9yYWdlJztcbmRpc3BsYXlTdG9yYWdlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21hc3RlckFycmF5JykpKTtcblxufVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXNwbGF5U3RvcmFnZUJ1dHRvbik7XG5cblxuXG4vKlxuXG5cbmxldCBkb0hvbWV3b3JrID0gbGlzdEl0ZW0oJ0RvIEhvbWV3b3JrJywgJ0RvIG15IEhvbWV3b3JrIHRvbW1vcnJvdycsICdEdWUgb24gTW9uZGF5JywgJ2R1ZSBhdCA4IEFNJyk7XG5tYXN0ZXJBcnJheS5hZGRJdGVtKGRvSG9tZXdvcmspO1xuXG5sZXQgd3JpdGVFc3NheSA9IGxpc3RJdGVtKCdXcml0ZSBFc3NheScsICdXcml0ZSBFc3NheSBmb3IgU3BhbmlzaCBjbGFzcycsICdEdWUgb24gVHVlc2RheScsICdEdWUgYXQgMTIgUE0nKTtcbm1hc3RlckFycmF5LmFkZEl0ZW0od3JpdGVFc3NheSk7XG5cbmxldCB3b3JrID0gcHJvamVjdCgnV29yayBBc3NpZ25tZW50cycpO1xubWFzdGVyQXJyYXkuYWRkSXRlbSh3b3JrKTtcblxubGV0IHN0YXJ0RHJhd2lubmcgPSBsaXN0SXRlbSgnU3RhcnQgRHJhd2luZycsICdTdGFydCBEcmF3aW5nIGZvciBBcnQgQ2xhc3MnLCAnRHVlIG9uIFdlZG5lc2RheScsICdEdWUgYXQgNCBQTScpO1xubWFzdGVyQXJyYXkuYWRkSXRlbShzdGFydERyYXdpbm5nKTtcblxubGV0IHNjaG9vbHN0dWZmID0gcHJvamVjdCgnc2Nob29sJyk7XG5tYXN0ZXJBcnJheS5hZGRJdGVtKHNjaG9vbHN0dWZmKTtcblxuc2Nob29sc3R1ZmYuYWRkSXRlbShkb0hvbWV3b3JrKTtcblxubGV0IGRvU2NyaWJlUmVjb3JkcyA9IGxpc3RJdGVtKCdEbyBzY3JpYmUgcmVjb3JkaW5ncycsICdEbyB0aGVtIGJlZm9yZSB0aGUgRHIuIGdldHMgaGVyZScsICdEdWUgb24gVHVlc2RheScsICdEdWUgYXQgOSBBTScpO1xud29yay5hZGRJdGVtKGRvU2NyaWJlUmVjb3Jkcyk7XG5cbmxldCBhcHBsaWNhdGlvbnMgPSBwcm9qZWN0KCdXb3JrIEFwcGxpY2F0aW9uIFN0ZXBzIGZvciBEaWZmZXJlbnQgSm9icycpO1xud29yay5hZGRJdGVtKGFwcGxpY2F0aW9ucyk7XG5cblxuY29uc29sZS5sb2cobWFzdGVyQXJyYXkpO1xuXG4qL1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9