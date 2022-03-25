import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers'

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      counter: 0,
      tailsCounter: 0,
      headsCounter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins)
    this.setState(st => {
      return {
        currCoin: newCoin,
        counter: st.counter + 1,
        tailsCounter: st.tailsCounter + (newCoin.side === 'tails' ? 1 : 0),
        headsCounter: st.headsCounter + (newCoin.side === 'heads' ? 1 : 0)
      };
    });
  }

  handleClick() {
    this.flipCoin()
  }

  render() {
    return (
      <div className='CoinContainer'>
        <h1>Welcome to the big coin flipper</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick} className='CointContainer-button'>Flip my coin</button>
        <p>Out of {this.state.counter}, there have been {this.state.headsCounter} heads and {this.state.tailsCounter} tails </p>
      </div>
    )
  }
}

export default CoinContainer
