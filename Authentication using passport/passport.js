// this file will contain our passport configurations

var localStatergy = require('passport-local').Strategy
var User = require('./models/usermodel')
module.exports = function(passport){


    passport.serializeUser(function(user,done){ // this function is used to add user to session
                                                 // done is a verify callback
          done(null,user)// done has two parameters,(err , user) when there is no error we pass (null , user) 
    })

    passport.deserializeUser(function(user,done){ // this function is used to remove user from session
          
         done(null,user)

    })

    // creating statergy

    passport.use(new localStatergy(function(username,password,done){

              console.log(username, password)

              User.findOne({username:username}, function(err,doc){

                
               if(err){done(err)}
                else{

                    if(doc){

                        var valid = doc.comparePassword(password,doc.password)

                        if(valid) {done(null , {username:doc.username, password:doc.password})}

                        else{ done(null,false)}
                    }

                    else{done(null,false)}
                }
              }
        )    }))  // local statergy has two parameters (options, verify)

}