const mongoose = require('mongoose');

const express = require('express')
//const mongoClient = require('mongodb').MongoClient;


const port = 1000;

const app = express()

app.use(express.json())

var session = require('express-session');

var FileStore = require('session-file-store')(session);

app.use(session({ /*name: 'session-id',*/ secret: '12345-67890-09876-54321', saveUninitialized: false, resave: false ,store: new FileStore()}));

function auth (req, res, next) {
           
  console.log(req.session);

       if (!req.session.user) 
           {
              var authHeader = req.headers.authorization;
              if (!authHeader) 
                  {
                     var err = new Error('You are not authenticated! header');
                     res.setHeader('WWW-Authenticate', 'Basic');
                     err.status = 401;
                     next(err);
                     return;
                    }
                  
                var auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');
                var user = auth[0];
                var pass = auth[1];

                if (user == 'admin' && pass == 'password') 
                    {
                      req.session.user = 'admin';
                      
                      next(); // authorized
                    } 
                                            
                        else {
                              var err = new Error('You are not authenticated!');
                              res.setHeader('WWW-Authenticate', 'Basic');
                              err.status = 401;
                              next(err);
                            }
            }


            else {
                 console.log(req.session.user)
               if (req.session.user === 'admin') 
                       {
                         console.log('req.session is here broo!: ',res.session);
                         next();
                       }

                       else {
                              var err = new Error('You are not authenticated! session');
                              err.status = 401;
                              next(err);
                           }
                   }
}

app.use(auth)

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