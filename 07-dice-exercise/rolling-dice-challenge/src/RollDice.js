import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  constructor(props) {
    super(props);
    this.state = {die1: 'one', die2: 'five', rolling: false };
  }

  roll = () => {
    const randomDie1 = this.props.sides[Math.floor(Math.random() * 6)];
    const randomDie2 = this.props.sides[Math.floor(Math.random() * 6)];
    this.setState( { die1: randomDie1, die2: randomDie2, rolling: true });
    setTimeout(() => {
      this.setState( { rolling: false });
    }, 1000);
  }

  render() {
    let buttonMsg = this.state.rolling ? 'Rolllllling' : '!!! Roll Dice !!!';

    return(
      <div className='RollDice'>
        <div className='RollDice-Die'>
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {buttonMsg}
        </button>
      </div>
    )
  }
}

export default RollDice;
