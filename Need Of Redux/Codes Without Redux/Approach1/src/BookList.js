import React  from 'react';
import BookDetail from './BookDetail'

const BookList = ( props ) => {

return(
<div>
<li onClick={props.click}>{props.name}</li>
    

      
</div>
)
}

export default BookList;






