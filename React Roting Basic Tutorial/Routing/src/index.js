//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';




import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import About from './About'
import Contact from './Contact'


 const routing = (

  <Router>
 
    <div>

 <h1>React Router Example</h1>
 <Route path="/app" component={App} />
 <Route path="/about" component={About} />
 <Route path="/contact" component={Contact} />

   </div>
 
 </Router>
     )
 ReactDOM.render(routing, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
