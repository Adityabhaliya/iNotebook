const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');

//get all notes using get '/api/notes/fetchallnotes' request login required 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error found ')
    }

})

//Add a new notes using post '/api/notes/addnote' request login required 
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast  characters').isLength({ min: 5 })
], async (req, res) => {

    try {

        const { title, description, tag } = req.body;
        //If there are errors , return bad requests and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Internal Server Error Found ')
    }
})

// update an existing note using put '/api/notes/updatenote' . login required 
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        //create a Newnote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //find the note to be updated and update it 
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('Not Allowed');
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Internal Server Error Found ')
    }
})

// delete an exising note sing delete'/api/notes/deletenote' . login required 
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        //find the note to be delete and delete it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        //Allow deletion only if user owns this note 
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('Not Allowed')
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "success": "Notes has been deleted ", note: note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Internal Server Error Found ')
    }
})
module.exports = router