import React, { Component } from 'react';
import './Mainbody.css'
import {Link, NavLink} from 'react-router-dom'
import image1 from "../../Images-Set/wb0198_gymtimidation_graphics_blog-image.jpg"
class Mainbody extends Component {

constructor (props){
         
        super(props)
             this.state = {
                         show :false
                         }
       }

     // showHandler(){
       //         this.setState({ show:true})
         //         }

     // hideHandler(){
       //         this.setState({show:false})
         //        }

 render() {

     //  let detail = null;

       //if(this.state.show){

    //    detail = (
      //            <div>
     //             <h4>Five Things that scare us most about gym</h4>
       //           <hr className="main-hr"></hr>
     //             <ul>
     //             <li>Looking stupid in front of other people</li>
   //               <li>Feeling self-conscious about your fitness</li>
    //              <li>Lifting weights </li>
    //              <li>The treadmill </li>
       //            <li>Asking for help</li>
                 
      //            </ul>
      //            <NavLink to="/exercises">Click Here To Learn More</NavLink>
     //             </div>
       //         )
         //   }

    let button = null
        
       if (this.state.show == false){
                   button =( <NavLink to="/exercises"> <div className="buttontt"><button type="button" className="btn btn-primary" >Learn More In Detail</button></div></NavLink> )
           } 
      // else { 
        //     button = (<button  type="button" class="btn btn-info" onClick={this.hideHandler.bind(this)}>Hide</button>)  
          //  }

     
      return (
          <div>
             <div className="color-set"> 
             <div className="mainbody-outer">
             <div className="head-color">
             <h1 className="text-center"><b>Puregym Blog</b></h1>
             </div>
             <div className="container"> <p>Here you will discover new fitness world, including some knowledge about supplimentation
               and exercises , i have also included some workout plans as well as little known tips and tricks that will
               fastrack your progress
             </p> 
             </div>
             <div className="container-fluid">
              <div className="Row-Adjust">
               <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12">
                  <img src={image1}></img>

                 </div>
               
                

                <div className="col-lg-7 col-md-7 col-sm-12">
                    
                    <div className="head-color">
                    <h3 className="text-center"><b>Feeling Scared of gym ? You are not alone</b></h3>
                    </div>
                    <div className="Side-Para-Adjust">
                    <p>There’s no getting around the fact that for some of us the gym can feel like an intimidating
                     place when you’re first starting out.
                     There are Various latest researches shows that 50% of non-gym members say they find the idea of going to the
                      gym scary, with one in five saying they would find it very scary.  
                      But don't worry, because we have found the best ways of overcoming this.
                      <NavLink to="/exercises">Click Here To Learn More</NavLink>
                        
                        </p>
                       </div>
                      
                       <div className="button-primary-adjust">
                      {button}
                       </div>
                      
                   {/*   <div className="detail-adjust">
                      {detail}
      </div>  */}
                     
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

export default Mainbody;