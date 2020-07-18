import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    /* static getDerivedStateFromProps(props, state) {
        console.log('[Persons] getDerivedStateFromProps');
        return state;
    }; */

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    };

    getSnapshotBeforeUpdate(prevProps, prevUpdate) {
        console.log('[Persons] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        console.log('[Persons] componenetDidUpdate');
    };

    componentWillUnmount() {
        console.log('[Persons] componentWillUnmount');
    }

    render() {
        console.log('[Persons] Rendering...')
        return this.props.persons.map((person, index) => {
            return <Person name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}
export default Persons;