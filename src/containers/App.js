import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {

  constructor(props) {
    console.log('Constructor!');
    super(props);
  }


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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
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

  componentDidMount() {
    console.log("Component did mount é chamado após a renderização do componente.");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App] shouldComponentUpdate');
    return true;
  };

  componentDidUpdate() {
    console.log('[App] componentDidUpdate');
  };

  render() {
    console.log('Render!');
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
      <Aux>
        <button onClick={() => this.setState({ showCockpit: false })}> Cockpit button </button>
        {
          this.state.showCockpit ? <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsRender} /> : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
