const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('./db');

app.listen(3000, () => console.log('Shopping cart experience app listening on port 3000'));

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  db.insertData(req.body, (id) => {
    res.send(id);
  });
});