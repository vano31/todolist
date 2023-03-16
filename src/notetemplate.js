import { min } from "lodash";

let notetemplate = function(title, description, correctdueDate) {

    let notebox = document.createElement('div');
    notebox.classList.add('notebox');

    let topsection = document.createElement('h1');
    topsection.classList.add('topsection');
    //topsection.textContent = `${title}`;

    let titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    titleContainer.textContent = `${title}`;
    topsection.appendChild(titleContainer)


    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('editButton');
    buttonContainer.appendChild(editButton);


    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('deleteButton');
    

    /*
    deleteButton.onclick = function() {
        
        let titleToDelete = title;
        let descriptionToDelete = description;
        let correctdueDateToDelete = correctdueDate;

        return {titleToDelete, descriptionToDelete, correctdueDateToDelete}

    }
    */
   //Maybe I don't need to return these because every deleteButton is paired to a title, description, and correctDueDate anyway??
   //return the title, description, and correctdueDate instead...

    buttonContainer.appendChild(deleteButton);

    topsection.appendChild(buttonContainer);


    notebox.appendChild(topsection);

    let middlesection = document.createElement('h2');
    middlesection.classList.add('middlesection');
    middlesection.textContent = `Due: ${correctdueDate}`;
    notebox.appendChild(middlesection);

    let bottomsection = document.createElement('h3');
    bottomsection.classList.add('bottomsection');
    bottomsection.textContent = `${description}`;
    notebox.appendChild(bottomsection);

    
    return {notebox, topsection, middlesection, bottomsection, editButton, deleteButton, title, description, correctdueDate}

}


let additiontemplate = function() {


let additionform = document.createElement('form');
additionform.classList.add('additionform');

let titleform = document.createElement('input');
titleform.id = 'titleform';
let titlelabel = document.createElement('label')
titlelabel.textContent = 'Title'
titlelabel.setAttribute('from', 'titleform');
additionform.appendChild(titlelabel)
additionform.appendChild(titleform);

let descriptionform = document.createElement('input');
descriptionform.id = 'descriptionform';
let descriptionlabel = document.createElement('label')
descriptionlabel.textContent = 'Description'
descriptionlabel.setAttribute('from', 'descriptionform');
additionform.appendChild(descriptionlabel)
additionform.appendChild(descriptionform);

let monthform = document.createElement('input');
monthform.id = 'monthform';
let monthlabel = document.createElement('label')
monthlabel.textContent = 'Month'
monthlabel.setAttribute('from', 'monthform');
additionform.appendChild(monthlabel)
additionform.appendChild(monthform);

let dateform = document.createElement('input');
dateform.id = 'dateform';
let datelabel = document.createElement('label')
datelabel.textContent = 'Date'
datelabel.setAttribute('from', 'daetform');
additionform.appendChild(datelabel)
additionform.appendChild(dateform);

let yearform = document.createElement('input');
yearform.id = 'yearform';
let yearlabel = document.createElement('label')
yearlabel.textContent = 'Year'
yearlabel.setAttribute('from', 'yearform');
additionform.appendChild(yearlabel)
additionform.appendChild(yearform);

let hourform = document.createElement('input');
hourform.id = 'hourform';
let hourlabel = document.createElement('label')
hourlabel.textContent = 'Hour';
hourlabel.setAttribute('from', 'hourform');
additionform.appendChild(hourlabel)
additionform.appendChild(hourform);

let minuteform = document.createElement('input');
minuteform.id = 'minuteform';
let minutelabel = document.createElement('label')
minutelabel.textContent = 'Minute'
minutelabel.setAttribute('from', 'minuteform');
additionform.appendChild(minutelabel)
additionform.appendChild(minuteform);

//newitem button on index.js will be the submit button

return {additionform, titleform, descriptionform, monthform, dateform, yearform, hourform, minuteform}

}

export {notetemplate, additiontemplate}