import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  /*
  State = estado da aplicação, objetos que podem ser alterados
  dinamicamente com o setState
  */
  state = {
    persons: [
      {id: 1, name: "Max", age: 28},
      {id: 2, name: "Manu", age: 30},
      {id: 3, name: "Carlita", age:12}
    ],
    showPersons: false
  };

    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      })

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({
        persons: persons
      })
    };

      togglePersonsRender = () => {
        this.setState({
          showPersons: !this.state.showPersons
        })
      }

      deletePersonHandler = (indexData) => {
        const persons = [...this.state.persons];
        persons.splice(indexData, 1);
        this.setState({
          persons: persons
        });
      }
      render() {
        const style = {
          backgroundColor: 'green',
          color: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
        };

        let persons = null;
        if ( this.state.showPersons ){
          style.backgroundColor = 'red';
          persons =
          (
            <div>
            {this.state.persons.map((person, index) => {
            return <Person name={person.name}
            age={person.age}
            key={person.id}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          </div>
        );
        }
        return (
          <div className="App">
          <h1>React App</h1>
          <p>This is actually working!</p>
          <button
          style={style}
          onClick={this.togglePersonsRender}>Toggle Persons</button>
          {persons}
          </div>
        );
      }
    }

    export default App;
