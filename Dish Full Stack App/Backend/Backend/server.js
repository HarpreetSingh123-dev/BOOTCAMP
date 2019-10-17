const mongoose = require('mongoose');
const cors = require('cors')
const express = require('express')
//const mongoClient = require('mongodb').MongoClient;

const port = 9000;

const app = express()

app.use(express.json())
app.use(cors())

//function auth (req, res, next) {
  
  //console.log(req.headers);
  //console.log("hiii there")
  //var authHeader = req.headers.authorization;
  
    // if (!authHeader) {
      //                   var err = new Error('You are not authenticated!');
        //                 res.setHeader('WWW-Authenticate', 'Basic');
          //               err.status = 401;
            //             next(err);
              //          return;
                //      }
  
 // var auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');// what is this thing
  //var user = auth[0];
  //var pass = auth[1];
  
  //if (user == 'admin' && pass == 'password') {
    //                                           next(); // authorized
      //                                      } 
        //        else {
          //              var err = new Error('You are not authenticated!');
            //            res.setHeader('WWW-Authenticate', 'Basic');
              //          err.status = 401;
                //        next(err);
                  //    }
  //}
  //app.use(auth);



const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);
connect.then(() => {
console.log("Connected correctly to server");
}, (err) => { console.log(err); });



const dishrouter = require('./routes/dishrouter');     
app.use('/dishes', dishrouter)

app.listen(port ,()=>{

  console.log(`Server is listening on port:${port}`);
})