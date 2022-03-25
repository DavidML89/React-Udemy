import React, { Component } from 'react';
import Coin from './Coin';

class CoinContainer extends Component {
  render() {
    return (
      <div className='CoinContainer'>
        <Coin side='heads'/>
      </div>
    )
  }
}

export default CoinContainer
