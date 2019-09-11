import React , {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component{

render(){

return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     
  <Link to='/' className="navbar-brand">Exercise Tracker</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to='/' className="nav-link">Exercises</Link>
      </li>
      <li className="nav-item">
      <Link to='/create' className="nav-link">Create Exercise Log</Link>
      </li>
      <li className="nav-item">
      <Link to='/user'  className="nav-link">Create User</Link>
      </li>
     <li className="nav-item">
      <Link to='/all'  className="nav-link">All Clients</Link>
     </li>
   
   </ul>
  </div>
</nav>
)
}
}

export default Navbar;