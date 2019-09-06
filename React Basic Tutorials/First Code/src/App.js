/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/



import React, { Component } from 'react';
import './App.css';
import Person from './person';

class App extends Component {
render() {
return (

<div className="App">

<h1>Hi, I'm a React App</h1>

<p>This is really working!</p>
<hr></hr>
<Person name="Max" age="28" ></Person>

<Person name="Manu" age="29" >My Hobbies: Racing</Person>

<Person name="Stephanie" age="26" />

<Person name="Harpreet" age="22"/>

</div>

);
//return React.createElement('div', {className: 'App'},
//React.createElement('h1', null, 'Does this work now?'));


}

}



export default App;
