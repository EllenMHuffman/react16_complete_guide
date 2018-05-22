import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import UserOutput from '../components/UserOutput/UserOutput';
import UserInput from '../components/UserInput/UserInput';

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

    nameChangedHandler = (e, id) => {
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
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }


        return (
            <div className="App">
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler} />
                {persons}
                <UserOutput username={this.state.usernames[0]}/>
                <UserOutput username={this.state.usernames[1]}/>
                <UserInput changeUsername={this.usernameChangeHandler} username={this.state.usernames[0]}/>
            </div>
        );
    }
}

export default App;