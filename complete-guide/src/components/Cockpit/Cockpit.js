import React from 'react';

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
        <div className={'cockpit'}>
            <h1>I'm a react app</h1>
            <p className={classes.join(' ')}>Here we go</p>
            <button
                style={style}
                onClick={props.clicked}
            >
                Toggle People
            </button>
        </div>
    );
};

export default cockpit;
