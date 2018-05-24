const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'shoppingcart';

// Use connect method to connect to the server
const connection = (data) => { 
  MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  db.collection('inventory').insertMany(data)
  .then(() => {
    console.log('data inserted');
  });

  client.close();

  });
}

module.exports = connection;

