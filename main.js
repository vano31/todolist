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
    let oldSavedMasterArray = JSON.parse(oldSavedMasterArrayJSON);
    //console.log(oldSavedMasterArray)

    if (oldSavedMasterArrayJSON && masterArray.itemArray.length === oldSavedMasterArray.itemArray.length) {

        masterArray.addItem(newlistItem);
        localStorage.clear();
        let equalMasterArrayJSON = JSON.stringify(masterArray);
        localStorage.setItem('masterArray', equalMasterArrayJSON);

    } else {

        if (oldSavedMasterArrayJSON) {
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7O0FBRVo7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0Isc0JBQXNCO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0JBQXNCOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7O0FBRzJCOzs7Ozs7OztVQy9EM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFL0M7QUFDQTs7QUFFQSxrQkFBa0IscURBQU87O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUVBQXVFLFlBQVk7QUFDbkY7O0FBRUE7O0FBRUEsMEJBQTBCLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEdBQUc7O0FBRXRFOztBQUVBO0FBQ0EscURBQXFELFdBQVc7OztBQUdoRTs7QUFFQTtBQUNBLDZDQUE2Qzs7O0FBRzdDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSw0QkFBNEIsNENBQTRDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9saXN0aXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxubGV0IGxpc3RJdGVtID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVZZWFyLCBkdWVNb250aCwgZHVlRGF5LCBkdWVIb3VyLCBkdWVNaW51dGUpIHtcbiAgICBsZXQgdHlwZSA9IFwibGlzdC1pdGVtXCI7XG5cblxuICAgIC8vVXNlIHNldGhvdXJzXG4gICAgbGV0IGNvcnJlY3RkdWVEYXRlID0gbmV3IERhdGUoZHVlWWVhciwgZHVlTW9udGgsIGR1ZURheSwgZHVlSG91ciwgZHVlTWludXRlKTtcbiAgICAvL2xldCBjb3JyZWN0ZHVlVGltZSA9IGNvcnJlY3RkdWVEYXRlLnNldEhvdXJzKGR1ZVRpbWUpO1xuXG4gICAgcmV0dXJuIHt0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNvcnJlY3RkdWVEYXRlIC8qY29ycmVjdGR1ZVRpbWUqL31cblxufVxuXG5sZXQgcHJvamVjdCA9IGZ1bmN0aW9uKHRpdGxlKSB7XG5cbiAgICBsZXQgdHlwZSA9IFwicHJvamVjdFwiXG4gICAgbGV0IGl0ZW1BcnJheSA9IFtdO1xuXG4gICAgbGV0IG9yZGVyQnl0eXBlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtQXJyYXkubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGlmIChpdGVtQXJyYXlbeF0udHlwZSA9PT0gJ3Byb2plY3QnKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdGl0ZW0gPSBpdGVtQXJyYXkuc3BsaWNlKHgsMSk7XG4gICAgICAgICAgICAgICAgaXRlbUFycmF5LnVuc2hpZnQocHJvamVjdGl0ZW0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG5cbiAgICBsZXQgYWRkSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblxuICAgICAgICBpdGVtQXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgb3JkZXJCeXR5cGUoKTtcblxuICAgIH1cblxuICAgIGxldCByZW1vdmVJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS50aXRsZSkge1xuICAgICAgICAgICAgLy9Jbml0aWFsIHZlcnNpb24gb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZGVwZW5kcyBvbiBzaW1wbGUgbGluZWFyIHNlYXJjaFxuXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZW1BcnJheS5sZW5ndGg7IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1BcnJheVt4XS50aXRsZSA9PT0gaXRlbS50aXRsZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1BcnJheS5zcGxpY2UoeCwxKTtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeXR5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vTGF0ZXIgdmVyc2lvbiB0aGF0IFNIT1VMRCB1c2UgYmluYXJ5IHNlYXJjaCBvbmNlIHRoZSBkYXRlIGZvcm1hdCBpcyBpbnRlZ3JhdGVkXG4gICAgICAgICAgICAvL2NvcnJlY3RseVxuICAgICAgICB9XG4gICAgfVxuICBcblxuICAgIHJldHVybiB7dHlwZSwgdGl0bGUsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIGl0ZW1BcnJheX07XG59XG5cblxuZXhwb3J0IHtsaXN0SXRlbSwgcHJvamVjdH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtsaXN0SXRlbSwgcHJvamVjdH0gZnJvbSAnLi9saXN0aXRlbS5qcydcblxuLy9NYWtlIGEgc2VwYXJhdGUgdGFiIGZvciBwcm9qZWN0cyBvbmx5LCB0YWJzIGZvciBsaXN0IG9ubHksIHRhYiBmb3IgdGFiIGRlY2lkaW5nXG4vL3ZpYSBkcm9wZG93biwgYW5kIHRhYiBmb3IgbWl4aW5nIHByb2plY3RzIGFuZCBpdGVtcyBiYXNlZCBvbiBkYXRlXG5cbmxldCBtYXN0ZXJBcnJheSA9IHByb2plY3QoJ01hc3RlciBMaXN0Jyk7XG5cbi8vSnVzdCBsb2FkIG1hc3RlciBhcnJheSBpbiB0aGUgYmVnaW5uaW5nIG9mIGVhY2ggcGFnZSBsb2FkP1xuXG5sZXQgbmV3aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xubmV3aXRlbS50ZXh0Q29udGVudCA9ICdDbGljayB0byBDcmVhdGUgbmV3IEl0ZW0nO1xubmV3aXRlbS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvL2xldCBuZXd0eXBlID0gcHJvbXB0KCdXaGF0IHR5cGUgb2Ygb2JqZWN0IGlzIHRoaXM/Jyk7XG4gICAgbGV0IG5ld3RpdGxlID0gIHByb21wdCgnV2hhdCBpcyB0aGUgdGl0bGU/Jyk7XG4gICAgbGV0IG5ld2Rlc2NyaXB0aW9uID0gcHJvbXB0KCdXaGF0IGlzIHRoZSBkZXNjcmlwdGlvbj8nKTtcbiAgICAvL2xldCBuZXdkdWVkYXRlID0gcHJvbXB0KCdXaGF0IGlzIHRoZSBkdWUgZGF0ZT8nKTtcbiAgICAvL2xldCBuZXdkdWV0aW1lID0gcHJvbXB0KCdXaGF0IGlzIHRoZSBkdWUgdGltZT8nKTtcblxuICAgIC8vSnVzdCBkaXZpZGUgdGhlIG5ld2R1ZWRhdGUgdmFyaWFibGUgaW50byBtb250aCwgZGF0ZSwgYW5kIHllYXIgcHJvbXB0cy5cblxuICAgIGxldCBuZXdkdWVtb250aCA9IHByb21wdCgnV2hhdCBtb250aCBpcyB0aGlzIGl0ZW0gZHVlPycpO1xuICAgIGxldCBuZXdkdWVkYXRlb2Z0aGVtb250aCA9IHByb21wdChgV2hhdCBkYXRlIGlzIHRoaXMgaXRlbSBkdWUgaW4gJHtuZXdkdWVtb250aH0/YCk7XG4gICAgbGV0IG5ld2R1ZXllYXIgPSBwcm9tcHQoJ1doYXQgeWVhciBpcyB0aGlzIGl0ZW0gZHVlPyAnKTtcblxuICAgIC8vT25jZSBkaXZpZGVkLCBpbnNlcnQgdGhvc2UgdmFsdWVzIGludG8gYSBicmFuZCBuZXcgbmV3ZHVlZGF0ZVxuXG4gIC8qICBsZXQgbmV3ZHVlZGF0ZSA9IGAke2R1ZW1vbnRofSAke2R1ZWRhdGVvZnRoZW1vbnRofSAke2R1ZXllYXJ9YDsgKi9cblxuICAgIC8vQWxzbyBkaXZpZGUgbmV3ZHVldGltZSBpbnRvIGhvdXIgYW5kIG1pbnV0ZSAoMjQgaG91ciB0aW1lKVxuXG4gICAgbGV0IG5ld2R1ZWhvdXIgPSBwcm9tcHQoJ1doYXQgaG91ciBpcyB0aGlzIGR1ZScpO1xuICAgIGxldCBuZXdkdWVtaW51dGUgPSBwcm9tcHQoYFRoaXMgaXRlbSBpcyBkdWUgb24gJHtuZXdkdWVob3VyfTogYCk7ICBcblxuXG4gICAgLy9Vc2Ugc2V0aG91cnMgaW5zdGVhZCB0byBob2xkIHRpbWVcblxuICAgIC8vT25jZSBkaXZpZGVkLCBpbnNlcnQgdGhvc2UgdmFsdWVzIGludG8gYSBicmFuZCBuZXcgbmV3ZHVldGltZVxuICAvKiAgbGV0IG5ld2R1ZXRpbWUgPSAoZHVlaG91ciwgZHVlbWludXRlKTsgKi9cblxuXG4gICAgLy9JbiBsaXN0aXRlbS5qcywgYWRkIGEgcGFyYW1ldGVyIHRvIHRoZSBsaXN0aXRlbSBvYmplY3QgYW5kIHByb2plY3RcbiAgICAvL29iamVjdCB0aGF0IHJlY29yZHMgdGhlIGRhdGUgb2YgY3JlYXRpb24gYW5kIHN1YnNlcXVlbnQgdXBkYXRlIGRhdGVzIGFuZCB0aW1lc1xuICAgIFxuICAgIGxldCBuZXdsaXN0SXRlbSA9IGxpc3RJdGVtKG5ld3RpdGxlLCBuZXdkZXNjcmlwdGlvbiwgbmV3ZHVleWVhciwgbmV3ZHVlbW9udGgsIG5ld2R1ZWRhdGVvZnRoZW1vbnRoLCBuZXdkdWVob3VyLCBuZXdkdWVtaW51dGUpO1xuICAgIFxuICAgIGxldCBvbGRTYXZlZE1hc3RlckFycmF5SlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXN0ZXJBcnJheScpO1xuICAgIGxldCBvbGRTYXZlZE1hc3RlckFycmF5ID0gSlNPTi5wYXJzZShvbGRTYXZlZE1hc3RlckFycmF5SlNPTik7XG4gICAgLy9jb25zb2xlLmxvZyhvbGRTYXZlZE1hc3RlckFycmF5KVxuXG4gICAgaWYgKG9sZFNhdmVkTWFzdGVyQXJyYXlKU09OICYmIG1hc3RlckFycmF5Lml0ZW1BcnJheS5sZW5ndGggPT09IG9sZFNhdmVkTWFzdGVyQXJyYXkuaXRlbUFycmF5Lmxlbmd0aCkge1xuXG4gICAgICAgIG1hc3RlckFycmF5LmFkZEl0ZW0obmV3bGlzdEl0ZW0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgbGV0IGVxdWFsTWFzdGVyQXJyYXlKU09OID0gSlNPTi5zdHJpbmdpZnkobWFzdGVyQXJyYXkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWFzdGVyQXJyYXknLCBlcXVhbE1hc3RlckFycmF5SlNPTik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmIChvbGRTYXZlZE1hc3RlckFycmF5SlNPTikge1xuICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgKG9sZFNhdmVkTWFzdGVyQXJyYXkuaXRlbUFycmF5KS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgIG1hc3RlckFycmF5LmFkZEl0ZW0ob2xkU2F2ZWRNYXN0ZXJBcnJheS5pdGVtQXJyYXlbeF0pO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgbWFzdGVyQXJyYXkuYWRkSXRlbShuZXdsaXN0SXRlbSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBuZXdTYXZlZE1hc3RlckFycmF5SlNPTiA9IEpTT04uc3RyaW5naWZ5KG1hc3RlckFycmF5KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYXN0ZXJBcnJheScsIG5ld1NhdmVkTWFzdGVyQXJyYXlKU09OKTtcbiAgICBcbiAgICAgICAgfSAgIGVsc2Uge1xuICAgIFxuICAgICAgICAgICAgbWFzdGVyQXJyYXkuYWRkSXRlbShuZXdsaXN0SXRlbSk7XG4gICAgICAgICAgICBsZXQgbmV3SlNPTiA9IEpTT04uc3RyaW5naWZ5KG1hc3RlckFycmF5KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYXN0ZXJBcnJheScsIG5ld0pTT04pO1xuICAgIFxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21hc3RlckFycmF5JykpKTtcblxuXG59XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld2l0ZW0pO1xuXG5cbmxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgTG9jYWwgU3RvcmFnZSc7XG5kZWxldGVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFzdGVyQXJyYXknKSkpO1xuXG59XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cblxubGV0IGRpc3BsYXlTdG9yYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5kaXNwbGF5U3RvcmFnZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEaXNwbGF5IEN1cnJlY3QgU3RvcmFnZSc7XG5kaXNwbGF5U3RvcmFnZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXN0ZXJBcnJheScpKSk7XG5cbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlzcGxheVN0b3JhZ2VCdXR0b24pO1xuXG5cblxuLypcblxuXG5sZXQgZG9Ib21ld29yayA9IGxpc3RJdGVtKCdEbyBIb21ld29yaycsICdEbyBteSBIb21ld29yayB0b21tb3Jyb3cnLCAnRHVlIG9uIE1vbmRheScsICdkdWUgYXQgOCBBTScpO1xubWFzdGVyQXJyYXkuYWRkSXRlbShkb0hvbWV3b3JrKTtcblxubGV0IHdyaXRlRXNzYXkgPSBsaXN0SXRlbSgnV3JpdGUgRXNzYXknLCAnV3JpdGUgRXNzYXkgZm9yIFNwYW5pc2ggY2xhc3MnLCAnRHVlIG9uIFR1ZXNkYXknLCAnRHVlIGF0IDEyIFBNJyk7XG5tYXN0ZXJBcnJheS5hZGRJdGVtKHdyaXRlRXNzYXkpO1xuXG5sZXQgd29yayA9IHByb2plY3QoJ1dvcmsgQXNzaWdubWVudHMnKTtcbm1hc3RlckFycmF5LmFkZEl0ZW0od29yayk7XG5cbmxldCBzdGFydERyYXdpbm5nID0gbGlzdEl0ZW0oJ1N0YXJ0IERyYXdpbmcnLCAnU3RhcnQgRHJhd2luZyBmb3IgQXJ0IENsYXNzJywgJ0R1ZSBvbiBXZWRuZXNkYXknLCAnRHVlIGF0IDQgUE0nKTtcbm1hc3RlckFycmF5LmFkZEl0ZW0oc3RhcnREcmF3aW5uZyk7XG5cbmxldCBzY2hvb2xzdHVmZiA9IHByb2plY3QoJ3NjaG9vbCcpO1xubWFzdGVyQXJyYXkuYWRkSXRlbShzY2hvb2xzdHVmZik7XG5cbnNjaG9vbHN0dWZmLmFkZEl0ZW0oZG9Ib21ld29yayk7XG5cbmxldCBkb1NjcmliZVJlY29yZHMgPSBsaXN0SXRlbSgnRG8gc2NyaWJlIHJlY29yZGluZ3MnLCAnRG8gdGhlbSBiZWZvcmUgdGhlIERyLiBnZXRzIGhlcmUnLCAnRHVlIG9uIFR1ZXNkYXknLCAnRHVlIGF0IDkgQU0nKTtcbndvcmsuYWRkSXRlbShkb1NjcmliZVJlY29yZHMpO1xuXG5sZXQgYXBwbGljYXRpb25zID0gcHJvamVjdCgnV29yayBBcHBsaWNhdGlvbiBTdGVwcyBmb3IgRGlmZmVyZW50IEpvYnMnKTtcbndvcmsuYWRkSXRlbShhcHBsaWNhdGlvbnMpO1xuXG5cbmNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcblxuKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==