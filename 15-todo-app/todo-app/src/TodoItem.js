import { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

export default TodoItem
