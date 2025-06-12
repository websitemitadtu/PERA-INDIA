// routes/comments.js
const express = require('express');
const router = express.Router();
const { saveComment } = require('../models/CommentModel');

router.post('/', (req, res) => {
  const { name, email, website, comment } = req.body;

  // Basic validation
  if (!name || !email || !comment) {
    return res.status(400).json({ message: 'Name, email, and comment are required.' });
  }

  saveComment({ name, email, website, comment }, (err, results) => {
    if (err) {
      console.error('Error saving comment:', err);
      return res.status(500).json({ message: 'Failed to save comment' });
    }
    res.status(201).json({ message: 'Comment saved successfully' });
  });
});

module.exports = router;
