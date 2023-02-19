
let listItem = function(title, description, dueDate, dueTime) {
    let type = "list-item"
    return {type, title, description, dueDate, dueTime}

}

let project = function(title) {

    let type = "project"
    let itemArray = [];
    let addItem = function(item) {

        itemArray.push(item);

    }

    let removeItem = function(item) {
        if (item.title) {
            //Initial version of the function that depends on simple linear search

            for (let x = 0; x < itemArray.length; x++) {

                if (itemArray[x].title === item.title) {

                    itemArray.splice(x,1);
                    break;

                }

            }
            //Later version that SHOULD use binary search once the date format is integrated
            //correctly
        }
    }
    return {type, title, addItem, removeItem, itemArray};
}


export {listItem, project};

