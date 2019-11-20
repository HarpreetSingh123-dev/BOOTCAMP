import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Main.css'
class Main extends Component {
    render() {
        return (
            <div className="main">
            
                <div className="container-fluid">
                <div className="main-set">
                <h2 className="text-center"><b>Workout Plans</b></h2>
                <hr></hr>
                <p className="text-center">Browse some of my workout plans below</p>

                <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                <Link to="/exercises-bundle1"><img src="https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"></img></Link>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                     <img src="https://images.pexels.com/photos/1423384/pexels-photo-1423384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
                  </div>


                </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Main;