import React, { Component } from 'react';
import './Login.css'
import axios from 'axios'
class Login extends Component {
 
   constructor(props){
 
       super(props)
       
       
    this.onChangeEmail= this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)


       this.state={

         email:'',
         password:''
       }

   }

    onChangeEmail(e){

      this.setState({email:e.target.value})
    }

    onChangePassword(e){
       this.setState({password:e.target.value})
    }
    
    onSubmit(e){
     e.preventDefault()

     const login = {
        email:this.state.email,
        password:this.state.password
     }
      
     axios.post('http://localhost:8000/users/login' , login) // to connect front end to backend "we write backend api"
     
     .then((res) => {alert("successfully logged in") 
     window.location='/'                       })
     
     .catch((err)=>console.log(err))
     //console.log("successfully registered")
    


    }


render() {
return (

<div className="login-form">
<div className="container-fluid">
<h2 className="text-center">Login Here!</h2>
<div className="flex-login">

<div className="Form-border">

<form className="form-setting-login" onSubmit={this.onSubmit}>
  
   <div className="form-group">
        <div className="text-center"><label for="exampleInputEmail1"><b><h4>Email address</h4></b></label></div>
             
            <div className="inpt-login">
               <div className="setting-login">
                   <input type="email" 
                     className="form-control" 
                       required="true"
                         placeholder="Enter email"
                           value={this.state.email}
                             onChange={this.onChangeEmail}></input>
                </div>
      
               <div className="setting-login">
                   <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
              </div>
          </div>
  </div>
  
  <div className="form-group">
    <div className="inpt-login">
       <div className="setting-login">
          <div className="text-center"><label for="exampleInputPassword1"><b><h4>Password</h4></b></label></div>
       </div>
     
       <div className="setting-login">
         <input type="password" 
           className="form-control" 
            required="true"
             placeholder="Password"
              value={this.state.password}
               onChange={this.onChangePassword}></input>
       </div>
   </div>
  </div>
  
  <div className="form-check-login">
    
    
    
   
  
       <button type="submit" className="btn btn-primary btn-lg">Login</button>
   
  
 </div>
</form>
</div>
</div>
</div>
</div>

);
}
}
export default Login;