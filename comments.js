// Create web server
const express = require('express');
const app = express();

// Create a middleware function
app.use(express.json());

// Create a comments array
const comments = [
  { message: 'Hello' },
  { message: 'Hi' },
];

// Create a GET request to get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Create a POST request to add a comment
app.post('/comments', (req, res) => {
  const comment = { message: req.body.message };
  comments.push(comment);
  res.send(comment);
});

// Create a PUT request to update a comment
app.put('/comments/:id', (req, res) => {
  const comment = comments[req.params.id];
  comment.message = req.body.message;
  res.send(comment);
});

// Create a DELETE request to delete a comment
app.delete('/comments/:id', (req, res) => {
  comments.splice(req.params.id, 1);
  res.send(comments);
});

// Listen to port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});