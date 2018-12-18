import React, { Component } from 'react';
import './Loto.css';

class Loto extends Component {
    render() {
        return (
            <div className="lotoreya">
                <ul>
                    <li>{this.props.numbers[0]}</li>
                    <li>{this.props.numbers[1]}</li>
                    <li>{this.props.numbers[2]}</li>
                    <li>{this.props.numbers[3]}</li>
                    <li>{this.props.numbers[4]}</li>
                </ul>
            </div>
        );
    }
}

export default Loto;