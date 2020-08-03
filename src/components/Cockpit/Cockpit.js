import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    useEffect(() => {
        console.log('[Cockpit] useEffect');
        // setTimeout(() =>{
        //     alert('Dados salvos!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit] UseEffect cleanup');
        };
    }, []);

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is actually working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);