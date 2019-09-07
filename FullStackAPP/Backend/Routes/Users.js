const router = require('express').Router();
let User = require('../Models/user.model'); // mongoose model that we created

router.route('/').get((req,res)=>{ // our first routeendpoint

User.find() // .find is a mongoose method that will display all the users in database when api is hit
        // .find method returns a "promise" so we have to return result in json format

   .then( (users) => res.json(users))
   .catch( (err) => res.status(400).json('Error : ' +err));

})

router.route('/add').post((req,res)=>{ // our second route endpoint


    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()  // new user is saved to database by .save method
     .then(()=> res.json("User Added"))
     .catch (err => res.status(400).json('Error: '+ err))


})

router.route('/:id').delete((req,res)=>{ // our fourth  routeendpoint

     User.findByIdAndDelete(req.params.id) // 
      
       
        .then( () => res.json('User Deleted')) // we will return exercises in JSON
        .catch( (err) => res.status(400).json('Error : ' +err));
     
     })

module.exports = router;