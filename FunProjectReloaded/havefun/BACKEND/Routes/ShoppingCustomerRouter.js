const express = require('express')

const order = require('../Models/ShoppingCustomerDetailsModel')

const orderRouter = express.Router();


orderRouter.route('/').post((req,res,next)=>{


    const customerOrder = new order()

        customerOrder.name = req.body.name
        customerOrder.phoneNumber = req.body.phoneNumber
        customerOrder.email = req.body.email
        customerOrder.address1 = req.body.address1
        customerOrder.address2 = req.body.address2
        customerOrder.city = req.body.city
        customerOrder.state = req.body.state
        customerOrder.zip = req.body.zip
        customerOrder.products = req.body.products


        customerOrder.save()
                                 .then((order) => {
                                                 console.log('Exercise Created ', order);
                                                 res.statusCode = 200;
                                                 res.json(order);
                                                 }, (err) => next(err))
                                  .catch((err) => next(err));
                                      
  })

  module.exports = orderRouter