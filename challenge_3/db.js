const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'shoppingcart';

// Use connect method to connect to the server
const connection = (data, callback) => { 
  MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    insertData(db, data, (id) => {
      findData(db, id, () => {
        callback(result);
        client.close();
      });
    });
  });
}

const insertData = (db, data, callback) => {
  const collection = db.collection('data');
  collection.insertOne({data}, (err, result) => {
    if (err) throw err;
    console.log('data inserted into collection');
    let id = JSON.stringify(result.insertedId);
    callback(id, result);
  });
}

const findData = function(db, id, callback) {
  const collection = db.collection('data');
  collection.find({"_id": id}).toArray((err, result) => {
    if (err) throw err;
    console.log('data found in collection');
    callback(result);
  });
}

module.exports = {connection};