const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('./db');

app.listen(3000, () => console.log('Shopping cart experience app listening on port 3000'));

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('request body: ', req.body);
  console.log('post request worked');
  // db.connection();
  res.send('');
});