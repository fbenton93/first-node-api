const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err,database) => {
  if(err) return console.log(err);
  const db = database.db('first-node-api');
  require('./app/routes')(app,db);


  app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
})
