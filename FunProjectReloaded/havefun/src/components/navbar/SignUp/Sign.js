import React, { Component } from 'react';
import './Sign.css'
import axios from 'axios'
class Sign extends Component {

 constructor(props){

     super(props)

     this.onChangeFirstName=this.onChangeFirstName.bind(this)
     this.onChangeLastName=this.onChangeLastName.bind(this)
     this.onChangeEmail=this.onChangeEmail.bind(this)
     this.onChangePassword=this.onChangePassword.bind(this)
     this.onSubmit=this.onSubmit.bind(this)

        this.state={
            firstname:'',
            lastname:'',
            email:'',
            password:''
        }


 }

     onChangeFirstName(e){
             this.setState({firstname:e.target.value})
         }

     onChangeLastName(e){
             this.setState({lastname:e.target.value})
         }

     onChangeEmail(e){
              this.setState({email:e.target.value})
            }

     onChangePassword(e){
              this.setState({password:e.target.value})
           }

     onSubmit(e){
  

         console.log("insubmit")
          e.preventDefault()

          const user = {
               
             firstname:this.state.firstname,
             lastname:this.state.lastname,
             email:this.state.email,
             password:this.state.password
               }
               console.log("over axios")
               axios.post('http://localhost:8000/users/signup' , user) // to connect front end to backend "we write backend api"
               .then(
                     (res) => { alert("You Are Registered Successfully") 
                               window.location="/" }                )
               
               .catch((err)=> {   alert("Email already exsists")} )
               //console.log("successfully registered")
               
               //alert("Successfully registered")


            
          }


render() {
return (

<div className="signup-form">
    
<div className="container-fluid">

<h2 className="text-center">Create Your New Account</h2>
<div className="flex-sign">
<div className="Form-border-sign">


<form className="form-setting-sign" onSubmit={this.onSubmit}>
  
   <div class="form-group" >
        <div className="text-center"><label for="exampleInputEmail1"><b><h4>First Name</h4></b></label></div>
             
            <div className="inpt-signup">
               <div className="setting-signup">
                   <input type="email" 
                     className="form-control" 
                       type="text"
                       required
                        placeholder="Enter First Name"
                        value={this.state.firstname}
                        onChange={this.onChangeFirstName}></input>
                </div>
      
            
          </div>
  </div>


  <div className="form-group">
        <div className="text-center"><label for="exampleInputEmail1"><b><h4>Last Name</h4></b></label></div>
             
            <div className="inpt-signup">
               <div className="setting-signup">
                   <input 
                     className="form-control" 
                     
                        placeholder="Enter Last Name"
                        value={this.state.lastname}
                        onChange={this.onChangeLastName}></input>
                </div>
      
              
          </div>
  </div>

  <div className="form-group">
        <div className="text-center"><label for="exampleInputEmail1"><b><h4>Email address</h4></b></label></div>
             
            <div className="inpt-signup">
               <div className="setting-signup">
                   <input type="email" 
                     class="form-control" 
                       id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                         placeholder="Enter email"
                         value={this.state.email}
                          onChange={this.onChangeEmail}></input>
                </div>
      
              
          </div>
  </div>
  
  <div className="form-group">
    <div className="inpt-signup">
       <div className="setting-signup">
          <div className="text-center"><label for="exampleInputPassword1"><b><h4>Password</h4></b></label></div>
       </div>
     
       <div className="setting-signup">
         <input type="password" 
          class="form-control" 
           id="exampleInputPassword1" 
            placeholder="Password"
             value={this.state.password}
              onChange={this.onChangePassword}></input>
       </div>
   </div>
  </div>
  
  
    <div className="submit-btn-signup">
       <button type="submit" class="btn btn-primary btn-lg">SignUp</button>
   </div>
  

</form>
</div>
</div>
</div>
</div>


);
}
}
export default Sign;