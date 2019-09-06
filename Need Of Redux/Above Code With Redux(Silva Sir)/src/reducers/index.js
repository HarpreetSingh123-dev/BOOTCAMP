import { combineReducers } from 'redux';

// Reducers will generate all the application state

const bookList = [
    { title: 'Angels and Demons', author: 'Dan Brown' },
    { title: 'Brief History of Time', author: 'Stephen Hawking' },
    { title: 'The Second Lady', author: 'Irwing Wallace' }
];

export function bookListReducer(state = null) {
       return bookList;
}

export function selectedBookReducer(state = null, action) {
    if (action.type === 'SELECT_BOOK') {
        return  action.payload;
    }
    return state;
}

export function DelBookReducer(state = null ,action){
    console.log("we are in delete reducer")
  if (action.type === 'DEL_BOOK'){
       
           return action.payload;
       }
return state;
}


export default combineReducers({
    bookList: bookListReducer,
    selectedBook: selectedBookReducer,
    delbook:DelBookReducer
});