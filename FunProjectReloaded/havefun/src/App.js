import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Mainbody from'./components/Mainbody/Mainbody'
import Mainbody2 from './components/Mainbody2/Mainbody2'
import Mainbody3 from './components/Mainbody3/Mainbody3'
import Main from './components/Mainbody2/Main'
class App extends Component {
render() {
return (

<div>

<Navbar></Navbar>
<Mainbody></Mainbody>
<Mainbody3></Mainbody3>
<Main></Main>


</div>
);



}

}



export default App;