import React, { Component } from 'react';
import Products from './Components/Products'
import PRODUCTS from './Data'
import Cart from './Components/Cart'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import addToCartAction from './Redux/Actions/Cart-Actions'
import updateAddCart from './Redux/Actions/updatAddCart'
import updateDecreaseCountCart from './Redux/Actions/updateRemoveCart'

import totalOfCart from './Redux/Actions/totalOfCart'

class App extends Component {


  
  total(){

   // this.props.totalOfCart(this.props.cart)
   }
   
componentDidUpdate(){
  console.log("update")
  this.props.totalOfCart(this.props.cart)

  var  gg = this.props.cart.map((kk)=>{

       return kk.units.units
  })


}

  
   add(id,name,description,img,price,units){
   
      const product ={id,name,description,img,price,units}
      this.props.addToCartAction(product)
      
      

      }

   addMore(id,name,description,img,price,units){

    const product ={id,name,description,img,price,units}
    this.props.updateAddCart(product)
    
   }   

   decreaseOne(id,name,description,img,price,units){
    const product ={id,name,description,img,price,units}
    this.props.updateDecreaseCountCart(product)
    
   }

  // componentWillReceiveProps(){

    //console.log("will recive props")
   // this.props.totalOfCart(this.props.cart)
  // }

  render() {
    
   let a = null 
   let b = null 
   let c = null
    if(this.props.cart == 0){

      a = "Your Cart Is Empty , Add Something"
      
    }

    else{

      b =(<button onClick={this.total.bind(this)}>Checkout</button>)
      c =(this.props.total)
    }
  
  
    return (
      <div >
        <h1 className="text-center">Shop From Following Products</h1>
        <div className="container">
        <div className="row" >
       
         
        
        {PRODUCTS.map((pdt)=>
 
             <Products id={pdt.id}
                         name={pdt.name} 
                          description={pdt.description} 
                            img={pdt.img} 
                             price={pdt.price} addfunc={this.add.bind(this) }></Products>
        )}
       
       </div>

        <ul>

           <h2 className="text-center"> Cart Is Below </h2>

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

             

          <div className="col-lg-12">
               
              <h2>Total of cart:{c} Rs</h2>
             
              <h4> {a}  </h4>
             {b}

          </div>
          </div>
        </ul>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{

   return {
     cart: state.cart,
     total:state.total
    
   }

}
 
const mapActionsToProps = (dispatch) =>{

  return bindActionCreators({

    //for adding into cart , updating cart
    addToCartAction,
    updateAddCart,
    updateDecreaseCountCart,

    // below are of total

     totalOfCart
  
    }, dispatch)
}


export default connect(mapStateToProps , mapActionsToProps)(App)