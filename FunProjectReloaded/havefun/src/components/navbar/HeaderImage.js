import React, { Component } from 'react';
import './HeaderImage.css'
import image1 from '../../Images-Set/victor-freitas-iGZiWuEg824-unsplash.jpg'
class HeaderImage extends Component {
render() {
return (

        <div >
         <div className="nnn">
         <div className="ll">
         <div className="Image-Overlay">
         <div className="text-center">
         
          <h1>Make It A Lifestyle , <br></br>Not A Duty</h1>
         </div>
        </div>
         </div>
         </div>

        <div class="img-set">
              <img src={image1}/>
        </div>

        </div>

);
}

}

export default HeaderImage;
