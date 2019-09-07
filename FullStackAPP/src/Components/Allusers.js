import React from 'react'
import axios from 'axios'

const Users =(props)=>(  // here we have created a component inside a component
 
    <tr>
        <td>{props.user}</td>
        <td><button onClick={()=>{props.deleteuser(props.user._id)}}>Delete User</button></td>
   </tr>
)

class Allusers extends React.Component{
  
     constructor(props){
          super(props)
          
          this.deleteUser = this.deleteUser.bind(this)
          
          this.state={
                  users:[]
               }

 }

componentDidMount(){  // this is a react hook and will be invoked after dom rendering
      
    axios.get('http://localhost:5000/Users/')
      .then((res)=>{

           if(res.data.length>0){

              this.setState({
                        users:res.data.map( (user) =>  user.username),
                        
                     })
               }
          })
   }

userlist(){

    return this.state.users.map((currentuser)=>{
        return <Users  user={currentuser}  deleteuser={this.deleteUser} />
       })

}

deleteUser(id){
    axios.delete('http://localhost:5000/Users/'+id)
    .then((res)=> console.log(res.data))
    
    console.log("we are here")
  
    this.setState({
      users: this.state.users.filter((el)=>el._id !== id)  //"_id" is id in mongo db database 
    
    })  
console.log("hii")
}

render(){

return(
<div>   
<h3>Our Clients</h3>
  
  <table className="table">
  
    <thead className="thead-light">
  
        <tr>
           <th>Username</th>
        </tr>
    
    </thead>
    
    <tbody>
        { this.userlist()}
        
    </tbody>
    
  </table>

</div>
 

 
)

}



}

export default Allusers