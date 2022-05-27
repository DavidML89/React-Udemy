import { Component } from "react";
import { useParams } from 'react-router-dom';

class DogDetails extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div>
        {dog.name}
      </div>

  )};
}

export default DogDetails;
