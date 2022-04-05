import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoItem />
      </div>
    )
  }
}

export default TodoList
