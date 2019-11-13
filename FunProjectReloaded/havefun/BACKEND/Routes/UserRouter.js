
const router = require('express').Router()
const User = require('../Models/UserModel')
const passport = require('passport')

module.exports = function(passport){

router.post('/signup', (req,res)=>{
//router.route('/signup').post((req,res)=>{

    const email = req.body.email
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const password = req.body.password

    User.findOne({email:email}, (err,doc)=>{

       if(err) { res.status(500).send("Error Occoured")}

       else {

              if(doc) { res.status(500).send("User with this email already exsists")}

                   else {

                          const newUser = new User()

                            newUser.firstname = firstname;
                            newUser.lastname = lastname;
                            newUser.email = email;
                            newUser.password = newUser.hashPassword(password)
               
                            newUser.save()
                   
                           .then(()=>res.json("User Added"))
                           .catch((err)=>res.status(400).json("Error"+ err))

                       }
       
                 }

         })

})


router.post('/login',  passport.authenticate('local') , (req,res)=>{

     console.log("hi from login")
    res.statusCode = 200;

    res.json({success: true, status: 'You are successfully logged in!'});


})

router.get('/logout', function(req, res){
    req.logout();
    res.json({success: true, status: 'You are successfully logged out!'});
//res.redirect('/');
  });


 return router


}

