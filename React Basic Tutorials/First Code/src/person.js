import React from 'react';

  const person = ( props ) => {
    return (
            <div>
                 <p>I'm {props.name} and I am {props.age} years old!</p>
   
                 <p> you are {props.age} years  old</p>
               <hr></hr>
                 {props.children}
 
           </div>
           )

    };

    
export default person ;

