//**turns object into a JSON string
// var obj = {
//     name: 'Griffin'
// };
// //JSON = JavaScript Object Notation
// var stringObj = JSON.stringify(obj); //takes obj object and turns it into a string
// console.log(typeof stringObj);
// console.log(stringObj);

//**turns string into JSON's original for ie.array or Object
// var personString = '{"Name": "Griffin", "age": 21}'; //JSON obj format in a string
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
