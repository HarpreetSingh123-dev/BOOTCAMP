import {combineReducers} from 'redux'
import cartReducer from './cartReducer'
import totalReducer from './totalReducer'


export default combineReducers({

    cart:cartReducer,
    total:totalReducer
    

})

// whatever reducers are inside combine reducers will listens to actions 