import React, { Component } from 'react';
import './Landing-Display.css'
import {Link} from 'react-router-dom'

class LandingDisplay extends Component {
    render() {
        return (
            <div className="Landing-Display-Main">

                 <h2 className="text-center">What About Suppliments</h2>
                 <hr></hr>
                 <p className="text-center">Browse Some of the Suppliments from my online store </p>
                 
                  <div className="container-fluid">
                   <div className="container">
                   <Link to="/shopping">  <div className="aa">
                   <img src="https://cdn.imgbin.com/12/7/20/imgbin-dietary-supplement-bodybuilding-supplement-exercise-pre-workout-physical-fitness-bodybuilding-zKShBm34Gb8SjpUj1M8FBH9kX.jpg"></img>
                    
                    <div className="details">
                       <div className="content">
                        <h2>Click Here To Learn More</h2>
                       </div>
                    </div>
                    
                   </div></Link>
                   </div>
                 </div>
            
            </div>
        );
    }
}

export default LandingDisplay;