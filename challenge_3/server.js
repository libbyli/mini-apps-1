const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.listen(3000, () => console.log('Shopping cart experience app listening on port 3000'));

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  // fs.writeFile('./data.csv', output, (err) => {
  //   if (err) throw err;
  // });
  console.log('post request worked')
  res.send('');
});