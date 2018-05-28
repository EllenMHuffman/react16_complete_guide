import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        this.lastPersonRef = React.createRef();
    }

    componentDidMount () {
        this.lastPersonRef.current.focus();
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                position={index}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                ref={this.lastPersonRef}
                changed={(e) => this.props.changed(e, person.id)}
            />
        });
    }
}

export default Persons;
