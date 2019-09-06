import React  from 'react';
const BookDetail = ( props ) => {

 return(

<div>


<p>{props.detail}</p> 
<p>{props.price}</p> 
<p>{props.status}</p>
<p>{props.subs}</p>


</div>
)
}
export default BookDetail;




