import React, { Component } from 'react';
import Box from './Box';

class BoxContainer extends Component {
  static defaultProps = {
    colors: [ "purple", "magenta", "violet", "pink" ],
    numBoxes: 18
  }

  render() {
    const boxes = Array.from( { length: this.props.numBoxes }).map(() => (
      <Box colors={this.propös.colors} />
    ));
    return (
      <div className='BoxContainer'>
        {boxes}
      </div>
    );
  };
}

export default BoxContainer;
