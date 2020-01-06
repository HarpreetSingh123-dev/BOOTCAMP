const express = require('express')
const cors = require('cors')  // for cross origin resource sharing as server and front-end will run o different ports
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
//const MongoStore = require('connect-mongo')(session)
const Filestore = require('session-file-store')(session) // storing session in filestore
const cookieParser = require('cookie-parser')
const passport = require('passport')
require('./passport')(passport)
require('dotenv').config() // for accessing ".env" files


const port = 8000
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

//app.use(express.urlencoded({extended:true}))

//setting up session and passport
//const uri = `mongodb+srv://${('email')}:${('password')}@chatroom-lvym9.mongodb.net/test?retryWrites=true&w=majority`
app.use(session(
               { //name: 'session-id',
                 secret: '12345-67890-09876-54321',
                 saveUninitialized: true,
                 resave: false ,
                  httpOnly:true,
                 // cookie:{path:"/" , httpOnly:true , secure:false ,maxAge:(1000 ,60, 60,24,10 )},
                 cookie:{secure:true},
                 store: new Filestore()}));

app.use(passport.initialize())
app.use(passport.session())

// connecting to mongo db server below
const url = process.env.ATLAS_URI;

mongoose.connect( url , { useNewUrlParser:true  , useCreateIndex:true  , useUnifiedTopology:true})

const connection = mongoose.connection

connection.once('open' , ()=>{
    console.log("Connected successfully to ATLAS")
})

// setting up routes below
const UsersRouter = require('./Routes/UserRouter')(passport)
app.use('/users', UsersRouter)


// setting up restriction below
//function auth (req, res, next) {
 //    console.log(req.user);
 //   if (!req.user) {
 //   var err = new Error('You are not authenticated!');
 //   err.status = 403;
 //   next(err);
 //    }
 //   else {
  //  next();
  //  }
  //  }

//app.use(auth)

const exerciseRouter =  require('./Routes/ExerciseRouter')
app.use('/exercises' , exerciseRouter)

const orderRouter = require('./Routes/ShoppingCustomerRouter')
app.use('/order' , orderRouter)

// setting up listening port below
app.listen(port , ()=>{
console.log("Gym Blog Server running on Port No"+ port )
})