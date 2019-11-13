import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
class AllExercises extends Component {
  
    constructor(props){
 
         super(props)

         this.showHandler = this.showHandler.bind(this)
         this.state={

                Exercises_Set:[],
             show : false
         }

}


   // componentDidMount(){
      
     //   axios.get('http://localhost:8000/dishes/')

       // .then((res)=>{
              
         //   if(res.data.length>0){

           //     this.setState({testdishes:res.data})
            //}


        //})

    

    //}

    showHandler(){

        

        axios.get('http://localhost:8000/exercises/')

         .then((res)=>{
               
             if(res.data.length>0){
 
                 this.setState({ Exercises_Set:res.data})
              
                }
             
            })

             this.setState({show:true})
    }

    render() {

         let b = null
         if(this.state.show===true){

            b = ( this.state.Exercises_Set.map((exercise)=>{

                return ( <div> 
                           <div className="container">
                        <div><h3>{exercise.title}</h3><span> EXERCISE SET ID : {exercise._id}</span></div> 
                           <Link to={"/updateexercises/"+exercise._id}>Update Exercises</Link>


                           <table class="table">
  
                              <thead>
                                   <tr>
                                      
                                      <th scope="col">Exercise Name</th>
                                      <th scope="col">Description</th>
                                      <th scope="col">Sets</th>
                                      <th scope="col">Reps</th>
                                   </tr>
                              </thead>
                                   <tbody>
                                       <tr>
                                        <td>{exercise.exercises.First_Exercise}</td>
                                        <td>{exercise.description.First_Description}</td>
                                        <td>{exercise.sets.FirstExercise_Sets}</td>
                                        <td>{exercise.reps.FirstExercise_Reps}</td>
                                        
                                       </tr>

                                       <tr>
                                        <td>{exercise.exercises.Second_Exercise}</td>
                                        <td>{exercise.description.Second_Description}</td>
                                        <td>{exercise.sets.SecondExercise_Sets}</td>
                                        <td>{exercise.reps.SecondExercise_Reps}</td>
                                        
                                       </tr>

                                       <tr>
                                        <td>{exercise.exercises.Third_Exercise}</td>
                                        <td>{exercise.description.Third_Description}</td>
                                        <td>{exercise.sets.ThirdExercise_Sets}</td>
                                        <td>{exercise.reps.ThirdExercise_Reps}</td>
                                        
                                       </tr>

                                       <tr>
                                        <td>{exercise.exercises.Fourth_Exercise}</td>
                                        <td>{exercise.description.Fourth_Description}</td>
                                        <td>{exercise.sets.FourthExercise_Sets}</td>
                                        <td>{exercise.reps.FourthExercise_Reps}</td>
                                        
                                       </tr>

                                       <tr>
                                        <td>{exercise.exercises.Fifth_Exercise}</td>
                                        <td>{exercise.description.Fifth_Description}</td>
                                        <td>{exercise.sets.FifthExercise_Sets}</td>
                                        <td>{exercise.reps.FifthExercise_Reps}</td>
                                       </tr>

                                       <tr>
                                        <td>{exercise.exercises.Sixth_Exercise}</td>
                                        <td>{exercise.description.Sixth_Description}</td>
                                        <td>{exercise.sets.SixthExercise_Sets}</td>
                                        <td>{exercise.reps.SixthExercise_Reps}</td>
                                       </tr>
                                  </tbody>
                           </table>                
                
                
                            </div>
                        </div>
                              )

            }))
         }


        return (
            <div>
                <h1>Checking Of The Authentication And Authorization Below</h1> 
                  
                  <button onClick={this.showHandler}>Show Exercises</button>

                  {b}
               
            </div>
        );
    }
}

export default AllExercises;