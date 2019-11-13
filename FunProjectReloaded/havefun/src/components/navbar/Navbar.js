import React, { Component } from 'react';
import './Navbar.css';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import HeaderImage from './HeaderImage'

const  Navbar = function () {
 
  return (
        
        <div>      
          
          <div>
      
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="icon">
        <a className="navbar-brand inline">
          <img src="https://cms-assets.tutsplus.com/uploads/users/151/posts/32516/image/Placeit2.jpg"></img>
        </a>
  </div>
<div className="adjust"> 
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
         <div className="set">
            <li className="nav-item active">
                <a className="nav-link"   href="/" >Home </a>
            </li>
        </div>

          <div className="set">
             <li className="nav-item active">
               <a className="nav-link" href="#">Link</a>
             </li>
          </div>
         
          <div className="set">
          <li className="nav-item">
                 <Link to="/About" type="text-muted" className="nav-link active"  tabindex="-1" aria-disabled="true">AboutMe</Link>
              </li>
           </div>
           
          <div className="set">
              <li className="nav-item">
                 <Link to="/signup"  className="nav-link active" tabindex="-1"  aria-disabled="true"  rel="noopner noreferrer">Signup</Link>
              </li>
         </div>

         <div className="set">
              <li className="nav-item">
                 <Link to="/login" className="nav-link active"  tabindex="-1" aria-disabled="true"type="text-muted" >Login</Link>
              </li>
         </div>
    </ul>
    
   </div>
   
  </div>
  

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
</nav>


</div>

 
 

<div class="imgg"><HeaderImage></HeaderImage></div>

   
    
   </div>
    
    );
  
}

export default Navbar;
