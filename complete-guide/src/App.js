import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      persons: [
          {name: 'Ellen', age: 29},
          {name: 'Erik', age: 30},
      ]
  };

  switchNameHandler = () => {
      console.log('Was clicked!');
      this.setState({
        persons: [
          {name: 'Ellen', age: 25},
          {name: 'Erik', age: 35},
        ]
      })
  };

  nameChangeHandler = (event) => {
      this.setState({
          persons: [
              {name: 'Ellen', age: 29},
              {name: event.target.value, age:30}
          ]
      })
  };

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

    return (
      <div className="App">
        <h1>I'm a react app</h1>
          <button
              style={style}
              onClick={this.switchNameHandler}
          >
              Switch Name
          </button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler}
        />
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changeName={this.nameChangeHandler}
        >
            This is where the props.children comes from
        </Person>
      </div>
    );
  }
}

export default App;
