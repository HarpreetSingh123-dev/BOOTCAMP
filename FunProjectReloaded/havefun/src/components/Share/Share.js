import React from 'react';
import {FacebookShareButton , FacebookIcon , FacebookShareCount ,WhatsappShareButton ,WhatsappIcon} from 'react-share'
import './Share.css'

const Share = ()=> {
   

    const shareUrl = "http://facebook.com"
    const title ="FaceBook"
        return (
            <div>
                <div className="row">
                <h3 className="text-center">If You Like My Content , Please Share</h3>
               
                <div className="col-sm-12 col-lg-12 col-md-12">
                <div className="Share-Buttons-setting">
                  
                   <FacebookShareButton url={shareUrl} quote={title}>
                         
                      <FacebookIcon size={200} ></FacebookIcon>
                      
                    </FacebookShareButton>
                 </div>
                 
                  <div className="col-sm-12 col-lg-12 col-md-12">
                  <div className="Share-Buttons-setting">
                      <WhatsappShareButton>
                      
                      <WhatsappIcon  size={200} ></WhatsappIcon>
                     
                      </WhatsappShareButton> 
                      </div> 
                      </div>
                      </div>
                    </div>
            </div>
        );
    
}

export default Share;