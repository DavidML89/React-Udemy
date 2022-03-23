import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  constructor(props) {
    super(props);
    this.state = {die1: 'one', die2: 'five'}
  }

  roll = () => {
    let ind1 = Math.floor(Math.random() * 6);
    let ind2 = Math.floor(Math.random() * 6);
    let randomDie1 = this.props.sides[ind1];
    let randomDie2 = this.props.sides[ind2];
    this.setState( { die1: randomDie1, die2: randomDie2 })
  }

  render() {
    return(
      <div className='RollDice'>
        <div className='RollDice-Die'>
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.roll}>!!! Roll Dice !!!</button>
      </div>
    )
  }
}

export default RollDice;
