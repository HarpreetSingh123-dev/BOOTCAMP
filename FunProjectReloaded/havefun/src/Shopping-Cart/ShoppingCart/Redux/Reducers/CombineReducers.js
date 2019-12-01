import {combineReducers} from 'redux'
import cartReducer from './CartReducer'
import totalReducer from './TotalReducer'
export default combineReducers( {

    cart:cartReducer,
    total:totalReducer

})