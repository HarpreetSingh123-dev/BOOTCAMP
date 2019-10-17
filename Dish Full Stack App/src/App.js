import React, { Component } from 'react';
import axios from 'axios'
import Dish from './dish'
class App extends Component {
   
   constructor(props){

     super(props)

     this.showHandler= this.showHandler.bind(this)
     this.hideHandler=this.hideHandler.bind(this)
     this.state={

       dishes:[],

       show : false
     }

      

    }
   

    componentDidMount(){

        axios.get('http://localhost:9000/dishes/')


        .then((res)=>{

                if(res.data.length>0){          
                  console.log(res.data)
                    
                   
               this.setState ({
                       dishes:res.data, // got it problem is here we are settinf users into username
                         })
                    }
                })
             }
      
     
             showHandler(){

                this.setState({

                    show:true
                })
             }


             hideHandler(){

                this.setState({

                    show:false
                })
             }
    
       render() {
     
       var b = null;
       var a = null;
       if(this.state.show){
        a = ( <button onClick={this.hideHandler}>Click To Hide Menu</button>)     
        b = ( this.state.dishes.map((dishes)=>{
                                  

         return  <div> <li><h4>{ dishes.name}</h4></li>  <p>{dishes.description}</p> </div>


       }))}
        

     return (
   
        
    
       
            <div>
                
                <button onClick={this.showHandler}>Click To See Menu</button>
                   
              

                <ol>
                   
                      

                  {b}
                  {a}

                </ol>
             
                 
            </div>
        );
    }
}

export default App;