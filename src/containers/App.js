import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  /*
  State = estado da aplicação, objetos que podem ser alterados
  dinamicamente com o setState
  */
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 30 },
      { id: 3, name: "Carlita", age: 12 }
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
    let persons = null;

    if (this.state.showPersons) {
      persons =
        (
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        );
    }



    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsRender} />
        {persons}
      </div>
    );
  }
}

export default App;
