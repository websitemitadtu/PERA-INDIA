// models/CommentModel.js
const db = require('../db');

const saveComment = (data, callback) => {
  const { name, email, website, comment } = data;
  const query = 'INSERT INTO comments (name, email, website, comment) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, website, comment], callback);
};

module.exports = { saveComment };
