const mongoose = require('mongoose');

const express = require('express')
//const mongoClient = require('mongodb').MongoClient;

const port = 9000;

const app = express()

app.use(express.json())


function auth (req, res, next) {
  //console.log(req.cookies)
  //console.log(req);
  console.log(res);
  console.log("hiii there")
  var authHeader = req.headers.authorization;
  
     if (!authHeader) {
                         var err = new Error('You are not authenticated! "from auth header');
                         res.setHeader('WWW-Authenticate', 'Basic'); //  this set header appers as dilog box on browser
                         err.status = 401;
                         next(err);  //  the authorization comes with set header response when we type password
                       // return;
                      }
        else{

          next()
        }              
  
    var auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');// what is this thing
    var user = auth[0];
    var pass = auth[1];
  
   if (user == 'admin' && pass == 'password') {
                                                console.log("in next")
                                                next(); // authorized
                                            } 
                else {
                       var err = new Error('You are not authenticated! "password panel');
                       res.setHeader('WWW-Authenticate', 'Basic');
                       err.status = 401;
                       next(err);
                      }
}
app.use(auth); // next is used to go to next given middleware

// app.use((req,res,next)=>{
// console.log("just to test functionality") 
//  try putting and deleating the next function
// next()
// })

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