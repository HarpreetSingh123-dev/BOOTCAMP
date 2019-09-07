import React , {Component} from 'react'
import axios from 'axios';
class CreateUser extends Component{

    constructor(props){
        super(props);
        // for "this" to refer to our class "createexercise" we do following  
          this.onChangeUsername = this.onChangeUsername.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
        
          this.state={
            username:'',
           }
      }

      onChangeUsername(e){
        this.setState({
           username:e.target.value // "target.value" is value in the textbox
         })
       }
     
       onSubmit(e){
        e.preventDefault();// this will prevent default html submit behaviour
         
       
          const user ={
               username:this.state.username,
              }
           
           console.log(user)

           axios.post('http://localhost:5000/Users/add' , user) // to connect front end to backend "we write backend api"
             .then((res) => console.log(res.data) )
        
           //window.location='/';
        
           this.setState({
             username:'',
         })
    }  
       

render(){

return(
      <div>
          <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Username :</label>
                  <input type="text"
                       required
                         className="form-control"
                           value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
              </div>
           
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary"/>
          </div>

           </form>
      
      </div>
)
}
}

export default CreateUser;