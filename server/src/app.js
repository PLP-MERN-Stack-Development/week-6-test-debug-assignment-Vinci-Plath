// server/src/app.js
const express = require('express');
const app = express();

app.use(express.json());

// Example route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from API' });
});

module.exports = app; 