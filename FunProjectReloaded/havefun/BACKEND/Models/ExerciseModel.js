const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseSchema = new Schema({

title: {
     type: String,
     
     unique:true
      },

exercises:{
             
           First_Exercise:{type:String, unique:true},
           Second_Exercise:{type:String , unique:true},
           Third_Exercise:{type:String , unique:true},
           Fourth_Exercise:{type:String , unique:true},
           Fifth_Exercise:{type:String , unique:true},
           Sixth_Exercise:{type:String , unique:true}
},

description: {
      
         First_Description:{type:String , unique:true},
         Second_Description:{type:String , unique:true},
         Third_Description:{type:String , unique:true},
         Fourth_Description:{type:String , unique:true},
         Fifth_Description:{type:String , unique:true},
         Sixth_Description:{type:String , unique:true},

},

sets:{

     FirstExercise_Sets:{type:String},
     SecondExercise_Sets:{type:String},
     ThirdExercise_Sets:{type:String},
     FourthExercise_Sets:{type:String},
     FifthExercise_Sets:{type:String},
     SixthExercise_Sets:{type:String},
}, 

reps:{

     FirstExercise_Reps:{type:String},
     SecondExercise_Reps:{type:String},
     ThirdExercise_Reps:{type:String},
     FourthExercise_Reps:{type:String},
     FifthExercise_Reps:{type:String},
     SixthExercise_Reps:{type:String},


}

});

const Exercise = mongoose.model('GYM_BASIC_WORKOUT_LOG', exerciseSchema)

module.exports = Exercise;

