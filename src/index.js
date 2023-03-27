import {listItem, project} from './listitem.js';
import './style.css';
import {page} from './layout.js';
import { add } from 'lodash';
import {notetemplate, additiontemplate, edittemplate} from './notetemplate.js'

let {wrapper, sidebar, mainsection, addsection, listsection, searchsection, itemsection, linkforAll, linkforNotesOnly, linkforProjectsOnly, linkforPriority} = page();

//let deleteButtons = document.querySelectorAll('.deleteButton');

//Make a separate tab for projects only, tabs for list only, tab for tab deciding
//via dropdown, and tab for mixing projects and items based on date

let masterArray = project('Master List');

let displayedArray;

/////////////////////////////////////////////////////////////////////////////////////////////

//Add additiontemplate to searchsection on Dom

let {additionform, titleform, descriptionform, monthform, dateform, yearform, hourform, minuteform, radiocontainer, priorityYes, priorityNo} = additiontemplate();

searchsection.appendChild(additionform);

/////////////////////////////////////////////////////////////////////////////////////////////

//New Functions

let pageReloader = function() {

    if ((localStorage.getItem('masterArray')).length > 0) {

        let lsJson = localStorage.getItem('masterArray');
        let lsParsed = JSON.parse(lsJson, function(key, value) {
            if (key == 'correctdueDate') return new Date(value);
            return value;
        });

        for (let x = 0; x < lsParsed.itemArray.length; x++) {

            masterArray.addItem(lsParsed.itemArray[x]);
        }

    }

}

pageReloader();

let domRefresher = function() {

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    removeAllChildNodes(itemsection);

    for (let x = 0; x < masterArray.itemArray.length; x++) {

        let {notebox, editButton, deleteButton, title, description, correctdueDate} = notetemplate(masterArray.itemArray[x].title, masterArray.itemArray[x].description, masterArray.itemArray[x].correctdueDate);
        itemsection.appendChild(notebox);

    }

}

domRefresher();

let localStorageEqualizer = function() {

    let lsJson = localStorage.getItem('masterArray');
    let lsParsed = JSON.parse(lsJson, function(key, value) {
        if (key == 'correctdueDate') return new Date(value);
        return value;
    });

    

    if (masterArray.itemArray.length !== lsParsed.itemArray.length) {

        localStorage.clear();
        let maJSON = JSON.stringify(masterArray);
        localStorage.setItem('masterArray', maJSON);

    }
    

}

let localStorageEditEqualizer = function() {

    
    let lsJson = localStorage.getItem('masterArray');
    let lsParsed = JSON.parse(lsJson, function(key, value) {
        if (key == 'correctdueDate') return new Date(value);
        return value;
    });

    for (let x = 0; x < masterArray.itemArray.length; x++) {
    

        let itemDifferenceChecker = function(object){
            
            Object.keys(object).forEach(key => {

                if (object[key] !== lsParsed.itemArray[x][key]) {

                    //lsParsed.itemArray[x].key = object.key;
                    localStorage.clear();
                    let maJSON = JSON.stringify(masterArray);
                    localStorage.setItem('masterArray', maJSON);

                }
            
                
            });

            
        }

        itemDifferenceChecker(masterArray.itemArray[x]);
    }

    return false

}


//////////////////////////////////////////////////////////////////////////////////////////////


let newitem = document.createElement('button');
newitem.textContent = 'Click to Create new Item';
newitem.onclick = function() {


    //Will refactor the prompts into forms

    let newtitle =   titleform.value //prompt('What is the title?');
    let newdescription = descriptionform.value //prompt('What is the description?');
    
    //Just divide the newduedate variable into month, date, and year prompts.

    let newduemonth = monthform.value //prompt('What month is this item due?');
    let newduedateofthemonth = dateform.value //prompt(`What date is this item due in ${newduemonth}?`);
    let newdueyear = yearform.value //prompt('What year is this item due? ');

    //Once divided, insert those values into a brand new newduedate
    //Also divide newduetime into hour and minute (24 hour time)

    let newduehour = hourform.value //prompt('What hour is this due');
    let newdueminute = minuteform.value //prompt(`This item is due on ${newduehour}: `);  

    //Once divided, insert those values into a brand new newduetime

    //In listitem.js, add a parameter to the listitem object and project
    //object that records the date of creation and subsequent update dates and times

    let newpriority;

    if (document.getElementById('priorityYes').checked) {
        newpriority = document.getElementById('priorityYes').value;
    }   else if (document.getElementById('priorityNo').checked) {
        newpriority = document.getElementById('priorityNo').value;
    }   else {
        newpriority = null
    }

    //let newpriority = priorty.value;
    
    let newlistItem = listItem(newtitle, newdescription, newdueyear, newduemonth, newduedateofthemonth, newduehour, newdueminute, newpriority);

    masterArray.addItem(newlistItem);
    localStorageEqualizer();
    domRefresher();

}
addsection.appendChild(newitem);



let deleteAllButton = document.createElement('button');
deleteAllButton.textContent = 'Delete All Notes';
deleteAllButton.onclick = function() {


    for (let x = 0; x < masterArray.itemArray.length; x++) {

        masterArray.removeItem(masterArray.itemArray[x]);

    }

    localStorageEqualizer();
    domRefresher();

    let lsJson = localStorage.getItem('masterArray');
    let lsParsed = JSON.parse(lsJson, function(key, value) {
        if (key == 'correctdueDate') return new Date(value);
        return value;
    });

    console.log(masterArray);
    console.log(lsParsed);

}
addsection.appendChild(deleteAllButton);


let displayStorageButton = document.createElement('button');
displayStorageButton.textContent = 'Display Currect Storage';
displayStorageButton.onclick = function() {

    let lsJson = localStorage.getItem('masterArray');
    let lsParsed = JSON.parse(lsJson, function(key, value) {
        if (key == 'correctdueDate') return new Date(value);
        return value;
    });

    console.log(masterArray);
    console.log(lsParsed);

}
addsection.appendChild(displayStorageButton);


let deleteButtons = document.querySelectorAll('.deleteButton');
document.body.addEventListener('click', function(e) {

    if(e.target.textContent === `X`) {

        //Change the logic to accomodate for no longer using deleteButtons as an array- You are now only targeting one button

            let date = e.target.parentNode.parentNode.parentNode.getElementsByClassName('middlesection')[0].innerHTML;
            let description = e.target.parentNode.parentNode.parentNode.getElementsByClassName('bottomsection')[0].innerHTML;
            let title = e.target.parentNode.parentNode.parentNode.getElementsByClassName('titleContainer')[0].innerHTML;

            for (let x = 0; x < masterArray.itemArray.length; x++) {

                if (masterArray.itemArray[x].title === title && masterArray.itemArray[x].description === description &&  (`Due: ${(masterArray.itemArray[x].correctdueDate).toString()}`).valueOf() === date.toString().valueOf() ) {
    
                    masterArray.itemArray.splice(x, 1);
                    localStorageEqualizer();
                    domRefresher();

                }
                
            }

    }

})


let editButtons = document.querySelectorAll('.editButton');
document.body.addEventListener('click', function(e) {

    if(e.target.textContent === `Edit`) {

        //e.target.setAttribute('type', 'button');

        //Change the logic to accomodate for no longer using deleteButtons as an array- You are now only targeting one button

            let date = e.target.parentNode.parentNode.parentNode.getElementsByClassName('middlesection')[0].innerHTML;
            let description = e.target.parentNode.parentNode.parentNode.getElementsByClassName('bottomsection')[0].innerHTML;
            let title = e.target.parentNode.parentNode.parentNode.getElementsByClassName('titleContainer')[0].innerHTML;

            for (let x = 0; x < masterArray.itemArray.length; x++) {

                if (masterArray.itemArray[x].title === title && masterArray.itemArray[x].description === description &&  (`Due: ${(masterArray.itemArray[x].correctdueDate).toString()}`).valueOf() === date.toString().valueOf() ) {
                    
                    //Step 2- Replace the DOM item with an addition template (or maybe, a new edit template)

                    //Step 3- 
                    
                    let {editform, titleform, descriptionform, monthform, dateform, yearform, hourform, minuteform, saveButton, closeButton, radiocontaineredit, priorityYesEdit, priorityNoEdit} = edittemplate();

                    wrapper.appendChild(editform);

                    titleform.value = masterArray.itemArray[x].title;
                    descriptionform.value = masterArray.itemArray[x].description;
                    monthform.value = masterArray.itemArray[x].dueMonth;
                    dateform.value = masterArray.itemArray[x].dueDate;
                    yearform.value = masterArray.itemArray[x].dueYear;
                    hourform.value = masterArray.itemArray[x].dueHour;
                    minuteform.value = masterArray.itemArray[x].dueMinute;


                    

                    saveButton.onclick = function() {


                        masterArray.itemArray[x].title = titleform.value
                        masterArray.itemArray[x].description = descriptionform.value
                        masterArray.itemArray[x].dueMonth = monthform.value
                        masterArray.itemArray[x].dueDate = dateform.value;
                        masterArray.itemArray[x].dueYear = yearform.value;
                        masterArray.itemArray[x].dueHour = hourform.value;
                        masterArray.itemArray[x].dueMinute = minuteform.value;

                        if (document.getElementById('priorityYesEdit').checked) {
                            masterArray.itemArray[x].priority = document.getElementById('priorityYesEdit').value;
                        }   else if (document.getElementById('priorityNoEdit').checked) {
                            masterArray.itemArray[x].priority = document.getElementById('priorityNoEdit').value;
                        }   else {
                            masterArray.itemArray[x].priority = null
                        }

                        console.log(masterArray.itemArray[x].title)

                        localStorageEditEqualizer();
                        localStorageEqualizer();
                        domRefresher();

                        //return false


                    }

                    closeButton.onclick = function() {

                        wrapper.removeChild(editform)

                    }


                    /*
    
                    masterArray.itemArray.splice(x, 1);
                    localStorageEqualizer();
                    domRefresher();

                    */

                }
                
            }

    }

})

let dueDateButton = document.querySelector('#linkforSortByDateDue');

dueDateButton.addEventListener('click', function() {

    displayedArray = masterArray;
    displayedArray.itemArray.sort((a,b) => {
        if (a.correctdueDate > b.correctdueDate) return 1;
        if (a.correctdueDate < b.correctdueDate) return -1;
        return 0;
    })

    console.log(displayedArray);






})














///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////














