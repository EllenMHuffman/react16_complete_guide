import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
    state = {
        persons: [
            {id: 1,name: 'Ellen', age: 29},
            {id: 2,name: 'Erik', age: 30},
        ],
        usernames: [
            'username1',
            'username2',
        ],
        showPersons: false,
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({showPersons: !doesShow});
    };

    nameChangeHandler = (e, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = e.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    usernameChangeHandler = (e) => {
        this.setState({
            usernames: [
                e.target.value,
                'username same'
            ]
        });
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            changeName={(e) => this.nameChangeHandler(e, person.id)}
                        />
                    })}
                </div>
            );
            style.backgroundColor = 'red';
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>I'm a react app</h1>
                <p className={classes.join(' ')}>Here we go</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}
                >
                    Show People
                </button>
                {persons}
                <UserOutput username={this.state.usernames[0]}/>
                <UserOutput username={this.state.usernames[1]}/>
                <UserInput changeUsername={this.usernameChangeHandler} username={this.state.usernames[0]}/>
            </div>
        );
    }
}

export default App;
