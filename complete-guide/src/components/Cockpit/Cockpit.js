import React from 'react';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
    };

    const classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }
    if (props.showPersons) {
        style.backgroundColor = 'red';
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>Here we go</p>
            <button
                style={style}
                onClick={props.clicked}
            >
                Toggle People
            </button>
        </Aux>
    );
};

export default cockpit;
