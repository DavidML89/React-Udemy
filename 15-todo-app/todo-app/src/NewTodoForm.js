import { Component } from "react";
import { v4 as uuid } from "uuid";
import './NewTodoForm.css'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { task: '' }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newItem = { ...this.state, id: uuid(), completed: false }
    this.props.add(newItem);
    this.setState({ task: '' });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          <label htmlFor='task'>New Todo</label>
          <input
            id='task'
            name='task'
            value={this.state.task}
            onChange={this.handleChange}
            placeholder='Task Description'
          />
        <div className="NewTodoForm-button">
          <button>Create Item</button>
        </div>
      </form>
    )
  }
}

export default NewTodoForm
