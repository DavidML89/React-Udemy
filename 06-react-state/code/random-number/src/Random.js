import React, { Component } from 'react';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 1 };
  }

  render() {
    return (
      <div className='Random'>
        <h1>Number is : {this.state.number}</h1>
        <button>Random number</button>
      </div>
    )
  }
}

export default Random;
