import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Mainbody3.css'
import image1 from '../../Images-Set/photo-1550345332-09e3ac987658.jpg'
import image2 from '../../Images-Set/photo-1526506118085-60ce8714f8c5.jpg'
import image3 from '../../Images-Set/spencer-davis-0ShTs8iPY28-unsplash.jpg'
import image4 from '../../Images-Set/person-lifting-dumbbell-1483217.jpg'

class Mainbody3 extends Component {
    render() {
        return (
            <div className="Main-Body-Three">
                <div className="container">

                <h2 className="text-center"><b>Understand Your Body's Functionality</b></h2>
                <hr></hr>
                <p className="text-center">Building muscle or loosing fat is not limited to diet and exercise , it also depends on Your
                    Other Factors ASuch As Age and Gender and also on the complex processess running inside our Body
                      </p>
               <div className="row">
               
                  
               
                      <div className="col-lg-3 col-md-6 col-sm-6">
                      <Link  className="link" to="/endoctrine">
                            <div className="y">
                             
                            <img src={image1}></img>
                            <div className="h">
                           <h5 className="text-center"><b>Human Endoctrine <br></br>System</b></h5>
                            </div>
                            
                            </div>
                            </Link>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="y">
                            <img src={image2}></img>
                            <div className="h">
                            <h5 className="text-center"><b>Know About Various<br></br>Suppliments</b></h5>
                            </div>
                            </div>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="y">
                             <img src={image3}></img>
                             <div className="h">
                             <h5 className="text-center"><b>Nutrition ,Lifestyle Management </b></h5>
                             </div>
                             </div>
                      </div>


                      <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="y">
                               <img src={image4}></img>
                               <div className="h">
                               <h5 className="text-center"><b> Human Muscular <br></br>System</b></h5>
                                </div>
                                </div>
                      </div> 



               </div>
             
               </div>


            </div>
        );
    }
}

export default Mainbody3;