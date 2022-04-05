import { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems:  [
        { task: 'milk the cat', done: false},
        { task: 'water the plants', done: false}
      ]
    }
  }

  addItem = (item) => {
    this.setState(state => ({
      todoItems: [ ...state.todoItems, item ]
    }));
  }

  render() {
    const todoItems = this.state.todoItems.map(item => (
      <TodoItem task={item.task} />
    ))
    return (
      <div>
        <h1>Todo List</h1>
        {todoItems}
        <NewTodoForm add={this.addItem} />
      </div>
    )
  }
}

export default TodoList
