// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Comments API
let comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send(comment);
});

app.get('/comments', (req, res) => {
  res.status(200).send(comments);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});