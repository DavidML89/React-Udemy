import { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.task}</p>
        <button onClick={this.props.remove}>X</button>
      </div>
    )
  }
}

export default TodoItem
