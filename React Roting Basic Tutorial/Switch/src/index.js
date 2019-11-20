
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import About from './About'
import Contact from './Contact'
import Notfound from './Notfound'

 const routing = (
 <Router>
 <div>
 <h1>React Router Example</h1>
 <ul>
 <li>
 <NavLink to="/gg" exact activeStyle={
 {color:'red'}
}>Home</NavLink>
 </li>
 <li>
 <NavLink to="/about" exact activeStyle={
 {color:'green'}

 }>About</NavLink>
 </li>
 <li>
 <NavLink to="/contact" exact activeStyle={
 {color:'magenta'}
 }>Contact</NavLink>
 </li>
 </ul>
 <Switch>
 <Route exact path="/gg" component={App} />
 <Route path="/about" component={About} />
 <Route path="/contact" component={Contact} />
 <Route component={Notfound} />
 </Switch>
 </div> </Router>
 )
 ReactDOM.render(routing, document.getElementById('root'));