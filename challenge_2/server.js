const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(27016);

app.use(express.static('client'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('get request')
});

app.post('/', (req, res) => {
  let output = req.body.text;
  JSON.stringify(output);


  console.log(output);
  res.send(output);
});

const formatData = (obj) => {
  let result = [];
  let keys = Object.keys(obj);
  
  console.log(keys);
}
