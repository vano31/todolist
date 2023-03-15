import {listItem, project} from './listitem.js';
import './style.css';
import {page} from './layout.js';
import { add } from 'lodash';
import {notetemplate} from './notetemplate.js'

let {wrapper, sidebar, mainsection, addsection, listsection, searchsection, itemsection, linkforAll, linkforNotesOnly, linkforProjectsOnly, linkforPriority} = page();

//let deleteButtons = document.querySelectorAll('.deleteButton');



//Make a separate tab for projects only, tabs for list only, tab for tab deciding
//via dropdown, and tab for mixing projects and items based on date

let masterArray = project('Master List');


//Just load master array in the beginning of each page load?

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

    if (oldSavedMasterArrayJSON && masterArray.itemArray.length === oldSavedMasterArray.itemArray.length) /* Bascially, if page was not refreshed */ {

        masterArray.addItem(newlistItem);

        //console.log(masterArray)

        localStorage.clear();
        let equalMasterArrayJSON = JSON.stringify(masterArray);
        localStorage.setItem('masterArray', equalMasterArrayJSON);

    } else {

        if (oldSavedMasterArrayJSON) /* Bascially, if page was refreshed and there is data in the local storage*/ {
        
            for (let x = 0; x < (oldSavedMasterArray.itemArray).length; x++) {
                masterArray.addItem(oldSavedMasterArray.itemArray[x]);
            }
    
            masterArray.addItem(newlistItem);

            //console.log(masterArray)
            
            let newSavedMasterArrayJSON = JSON.stringify(masterArray);
            localStorage.setItem('masterArray', newSavedMasterArrayJSON);
    
        }   else /*If page was refreshed but there is no data in local storage*/ {
    
            masterArray.addItem(newlistItem);

            

            let newJSON = JSON.stringify(masterArray);
            localStorage.setItem('masterArray', newJSON);
    
        }

    }

    /*

    console.log(JSON.parse(localStorage.getItem('masterArray'), function (key, value) {
        if (key === 'correctdueDate') return new Date(value);
        return value;
    }));

    */
    addtoDom();

    
}
addsection.appendChild(newitem);

//Just Make a new function that loads straight from localStorage and use that for display on DOM. 
let addtoDom = function() {

    let localStorageJSON = localStorage.getItem('masterArray');
    let localStorageParsedData = JSON.parse(localStorageJSON, function(key, value) {
        if (key == 'correctdueDate') return new Date(value);
        return value;
    
    });

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    removeAllChildNodes(itemsection);

    if (localStorageParsedData) {

        for (let x = 0; x < localStorageParsedData.itemArray.length; x++) {

    

            let {notebox, editButton, deleteButton, title, description, correctdueDate} = notetemplate(localStorageParsedData.itemArray[x].title, localStorageParsedData.itemArray[x].description, localStorageParsedData.itemArray[x].correctdueDate);
            itemsection.appendChild(notebox);
    
    
    
            /*
            
            deleteButton.onclick = function() {
    
                //let {title, description, correctdueDate} = addtoDom();
            
                //Use a for loop to search through the localStorage that has the exact title, description, and correctdueDate
            
                let localStorageJSON = localStorage.getItem('masterArray');
                let localStorageParsedData = JSON.parse(localStorageJSON, function(key, value) {
                    if (key == 'correctdueDate') return new Date(value);
                    return value;
            
                });
            
                for (let x = 0; x < localStorageParsedData.itemArray.length; x++) {
            
                    if (title === localStorageParsedData.itemArray[x].title && description === localStorageParsedData.itemArray[x].description && correctdueDate === localStorageParsedData.itemArray[x].correctdueDate) {
            
            
                //Then splice that out of localStorageData
                        localStorageParsedData.itemArray.splice(x, 1);
                        newlocalStorageJSON = JSON.stringify(localStorageParsedData);
                        localStorage.clear();
                        localStorage.setItem('masterArray', newlocalStorageJSON);
                        break;
            
                    }
                }
            
                //then addtoDom();
                addtoDom();
      
            
            }
    
            */
            
    
        }



    }

    /*

    for (let x = 0; x < localStorageParsedData.itemArray.length; x++) {

    

        let {notebox, editButton, deleteButton, title, description, correctdueDate} = notetemplate(localStorageParsedData.itemArray[x].title, localStorageParsedData.itemArray[x].description, localStorageParsedData.itemArray[x].correctdueDate);
        itemsection.appendChild(notebox);



        /*
        
        deleteButton.onclick = function() {

            //let {title, description, correctdueDate} = addtoDom();
        
            //Use a for loop to search through the localStorage that has the exact title, description, and correctdueDate
        
            let localStorageJSON = localStorage.getItem('masterArray');
            let localStorageParsedData = JSON.parse(localStorageJSON, function(key, value) {
                if (key == 'correctdueDate') return new Date(value);
                return value;
        
            });
        
            for (let x = 0; x < localStorageParsedData.itemArray.length; x++) {
        
                if (title === localStorageParsedData.itemArray[x].title && description === localStorageParsedData.itemArray[x].description && correctdueDate === localStorageParsedData.itemArray[x].correctdueDate) {
        
        
            //Then splice that out of localStorageData
                    localStorageParsedData.itemArray.splice(x, 1);
                    newlocalStorageJSON = JSON.stringify(localStorageParsedData);
                    localStorage.clear();
                    localStorage.setItem('masterArray', newlocalStorageJSON);
                    break;
        
                }
            }
        
            //then addtoDom();
            addtoDom();
  
        
        }

        */ /*
        

    } 
    */
    

    //deleteButtonFunction();

    /* Delete the return statement of localStorageParsedData for now, see if you can make stuff simple by only getting straight from localStorage each time
    console.log(localStorageParsedData)
    return {localStorageParsedData};
    */

}






let deleteAllButton = document.createElement('button');
deleteAllButton.textContent = 'Delete All Notes';
deleteAllButton.onclick = function() {

    localStorage.clear();
    console.log(JSON.parse(localStorage.getItem('masterArray')));

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    removeAllChildNodes(itemsection);
    
}
addsection.appendChild(deleteAllButton);


let displayStorageButton = document.createElement('button');
displayStorageButton.textContent = 'Display Currect Storage';
displayStorageButton.onclick = function() {

    console.log(JSON.parse(localStorage.getItem('masterArray'), function (key, value) {
        if (key === 'correctdueDate') return new Date(value);
        return value;
    }));

    //console.log(localStorageParsedData)
}
addsection.appendChild(displayStorageButton);



if (localStorage.length !== 0) {

    addtoDom();

}

/* Remove localStorageParsedData for now, take directly from storage

let {localStorageParsedData} = addtoDom();
console.log(localStorageParsedData);

*/

let deleteButtons = document.querySelectorAll('.deleteButton');


document.body.addEventListener('click', function(e) {

    if(e.target.textContent === `X`) {

        console.log(`It worked`);

        //Change the logic to accomodate for no longer using deleteButtons as an array- You are now only targeting one button

            let date = e.target.parentNode.parentNode.parentNode.getElementsByClassName('middlesection')[0].innerHTML;
            let description = e.target.parentNode.parentNode.parentNode.getElementsByClassName('bottomsection')[0].innerHTML;
            let title = e.target.parentNode.parentNode.parentNode.getElementsByClassName('titleContainer')[0].innerHTML;

            console.log(date);
            console.log(description);
            console.log(title);
    
            //Step 1- Locate the exist item that needs to be removed by making sure that date, description and title match

            //////////***Make a copy of local storage data, put into new array, splice the array based on conditionals, clear localStorage, and make new localStorage equal stringifeid version of new array */
    
            //console.log(localStorageParsedData)

            //let storedArray = localStorageParsedData.itemArray;

            //console.log(localStorageParsedData)
            //console.log(storedArray);

            let localStorageParsedData = (JSON.parse(localStorage.getItem('masterArray'), function (key, value) {
                if (key === 'correctdueDate') return new Date(value);
                return value;
            }));

            for (let x = 0; x < localStorageParsedData.itemArray.length; x++) {

    
                if (localStorageParsedData.itemArray[x].title === title && localStorageParsedData.itemArray[x].description === description &&  (`Due: ${(localStorageParsedData.itemArray[x].correctdueDate).toString()}`).valueOf() === date.toString().valueOf() ) {
    
                    //Step 2- find that list item in localStorageParsedData and splice that list item out of localStorageParsedData
    
                    localStorageParsedData.itemArray.splice(x, 1);
                    //console.log(storedArray);  
                    console.log(localStorageParsedData.itemArray)           
    
    
                    //Step 3- clear the current localStorage and replace it with the localStorageParsedData that contains the now updated array of list-items
    
                    localStorage.clear();
                    //localStorageParsedData.itemArray = storedArray;
                    localStorage.setItem('masterArray', JSON.stringify(localStorageParsedData));
    
    
                    //Step 4- Run addtoDom---- Actually, instead of running addtoDom here, remove the addtoDom function, and run deleteButtonFunction as a part of addtoDom?
                    addtoDom();

                    console.log(deleteButtons);
    
    
                }
                
    
            }
    
            
        

    }

})

/*
let deleteButtonFunction = function() {

    for (let x = 0; x < deleteButtons.length; x++ ) {

        deleteButtons[x].onclick = function() {
    
            let date = deleteButtons[x].parentNode.parentNode.parentNode.getElementsByClassName('middlesection')[0].innerHTML;
            let description = deleteButtons[x].parentNode.parentNode.parentNode.getElementsByClassName('bottomsection')[0].innerHTML;
            let title = deleteButtons[x].parentNode.parentNode.parentNode.getElementsByClassName('titleContainer')[0].innerHTML;
    
            //Step 1- Locate the exist item that needs to be removed by making sure that date, description and title match
    
            let storedArray = localStorageParsedData.itemArray;
            //console.log(storedArray);
            for (let x = 0; x < storedArray.length; x++) {

    
                if (storedArray[x].title === title && storedArray[x].description === description &&  (`Due: ${(storedArray[x].correctdueDate).toString()}`).valueOf() === date.toString().valueOf() ) {
    
                    //Step 2- find that list item in localStorageParsedData and splice that list item out of localStorageParsedData
    
                    storedArray.splice(x, 1);
                    console.log(storedArray);             
    
    
                    //Step 3- clear the current localStorage and replace it with the localStorageParsedData that contains the now updated array of list-items
    
                    localStorage.clear();
                    localStorageParsedData.itemArray = storedArray;
                    localStorage.setItem('masterArray', JSON.stringify(localStorageParsedData));
    
    
                    //Step 4- Run addtoDom---- Actually, instead of running addtoDom here, remove the addtoDom function, and run deleteButtonFunction as a part of addtoDom?
                    addtoDom();

                    console.log(deleteButtons);
    
    
                }
                
    
            }
    
            
        }
    
    }


}

*/

//deleteButtonFunction();




/*

deleteButtons[0].addEventListener("click", function() {

    console.log('Poop');

    //find the parent container, make the parent container a variable, and then find the title, description, date and time to delete the note
    //Use event dispatchment via Stack Overflow?? Also, got to think creatively
    //--> Use .parentElement.nodename to find the parent, then find the sibling from there
   //then delete from localStorage first, THEN delete from DOM

});

*/

//console.log(deleteButton);


//console.log(localStorageParsedData);

//Cant i just extract the deletebutton individually onto global state and THEN attach a global listener to it HERE?


//let {deleteButton} = addtoDom();












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////














