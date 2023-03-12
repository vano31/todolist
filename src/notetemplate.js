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

export {notetemplate}