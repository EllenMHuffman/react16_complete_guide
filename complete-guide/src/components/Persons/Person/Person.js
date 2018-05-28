import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount () {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        return (
            <WithClass classes={'Person'}>
                <p onClick={this.props.click}>The name is {this.props.name} and the age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </WithClass>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default Person;
