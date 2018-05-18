import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
      persons: [
          {name: 'Ellen', age: 29},
          {name: 'Erik', age: 30},
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

  nameChangeHandler = (event) => {
      this.setState({
          persons: [
              {name: 'Ellen', age: 29},
              {name: event.target.value, age:30}
          ]
      });
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
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

      let persons = null;

      if (this.state.showPersons) {
          persons = (
              <div>
                  {this.state.persons.map(person => {
                      return <Person
                          name={person.name}
                          age={person.age}/>
                  })}
              </div>
          )
      }

    return (
      <div className="App">
        <h1>I'm a react app</h1>
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
