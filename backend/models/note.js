const mongoose = require('mongoose')
const {Schema} = mongoose

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const NoteModel = mongoose.model('Note', noteSchema)

module.exports = NoteModel