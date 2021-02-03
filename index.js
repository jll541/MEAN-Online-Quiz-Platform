var express = require('express')
var app = express()

// const mongoose = require('mongoose');
// const config = require('./config/database');
// const path = require('path');

// mongoose.Promise = global.Promise;
// mongoose.connect(config.uri, {useNewUrlParser: true}, (err) => {
//     if (err) {
//         console.log('Could NOT connect to DB', err);
//     } else {
//         // console.log('Crypto', config.secret);
//         console.log('Connected to DB', config.db);
//     }
// });

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jll541:<kin6ungh>@clusterquiz.inacn.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.use(express.static(__dirname + '/quiz-platform/dist/quiz-platform'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/quiz-platform/dist/quiz-platform/index.html'));
  })
  
  app.listen(8080, () => {
      console.log("Listening on port 8080")
  });