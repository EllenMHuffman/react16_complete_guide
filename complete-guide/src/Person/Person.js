import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className={'Person'}>
            <p onClick={props.click}>The name is {props.name} and the age is {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changeName} value={props.name}/>
        </div>
    )
};

export default person;
