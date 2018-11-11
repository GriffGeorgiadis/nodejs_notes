//thrid party node modules
const fs = require('fs'); //fetch contents of fs module and store in fs var, loads in module
const _ = require('lodash');
const yargs = require('yargs'); //implements comand line functionality

//file i've written
const notes = require('./notes.js'); //includes notes.js in app.js so it is also executed

//title options object
const titleOptions = {describe:'Title of note', //decribes whats is passed in for Title
                        demand: true, //tells yars whether this arg is required
                        alias: 't'}; //provides short cut so u dont have to type -- = -t
//body options object
const bodyOptions = {describe:'Body of note', demand: true, alias: 'b'};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Removes a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('note created!');
        notes.logNote(note);
    }else{
        console.log('note title already in use');
    }
}else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing.. ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('note was read');
        notes.logNote(note);
    }else{
        console.log('note not found');
    }
}else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'note was removed' : 'note not found';
    console.log(message);
}else {
    console.log('not recognized');
}
