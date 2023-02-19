import {listItem, project} from './listitem.js'

//let masterArray = []

console.log('Izuku Dripdoria');

let doHomework = listItem('Do Homework', 'Do my Homework tommorrow', 'Due on Monday', 'due at 8 AM');
//masterArray.push(doHomework);

let writeEssay = listItem('Write Essay', 'Write Essay for Spanish class', 'Due on Tuesday', 'Due at 12 PM');
//masterArray.push(writeEssay);

let startDrawinng = listItem('Start Drawing', 'Start Drawing for Art Class', 'Due on Wednesday', 'Due at 4 PM');
//masterArray.push(startDrawinng);

console.log(doHomework, writeEssay, startDrawinng);

let schoolstuff = project('school');
//masterArray.push(schoolstuff);

schoolstuff.addItem(doHomework);

console.log(schoolstuff);












