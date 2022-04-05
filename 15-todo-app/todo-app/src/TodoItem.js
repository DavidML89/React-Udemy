import { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      task: this.props.task
    }
    this.toggleForm = this.toggleForm.bind(this)
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
          <p>{this.props.task}</p>
          <button onClick={this.props.remove}>X</button>
          <button onClick={this.toggleForm}>Edit</button>
        </div>
        )
      }
    return result;
  }
}

export default TodoItem
