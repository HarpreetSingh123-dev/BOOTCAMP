import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {
  
  state = {
         
      persons: [ { name: 'Max', age: 28 },
                
                 { name: 'Manu', age: 29 },
                 { name: 'Stephanie', age: 26 }
               ],

          otherState: 'some other value'
          
         }

  switchNameHandler = (newName) => {

        this.setState( {

          persons: [
                        { name: newName, age: 28 },
                        { name: "jj", age: 29 },
                        { name: 'Stephanie', age: 27 }
                   ]
                      } )
                 
                       }

    nameChangedHandler = (event) => {

            this.setState( {
                    
              persons: [

                      { name: 'Max', age: 28 },
                      { name: event.target.value, age: 29 },/* this is important */ 
                      { name: 'Stephanie', age: 26 }

                       ]
                         } )

                          }


    render () {

      const style = {
                   backgroundColor: 'red',
                   font: 'inherit',
                   border: '1px solid blue',
                   padding: '8px',
                   cursor: 'pointer'
                    };

  return (
         
         <div className="App">
         <h1>Hi, I'm a React App</h1>
         <p>This is really working!</p>

<button style={style} onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>

<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
<Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={() => this.switchNameHandler( 'Abby!')}

changed={this.nameChangedHandler} > My Hobbies:Racing</Person>

<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

</div>
);
// return React.createElement('div', {className: 'App'},
//React.createElement('h1', null, 'Does this work now?'));
}

}
export default App; 


/* Above code was our first encounter with react*/


/* Below code is our second encounter with conditional statements*/



/*
import React, { Component } from 'react';
import './App.css';
import Person from './Person';
class App extends Component {

  state = {

        persons: [
                  { id: 'asfa1', name: 'Max', age: 28 },
                  { id: 'vasdf1', name: 'Manu', age: 29 },
                  { id: 'asdf11', name: 'Stephanie', age: 26 }
                 ],

  otherState: 'some other value',

  showPersons: false
          }

  nameChangedHandler = ( event, id ) => { //peson.id in is in id//

            const personIndex = this.state.persons.findIndex(k => {
           
                                               return k.id === id;// person.id in id
                                   });

            const person = {

              ...this.state.persons[personIndex]
                         
                          };
// const person = Object.assign({},

              //     this.state.persons[personIndex];

                 person.name = event.target.value;

                 const persons = [...this.state.persons];

                 persons[personIndex] = person;

                 this.setState( {persons: persons} );

                }

 deletePersonHandler = (personIndex) => {

   const persons = this.state.persons;  

               // const persons = [...this.state.persons]; /* can use any one of two*/

   /*             persons.splice(personIndex, 1);

                this.setState({persons: persons});

              }

togglePersonsHandler = () => {

  const doesShow = this.state.showPersons;

  this.setState( { showPersons: !doesShow } );/*  true */

                      /*     }
/*
render () {

  const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
               };

let persons = null;

if ( this.state.showPersons ) {

      persons = (

                <div>

                {this.state.persons.map((persons, index) => {
               
               return <Person click={() => this.deletePersonHandler(index)}

               name={persons.name}

               age={persons.age}

               key={persons.id}

               changed={(event) => this.nameChangedHandler(event,persons.id)} />

                  })}

               </div>
               );
               }

     return (

           <div className="App">
           <h1>Hi, I'm a React App</h1>
           <p>This is really working!</p>
           <button style={style}onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
          </div>
            );
// return React.createElement('div', {className: 'App'},
//React.createElement('h1', null, 'Does this work now?'));
}
}
export default App;*/
