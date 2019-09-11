const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose') // it will help to connect to mongo db
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors()); //middleware//

app.use(express.json());

const uri = process.env.ATLAS_URI;// folllowing to connect to our mongo dbtracker
mongoose.connect(uri , { useNewUrlParser:true  , useCreateIndex:true });// create .env file and assign ATLAS_URI to mongodb cluster link

const connection = mongoose.connection;

connection.once('open' ,()=>{

    console.log("Mongodb database connection established successfully")
})

// below we are telling server to use these files
const exercisesRouter = require('./Routes/Exercises')
const usersRouter = require('./Routes/Users')

app.use('/Exercises', exercisesRouter)  // whenever in browser one uses /Exercises, it will route it to Exercises
app.use('/Users', usersRouter)// for get api=="/Users/" , for post api=="/Users/add"
app.listen(port ,()=>{

    console.log(`Server is listening on port:${port}`);
})