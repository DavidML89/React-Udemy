import { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

class VendingMachine extends Component {
  render() {
    return(
      <div>
        <Message>
          <p>You are in the vending machine</p>
        </Message>
        <Message>
          <p><Link to='/chips'>Chips</ Link></p>
          <p><Link to='/mars'>Mars</ Link></p>
          <p><Link to='/orangejuice'>Orange juice</ Link></p>
        </Message>
      </div>
    )
  }
}

export default VendingMachine;
