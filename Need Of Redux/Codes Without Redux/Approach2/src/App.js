import React,{Component} from 'react';


import BookList from './BookList';

class App extends Component {

  state = {
    books : [
            {name: 'Do Androids Dream of Electric Sheep?'} ,
            {name: 'Something Wicked This Way Comes'},
            {name: 'The Curious Incident of the Dog in the Night-Time'}
            ],
    description : null
          }

  descrip = [   "It was January 2021, and Rick Deckard had a license to kill.Somewhere among the hordes ofhumans out there, lurked severalrogue androids",
                "A carnival rolls in sometime after the midnight hour on a chill Midwestern October eve, ushering in Halloween a week before its time.",
                "Christopher John Francis Boone knows all the countries of the world and their capitals and every prime number up to 7,057. He relates  well to animals but has no understanding of  human emotions."
            ]

             
    showDescription = (i) =>{
      
       this.setState({ description : this.descrip[i] })
    
      }


 render(){
  return (
    <div className="App">
    <BookList data={this.state.books} show={this.showDescription}  description={this.state.description}></BookList>
    
          </div>
  );
}
}

export default App;
