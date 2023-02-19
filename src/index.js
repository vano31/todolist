import {listItem, project} from './listitem.js'

console.log('Izuku Dripdoria');

let doHomework = listItem('Do Homework', 'Do my Homework tommorrow', 'Due on Monday', 'due at 8 AM');

let writeEssay = listItem('Write Essay', 'Write Essay for Spanish class', 'Due on Tuesday', 'Due at 12 PM');

let startDrawinng = listItem('Start Drawing', 'Start Drawing for Art Class', 'Due on Wednesday', 'Due at 4 PM');

console.log(doHomework, writeEssay, startDrawinng);

let schoolstuff = project('school');

schoolstuff.addItem(doHomework);

console.log(schoolstuff);

///////////////////////////////////////////////////

let goku = 'son goku';

window.goku = goku;

window.schoolstuff = schoolstuff;

window. writeEssay = writeEssay;

window.startDrawinng = startDrawinng;

window.doHomework = doHomework;

///////////////////////////////////////////////////////








