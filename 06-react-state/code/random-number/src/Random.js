import React, { Component } from 'react';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 1 };
    // this.genRandomNum = this.genRandomNum.bind(this);
  }

  genRandomNum = (e) => {
    let randNum = Math.floor(Math.random() * 10) + 1;
    this.setState ( { number: randNum } )
  }

  render() {
    return (
      <div className='Random'>
        <h1>Number is : {this.state.number}</h1>
        <button onClick={this.genRandomNum}>Random number</button>
      </div>
    )
  }
}

export default Random;
