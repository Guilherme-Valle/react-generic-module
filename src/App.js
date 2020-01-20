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
      {name: "Max", age: 28},
      {name: "Manu", age: 30},
      {name: "Carlita", age:12}
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: "Manu", age: 30},
        {name: "Carlita", age:26}
      ]})
    };

    nameChangedHandler = (event) => {
      this.setState({
        persons: [
          {name: 'Max', age: 28},
          {name: event.target.value, age: 30},
          {name: "Carlita", age:26}
        ]})
      }

      togglePersonsRender = () => {
        this.setState({
          showPersons: !this.state.showPersons
        })
      }
      render() {
        const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
        };

        let persons = null;
        if ( this.state.showPersons ){
          persons =
          this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/>
          })
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
