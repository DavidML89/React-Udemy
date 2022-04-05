import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems:  { text: 'milk the cat'}
    }
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoItem text={this.state.todoItems.text} />
      </div>
    )
  }
}

export default TodoList
