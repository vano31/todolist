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

    let linkforSortByDateDue = document.createElement('button');
    linkforSortByDateDue.textContent = 'Sort By Date Due';
    linkforSortByDateDue.id = 'linkforSortByDateDue';
    listsection.appendChild(linkforSortByDateDue);
    

    let linkforPriority = document.createElement('button');
    linkforPriority.textContent = 'Show Priority Only';
    linkforPriority.id = 'linkforPriority';
    listsection.appendChild(linkforPriority);

    return {wrapper, sidebar, mainsection, addsection, listsection, searchsection, itemsection, linkforSortByDateDue, linkforPriority}

}


export {page};