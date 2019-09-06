import React from 'react';
import BookDetail from './BookDetail.js';

const bookList = (props)=>{

  const doesShow = (i)=>{
        
           props.show(i)
         
           }


  let showBooks = null;
  
   showBooks = props.data.map((cv,index,)=>{
            
      return (
            <div>
                <div>
                    <p onClick = {()=> doesShow(index)}>{cv.name}</p>
                </div>
            </div>
            );
    });


    return (
        <div>
        
        {showBooks}

        <BookDetail descc={props.description
        }></BookDetail>
        
        </div>
        

    );

}
export default bookList;
