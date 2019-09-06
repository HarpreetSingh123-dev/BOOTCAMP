import React, { Component } from 'react';

import BookList from './BookList'
import BookDetail from './BookDetail'
import classes from '../src/App.css'


class App extends Component {

  state = {

    BookList: [
      { name: 'Stephen Hawking' },
      { name: 'Charles Darwin' },
      { name: 'HC Verma' }
    ],

    BookDetail: [
      { detail: 'A very good book for Space Researchers', 
        price: 300, 
        status: "avalable"  , 
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GwqmyOShgaLmE7Ff3-GF5kuN_zK2QZGPOd8NOJ7IMfB80raiGg",
        subs: "This book presents  life journey of a remarkable scientist stepehen hawking and the theories he discovered while suffering with a fatal disease" 
      },
      
      { detail: 'Very good book for medical students' ,
       price:600 , 
       status:"unavalable", 
       imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeiQT8K4tID0pUv-qpjFVDrZiMTXgoCUsi65oiFcrgmWwFcrW",
       subs:"This book presents a Great Scientist Charles Darwin and his most remarkable theory of natural selection"  
      },
      
      { detail: 'Very good book for IIT aspirants', 
        price:1000 , 
        status:"avalable", 
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLolFDf41MQMeoXO85sN7fhUBZ2K5QcrG4Nxmcio5rUrIYiLRg",
        subs:"HC verma is a physics lectaturar in IIT kanpur , this books written by him is on the concepts of physics purely based on NCERT slybbus "
      }


    ],
    activeBook: [],


    showBooks: false,
    //otherState: 'some other value',



  }

  

  setActiveBook = (i) => {
    
    this.setState({
      
         activeBook: this.state.BookDetail[i],
         showBooks: true
     })
   }


  render() {

       let Books = null;

       if (this.state.showBooks) {

            Books = (
               <div >
 
               <h5>Details Are Follows</h5>
                 
                <div className="card" className={classes.width}  >
                <img src={this.state.activeBook.imgsrc} className="card-img-top" className={classes.img} alt="..."></img>
                <div className="card-body">
                <h5 className="card-title"><b><BookDetail detail={this.state.activeBook.detail}/></b></h5>
                <p className="card-text"><BookDetail subs={this.state.activeBook.subs}/></p>
                <p className="card-text"><b>Price:</b><BookDetail price={this.state.activeBook.price}/></p>
                <a href="#" className="btn btn-primary">Buy Now</a>
               
               </div>
          
               </div>

                    
               { /*  <BookDetail detail={this.state.activeBook.detail} price={this.state.activeBook.price}
                  status={this.state.activeBook.status}/>*/}
                  </div>
                  )
      }

    return (
      <div>

        <h1>We have following books</h1>

        <ul>

          {
            this.state.BookList.map((data, i) => {
              return (
                <BookList click={() => this.setActiveBook(i)} name={data.name} ></BookList>
              )
            })
          }


        </ul>


        {/*<button onClick = {this.toggleDetailHandler}>click here</button>*/}

        {/* <BookDetail detail1={this.state.BookDetail[0].detail}/>
      <BookDetail detail2={this.state.BookDetail[1].detail}/>
    <BookDetail detail3={this.state.BookDetail[2].detail}/> */}

        {Books}

      </div>
    );
  }
}

export default App;
