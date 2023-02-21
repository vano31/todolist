import {listItem, project} from './listitem.js'

let masterArray = project('Master List');

//Just load master array in the beginning of each page load?

let newitem = document.createElement('button');
newitem.textContent = 'Click to Create new Item';
newitem.onclick = function() {

    let newtype = prompt('What type of object is this?');
    let newtitle =  prompt('What is the title?');
    let newdescription = prompt('What is the description?');
    let newduedate = prompt('What is the due date?');
    let newduetime = prompt('What is the due time?');

    let newlistItem = listItem(newtype, newtitle, newdescription, newduedate, newduetime);
    

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












