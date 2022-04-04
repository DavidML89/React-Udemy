import { Component } from "react";
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    }
    this.addBox = this.addBox.bind(this)
  }

  removeBox(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  addBox(box) {
    this.setState(state => ({
      boxes: [ ...state.boxes, box]
    }));
  }

  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        remove={() => this.removeBox(box.id)} />
      ))
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {boxes}
      </div>
    )
  }
}

export default BoxList;
