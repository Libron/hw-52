import React, { Component } from 'react';
import Loto from './components/Loto';
import './App.css';

class App extends Component {
  state = {
        numbers: [1, 2, 3, 4, 5]
  };

  getRandomNumbers = (size = 5) => {
        const numbers = [];
        for (let i = 0; i < size; i++) {
            while(true) {
                let randomNumber = Math.floor(Math.random() * 32) + 5;
                if (numbers.indexOf(randomNumber) === -1) {
                    numbers.push(randomNumber);
                    break;
                } else continue;
            }
        }
        return numbers.sort(function(a, b){return a-b});
  };


  changeNumbers = () => {
    const newNumbers = this.getRandomNumbers();
    this.setState({numbers: newNumbers});
  };

  render() {
    return (
      <div className="App">
        <Loto numbers={this.state.numbers} />
          <button className="btn" onClick={this.changeNumbers}>New Numbers</button>
      </div>
    );
  }
}

export default App;
