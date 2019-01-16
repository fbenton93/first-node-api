const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));




require('./app/routes')(app,{});
app.listen(3000, () => {
  console.log('Listening on port 3000')
})
