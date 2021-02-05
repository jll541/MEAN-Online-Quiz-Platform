// var express = require('express')
// var app = express()

// // // const mongoose = require('mongoose');
// // // const config = require('./config/database');
// const path = require('path');

// // mongoose.Promise = global.Promise;
// // mongoose.connect(config.uri, {useNewUrlParser: true}, (err) => {
// //     if (err) {
// //         console.log('Could NOT connect to DB', err);
// //     } else {
// //         // console.log('Crypto', config.secret);
// //         console.log('Connected to DB', config.db);
// //     }
// // });

// // const MongoClient = require('mongodb').MongoClient;
// // const uri = "mongodb+srv://jll541:kin6ungh@clusterquiz.inacn.mongodb.net/quiz?retryWrites=true&w=majority";
// // const client = new MongoClient(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });
// // client.connect(err => {
// //   const collection = client.db("quiz").collection("devices");
// //   // perform actions on the collection object
// //   client.close();
// //   if (err) {
// //             console.log('Could NOT connect to DB', err);
// //         } else {
// //             // console.log('Crypto', config.secret);
// //             console.log('Connected to DB', config.db);
// //         }
// // });

// // const MongoClient = require('mongodb').MongoClient;
// // const uri = "mongodb+srv://jll541:kin6ungh@clusterquiz.inacn.mongodb.net/<quiz>?retryWrites=true&w=majority";
// // const client = new MongoClient(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });
// // client.connect(err => {
// //   const collection = client.db("test").collection("devices");
// //   // perform actions on the collection object
// //   client.close();
// // });

// // const MongoClient = require('mongodb').MongoClient;
// // const uri = "mongodb+srv://jll541:kin6ungh@clusterquiz.inacn.mongodb.net/mean-quiz?retryWrites=true&w=majority";
// // const client = new MongoClient(uri, { useNewUrlParser: true });
// // client.connect(err => {
// //   const collection = client.db("test").collection("devices");
// //   // perform actions on the collection object
// //   client.close();
// // });

// app.use('/static', express.static(path.join(__dirname, 'quiz-platform/src/index.html' )));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/quiz-platform/src/index.html' ));
//   })
  
//     const PORT = process.env.PORT || 8080;
//     app.listen(PORT, () => {
//     console.log(`THIS WORKS 2!!!! Our app is running on port ${ PORT }`);
//     });
// // const express = require('express');
// // const app = express();
// // const path = require('path');
// // const port = process.env.PORT || 8000;
// // const server = require('http').Server(app);

// // app.use(express.static(__dirname + '/quiz-platform'));

// // server.listen(port, function() {
// //     console.log("App running on port " + port);
// // })

// // // PathLocationStrategy

// // app.get('/*', function(req, res) {
// //     res.sendFile(path.join(__dirname + '/quiz-platform/src/index.html' ));
// // })

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const server = require('http').Server(app);

app.use(express.static(__dirname, 'dist', {index: false}));


server.listen(port, function() {
    console.log("App running on port " + port);
})

// PathLocationStrategy

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});