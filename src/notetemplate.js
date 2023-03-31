import { add, min } from "lodash";

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
//additionform.setAttribute('method', 'post');
//additionform.setAttribute('action', './index.js')
additionform.id = 'additionform';

let titledivadd = document.createElement('div');
let titleform = document.createElement('input');
titleform.id = 'titleform';
titleform.placeholder = 'Insert Title Here';
titleform.setAttribute('name', 'title');
let titlelabel = document.createElement('label')
titlelabel.textContent = 'Title'
titlelabel.setAttribute('from', 'titleform');
titlelabel.classList.add('addlabel');
titledivadd.appendChild(titlelabel)
titledivadd.appendChild(titleform);
additionform.appendChild(titledivadd);

let descriptiondivadd = document.createElement('div');
let descriptionform = document.createElement('textarea');
descriptionform.id = 'descriptionform';
descriptionform.placeholder = 'Insert Description of Task Here';
descriptionform.setAttribute('name', 'description');
let descriptionlabel = document.createElement('label')
descriptionlabel.textContent = 'Description'
descriptionlabel.classList.add('addlabel');
descriptionlabel.setAttribute('from', 'descriptionform');
descriptiondivadd.appendChild(descriptionlabel)
descriptiondivadd.appendChild(descriptionform);
additionform.appendChild(descriptiondivadd);

let monthdivadd = document.createElement('div');
let monthform = document.createElement('input');
monthform.id = 'monthform';
monthform.placeholder = '01';
monthform.setAttribute('name', 'Month');
let monthlabel = document.createElement('label')
monthlabel.textContent = 'Month'
monthlabel.classList.add('addlabel')
monthlabel.setAttribute('from', 'monthform');
monthdivadd.appendChild(monthlabel)
monthdivadd.appendChild(monthform);
additionform.appendChild(monthdivadd);

let datedivadd = document.createElement('div');
let dateform = document.createElement('input');
dateform.id = 'dateform';
dateform.placeholder = '31'
dateform.setAttribute('name', 'date');
let datelabel = document.createElement('label')
datelabel.textContent = 'Date'
datelabel.classList.add('addlabel')
datelabel.setAttribute('from', 'dateform');
datedivadd.appendChild(datelabel)
datedivadd.appendChild(dateform);
additionform.appendChild(datedivadd);

let yeardivadd = document.createElement('div');
let yearform = document.createElement('input');
yearform.id = 'yearform';
yearform.placeholder = '2023';
yearform.setAttribute('name', 'year');
let yearlabel = document.createElement('label')
yearlabel.textContent = 'Year'
yearlabel.classList.add('addlabel')
yearlabel.setAttribute('from', 'yearform');
yeardivadd.appendChild(yearlabel);
yeardivadd.appendChild(yearform);
additionform.appendChild(yeardivadd);

let hourdivadd = document.createElement('div');
let hourform = document.createElement('input');
hourform.id = 'hourform';
hourform.placeholder = '15';
hourform.setAttribute('name', 'hour');
let hourlabel = document.createElement('label')
hourlabel.textContent = 'Hour';
hourlabel.classList.add('addlabel')
hourlabel.setAttribute('from', 'hourform');
hourdivadd.appendChild(hourlabel)
hourdivadd.appendChild(hourform);
additionform.appendChild(hourdivadd);

let minutedivadd = document.createElement('div');
let minuteform = document.createElement('input');
minuteform.id = 'minuteform';
minuteform.placeholder = '30';
minuteform.setAttribute('name', 'minute');
let minutelabel = document.createElement('label')
minutelabel.textContent = 'Minute'
minutelabel.classList.add('addlabel')
minutelabel.setAttribute('from', 'minuteform');
minutedivadd.appendChild(minutelabel)
minutedivadd.appendChild(minuteform);
additionform.appendChild(minutedivadd);

/////////////////////////////////////////////////

let radiocontainer = document.createElement('div');
//radiocontainer.classList.add('radiocontainer');
radiocontainer.id = 'radiocontainer';

let priorityYes = document.createElement('input');
priorityYes.setAttribute('type', 'radio');
priorityYes.id = 'priorityYes';
priorityYes.setAttribute('name', 'priority');
priorityYes.setAttribute('value', 'yes');
radiocontainer.appendChild(priorityYes)

let priorityYesLabel = document.createElement('label');
priorityYesLabel.textContent = 'Priority';
priorityYesLabel.setAttribute('style', 'font-style: italic');
priorityYesLabel.id = 'priorityYesLabel';
radiocontainer.appendChild(priorityYesLabel);


let priorityNo = document.createElement('input');
priorityNo.setAttribute('type', 'radio');
priorityNo.id = 'priorityNo';
priorityNo.setAttribute('name', 'priority');
priorityNo.setAttribute('value', 'no');
radiocontainer.appendChild(priorityNo);

let priorityNoLabel = document.createElement('label');
priorityNoLabel.textContent = 'Not Priority'
priorityNoLabel.id = 'priorityNoLabel';
radiocontainer.appendChild(priorityNoLabel)

additionform.appendChild(radiocontainer);

//newitem button on index.js will be the submit button

return {additionform, titledivadd, titleform, descriptiondivadd, descriptionform, monthdivadd, monthform, datedivadd, dateform, yeardivadd, yearform, hourdivadd, hourform, minutedivadd, minuteform, radiocontainer, priorityYes, priorityNo}

}


let edittemplate = function() {

    let editform = document.createElement('form');
    //editform.setAttribute('method', 'post');
    //editform.setAttribute('action', './index.js')
    editform.id = 'editform';
    
    let titlediv = document.createElement('div');
    let titleform = document.createElement('input');
    titleform.id = 'titleform-edit';
    titleform.setAttribute('name', 'title-edit');
    let titlelabel = document.createElement('label')
    titlelabel.textContent = 'Title'
    titlelabel.setAttribute('from', 'titleform-edit');
    titlediv.appendChild(titlelabel)
    titlediv.appendChild(titleform);
    editform.appendChild(titlediv)
    
    let descriptiondiv = document.createElement('div');
    let descriptionform = document.createElement('input');
    descriptionform.id = 'descriptionform-edit';
    descriptionform.setAttribute('name', 'description-edit');
    let descriptionlabel = document.createElement('label')
    descriptionlabel.textContent = 'Description'
    descriptionlabel.setAttribute('from', 'descriptionform-edit');
    descriptiondiv.appendChild(descriptionlabel)
    descriptiondiv.appendChild(descriptionform);
    editform.appendChild(descriptiondiv)
    
    let monthdiv = document.createElement('div');
    let monthform = document.createElement('input');
    monthform.id = 'monthform-edit';
    monthform.setAttribute('name', 'month-edit');
    let monthlabel = document.createElement('label')
    monthlabel.textContent = 'Month'
    monthlabel.setAttribute('from', 'monthform-edit');
    monthdiv.appendChild(monthlabel)
    monthdiv.appendChild(monthform);
    editform.appendChild(monthdiv);
    
    let datediv = document.createElement('div');
    let dateform = document.createElement('input');
    dateform.id = 'dateform-edit';
    dateform.setAttribute('name', 'date-edit');
    let datelabel = document.createElement('label')
    datelabel.textContent = 'Date'
    datelabel.setAttribute('from', 'dateform-edit');
    datediv.appendChild(datelabel)
    datediv.appendChild(dateform);
    editform.appendChild(datediv);
    
    let yeardiv = document.createElement('div');
    let yearform = document.createElement('input');
    yearform.id = 'yearform-edit';
    yearform.setAttribute('name', 'year-edit');
    let yearlabel = document.createElement('label')
    yearlabel.textContent = 'Year'
    yearlabel.setAttribute('from', 'yearform-edit');
    yeardiv.appendChild(yearlabel)
    yeardiv.appendChild(yearform);
    editform.appendChild(yeardiv);
    
    let hourdiv = document.createElement('div');
    let hourform = document.createElement('input');
    hourform.id = 'hourform-edit';
    hourform.setAttribute('name', 'hour-edit');
    let hourlabel = document.createElement('label')
    hourlabel.textContent = 'Hour';
    hourlabel.setAttribute('from', 'hourform-edit');
    hourdiv.appendChild(hourlabel)
    hourdiv.appendChild(hourform);
    editform.appendChild(hourdiv);
    
    let minutediv = document.createElement('div');
    let minuteform = document.createElement('input');
    minuteform.id = 'minuteform-edit';
    minuteform.setAttribute('name', 'minute-edit');
    let minutelabel = document.createElement('label')
    minutelabel.textContent = 'Minute'
    minutelabel.setAttribute('from', 'minuteform-edit');
    minutediv.appendChild(minutelabel)
    minutediv.appendChild(minuteform);
    editform.appendChild(minutediv);


    let editformbuttoncontainer = document.createElement('div');
    editformbuttoncontainer.classList.add(`editformbuttoncontainer`);
    let saveButton = document.createElement('button');
    saveButton.classList.add('saveButton');
    saveButton.setAttribute('type', 'button');
    saveButton.textContent = 'Save';
    editformbuttoncontainer.appendChild(saveButton);
    let closeButton = document.createElement('button');
    closeButton.classList.add('closeButton');
    closeButton.setAttribute('type', 'button');
    closeButton.textContent = 'Close';
    editformbuttoncontainer.appendChild(closeButton);
    editform.appendChild(editformbuttoncontainer);

    ///////////////////////////////////////////////////////////
    
    let radiocontaineredit = document.createElement('div');
    //radiocontaineredit.classList.add('radiocontaineredit');
    radiocontaineredit.id = 'radiocontaineredit';

    let priorityYesEdit = document.createElement('input');
    priorityYesEdit.setAttribute('type', 'radio');
    priorityYesEdit.id = 'priorityYesEdit';
    priorityYesEdit.setAttribute('name', 'priority');
    priorityYesEdit.setAttribute('value', 'yes');
    radiocontaineredit.appendChild(priorityYesEdit)

    let priorityYesLabelEdit = document.createElement('label');
    priorityYesLabelEdit.textContent = 'Priority';
    priorityYesLabelEdit.id = 'priorityYes';
    radiocontaineredit.appendChild(priorityYesLabelEdit);


    let priorityNoEdit = document.createElement('input');
    priorityNoEdit.setAttribute('type', 'radio');
    priorityNoEdit.id = 'priorityNoEdit';
    priorityNoEdit.setAttribute('name', 'priority');
    priorityNoEdit.setAttribute('value', 'no');
    radiocontaineredit.appendChild(priorityNoEdit);

    let priorityNoLabelEdit = document.createElement('label');
    priorityNoLabelEdit.textContent = 'Not Priority';
    priorityNoLabelEdit.id = 'priorityNoEdit';
    radiocontaineredit.appendChild(priorityNoLabelEdit)

    editform.appendChild(radiocontaineredit);
    
    //newitem button on index.js will be the submit button
    
    return {editform, titlediv, titleform, descriptiondiv, descriptionform, monthdiv, monthform, datediv, dateform, yeardiv, yearform, hourdiv, hourform, minutediv, minuteform, editformbuttoncontainer, saveButton, closeButton, radiocontaineredit, priorityYesEdit, priorityNoEdit}


}

export {notetemplate, additiontemplate, edittemplate}