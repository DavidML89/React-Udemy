import { Component } from "react";
import { Link } from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return(
      <div>
        <p>You are in the vending machine</p>
        <p><Link to='/chips'>Chips</ Link></p>
        <p><Link to='/mars'>Mars</ Link></p>
        <p><Link to='/orangejuice'>Orange juice</ Link></p>
      </div>
    )
  }
}

export default VendingMachine;
