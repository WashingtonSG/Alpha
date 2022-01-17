const express = require('express');
const app = express()
const path = require('path');
const PORT = 3000;

app.listen(PORT);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/', function(req, res, next) {
    res.sendFile( path.join(__dirname, "/public", "/index.html"))
    next();
  }
);

app.use('/:result', (req, res) => {
  const id = req.query.id;
  res.send(id);
})