import { Component } from "react";
import './TodoItem.css';

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      task: this.props.task,
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleUpdate = (evt) => {
    evt.preventDefault();
    this.props.update(this.props.id, this.state.task)
    this.setState({ isEditing: false })
  }

  handleToggle() {
    this.props.toggleTodo(this.props.id)
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type='text'
              name='task'
              value={this.state.task}
              onChange={this.handleChange}
              />
            <button>Update</button>
          </form>
        </div>
      )
    } else {
      result = (
      <div>
        <p className={this.props.completed ? 'completed' : ''}
           onClick={this.handleToggle}>
          {this.props.task}
        </p>
        <button onClick={this.toggleForm}>Edit</button>
        <button onClick={this.props.remove}>X</button>
      </div>
      )
    }
    return result;
  }
}

export default TodoItem
