const express = require('express');
const Exercise = require('../Models/ExerciseModel')
const dishRouter = express.Router();




dishRouter.route('/').get((req,res,next) => {
               
                    Exercise.find({})
               
                        .then((Exercise) => {
                                
                                   res.statusCode = 200;
                                   res.json(Exercise);
                                }, (err) => (err))
            
                        .catch((err) =>(err));
                
                })

dishRouter.route('/').post((req, res, next) => {
 

                const exerciseSet = new Exercise()
                   exerciseSet.title = req.body.title
                   
                  exerciseSet.exercises.First_Exercise =req.body.exercises.first_exercise 
                  exerciseSet.exercises.Second_Exercise =req.body.exercises.second_exercise 
                  exerciseSet.exercises.Third_Exercise =req.body.exercises.third_exercise 
                  exerciseSet.exercises.Fourth_Exercise =req.body.exercises.fourth_exercise 
                  exerciseSet.exercises.Fifth_Exercise =req.body.exercises.fifth_exercise 
                  exerciseSet.exercises.Sixth_Exercise =req.body.exercises.sixth_exercise 



                  exerciseSet.description.First_Description=req.body.description.first_description
                  exerciseSet.description.Second_Description=req.body.description.second_description
                  exerciseSet.description.Third_Description=req.body.description.third_description
                  exerciseSet.description.Fourth_Description=req.body.description.fourth_description
                  exerciseSet.description.Fifth_Description=req.body.description.fifth_description
                  exerciseSet.description.Sixth_Description=req.body.description.sixth_description

                  exerciseSet.sets.FirstExercise_Sets=req.body.sets.first_exercise_sets
                  exerciseSet.sets.SecondExercise_Sets=req.body.sets.second_exercise_sets
                  exerciseSet.sets.ThirdExercise_Sets=req.body.sets.third_exercise_sets
                  exerciseSet.sets.FourthExercise_Sets=req.body.sets.fourth_exercise_sets
                  exerciseSet.sets.FifthExercise_Sets=req.body.sets.fifth_exercise_sets
                  exerciseSet.sets.SixthExercise_Sets=req.body.sets.sixth_exercise_sets

                  exerciseSet.reps.FirstExercise_Reps = req.body.reps.first_exercise_reps
                  exerciseSet.reps.SecondExercise_Reps = req.body.reps.second_exercise_reps
                  exerciseSet.reps.ThirdExercise_Reps = req.body.reps.third_exercise_reps
                  exerciseSet.reps.FourthExercise_Reps = req.body.reps.fourth_exercise_reps
                  exerciseSet.reps.FifthExercise_Reps = req.body.reps.fifth_exercise_reps
                  exerciseSet.reps.SixthExercise_Reps = req.body.reps.sixth_exercise_reps
                  
                            exerciseSet.save()
                                 .then((exercise) => {
                                                 console.log('Exercise Created ', exercise);
                                                 res.statusCode = 200;
                                                 res.json(exercise);
                                                 }, (err) => next(err))
                                  .catch((err) => next(err));
                                      })  
                                      
           




dishRouter.route('/:dishId').post((req,res) => {

         
                          Exercise.findById(req.params.dishId)
                              
                               .then((exercise) => {
                                        
                                           exercise.title = req.body.title,

                                           exercise.exercises.First_Exercise =req.body.exercises.first_exercise 
                                           exercise.exercises.Second_Exercise =req.body.exercises.second_exercise 
                                           exercise.exercises.Third_Exercise =req.body.exercises.third_exercise 
                                           exercise.exercises.Fourth_Exercise =req.body.exercises.fourth_exercise 
                                           exercise.exercises.Fifth_Exercise =req.body.exercises.fifth_exercise 
                                           exercise.exercises.Sixth_Exercise =req.body.exercises.sixth_exercise 

                                           exercise.description.First_Description=req.body.description.first_description
                                           exercise.description.Second_Description=req.body.description.second_description
                                           exercise.description.Third_Description=req.body.description.third_description
                                           exercise.description.Fourth_Description=req.body.description.fourth_description
                                           exercise.description.Fifth_Description=req.body.description.fifth_description
                                           exercise.description.Sixth_Description=req.body.description.sixth_description
                                       
                                       
                                          exercise.sets.FirstExercise_Sets=req.body.sets.first_exercise_sets
                                          exercise.sets.SecondExercise_Sets=req.body.sets.second_exercise_sets
                                          exercise.sets.ThirdExercise_Sets=req.body.sets.third_exercise_sets
                                          exercise.sets.FourthExercise_Sets=req.body.sets.fourth_exercise_sets
                                          exercise.sets.FifthExercise_Sets=req.body.sets.fifth_exercise_sets
                                          exercise.sets.SixthExercise_Sets=req.body.sets.sixth_exercise_sets

                                          exercise.reps.FirstExercise_Reps = req.body.reps.first_exercise_reps
                                          exercise.reps.SecondExercise_Reps = req.body.reps.second_exercise_reps
                                          exercise.reps.ThirdExercise_Reps = req.body.reps.third_exercise_reps
                                          exercise.reps.FourthExercise_Reps = req.body.reps.fourth_exercise_reps
                                          exercise.reps.FifthExercise_Reps = req.body.reps.fifth_exercise_reps
                                          exercise.reps.SixthExercise_Reps = req.body.reps.sixth_exercise_reps

                                       
                                          exercise.save()
                                          .then(()=>res.json("Exercise Updated"))
                                          .catch((err)=>res.json(err))
                                        }, (err) => next(err))
                               .catch((err) => next(err));
                         })
                               
dishRouter.route('/:dishId').get((req,res) => {

                                console.log("In Find By Id")
                                                 Exercise.findById(req.params.dishId)
                                                     
                                                      .then((dish) => {
                                                               res.statusCode = 200;
                                                               res.setHeader('Content-Type', 'application/json');
                                                                res.json(dish);
                                                               }, (err) => next(err))
                                                      .catch((err) => next(err));
                                                })                       
                    
module.exports = dishRouter;