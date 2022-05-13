import { NavLink } from "react-router-dom";
import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <NavLink to='/'>Vending Machine</ NavLink>
        <NavLink to='/chips'>Chips</ NavLink>
        <NavLink to='/mars'>Mars</ NavLink>
        <NavLink to='/orangejuice'>Orange juice</ NavLink>
      </nav>
    )
  }
}

export default Navbar;
