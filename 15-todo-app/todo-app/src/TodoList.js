import { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoItem from "./TodoItem";
import "./TodoList.css";

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

  updateItem = (id, updatedTask) => {
    const updatedTodos = this.state.todoItems.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
        return todo;
    });
    this.setState({ todoItems: updatedTodos });
  }

  toggleCompletion = (id) => {
    const updatedTodos = this.state.todoItems.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todoItems: updatedTodos})
  }

  render() {
    const todoItems = this.state.todoItems.map(item => (
      <TodoItem
        id={item.id}
        key={item.id}
        task={item.task}
        completed={item.completed}
        remove={() => this.removeItem(item.id)}
        update={this.updateItem}
        toggleTodo={() => this.toggleCompletion(item.id)}
        />
    ))
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <ul>{todoItems}</ul>
        <NewTodoForm add={this.addItem} />
      </div>
    )
  }
}

export default TodoList
