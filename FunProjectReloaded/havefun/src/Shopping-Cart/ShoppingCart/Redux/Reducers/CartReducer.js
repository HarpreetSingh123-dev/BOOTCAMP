


const INITIAL_STATE =[ 

  
    
]

export default function cartReducer( state = INITIAL_STATE , action={} ){

    console.log("in reducer")
    
  switch(action.type){

   case  'ADD_TO_CART' :{

    const product = action.payload 
    const cart = state
    //console.log(cart)
    // console.log(product)
    //const product ={id,name,description,img,price,units}
     // console.log(product.units)
          const exsistingProductIndex = cart.findIndex( (p)=> p.id === product.id) //Here we are checking if the product already exsist in cart
                                                                                         // Percisely the index of exsisting product
               if(exsistingProductIndex >= 0){ // here if product exsist in cart

                         const cartProducts = [...cart] // slice creates copy of array

                         const exsistingProduct = cartProducts[exsistingProductIndex] // we properly locate exsisting product
          
                         const updatedUnitsProduct = { ...exsistingProduct ,  units:{units: exsistingProduct.units.units + product.units.units } }
                         // we update units above

                        cartProducts[exsistingProductIndex] = updatedUnitsProduct
                        //console.log(updatedUnitsProduct.units+ "kkkk")
                         return cartProducts;
           }
         

        else return [...cart , product] // insted of object.assign use this syntax;
  }

  case 'INCREASE_COUNT_CART' :{

                             const product = action.payload 
                             const cart = state
       
                              
                             const exsistingProductIndex = cart.findIndex( (p)=> p.id === product.id)

                                  if(exsistingProductIndex >= 0){ 

                                              const cartProducts = [...cart] 

                                              const exsistingProduct = cartProducts[exsistingProductIndex] 

                                              const updatedUnitsProduct = { ...exsistingProduct ,  units:{units: exsistingProduct.units.units + 1 } }
        
                                              cartProducts[exsistingProductIndex] = updatedUnitsProduct
       
                                              return cartProducts;
                                           }

 
  }

  case 'DECREASE_COUNT_CART' :{
     
                                const product = action.payload 
    
                                const cart = state

                                const exsistingProductIndex = cart.findIndex( (p)=> p.id === product.id)

                                if(exsistingProductIndex >= 0){ 

                                                               const cartProducts = [...cart] 

                                                               const exsistingProduct = cartProducts[exsistingProductIndex] 

                                                               const updatedUnitsProduct = { ...exsistingProduct ,  units:{units: exsistingProduct.units.units -1 } }
     
                                                               cartProducts[exsistingProductIndex] = updatedUnitsProduct

                                                               if(updatedUnitsProduct.units.units===0){

                                                                                                       console.log(cart)
                                                                                                       console.log("in zero case")
                                                                                                       cartProducts.splice(exsistingProductIndex ,1)

                                                                                                       return cartProducts;
                                                                                                       }
     
                                                                                              else{
                                                                                             
                                                                                                    return cartProducts;
                                                                                                }

                                                                                            }


}

  }


return state;
}

