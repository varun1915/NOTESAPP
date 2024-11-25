const chalk = require("chalk");
const fs = require('fs');

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(err) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json",dataJSON);  
}

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(note => note.title===title)
    const duplicateNote = notes.find(note => note.title===title)
    debugger
    if(!!!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgBlue.italic("New Node Added!"));
    }else{
        console.log(chalk.bgRed.italic("Note Title Already Taken!"));
    }
}


const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title)
    if(notes.length !== newNotes.length){
        saveNotes(newNotes);
        console.log(chalk.bgGreen.italic("Note Deleted!"));
    }else{
        console.log(chalk.bgRed.italic("No Note Found!"));
    }
}

const listNotes = (title) => {
    const notes = loadNotes();
    console.log(chalk.cyan("Your Notes:"));
    notes.map((note) => {
        console.log("Title:",note.title);
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title===title);
    if(!!note){
        console.log(chalk.blue.bold("Title:"),chalk.green.bold(note.title));
        console.log(chalk.blue.bold("Body :"),chalk.green.bold(note.body));
    }else{
        console.log(chalk.bgRed.italic("No Note Found!"));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}