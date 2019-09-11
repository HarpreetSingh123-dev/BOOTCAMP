const router = require('express').Router();

let Exercise = require('../Models/exercise.model')

    router.route('/').get((req,res)=>{ // our first routeendpoint

    Exercise.find() // .find is a mongoose method that will display all the users in database when api is hit
            // .find method returns a "promise" so we have to return result in json format
    
       .then( (exercises) => res.json(exercises)) // we will return exercises in JSON
       .catch( (err) => res.status(400).json('Error : ' +err));
    
    })
    
    router.route('/add').post((req,res)=>{ // our second route endpoint
    
    
        const username = req.body.username; // ""left and right side variable names should  be same"""
        const description = req.body.description;
        const duration = Number(req.body.duration);// we are converting number to a "Number" data type
        const date = Date.parse(req.body.date);// we are converting date to "Date" dtat type

        const newExercise = new Exercise({
          username,
          description,
          duration,
          date
        });
    
        newExercise.save()  // new user is saved to database by .save method
         .then(()=> res.json("New Exercise Added"))
         .catch (err => res.status(400).json('Error: '+ err))
    
    
    })

    router.route('/:id').get((req,res)=>{ // our third routeendpoint

        Exercise.findById(req.params.id) // id will come as req parameter
        
           .then( (exercises) => res.json(exercises)) // we will return exercises in JSON
           .catch( (err) => res.status(400).json('Error : ' +err));
        
        })

    router.route('/:id').delete((req,res)=>{ // our fourth  routeendpoint

            Exercise.findByIdAndDelete(req.params.id) // 
            
               .then( () => res.json('Exercise Deleted Bro')) // we will return exercises in JSON
               .catch( (err) => res.status(400).json('Error : ' +err));
            
            })

    router.route('/update/:id').post((req,res)=>{ // our fourth  route endpoint

            Exercise.findById(req.params.id) // 
                
                .then( (exercise) => {

                                        exercise.username=req.body.username;
                                        exercise.description=req.body.description;
                                        exercise.duration=Number(req.body.duration);
                                        exercise.date=Date.parse(req.body.date);
                                       
                                        exercise.save()
                                          .then(()=>res.json('Exercise Updated'))
                                          .catch( (err) => res.status(400).json('Error : ' +err));

                                     }) 
                                     
                .catch( (err) => res.status(400).json('Error : ' +err));
                
                })
    
    module.exports = router;