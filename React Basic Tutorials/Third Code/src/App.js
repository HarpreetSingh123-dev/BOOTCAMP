import React, { Component } from 'react';
import './App.css';
import Person from './Person';
class App extends Component {

  state = {

        personss: [
                  { id: 'asfa1', name: 'Max', age: 28 },
                  { id: 'vasdf1', name: 'Manu', age: 29 },
                  { id: 'asdf11', name: 'Stephanie', age: 26 }
                 ],
}

  nameChangedHandler = ( event, id ) => { //peson.id in is in id//

            const personIndex = this.state.persons.findIndex(p => {
           
                                               return p.id === id;// person.id in id
                                   });

            const person1 = {

              ...this.state.persons[personIndex]
                         
                          };
// const person = Object.assign({},

              //     this.state.persons[personIndex];

                 person1.name = event.target.value;

                 const persons2 = [...this.state.persons];

                 persons2[personIndex] = person1;

                 this.setState( {persons: persons2} );

                }

 deletePersonHandler = (personIndex) => {

   const personss = this.state.persons;  

               // const persons = [...this.state.persons]; /* can use any one of two*/

                personss.splice(personIndex, 1);

                this.setState({persons: personss});

              }

togglePersonsHandler = () => {

  const doesShow = this.state.showPersons;

  this.setState( { showPersons: !doesShow } );/*  true */

}

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

                {this.state.personss.map((personss, index) => {
               
               return <Person click={() => this.deletePersonHandler(index)}

               name={personss.name}

               age={personss.age}

               key={personss.id}  // why not id//

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
export default App;