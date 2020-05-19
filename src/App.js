import React, { Component } from 'react';
import classes from'./App.css';
import Person from './Person/Person';

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
    let btnClass = '';

    if (this.state.showPersons) {
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
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>React App</h1>
        <p className={assignedClasses.join(' ')}>This is actually working!</p>
        <button
        className={btnClass}
          onClick={this.togglePersonsRender}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
