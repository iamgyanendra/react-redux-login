const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const configDB = require('./config'); 
const User = require('./components/User');

// mongoose.connect('mongodb://localhost:27017/login-app-db',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })

// mongoose.connection.once('open', function(){
//     console.log('connection has been made');
// }).on('erorr', function(Error){
//     console.log('error is: ',Error) 
// })

mongoose.connect(configDB.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }); 

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())
