const express = require('express');
const Dishes = require('../models/dishes');
const dishRouter = express.Router();


console.log('dsfds')


dishRouter.route('/')


            .get((req,res,next) => {
               // console.log(req)
               //console.log(res)

               //console.log(next)

              
                Dishes.find({})
               
                        .then((Dishes) => {
                                console.log("in get")
                                   res.statusCode = 200;
                                   res.setHeader('Content-Type', 'application/json');
                                   res.json(Dishes);
                                }, (err) => (err))
            
                        .catch((err) =>(err));
                
                }

                    
                    )

            .post((req, res, next) => {
 
                            Dishes.create(req.body)
                                 .then((dish) => {
                                                 console.log('Dish Created ', dish);
                                                 res.statusCode = 200;
                                                 res.setHeader('Content-Type', 'application/json');
                                                 res.json(dish);
                                                 }, (err) => next(err))
                                  .catch((err) => next(err));
                                      })  
                                      
            .put((req, res, next) => {
                           
                             res.statusCode = 403;
                             res.end('PUT operation not supported on /Dishes');
                            })
                         
            .delete((req, res, next) => {

                              Dishes.remove({})
                                       .then((resp) => {
                                                    res.statusCode = 200;
                                                    res.setHeader('Content-Type', 'application/json');
                                                    res.json(resp);
                                                       }, (err) => next(err))
                                       .catch((err) => next(err));
                                       });

dishRouter.route('/:dishId')


                    .get((req,res,next) => {

                          Dishes.findById(req.params.dishId)
                              
                               .then((dish) => {
                                        res.statusCode = 200;
                                        res.setHeader('Content-Type', 'application/json');
                                         res.json(dish);
                                        }, (err) => next(err))
                               .catch((err) => next(err));
                         })
                               
                    .post((req, res, next) => {
                                        
                            res.statusCode = 403;
                            res.end('POST operation not supported on /Dishes/'+
                            req.params.dishId);
                            })

                    .put((req, res, next) => {

                        Dishes.findByIdAndUpdate(req.params.dishId, {$set: req.body}, { new: true })

                         .then((dish) => {
                                    res.statusCode = 200;
                                    res.setHeader('Content-Type', 'application/json');
                                    res.json(dish);
                                      }, (err) => next(err))
                         .catch((err) => next(err));
                            })

                    .delete((req, res, next) => {

                        Dishes.findByIdAndRemove(req.params.dishId)
                                 .then((resp) => {
                                            res.statusCode = 200;
                                            res.setHeader('Content-Type', 'application/json');
                                            res.json(resp);
                                           }, (err) => next(err))
                                 .catch((err) => next(err));
                               });
module.exports = dishRouter;