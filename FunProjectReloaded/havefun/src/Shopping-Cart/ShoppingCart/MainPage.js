import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import addToCartAction from './Redux/Actions/addToCartProduct'
import './MainPage.css'
import PRODUCTS from './Data'
import Products from './Products/Products'
import {Link} from 'react-router-dom'


class MainPage extends Component {
   

    add(id,name,description,img,price,units){
   
             const product ={id,name,description,img,price,units}
             this.props.addToCartAction(product)

             
        }
   
   

    render() {

       
        
     
       

        return (
            
            <div>
                <div className="MainPage-Decoration">
                <Link to="/Cart"><button>Go To Cart</button></Link>
                 </div>
                   <h1 className="text-center">Shop From Following Products</h1>
                     <div className="container">
                       <div className="row" >

                       
                         
                          {PRODUCTS.map((pdt)=>
 
                              <Products id={pdt.id}
                                    name={pdt.name} 
                                      description={pdt.description} 
                                        img={pdt.img} 
                                           price={pdt.price} 
                                            addfunc={this.add.bind(this)} 
                                               ></Products>
                             
                            
                            )}
                            
                         
              </div>
              
              </div>

              <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                       
      
                       <div class="modal-body">
                         <h3>Product Added To Cart</h3>
                       </div>
                      
                       <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" data-dismiss ><Link to="/Cart">Go To Cart</Link></button>
                       </div>   
                   </div>
              </div>
            </div>
          </div>
        );
    }
}



  
 const mapActionsToProps = (dispatch) =>{
 
   return bindActionCreators({
 
    addToCartAction
     
   
     }, dispatch)
 }

export default connect(null,mapActionsToProps)(MainPage);