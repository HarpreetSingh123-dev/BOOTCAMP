import React , {Component} from 'react'
import axios from 'axios'
import DatePicker from'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

class CreateExercise extends Component{

constructor(props){
  super(props);
  // for "this" to refer to our class "createexercise" we do following  
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state={
      username:'',
      description:'',
      duration:0,
      date:new Date(),
      users:[]
    }
}
   componentDidMount(){  // this is a react hook and will be invoked after dom rendering
      
      axios.get('http://localhost:5000/Users/')
        .then((res)=>{

             if(res.data.length>0){

                this.setState({
                          users:res.data.map( user =>  user.username),
                          username:res.data[0].username,
                       })
                 }
            })
     }

   onChangeUsername(e){
     this.setState({
        username:e.target.value // "target.value" is value in the textbox
      })
    }


   onChangeDescription(e){
     this.setState({
        description:e.target.value 
      })
    }

    onChangeDuration(e){
        this.setState({
           duration:e.target.value 
         })
       }


    onChangeDate(date){
        this.setState({
           date:date
         })
       }

    onSubmit(e){
        e.preventDefault();// this will prevent default html submit behaviour
         
        const exercise ={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }
         console.log(exercise)
 
          axios.post('http://localhost:5000/Exercises/add', exercise)
            .then(res => console.log(res.data))
             
         window.location='/';
    }  
render(){

return(
      <div>
        <h3>Create New Exercise Log</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username :</label>
              
                 <select ref="userInput"
                    required
                     className="form-control"
                       value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                          this.state.users.map(function (user){
                                return(
                                          <option key={user}value={user}>
                                            {user} 
                                           </option> 
                                           
                                       )
                                  })
                           
                        }

                      
                   </select>
                   
            </div>            
        
        <div className="form-group">
         <label>Description :</label>
           <input type="text"
                required
                  className="form-control"
                    value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
        </div>

        <div className="form-group">
          <label>Duration (in minutes):</label>
            <input type="text"
                className="form-control"
                  value={this.state.duration}
                   onChange={this.onChangeDuration}
                   />
       </div>

       <div className="form-group">
         <label>Date:</label>
           <div>
           
                 
                           { <DatePicker  //date picker will pop up a calander from where we can select date
                  onChange={this.state.onChangeDate}
                  selected={this.state.date } // install datepicker using npm install react-datepicker
               
                           />}
           </div>
       </div>
       
       <div className="form-group">
         <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
        </div>

      </form>
</div>


)
}
}

export default CreateExercise;