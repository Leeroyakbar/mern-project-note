const Note = require("../models/note");

const addNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title) {
      return res.status(400).json({
        error: "Title is required",
      });
    }

    if (!content) {
      return res.status(400).json({
        error: "Please fill the content",
      });
    }

    const note = await Note.create({
      title,
      content,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return res.status(201).json({ note });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    return res.status(200).json({
      count: notes.length,
      data: notes,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    return res.status(200).json(note);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        error: "id is required",
      });
    }

    if (!title) {
      return res.status(400).json({
        error: "Title is required",
      });
    }

    if (!content) {
      return res.status(400).json({
        error: "Please fill the content",
      });
    }

    const note = await Note.findByIdAndUpdate(id, req.body);

    if (!note) {
      return res.status(404).json({
        error: "Note is not found",
      });
    }

    return res.status(200).json({
      message: "Note updated successfully",
      data: note,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        error: "id is required",
      });
    }

    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return res.status(404).json({
        error: "Note is not found",
      });
    }

    return res.status(200).json({
      message: "Note deleted successfully",
      data: note,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addNote, getNotes, getNoteById, updateNote, deleteNoteById };
