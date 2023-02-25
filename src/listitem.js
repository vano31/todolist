
let listItem = function(title, description, dueYear, dueMonth, dueDay, dueHour, dueMinute) {
    let type = "list-item";


    //Use sethours
    let correctdueDate = new Date(dueYear, dueMonth, dueDay, dueHour, dueMinute);
    //let correctdueTime = correctdueDate.setHours(dueTime);

    return {type, title, description, correctdueDate /*correctdueTime*/}

}

let project = function(title) {

    let type = "project"
    let itemArray = [];

    let orderBytype = function() {

        for (let x = 0; x < itemArray.length; x++) {
            if (itemArray[x].type === 'project') {

                let projectitem = itemArray.splice(x,1);
                itemArray.unshift(projectitem);

            }
        } 
    }


    let addItem = function(item) {

        itemArray.push(item);
        orderBytype();

    }

    let removeItem = function(item) {
        if (item.title) {
            //Initial version of the function that depends on simple linear search

            for (let x = 0; x < itemArray.length; x++) {

                if (itemArray[x].title === item.title) {

                    itemArray.splice(x,1);
                    orderBytype();
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

