const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const helper = require('./helper.js')

app.listen(27016);

app.use(express.static('client'));
app.use(bodyParser.json());

app.get('/input', (req, res) => {
  fs.readFile('./data.csv', (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post('/', (req, res) => {
  let output = helper.formatData(req.body);
  fs.writeFile('./data.csv', output, (err) => {
    if (err) throw err;
  });
  res.send('');
});