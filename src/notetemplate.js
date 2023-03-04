let notetemplate = function(title, description, correctdueDate) {

    let notebox = document.createElement('div');
    notebox.classList.add('notebox');

    let topsection = document.createElement('h1');
    topsection.textContent = `${title}`;
    notebox.appendChild(topsection);

    let middlesection = document.createElement('h2');
    middlesection.textContent = `Due: ${correctdueDate}`;
    notebox.appendChild(middlesection);

    let bottomsection = document.createElement('h3');
    bottomsection.textContent = `${description}`;
    notebox.appendChild(bottomsection);

    
    return {notebox}

}

export {notetemplate}