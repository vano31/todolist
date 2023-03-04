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

    let linkforAll = document.createElement('button');
    linkforAll.textContent = 'Show All';
    linkforAll.id = 'linkforAll';
    listsection.appendChild(linkforAll);
    
    let linkforNotesOnly = document.createElement('button');
    linkforNotesOnly.textContent = 'Show Notes Only';
    linkforNotesOnly.id = 'linkforNotesOnly';
    listsection.appendChild(linkforNotesOnly);

    let linkforProjectsOnly = document.createElement('button');
    linkforProjectsOnly.textContent = 'Show Projects Only';
    linkforProjectsOnly.id = 'linkforProjectsOnly';
    listsection.appendChild(linkforProjectsOnly);

    let linkforPriority = document.createElement('button');
    linkforPriority.textContent = 'Show Priority Only';
    linkforPriority.id = 'linkforPriority';
    listsection.appendChild(linkforPriority);

    return {wrapper, sidebar, mainsection, addsection, listsection, searchsection, itemsection, linkforAll, linkforNotesOnly, linkforProjectsOnly, linkforPriority}

}


export {page};