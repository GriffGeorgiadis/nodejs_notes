const fs = require('fs');

var fetchNotes = () => {
    //catches errors if notes-data.json doesnt exist (returns empty notes)
    try {
        //will allow us to append instead of rewriting
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }

};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); // (filename, content we wan to save)
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note); //add item to array
        saveNotes(notes);
        return note;
    }
};

var getAll = (title) => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var getNote = notes.filter((note) => note.title === title);
    return getNote[0];

};

var removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes();
    //filter notes, remove one with title of arg
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(filteredNotes);

    return notes.length != filteredNotes.length;
};



var logNote = (note) => {
    debugger;
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
