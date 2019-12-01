import React, { Component } from 'react';
import {connect} from "react-redux"
import incrementCartProduct from '../Redux/Actions/IncrementCartProduct'
import decrementCartProduct from '../Redux/Actions/decrementCartProduct'
import cartTotalCalculator from '../Redux/Actions/totalOfCart'
import {bindActionCreators} from 'redux'
import Cart from './Cart'

class userCart extends Component {
    
    componentDidMount(){
        this.props.cartTotalCalculator(this.props.cart)
    }

    componentDidUpdate(){
        this.props.cartTotalCalculator(this.props.cart)
    }
    
    addMore(id,name,description,img,price,units){

        const product ={id,name,description,img,price,units}
        this.props.incrementCartProduct(product)
        
       }   
    
       decreaseOne(id,name,description,img,price,units){
         const product ={id,name,description,img,price,units}
        this.props.decrementCartProduct(product)
        
       }
    
    
    
    render() {
        

        let a = null 
   let b = null 
   let c = null
    if(this.props.cart == 0){

      a = "Your Cart Is Empty , Add Something"
      
    }

    else{

      b =(<button >Checkout</button>)
      c =(<p>Cart Total Is :{this.props.total}Rs</p>)
    }
           return (
            
            
            
            <div>
                  <h4>You Have Following products</h4>

                  <div className="container">  
                  <div className="row">
                   {this.props.cart.map((item)=>

                          <Cart id={item.id}
                                 name={item.name} 
                                   description={item.description} 
                                         img={item.img} 
                                            price={item.price}
                                              units={item.units.units}
                                                  addMoreProduct={this.addMore.bind(this) }
                                                    decreaseOneProduct={this.decreaseOne.bind(this)}   
                             ></Cart>          


                   )}
                 </div>

                 <p>{a}</p>
                 <p>{c}</p>
                 <p>{b}</p>
                 </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) =>{

return {

    cart:state.cart,
    total:state.total
}
}

const mapActionsToProps = (dispatch) =>{
 
   return bindActionCreators({
  
     incrementCartProduct,
     decrementCartProduct,
     cartTotalCalculator 
    
      }, dispatch)
 }

export default connect(mapStateToProps,mapActionsToProps) (userCart);