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
  let output = formatData(req.body.text);
  
  res.send(output);
});

let formatData = obj => {
  obj = JSON.parse(obj);
  const result = [];

  const keys = [];
  for (const key in obj) {
    if (key !== 'children') {
      keys.push(key);
    }
  }

  const values = [];
  for (const key in obj) {
    if (key !== 'children') {
      values.push(obj[key]);
    }
  }

  result.push(keys, values);

  const formatChildren = child => {
    if (child.children === undefined) {
      return;
    }
    const childValues = [];
    for (const key in child) {
      if (key !== 'children') {
        childValues.push(child[key]);
      }
    }
    result.push(childValues);
    child.children.forEach((child) => formatChildren(child));
  };

  obj.children.forEach((child) => formatChildren(child));
  const stringResult = result.map(entry => (
    entry.join(',')
  )).join('\n');

  return stringResult;
}