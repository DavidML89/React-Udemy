import { Component } from "react";

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
    const newItem = {...this.state}
    this.props.add(newItem);
    this.setState({ task: '' });
  }

  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <label htmlFor='task'>Task</label>
        <input
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Create a new Item</button>
      </form>
    )
  }
}

export default NewTodoForm
