export const   ADD_TO_CART = "ADD_TO_CART"

export default function addToCart(product) {

    console.log("in ADD")
    console.log(product)
    return {

        type:ADD_TO_CART,
        payload: product
     
    }
}
