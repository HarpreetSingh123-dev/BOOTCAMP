var express = require('express');
var router = express.Router();
var User = require('../models/usermodel')
/* GET home page. */

module.exports = function(passport){ // we need to pass configured password to this aprticular route

    router.post('/signup', function(req, res) {
        console.log(req.body)
     
      username = req.body.username,
      password = req.body.password
      
      console.log(username)
      console.log(password)
      User.findOne({username:username}, function(err,doc){


        if (err) {res.status(500).send('error occoured')}
        
        else{

            if(doc) {res.status(500).send('username already exsist')}

            else{


                var record = new User()
                    record.username = username  // see here care fully we are accessing usernodel 
                    record.password = record.hashPassword(password)
                    record.save(function(err,user){
                      
                        if (err) {res.status(500).send('db error')}

                        else{res.send(user)}
                    })
        }

        }
      })

      });


      router.post('/login',passport.authenticate('local',{// first parameter of this function is string name of our statergy

        failureRedirect:'/login', // we used loggedin function to give user access to 
        successRedirect:'/profile' // for redirecting the pages
      })) , function(req,res){

              
      }

    
    return router
}
