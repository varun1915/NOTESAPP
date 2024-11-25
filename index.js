const yargs = require('yargs');
const chalk = require("chalk");
const notes = require("./notes.js");

// Adding Note Command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Removing Note Command
yargs.command({
    command: "remove",
    describe: "Remove a new note",
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// Listing Note Command
yargs.command({
    command: "list",
    describe: "List your notes",
    handler() {
        notes.listNotes();
    }
})

// Reading Note Command
yargs.command({
    command: "read",
    describe: "Read a new note",
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

//* It tells the yargs to parse but also print it 
// console.log(yargs.argv);

//* So use it instead
yargs.parse();