
//import * as serviceWorker from './serviceWorker';


import React from 'react';
import ReactDOM from 'react-dom';

import { NavLink,Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import About from './About'
import Contact from './Contact'


const routing = (

/*
<Router>
   
    <div>

       <h1>React Router Example</h1>
      <ul>

      <li>
            <Link to="/app">Home</Link>
      </li>

      <li>
          <Link to="/about">About</Link>
      </li>

      <li>
 
          <Link to="/contact">Contact</Link>
      </li>

      </ul>

 <Route exact path="/app" component={App} />
 <Route path="/about" component={About} />
 <Route path="/contact" component={Contact} />

      </div>
 </Router>*/

 <Router>
 <div>

<h1>React Router Example</h1>


 <ul>

 <li>
 <NavLink to="/app" exact activeStyle={
 {color:'red'} }>Home</NavLink>
  </li>

 <li>
 <NavLink to="/about" exact activeStyle={
 {color:'green'}}>About</NavLink>
 </li>

 <li>
 <NavLink to="/contact" exact activeStyle={
 {color:'magenta'}}>Contact</NavLink>
 </li>
 
 </ul>
 <Route exact path="/app" component={App} />
 <Route path="/about" component={About} />
 <Route path="/contact" component={Contact} />
 </div>

 </Router>
 )

 ReactDOM.render(routing, document.getElementById('root'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
