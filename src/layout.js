let page = function() {

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    let sidebar = document.createElement('div');
    let mainsection = document.createElement('div');
    sidebar.id = 'sidebar';
    mainsection.id = 'mainsection';

    wrapper.appendChild(sidebar);
    wrapper.appendChild(mainsection);

    let addsection = document.createElement('div');
    addsection.id = 'addsection';
    sidebar.appendChild(addsection);

    let listsection = document.createElement('div');
    listsection.id = 'listsection';
    sidebar.appendChild(listsection);


    let searchsection = document.createElement('div');
    searchsection.id = 'searchsection';
    mainsection.appendChild(searchsection);

    let itemsection = document.createElement('div');
    itemsection.id = 'itemsection';
    mainsection.appendChild(itemsection);

    ////////////////////////////////////////////////////////////////////////////////

    //Will only show Sort By Date/Time, Show Priority Only, and Tags

    let listsectiondiv = document.createElement('div');
    listsectiondiv.id = 'listsectiondiv';

    let linkforSortByDateDue = document.createElement('button');
    linkforSortByDateDue.textContent = 'Sort By Date Due';
    linkforSortByDateDue.id = 'linkforSortByDateDue';
    listsectiondiv.appendChild(linkforSortByDateDue);
    

    let linkForShowAll = document.createElement('button');
    linkForShowAll.textContent = 'Show All Items';
    linkForShowAll.id = 'linkforShowAll';
    listsectiondiv.appendChild(linkForShowAll);

    /*

    let linkShowNotesOnly = document.createElement('button');
    linkShowNotesOnly.textContent = 'Show Notes Only';
    linkShowNotesOnly.id = 'linkShowNotesOnly';
    listsection.appendChild(linkShowNotesOnly);


    let linkShowProjectsOnly = document.createElement('button');
    linkShowProjectsOnly.textContent = 'Show Projects Only';
    linkShowProjectsOnly.id = 'linkShowProjectsOnly';
    listsection.appendChild(linkShowProjectsOnly);

    */
     

    let linkforPriority = document.createElement('button');
    linkforPriority.textContent = 'Show Priority Only';
    linkforPriority.id = 'linkforPriority';
    listsectiondiv.appendChild(linkforPriority);

    listsection.appendChild(listsectiondiv);

    return {wrapper, sidebar, mainsection, addsection, listsection, searchsection, itemsection, linkforSortByDateDue, linkforPriority}

}


export {page};