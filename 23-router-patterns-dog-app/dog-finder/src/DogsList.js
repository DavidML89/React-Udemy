import { Component } from "react";
import { Link } from "react-router-dom";

class DogsList extends Component {
  render() {
    const dogs = this.props.dogs.map(d => (
      <div key={d.name}>
        <img src={d.src} alt={`${d.name}`} />
        <Link to={`/dogs/${d.name}`}>{d.name}</Link>
      </div>
    ));
    return (
      <div>
        <h1>Click on a doggos !</h1>
        {dogs}
      </div>

  )};
}

export default DogsList;
