import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Mainbody from'./components/Mainbody/Mainbody'
import Mainbody3 from './components/Mainbody3/Mainbody3'
import Main from './components/Mainbody2/Main'
import Shopping from './Shopping-Cart/Landing-Display'
import Mainbody4 from './components/Mainbody4/Mainbody4' 
class App extends Component {
render() {
return (

<div>

<Navbar></Navbar>
<Mainbody></Mainbody>
<Mainbody3></Mainbody3>
<Main></Main>
<Shopping></Shopping>
<Mainbody4></Mainbody4>

</div>
);



}

}



export default App;
