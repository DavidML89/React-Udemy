import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div>
        <div style={{
          backgroundColor: this.props.color,
          height:`${this.props.height}px`,
          width:`${this.props.width}px`
          }}
        />
        <button onClick={this.props.remove}>X</button>
      </div>
    )
  }
}

export default Box;
