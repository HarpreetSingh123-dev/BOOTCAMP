const express =require('express')
const mongoose = require('mongoose')
var session = require("express-session")
var passport = require('passport')
//var path = require('path');

require('./passport')(passport)
const bodyParser = require('body-parser')
var app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
const port = 9000;

app.use(session({ secret:'thesecret' , saveUninitialized:false, resave:false}) )// secret to encript our cookies
app.use(passport.initialize()) // these both are middlewares and by using app.use we are configuring them
app.use(passport.session()) // both initialize and session are middleware for express web application
//app.use(express.static(path.join(__dirname, 'public')));
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');


var auth = require('./routes/auth')(passport)
var indexrouter = require("./routes/index")

app.use('/', indexrouter)
app.use('/auth',auth)
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url)
connect.then(()=>{
console.log("Connected successfully to server")
}, (err)=>{console.log(err)})

app.listen(port , ()=>{
console.log(`Server is listening on port:${port}`)
})