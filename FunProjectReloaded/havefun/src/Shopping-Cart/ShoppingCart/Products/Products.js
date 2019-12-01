import React from 'react';
import './Products.css'




function Products(props) {
    
    return (
    
     
<div className="col-lg-4 col-md-6 col-sm-6">
    <div className="Products-Main"> 
       <div className="card"  >
            <div className="hg"> 
             <img src={props.img}  style={{width: 11 +"rem", height :10 +"rem"}}className="card-img-top" alt="..."></img>
              </div>
                  
                  <div className="card-body text-dark">
        
                      <h5 className="card-title text-center">{props.name}</h5>
                      <p>Price: {props.price} Rs</p>
                      <p className="card-text ">{props.description}</p>
                      
                      <div className="Product-Button-Set">
                      <button  onClick={() => props.addfunc( props.id,props.name,props.description,props.img,props.price,{units:1} )} data-toggle="modal" data-target="#exampleModal" class="btn btn-primary"  >Add To Cart</button>
                      
                  </div>
                </div>
         </div>

</div>

</div>

    );
}
  
export default Products;