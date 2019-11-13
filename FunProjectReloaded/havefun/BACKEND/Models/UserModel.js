const mongoose = require('mongoose')
const schema = mongoose.Schema;
const bcrypt = require('bcrypt') // for hashing passwords
const usersSchema = new schema({

  firstname:{
              type:String,
              required:true,
              trim:true
            },

  lastname:{
              type:String,
              required:true,
              trim:true
           },

  email:{
         type:String,
         required:true,
       },
  
  password:{
           type:String,
           required:true,
          }


},{

    timestamps:true
})


  usersSchema.methods.hashPassword = function(password){ // for hashing the password

          return bcrypt.hashSync(password , bcrypt.genSaltSync(10))
  }

  usersSchema.methods.comparePassword = function(password,hash){ // for comparing entered and hashed password
 
          return bcrypt.compareSync(password , hash)
  }

const user = mongoose.model('GYM_APP_USERS', usersSchema);

module.exports = user;