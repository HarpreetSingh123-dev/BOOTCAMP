import React, { Component } from 'react';
import axios from 'axios'
class Exerciseadd extends Component {


    constructor(props){

        super(props)

        this.state={
              title:"" ,
              exercises : {
              
                 First_Exercise:"",
                 Second_Exercise:"",
                 Third_Exercise:"",
                 Fourth_Exercise:"",
                 Fifth_Exercise:"",
                 Sixth_Exercise:""
                     
                        },

               description :{

                First_Description:"",
                Second_Description:"",
                Third_Description:"",
                Fourth_Description:"",
                Fifth_Description:"",
                Sixth_Description:""

               },         

               sets :{
                   
                  First_ExerciseSets:"",
                  Second_ExerciseSets:"",
                  Third_ExerciseSets:"",
                  Fourth_ExerciseSets:"",
                  Fifth_ExerciseSets:"",
                  Sixth_ExerciseSets:""

               },

               reps:{

                First_ExerciseReps:"",
                Second_ExerciseReps:"",
                Third_ExerciseReps:"",
                Fourth_ExerciseReps:"",
                Fifth_ExerciseReps:"",
                Sixth_ExerciseReps:""
               }
              

        }
    }
     

 
    onChangeTitle(e){

     this.setState({title:e.target.value})

    }

    //First exercise setting
    onChangeFirstExercise(e){

        this.setState(Object.assign(this.state.exercises,{First_Exercise:e.target.value}))
    }

    onChangeFirstDescription(e){

        this.setState(Object.assign(this.state.description,{First_Description:e.target.value}))
    }

    onChangeFirstSet(e){

        this.setState(Object.assign(this.state.sets,{First_ExerciseSets:e.target.value}))
    }

    onChangeFirstRep(e){

        this.setState(Object.assign(this.state.reps,{First_ExerciseReps:e.target.value}))
    }

    //Second Exercise

    onChangeSecondExercise(e){

        this.setState(Object.assign(this.state.exercises,{Second_Exercise:e.target.value}))
    }

    onChangeSecondDescription(e){

        this.setState(Object.assign(this.state.description,{Second_Description:e.target.value}))
    }

    onChangeSecondSet(e){

        this.setState(Object.assign(this.state.sets,{Second_ExerciseSets:e.target.value}))
    }

    onChangeSecondRep(e){

        this.setState(Object.assign(this.state.reps,{Second_ExerciseReps:e.target.value}))
    }


    //Third Exercise

    onChangeThirdExercise(e){

        this.setState(Object.assign(this.state.exercises,{Third_Exercise:e.target.value}))
    }

    onChangeThirdDescription(e){

        this.setState(Object.assign(this.state.description,{Third_Description:e.target.value}))
    }

    onChangeThirdSet(e){

        this.setState(Object.assign(this.state.sets,{Third_ExerciseSets:e.target.value}))
    }

    onChangeThirdRep(e){

        this.setState(Object.assign(this.state.reps,{Third_ExerciseReps:e.target.value}))
    }

    // fourth

    onChangeFourthExercise(e){

        this.setState(Object.assign(this.state.exercises,{Fourth_Exercise:e.target.value}))
    }

    onChangeFourthDescription(e){

        this.setState(Object.assign(this.state.description,{Fourth_Description:e.target.value}))
    }

    onChangeFourthSet(e){

        this.setState(Object.assign(this.state.sets,{Fourth_ExerciseSets:e.target.value}))
    }

    onChangeFourthRep(e){

        this.setState(Object.assign(this.state.reps,{Fourth_ExerciseReps:e.target.value}))
    }


    // fifth

    onChangeFifthExercise(e){

        this.setState(Object.assign(this.state.exercises,{Fifth_Exercise:e.target.value}))
    }

    onChangeFifthDescription(e){

        this.setState(Object.assign(this.state.description,{Fifth_Description:e.target.value}))
    }

    onChangeFifthSet(e){

        this.setState(Object.assign(this.state.sets,{Fifth_ExerciseSets:e.target.value}))
    }

    onChangeFifthRep(e){

        this.setState(Object.assign(this.state.reps,{Fifth_ExerciseReps:e.target.value}))
    }

    // sixth

    onChangeSixthExercise(e){

        this.setState(Object.assign(this.state.exercises,{Sixth_Exercise:e.target.value}))
    }

    onChangeSixthDescription(e){

        this.setState(Object.assign(this.state.description,{Sixth_Description:e.target.value}))
    }

    onChangeSixthSet(e){

        this.setState(Object.assign(this.state.sets,{Sixth_ExerciseSets:e.target.value}))
    }

    onChangeSixthRep(e){

        this.setState(Object.assign(this.state.reps,{Sixth_ExerciseReps:e.target.value}))
    }


   onSubmit(e){

     e.preventDefault();

     const ExerciseSet = {
  
         title:this.state.title,
         exercises:{
 
             first_exercise:this.state.exercises.First_Exercise,
             second_exercise:this.state.exercises.Second_Exercise,
             third_exercise:this.state.exercises.Third_Exercise,
             fourth_exercise:this.state.exercises.Fourth_Exercise,
             fifth_exercise:this.state.exercises.Fifth_Exercise,
             sixth_exercise:this.state.exercises.Sixth_Exercise,
         },

         description:{
           
             first_description:this.state.description.First_Description,
             second_description:this.state.description.Second_Description,
             third_description:this.state.description.Third_Description,
             fourth_description:this.state.description.Fourth_Description,
             fifth_description:this.state.description.Fifth_Description,
             sixth_description:this.state.description.Sixth_Description,

         },

         sets:{

            first_exercise_sets : this.state.sets.First_ExerciseSets,
            second_exercise_sets : this.state.sets.Second_ExerciseSets,
            third_exercise_sets : this.state.sets.Third_ExerciseSets,
            fourth_exercise_sets : this.state.sets.Fourth_ExerciseSets,
            fifth_exercise_sets : this.state.sets.Fifth_ExerciseSets,
            sixth_exercise_sets : this.state.sets.Sixth_ExerciseSets,
         },

         reps:{
           first_exercise_reps : this.state.reps.First_ExerciseReps,
           second_exercise_reps : this.state.reps.Second_ExerciseReps,
           third_exercise_reps : this.state.reps.Third_ExerciseReps,
           fourth_exercise_reps : this.state.reps.Fourth_ExerciseReps,
           fifth_exercise_reps :this.state.reps.Fifth_ExerciseReps,
           sixth_exercise_reps : this.state.reps.Sixth_ExerciseReps,
         }


     }

     axios.post('http://localhost:8000/exercises/' , ExerciseSet) // to connect front end to backend "we write backend api"
               .then(
                     (res) => { alert("Exercise Added Successfully to Database") 
                                }                )
               
               .catch((err)=> {   alert("There was Error")} )

   }

    render() {
        return (
            <div>
                <h1 className="text-center">In Admin</h1>
                
                <div className="container">
                <form onSubmit={this.onSubmit.bind(this)}>
  <div class="form-group">
    <label >Enter Exercise Title</label>
    <input  class="form-control" 
             placeholder="Title"
               value={this.state.title}
              onChange={this.onChangeTitle.bind(this)}></input>
    
  </div>
  <h3>Set Exercise Panel Below</h3>
     
       <div class="form-row">
           <div class="col">
              <label >First Exercise</label>
                <input type="text" 
                   class="form-control"
                     value={this.state.exercises.First_Exercise}
                       onChange={this.onChangeFirstExercise.bind(this)} ></input>
          </div>
     
          <div class="col">
              <label >Description</label>
                <input type="text"
                   class="form-control"
                    value={this.state.description.First_Description}
                      onChange={this.onChangeFirstDescription.bind(this)}></input>
         </div>
    
         <div class="col">
             <label >Sets</label>
                <input type="text" 
                  class="form-control"
                   value={this.state.sets.First_ExerciseSets}
                    onChange={this.onChangeFirstSet.bind(this)}></input>
             </div>

        <div class="col">
            <label >Rep Range</label>
               <input type="text" 
                class="form-control"
                 value={this.state.reps.First_ExerciseReps}
                  onChange={this.onChangeFirstRep.bind(this)}></input>
       </div>
  
    </div>

    <div class="form-row">
           <div class="col">
              <label >Second Exercise</label>
                <input type="text" 
                  class="form-control" 
                   value={this.state.exercises.Second_Exercise}
                    onChange={this.onChangeSecondExercise.bind(this)}></input>
          </div>
     
          <div class="col">
              <label >Description</label>
                <input type="text" 
                  class="form-control"
                   value={this.state.description.Second_Description}
                     onChange={this.onChangeSecondDescription.bind(this)}></input>
         </div>
    
         <div class="col">
             <label >Sets</label>
                <input type="text" 
                  class="form-control"
                    value={this.state.sets.Second_ExerciseSets}
                     onChange={this.onChangeSecondSet.bind(this)}></input>
             </div>

        <div class="col">
            <label >Rep Range</label>
               <input type="text" 
                 class="form-control"
                  value={this.state.reps.Second_ExerciseReps}
                   onChange={this.onChangeSecondRep.bind(this)}></input>
       </div>
  
    </div>

    <div class="form-row">
           <div class="col">
              <label >Third Exercise</label>
                <input type="text" 
                  class="form-control"
                    value={this.state.exercises.Third_Exercise}
                     onChange={this.onChangeThirdExercise.bind(this)} ></input>
          </div>
     
          <div class="col">
              <label >Description</label>
                <input type="text" 
                  class="form-control"
                   value={this.state.description.Third_Description}
                    onChange={this.onChangeThirdDescription.bind(this)}></input>
         </div>
    
         <div class="col">
             <label >Sets</label>
                <input type="text" 
                  class="form-control"
                    value={this.state.sets.Third_ExerciseSets}
                     onChange={this.onChangeThirdSet.bind(this)}></input>

             </div>

        <div class="col">
            <label >Rep Range</label>
               <input type="text" 
                  class="form-control"
                   value={this.state.reps.Third_ExerciseReps}
                     onChange={this.onChangeThirdRep.bind(this)}></input>
       </div>
  
    </div>

    <div class="form-row">
           <div class="col">
              <label >Fourth Exercise</label>
                <input type="text" 
                  class="form-control" 
                    value={this.state.exercises.Fourth_Exercise}
                     onChange={this.onChangeFourthExercise.bind(this)}></input>
          </div>
     
          <div class="col">
              <label >Description</label>
                <input type="text" 
                  class="form-control"
                   value={this.state.description.Fourth_Description}
                    onChange={this.onChangeFourthDescription.bind(this)}></input>
         </div>
    
         <div class="col">
             <label >Sets</label>
                <input type="text" 
                  class="form-control"
                   value={this.state.sets.Fourth_ExerciseSets}
                    onChange={this.onChangeFourthSet.bind(this)}></input>
             </div>

        <div class="col">
            <label >Rep Range</label>
               <input type="text" 
                 class="form-control"
                   value={this.state.reps.Fourth_ExerciseReps}
                    onChange={this.onChangeFourthRep.bind(this)}></input>
       </div>
  
    </div>

    <div class="form-row">
           <div class="col">
              <label >Fifth Exercise</label>
                <input type="text" 
                  class="form-control"
                    value={this.state.exercises.Fifth_Exercise}
                     onChange={this.onChangeFifthExercise.bind(this)} ></input>
          </div>
     
          <div class="col">
              <label >Description</label>
                <input type="text" 
                  class="form-control"
                   value={this.state.description.Fifth_Description}
                    onChange={this.onChangeFifthDescription.bind(this)}></input>
         </div>
    
         <div class="col">
             <label >Sets</label>
                <input type="text" 
                  class="form-control"
                   value={this.state.sets.Fifth_ExerciseSets}
                    onChange={this.onChangeFifthSet.bind(this)}></input>
             </div>

        <div class="col">
            <label >Rep Range</label>
               <input type="text" 
                 class="form-control"
                  value={this.state.reps.Fifth_ExerciseReps}
                   onChange={this.onChangeFifthRep.bind(this)}></input>
       </div>
  
    </div>

    <div class="form-row">
           <div class="col">
              <label >Sixth Exercise</label>
                <input type="text" 
                  class="form-control"
                   value={this.state.exercises.Sixth_Exercise}
                    onChange={this.onChangeSixthExercise.bind(this)} ></input>
          </div>
     
          <div class="col">
              <label >Description</label>
                <input type="text" 
                  class="form-control"
                   value={this.state.description.Sixth_Description}
                    onChange={this.onChangeSixthDescription.bind(this)}></input>
         </div>
    
         <div class="col">
             <label >Sets</label>
                <input type="text" 
                  class="form-control"
                   value={this.state.sets.Sixth_ExerciseSets}
                    onChange={this.onChangeSixthSet.bind(this)}></input>
             </div>

        <div class="col">
            <label >Rep Range</label>
               <input type="text" 
                 class="form-control"
                   value={this.state.reps.Sixth_ExerciseReps}
                    onChange={this.onChangeSixthRep.bind(this)}></input>
       </div>
  
    </div>

    <div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>
  </div>           
 




            </div>
        );
    }
}

export default Exerciseadd;