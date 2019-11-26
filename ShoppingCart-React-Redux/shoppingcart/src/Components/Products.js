import React from 'react';


function Products(props) {
    
    return (
        
    <div className="col-lg-4">

       <div class="card" style={{width: 18 +"rem"}} >
 
             <img src={props.img}  style={{width: 13 +"rem", height :13 +"rem"}}class="card-img-top" alt="..."></img>

                  <div class="card-body">
        
                      <h5 class="card-title">{props.name}</h5>
                      <p>Price: {props.price} Rs</p>
                      <p class="card-text">{props.description}</p>
                      <p>ID:{props.id}</p>
                      <button  onClick={() => props.addfunc( props.id,props.name,props.description,props.img,props.price,{units:1} )} class="btn btn-primary">Add To Cart</button>
   
                  </div>
         </div>

</div>
    );
}

export default Products;