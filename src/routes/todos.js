// Dipti's Todo Routes
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM todos');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new todo
router.post('/', async (req, res) => {
  const { text, completed } = req.body;
  try {
    const [result] = await db.query('INSERT INTO todos (text, completed) VALUES (?, ?)', [text, completed]);
    res.status(201).json({ id: result.insertId, text, completed });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an existing todo
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { text, completed } = req.body;
  try {
    await db.query('UPDATE todos SET text = ?, completed = ? WHERE id = ?', [text, completed, id]);
    res.json({ id, text, completed });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await db.query('DELETE FROM todos WHERE id = ?', [id]);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
