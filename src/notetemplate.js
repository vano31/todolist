let notetemplate = function(title, description, correctdueDate) {

    let notebox = document.createElement('div');
    notebox.classList.add('notebox');

    let topsection = document.createElement('h1');
    topsection.classList.add('topsection');
    topsection.textContent = `${title}`;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('deleteButton');
    topsection.appendChild(deleteButton);

    notebox.appendChild(topsection);

    let middlesection = document.createElement('h2');
    middlesection.classList.add('middlesection');
    middlesection.textContent = `Due: ${correctdueDate}`;
    notebox.appendChild(middlesection);

    let bottomsection = document.createElement('h3');
    bottomsection.classList.add('bottomsection');
    bottomsection.textContent = `${description}`;
    notebox.appendChild(bottomsection);

    
    return {notebox, topsection, middlesection, bottomsection}

}

export {notetemplate}