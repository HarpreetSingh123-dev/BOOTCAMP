var mongoose = require('mongoose')
var bcrypt = require('bcrypt') // for hashing passwords
var schema = mongoose.Schema;

var userschema = new schema({

   username:{
      type:String,
      required:true
   },

   password:{
      type:String,
      required:true 
    }
  
})



userschema.methods.hashPassword = function(password){

  return bcrypt.hashSync(password , bcrypt.genSaltSync(10))

}

userschema.methods.comparePassword = function(password , hash){

   return bcrypt.compareSync(password,hash)
 
 }


 const user = mongoose.model('PassUser', userschema);
module.exports = user