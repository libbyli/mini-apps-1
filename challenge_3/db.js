const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'shoppingcart';

const insertData = (data, callback) => {
  MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    const collection = db.collection('data');
    collection.insertOne({data}, (err, result) => {
      if (err) throw err;
      console.log('data inserted into collection');
      let id = JSON.stringify(result.insertedId);
      callback(data);
    });

    client.close();
  });
}

module.exports = {insertData};