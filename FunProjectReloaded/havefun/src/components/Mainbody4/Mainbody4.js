import React, { Component } from 'react';
import './Mainbody4.css'
import image1 from '../../Images-Set/man-lifting-weights.jpg'
import image2 from '../../Images-Set/person-carrying-black-barbell-931321.jpg'
import image3 from '../../Images-Set/person-holding-black-and-silver-steel-barbell-photography-949126.jpg'
import image4 from '../../Images-Set/photo-of-man-with-muscular-body-1547248 (1).jpg'
import image5 from '../../Images-Set/man-lifting-barbell-497934.jpg'
import image6 from '../../Images-Set/upper-body-fitness.jpg'
class Mainbody4 extends Component {
    render() {
        return (
            <div className="MainBody4-Set">
              <div className="Main-Body-Inner">
                <h2 className="text-center">Workouts Of Respective Body Parts</h2>
                <hr></hr>
                <p className="text-center">Bowse some of my workout plans of various body parts</p>
                <div className="container">

                <div className="row">

                 <div className="col-lg-6 col-md-6 col-sm-12">
                     <div className="z">   
                         <img src={image1}></img>
                        <div className="content">
                         
                           <h1>Chest</h1>
                        
                        </div>
                      </div>   
                 </div>
                
                 <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="z">
                      <img src={image2}></img>
                      <div className="content">
                         
                           <h1>Shoulder</h1>
                        
                        </div>
                    </div>
                </div>
                 
                 <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="z">
                        <img src={image3}></img>
                        <div className="content">
                         
                           <h1><b>Back</b></h1>
                        
                        </div>
                      </div>
                 </div>
                 
                 <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="z">
                      <img src={image4}></img>
                      <div className="content">
                         
                           <h1>Bicep</h1>
                        
                        </div>
                    </div>
                </div>
                
                 <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="z">
                      <img src={image5}></img>
                      <div className="content">
                         
                           <h1>Legs</h1>
                        
                        </div>
                    </div>
                 </div>
                 
                 <div className="col-lg-6 col-md-6 col-sm-12">
                   <div className="z">
                      <img src={image6}></img>
                      <div className="content">
                         
                           <h1>Tricep</h1>
                        
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

export default Mainbody4;