const express = require('express')
const router = express.Router()
const cors = require('cors')
const { getNotes, addNote, getNoteById, updateNote, deleteNoteById } = require('../controllers/noteController')

//middleware
router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))


router.get('/:id', getNoteById)
router.get('/', getNotes)
router.post('/', addNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNoteById)

module.exports = router