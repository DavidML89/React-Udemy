import { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems:  []
    }
  }

  addItem = (item) => {
    this.setState(state => ({
      todoItems: [ ...state.todoItems, item ]
    }));
  }

  removeItem = (id) => {
    this.setState({
      todoItems: this.state.todoItems.filter(todoItem => todoItem.id !== id)
    })
  }

  render() {
    const todoItems = this.state.todoItems.map(item => (
      <TodoItem
        id={item.id}
        key={item.id}
        task={item.task}
        remove={() => this.removeItem(item.id)}
        />
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
