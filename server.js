const express = require('express');
const path = require('path');
const app = express();

const HOST = "http://localhost:3355"

app.use('*', function(req, res, next) {
//replace localhost:8080 to the ip address:port of your server
  res.header("Access-Control-Allow-Origin", HOST);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/demo.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'scripts', 'demo.js'));
});

app.listen(3355, () => {
  console.log(`The server is running on ${HOST}`)
});