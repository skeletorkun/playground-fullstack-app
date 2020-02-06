const {noteType} = require('../nodeTypes');
const {GraphQLList} = require('graphql');
const NoteService = require('../../services/NoteService');

const NotesQuery = {
    type: GraphQLList(noteType),
    args: {},
    resolve: async () => {
        const noteService = new NoteService();
        return await noteService.getAllNotes();
    }
};

module.exports = {NotesQuery};