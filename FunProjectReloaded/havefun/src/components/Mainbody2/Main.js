import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Main.css'
import image1 from '../../Images-Set/scott-webb-Vn39uEkX00s-unsplash.jpg'
import image2 from '../../Images-Set/man-wearing-gray-tank-top-1423384.jpg'

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
                        <div className="box-1">
                          <div className="img-box">
                        <Link to="/exercises-bundle1">
                            <img src={image1}></img>
                        

                             <div className="details">
                              <div className="content">
                             <h2>For Intermediate Persons</h2>
                             <p>For persons who have been regular to gym for at least six months</p>
                             </div>
                             
                             </div>
                             </Link>
                          </div>
                        </div>                        
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">

                   <div className="box-1">
                   <div className="img-box">
                   <Link>
                     <img src={image2}></img>
                   </Link>
 
                   <div className="details">
                              <div className="content">
                             <h2>For Advanced Persons</h2>
                             <p>For persons who have been regular to gym for more than a year</p>
                             </div>
                             
                             </div>

                    </div>
                  </div>
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