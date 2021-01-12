const express = require('express');
const path = require('path');
const app = express();

const PORT = 3355;

app.get('/demo.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'scripts', 'demo.js'));
});

app.listen(PORT, () => {
  console.log(`Starting server at http://localhost:${PORT}`)
});