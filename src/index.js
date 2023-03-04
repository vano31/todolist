import {listItem, project} from './listitem.js';
import './style.css';
import {page} from './layout.js';
import { add } from 'lodash';
import {notetemplate} from './notetemplate.js'

let {wrapper, sidebar, mainsection, addsection, listsection, searchsection, itemsection, linkforAll, linkforNotesOnly, linkforProjectsOnly, linkforPriority} = page();

//Make a separate tab for projects only, tabs for list only, tab for tab deciding
//via dropdown, and tab for mixing projects and items based on date

let masterArray = project('Master List');


//Just load master array in the beginning of each page load?


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////// Create Element Button, Display Local Storage Button, and Delete Local Storage Button Will Be Phased Out ///////////



let newitem = document.createElement('button');
newitem.textContent = 'Click to Create new Item';
newitem.onclick = function() {

    
    let newtitle =  prompt('What is the title?');
    let newdescription = prompt('What is the description?');
    
    //Just divide the newduedate variable into month, date, and year prompts.

    let newduemonth = prompt('What month is this item due?');
    let newduedateofthemonth = prompt(`What date is this item due in ${newduemonth}?`);
    let newdueyear = prompt('What year is this item due? ');

    //Once divided, insert those values into a brand new newduedate
    //Also divide newduetime into hour and minute (24 hour time)

    let newduehour = prompt('What hour is this due');
    let newdueminute = prompt(`This item is due on ${newduehour}: `);  

    //Once divided, insert those values into a brand new newduetime

    //In listitem.js, add a parameter to the listitem object and project
    //object that records the date of creation and subsequent update dates and times
    
    let newlistItem = listItem(newtitle, newdescription, newdueyear, newduemonth, newduedateofthemonth, newduehour, newdueminute);
    
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
addsection.appendChild(newitem);


let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete Local Storage';
deleteButton.onclick = function() {

    localStorage.clear();
    console.log(JSON.parse(localStorage.getItem('masterArray')));

}
addsection.appendChild(deleteButton);


let displayStorageButton = document.createElement('button');
displayStorageButton.textContent = 'Display Currect Storage';
displayStorageButton.onclick = function() {

    console.log(JSON.parse(localStorage.getItem('masterArray')));
}
addsection.appendChild(displayStorageButton);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////














