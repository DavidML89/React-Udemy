import { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    const names = this.props.dogs.map(d => (
      <li className="navbar-item">
        <NavLink to={`/dogs/${d.name}`}>
          {d.name}
        </NavLink>
      </li>
    ));
    return <div>{names}</div>
  }
}

export default Navbar;
