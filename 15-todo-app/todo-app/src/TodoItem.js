import { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.task}</h1>
      </div>
    )
  }
}

export default TodoItem
