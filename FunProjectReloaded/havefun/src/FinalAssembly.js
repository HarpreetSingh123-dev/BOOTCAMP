import React, { Component } from 'react';
import {BrowserRouter as Router , Route , Switch , Redirect } from 'react-router-dom'
import App from './App'
import Sign from './components/navbar/SignUp/Sign'
import Login from './components/navbar/Login/Login'
import About from './components/navbar/About/About'
import Exercise from './components/Mainbody/Exercises'
import NotFound from './NotFound'
// Mainbody 3//
import EndoctrineSystem from './components/Mainbody3/Endoctrine/Endoctrine'
// Mainbody 2//
import MainBody2 from './components/Mainbody2/Mainbody2'
// Below are for admin only
import AllExercises from './Admin/AllExercises'
import AddExercise from './Admin/Exerciseadd'
import UpdateExercise from './Admin/UpdateExercises'
class FinalAssembly extends Component {
    render() {
        return (

            <Router>
            <div>
                <Switch>
                <Route exact path='/' component={App}></Route>
                <Route exact path="/signup" component={Sign}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/About" component={About}/>
                {/*Below Are MainBody Routes */}
                <Route exact path="/exercises" component={Exercise}></Route>
                <Route exact path="/404" component={NotFound}></Route>
                {/*Below Are MainBody3 Routes */}
                <Route exact path="/endoctrine" component={EndoctrineSystem}></Route>
                {/*Mainbody 2 routes */}
                <Route exact path="/exercises-bundle1" component={MainBody2}></Route>
                {/*Below Are AdminOnly Routes */}
                <Route exact path="/exerciseadd" component={AddExercise}></Route>
                <Route exact path="/allexercises" component={AllExercises}></Route>
                <Route exact path="/updateexercises/:id" component={UpdateExercise}></Route>
                <Redirect path='/404'></Redirect>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default FinalAssembly;